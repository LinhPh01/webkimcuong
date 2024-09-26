/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import type { TableColumnsType } from "antd";
import Edit from "./edit"; // Đảm bảo tên file đúng
import { MdOutlineDelete } from "react-icons/md";
import Add from "./add";
import Image from "next/image";

interface DataType {
  key: React.Key;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  keyWord: string;
  metaDes: string;
  shortDesc: string;
  content: string;
  slug: string;
  id: number;
}

const TablePage = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://test.devtest.asia/api/v1/listbaiviet-admin"
        );
        const result = await response.json();
        const formattedData = result.data.map((item: any) => ({
          key: item.id,
          name: item.name_vn || item.name_en,
          image: item.thumbnail,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          keyWord: item.key_word,
          metaDes: item.meta_des,
          shortDesc: item.mota_vn,
          content: item.noidung_vn,
          slug: item.slug,
          id: item.id,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `https://test.devtest.asia/api/v1/baiviet/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setData((prevData) => prevData.filter((item) => item.id !== id));
        message.success("Xóa thành công!");
      } else {
        message.error("Lỗi khi xóa dữ liệu.");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API xóa:", error);
      message.error("Lỗi khi xóa dữ liệu.");
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "index",
    },
    { title: "Tiêu đề", dataIndex: "name", key: "2" },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "3",
      render: (image) =>
        image ? (
          <Image src={image} alt="Thumbnail" width={100} height={100} />
        ) : (
          <span>No Image</span>
        ),
    },
    { title: "Ngày tạo", dataIndex: "createdAt", key: "4" },
    { title: "Ngày cập nhật", dataIndex: "updatedAt", key: "5" },
    {
      title: "Sửa",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (_, record: DataType) => {
        console.log("Record for editing:", record); // Kiểm tra record
        return (
          <Edit
            slug={{
              nameVN: record.name,
              thumbnail: record.image,
              keyWord: record.keyWord || "",
              metaDes: record.metaDes || "",
              shortDesc: record.shortDesc || "",
              content: record.content || "",
              slug: record.slug || "",
              id: record.id, // Đảm bảo truyền ID
            }}
            onUpdate={async (updatedPost) => {
              console.log("Updated post data:", updatedPost); // Kiểm tra dữ liệu được cập nhật
              setData((prevData) =>
                prevData.map((item) =>
                  item.id === updatedPost.id
                    ? { ...item, ...updatedPost }
                    : item
                )
              );
              message.success("Cập nhật thành công!");
            }}
          />
        );
      },
    },
    {
      title: "Xoá",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Button
          type="primary"
          className="bg-red-600"
          onClick={() => handleDelete(record.id)}
        >
          <MdOutlineDelete />
        </Button>
      ),
    },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <Button type="primary" className="self-end">
        <Add />
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          defaultCurrent: 1,
          total: data.length,
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50", "100"],
        }}
      />
    </div>
  );
};

export default TablePage;
