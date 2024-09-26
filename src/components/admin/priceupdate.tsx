"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Card, Button, Input, message } from "antd";

const { TextArea } = Input;

const PriceUpdate = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [logo, setLogo] = useState("");
  const [price, setPrice] = useState("");

  const fetchLatestLogo = async () => {
    try {
      const response = await fetch(`https://test.devtest.asia/api/v1/price`);
      if (!response.ok) throw new Error("Failed to fetch logo");

      const result = await response.json();
      if (result.EC === 1 && result.data && result.data.length > 0) {
        // Assuming the latest logo is the first in the array
        const latestLogo = result.data[0]; // Get the first item
        setLogo(latestLogo.thumbnail);
        setPrice(latestLogo.price);
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
        const fullThumbnailUrl = `https://test.devtest.asia/images/${uploadedFileName}`;
        setLogo(fullThumbnailUrl);
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
      const numericPrice = parseFloat(price.replace(/,/g, "")); // Remove all non-digit characters
      if (isNaN(numericPrice)) {
        message.error("Giá tiền không hợp lệ.");
        return;
      }
      const response = await fetch(
        "https://test.devtest.asia/api/v1/price/25",
        {
          method: "PUT",
          body: JSON.stringify({
            thumbnail: logo,
            price: numericPrice,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to upload logo");

      const result = await response.json();

      //
      if (result.EC === 1 && result.data) {
        console.log("Uploaded logo data:", result.data);
        setLogo(result.data.thumbnail);
        setPrice(result.data.price);
        message.success("Logo updated successfully!");
      } else {
        message.error("Failed to fetch logo data.");
      }
    } catch (error) {
      console.error("Error uploading logo:", error);
      message.error("Error uploading logo: " + (error as Error).message);
    }
  };

  //
  useEffect(() => {
    fetchLatestLogo();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex justify-start items-center">
        <Card
          title="Chỉnh ảnh ngay mua sách"
          bordered={true}
          style={{ width: 600 }}
        >
          <div className="flex flex-row">
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-3"
            />
            <Button
              onClick={handleUpload}
              disabled={!selectedFile}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              thêm ảnh
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            {logo && (
              <div>
                <p>Uploaded File: {logo}</p>
                <Image src={logo} alt="Thumbnail" width={300} height={300} />
              </div>
            )}
            <Card
              title="Giá tiền chỉ cần nhập 185000 = 185.000đ"
              bordered={true}
              style={{ width: 400 }}
            >
              <TextArea
                rows={1}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Card>
          </div>
          <Button
            onClick={uploadedFile}
            disabled={!selectedFile}
            className=" bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Cập nhật
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PriceUpdate;
