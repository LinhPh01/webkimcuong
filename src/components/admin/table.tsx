import React from "react";
import { Table, Button } from "antd";
import type { TableColumnsType } from "antd";
import UploadImg from "./uploadimg";
import Edit from "./edit";
import { MdOutlineDelete } from "react-icons/md";

interface DataType {
  key: React.Key;
  name: string;
  image: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "STT",
    key: "index",
    render: (text, record, index) => index + 1, // Render index + 1 as STT
  },
  { title: "Tiêu đề", dataIndex: "name", key: "2" },
  {
    title: "Ảnh",
    dataIndex: "image",
    key: "3",
    render: () => <UploadImg />,
  },
  { title: "Hiện ở trang chủ", dataIndex: "address", key: "4" },
  { title: "Lượt xem", dataIndex: "address", key: "5" },
  { title: "Ưu Tiên", dataIndex: "address", key: "6" },
  { title: "Ngày cập nhật", dataIndex: "address", key: "7" },
  {
    title: "Thêm",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <Edit />,
  },
  {
    title: "Xoá",
    dataIndex: "",
    key: "x",
    render: () => (
      <Button type="primary" className="bg-red-600">
        <MdOutlineDelete />
      </Button>
    ),
  },
];

const data: DataType[] = [
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
  {
    key: "0",
    name: "Tiêu đề",
    image: "",
  },
];

const TablePage = () => (
  <div className="flex flex-col justify-end space-y-4">
    <div className="flex justify-end">
      <Button className="primary">Thêm mới</Button>
    </div>
    <Table
      columns={columns}
      dataSource={data}
      //   scroll={{ x: 100 }}
      pagination={{
        defaultCurrent: 1,
        total: 50,
        pageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50", "100"],
      }}
    />
  </div>
);

export default TablePage;
