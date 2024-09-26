"use client";

import React, { useState } from "react";
import TablePage from "./table";
import TablePage1 from "./table1";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("posts");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Admin TM</div>
        <button className="text-pink-500 font-semibold rounded-md px-4 py-2 uppercase hover:bg-pink-500 hover:text-white transition-colors duration-200">
          Đổi mật khẩu
        </button>
      </header>

      <div className="flex flex-1">
        {/* Menu Sidebar */}
        <aside className="w-64  bg-gray-100 p-4">
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-200 transition"
                onClick={() => setSelectedMenu("posts")}
              >
                Quản lí bài viết
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-200 transition"
                onClick={() => setSelectedMenu("images")}
              >
                Quản lí trang chủ
              </a>
            </li>
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 bg-white">
          {selectedMenu === "posts" && <TablePage />}
          {selectedMenu === "images" && <TablePage1 />}
        </main>
      </div>

      <footer className="bg-gray-800 text-white text-center p-4">
        {new Date().getFullYear()} Created by TM Software
      </footer>
    </div>
  );
};

export default Dashboard;
