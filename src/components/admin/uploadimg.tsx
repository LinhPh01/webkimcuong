/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import { Image, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";

const getBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadImg: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const customRequest = ({ file, onSuccess }: any) => {
    // Simulate a successful upload
    setTimeout(() => {
      // You can handle the actual file upload here
      console.log("Uploaded file:", file);
      onSuccess(file);
    }, 0);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <>
      <Upload
        customRequest={customRequest}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={(file) => {
          // Custom logic to remove file if necessary
          setFileList((prev) => prev.filter((item) => item.uid !== file.uid));
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default UploadImg;
