import React, { useState } from "react";
import { Button, Modal, Card, Input } from "antd";
import { FiEdit } from "react-icons/fi";
import UploadImg from "./uploadimg";
const { TextArea } = Input;

const Edit: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <FiEdit />
      </Button>
      <Modal
        title="Cập nhật bài viết"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1400}
      >
        <div className="">
          <div className="grid grid-cols-2 gap-2">
            <Card title="Tên bài viết" bordered={true} style={{ width: 600 }}>
              <TextArea rows={4} />
            </Card>
            <Card title="Ảnh bài viết" bordered={true} style={{ width: 600 }}>
              <UploadImg />
            </Card>
            <Card title="Từ khoá" bordered={true} style={{ width: 600 }}>
              <TextArea rows={4} />
            </Card>
            <Card title="Mô tả" bordered={true} style={{ width: 600 }}>
              <TextArea rows={4} />
            </Card>
            <Card title="Mô tả ngắn" bordered={true} style={{ width: 600 }}>
              <TextArea rows={4} />
            </Card>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Edit;
