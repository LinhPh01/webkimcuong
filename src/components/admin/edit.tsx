"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Modal, Card, Input, message } from "antd";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const { TextArea } = Input;

interface EditProps {
  slug: {
    nameVN: string;
    thumbnail: string;
    keyWord: string;
    metaDes: string;
    shortDesc: string;
    content: string;
    slug: string;
    id: number;
  };
  onUpdate: (post: {
    id: number;
    nameVN: string;
    thumbnail: string;
    keyWord: string;
    metaDes: string;
    shortDesc: string;
    content: string;
    slug: string;
  }) => void;
}

const Edit: React.FC<EditProps> = ({ slug, onUpdate }) => {
  // Thêm prop postId để lấy ID bài viết
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameVN, setNameVN] = useState("");
  const [slugState, setSlugState] = useState("");
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

  const generateSlug = (text: string | undefined) => {
    if (!text) {
      return ""; // Trả về chuỗi rỗng nếu text là undefined hoặc null
    }

    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  // Cập nhật slug khi nameVN thay đổi
  useEffect(() => {
    if (nameVN) {
      setSlugState(generateSlug(nameVN));
    }
  }, [nameVN]);

  useEffect(() => {
    console.log("Received slug:", slug); // Kiểm tra giá trị slug
    if (slug) {
      setNameVN(slug.nameVN);
      setThumbnail(slug.thumbnail);
      setKeyWord(slug.keyWord);
      setMetaDes(slug.metaDes);
      setShortDesc(slug.shortDesc);
      setContent(slug.content);
      setSlugState(slug.slug);
    }
  }, [slug]);

  useEffect(() => {
    const fetchPostData = async () => {
      console.log("slug ", slug.slug);
      try {
        const response = await fetch(
          `https://test.devtest.asia/api/v1/baiviet/${slug.slug}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch post: ${response.status}`);
        }
        const postData = await response.json();
        console.log("Fetched post data:", postData); // Kiểm tra phản hồi
        setNameVN(postData.name_vn);
        setSlugState(postData.slug);
        setThumbnail(postData.thumbnail);
        setKeyWord(postData.key_word);
        setMetaDes(postData.meta_des);
        setShortDesc(postData.mota_vn);
        setContent(postData.noidung_vn);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu bài viết:", error);
        message.error("Lỗi khi lấy dữ liệu bài viết.");
      }
    };

    if (isModalOpen && slug.slug) {
      fetchPostData();
    }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      console.log("Submitting:", {
        nameVN,
        slug: slugState,
        thumbnail,
        keyWord,
        metaDes,
        shortDesc,
        content,
      }); // Kiểm tra giá trị trước khi gửi
      const response = await fetch(
        `https://test.devtest.asia/api/v1/baiviet/${slug.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name_vn: nameVN,
            slug: slugState,
            thumbnail: thumbnail,
            key_word: keyWord,
            mota_vn: metaDes,
            meta_des: shortDesc,
            noidung_vn: content,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error updating post");
      }
      onUpdate({
        id: slug.id, // Sử dụng slug.id
        nameVN,
        thumbnail,
        keyWord,
        metaDes,
        shortDesc,
        content,
        slug: slugState, // Truyền slug đã cập nhật
      });
      message.success("Cập nhật bài viết thành công!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Lỗi khi cập nhật bài viết:", error);
      message.error("Lỗi khi cập nhật bài viết.");
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
    setSlugState("");
    setThumbnail("");
    setKeyWord("");
    setMetaDes("");
    setShortDesc("");
    setContent("");
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Chỉnh sửa bài viết"
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
            Cập nhật
          </Button>,
        ]}
        width={1400}
      >
        <div className="grid grid-cols-2 gap-2">
          <Card title="Tên bài viết" bordered={true} style={{ width: 600 }}>
            <TextArea
              rows={4}
              value={nameVN}
              onChange={(e) => {
                setNameVN(e.target.value); // Cập nhật nameVN
                setSlugState(generateSlug(e.target.value)); // Cập nhật slug dựa trên nameVN
              }}
            />
          </Card>
          <Card title="Slug" bordered={true} style={{ width: 600 }}>
            <Input value={slugState} readOnly />
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

export default Edit;
