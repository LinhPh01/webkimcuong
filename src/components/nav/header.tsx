"use client";
import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";
import Image from "next/image";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-header fixed z-50 w-full">
      <div className="flex items-center justify-between py-3 px-4 md:px-8">
        {!isNavOpen && (
          <div className="logo">
            <a href="/">
              <Image
                src="/images/Logo Trai Tim Kim Cuong.png"
                width={150}
                height={100}
                alt="Logo"
              />
            </a>
          </div>
        )}
        <button
          className={`md:flex ${
            isNavOpen ? "button-nav" : ""
          } md:hidden text-white focus:outline-none`}
          onClick={toggleNav}
        >
          {/* Icon for menu, e.g., hamburger menu icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className={` md:flex ${isNavOpen ? "mobile-nav" : "hidden"} `}>
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-8 md:space-y-0 text-nav">
            <li>
              <a href="#home">Tổng quan</a>
            </li>
            <li>
              <a href="#loitua">Lời tác giả</a>
            </li>
            <li>
              <a href="#lantoa">Mua sách</a>
            </li>
            <li>
              <a href="#tacgia">Tác giả</a>
            </li>
            <li>
              <a href="#sohuu">Sở hữu sách</a>
            </li>
            <li>
              <a href="#nhanxet">Chuyên gia đánh giá</a>
            </li>
            <li>
              <a href="#tuthien">Quỹ từ thiện</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
