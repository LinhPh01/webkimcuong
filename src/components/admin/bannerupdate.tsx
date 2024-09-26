"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Card, Button, Input, message } from "antd";


const LogoUpdater = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // const [thumbnail, setThumbnail] = useState("");
  const [logo, setLogo] = useState("");
  const [link, setLink] = useState("");

  const fetchLatestLogo = async () => {
    try {
      const response = await fetch(`https://test.devtest.asia/api/v1/logo`);
      if (!response.ok) throw new Error("Failed to fetch logo");

      const result = await response.json();
      if (result.EC === 1 && result.data && result.data.length > 0) {
        // Assuming the latest logo is the first in the array
        const latestLogo = result.data[0]; // Get the first item
        setLogo(latestLogo.thumbnail);
        setLink(latestLogo.link);
      } else {
        message.error("No logo data available.");
      }
    } catch (error) {
      console.error("Error fetching logo:", error);
      message.error("Error fetching logo: " + (error as Error).message);
    }
  };

  const uploadImage = async (file: File) => {
    const data = new FormData();
    data.append("fileImg", file);

    console.log("Uploading file:", file.name);

    try {
      const response = await fetch(
        "https://test.devtest.asia/api/v1/uploadImg",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      console.log("Response from API:", result);

      if (result.EC === 1) {
        const uploadedFileName = result.data.fileUploaded;
        setLogo(uploadedFileName);
        const fullThumbnailUrl = `https://test.devtest.asia/images/${uploadedFileName}`;
        setLink(fullThumbnailUrl);
        message.success("Upload successful");
      } else {
        console.error("Upload failed with error code:", result.EC);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      message.error("Error uploading image.");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadImage(selectedFile);
    }
  };

  //
  const uploadedFile = async () => {
    try {
      const response = await fetch("https://test.devtest.asia/api/v1/logo", {
        method: "POST",
        body: JSON.stringify({
          thumbnail: logo,
          link: link,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to upload logo");

      const result = await response.json(); // Read the response once

      // Check and update logo URL
      if (result.EC === 1 && result.data) {
        console.log("Uploaded logo data:", result.data); // Log the data
        setLogo(result.data.thumbnail); // Set logo from result.data
        setLink(result.data.link); // Set link from result.data
        message.success("Logo updated successfully!"); // Notify success
      } else {
        message.error("Failed to fetch logo data.");
      }
    } catch (error) {
      console.error("Error uploading logo:", error);
      message.error("Error uploading logo: " + (error as Error).message);
    }
  };

  // useEffect to call uploadedFile when logo or link updates
  useEffect(() => {
    fetchLatestLogo();
    if (logo && link) {
      uploadedFile();
    }
  }, [logo, link]);

 

  return (
    <Card title="Chọn ảnh bài viết" bordered={true} style={{ width: 600 }}>
      <div className="flex flex-col items-start">
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-2"
        />
        <Button
          onClick={handleUpload}
          disabled={!selectedFile}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          thêm ảnh
        </Button>

        {logo && (
          <div>
            <p>Uploaded File: {logo}</p>
            <Image src={link} alt="Thumbnail" width={100} height={100} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default LogoUpdater;
