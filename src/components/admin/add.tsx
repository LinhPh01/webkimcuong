"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Modal, Card, Input, message } from "antd";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const { TextArea } = Input;

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameVN, setNameVN] = useState("");
  const [slug, setSlug] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [metaDes, setMetaDes] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

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
        setUploadedFile(uploadedFileName);
        const fullThumbnailUrl = `https://test.devtest.asia/images/${uploadedFileName}`;
        setThumbnail(fullThumbnailUrl);
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

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  useEffect(() => {
    setSlug(generateSlug(nameVN));
  }, [nameVN]);

  const handleSubmit = async () => {
    if (!nameVN || !keyWord || !metaDes || !content || !thumbnail) {
      message.error("Vui lòng điền đầy đủ thông tin và chọn ảnh.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name_vn", nameVN);
    formData.append("slug", slug);
    formData.append("thumbnail", thumbnail);
    formData.append("key_word", keyWord);
    formData.append("meta_des", metaDes);
    formData.append("mota_vn", shortDesc);
    formData.append("noidung_vn", content);
    console.log("Form Data:", formData);

    try {
      const response = await fetch("https://test.devtest.asia/api/v1/baiviet", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Đã xảy ra lỗi khi thêm bài viết.");
      }

      const result = await response.json();
      console.log(result);
      message.success("Thêm bài viết thành công!");
      handleCancel();
    } catch (error) {
      console.error("Error adding post:", error);
      message.error("Đã xảy ra lỗi khi thêm bài viết.");
    } finally {
      setLoading(false);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNameVN("");
    setSlug("");
    setThumbnail("");
    setKeyWord("");
    setMetaDes("");
    setShortDesc("");
    setContent("");
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm mới
      </Button>
      <Modal
        title="Thêm bài viết"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleSubmit}
            loading={loading}
          >
            Thêm
          </Button>,
        ]}
        width={1400}
      >
        <div className="grid grid-cols-2 gap-2">
          <Card title="Tên bài viết" bordered={true} style={{ width: 600 }}>
            <TextArea
              rows={4}
              value={nameVN}
              onChange={(e) => setNameVN(e.target.value)}
            />
          </Card>
          <Card title="Slug" bordered={true} style={{ width: 600 }}>
            <Input value={slug} readOnly />
          </Card>
          <Card
            title="Chọn ảnh bài viết"
            bordered={true}
            style={{ width: 600 }}
          >
            <div className="flex flex-col items-start">
              <input
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
                Thêm ảnh
              </Button>

              {uploadedFile && <p>Uploaded File: {uploadedFile}</p>}
              {thumbnail && (
                <Image
                  src={thumbnail}
                  alt="Thumbnail"
                  width={100}
                  height={100}
                />
              )}
            </div>
          </Card>
          <Card title="Từ khoá" bordered={true} style={{ width: 600 }}>
            <TextArea
              rows={4}
              value={keyWord}
              onChange={(e) => setKeyWord(e.target.value)}
            />
          </Card>
          <Card title="Mô tả" bordered={true} style={{ width: 600 }}>
            <TextArea
              rows={4}
              value={metaDes}
              onChange={(e) => setMetaDes(e.target.value)}
            />
          </Card>
          <Card title="Mô tả ngắn" bordered={true} style={{ width: 600 }}>
            <TextArea
              rows={4}
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
            />
          </Card>
        </div>
        <div>
          <h2>Nội dung:</h2>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                [{ align: [] }],
                ["clean"],
              ],
            }}
            formats={[
              "header",
              "font",
              "size",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "link",
              "image",
              "align",
            ]}
            theme="snow"
            placeholder="Hãy nhập nội dung vào đây..."
          />
        </div>
      </Modal>
    </>
  );
};

export default Add;
