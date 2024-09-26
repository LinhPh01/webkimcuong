// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState, useEffect } from "react";
// import { Image, Upload, message } from "antd";
// import type { UploadFile, UploadProps } from "antd/es/upload/interface";

// const getBase64 = (file: File): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });

// const UploadImg: React.FC = () => {
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState("");
//   const [fileList, setFileList] = useState<UploadFile[]>([]);
//   const [uploadedFileName, setUploadedFileName] = useState("");

//   const handlePreview = async (file: UploadFile) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj as File);
//     }

//     setPreviewImage(file.url || (file.preview as string));
//     setPreviewOpen(true);
//   };

//   const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
//     setFileList(newFileList);

//   const customRequest = async ({ file, onSuccess }: any) => {
//     // Simulate an API call to upload the file
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch('https://test.devtest.asia/api/v1/uploadImg', {
//         method: 'POST',
//         body: formData,
//       });
//       const result = await response.json();

//       if (result.EC === 1) {
//         setUploadedFileName(result.data.fileUploaded);
//         message.success('Upload successful!');
//         onSuccess(file);
//       } else {
//         message.error('Upload failed!');
//       }
//     } catch (error) {
//       message.error('Upload error!');
//       console.error('Upload error:', error);
//     }
//   };

//   const uploadButton = (
//     <button style={{ border: 0, background: "none" }} type="button">
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </button>
//   );

//   return (
//     <>
//       <Upload
//         customRequest={customRequest}
//         listType="picture-card"
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={handleChange}
//         onRemove={(file) => {
//           setFileList((prev) => prev.filter((item) => item.uid !== file.uid));
//         }}
//       >
//         {fileList.length >= 8 ? null : uploadButton}
//       </Upload>
//       {previewImage && (
//         <Image
//           wrapperStyle={{ display: "none" }}
//           preview={{
//             visible: previewOpen,
//             onVisibleChange: (visible) => setPreviewOpen(visible),
//             afterOpenChange: (visible) => !visible && setPreviewImage(""),
//           }}
//           src={previewImage}
//         />
//       )}
//       {uploadedFileName && <div>Tên ảnh: {uploadedFileName}</div>}
//     </>
//   );
// };

// export default UploadImg;
