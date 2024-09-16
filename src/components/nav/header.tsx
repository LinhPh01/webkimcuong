"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-header-scrolled" : "bg-header1"
      }`}
    >
      <div className="flex items-center justify-between py-3 px-8">
        {/* Logo */}
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

        {/* Mobile menu button (hamburger icon) */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleNav}
        >
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

        {/* Navigation menu (mobile & desktop) */}
        <nav
          id="mobile-nav"
          className={`${
            isNavOpen ? "mobile-nav" : "hidden"
          } lg:flex lg:items-center lg:space-x-8 w-full lg:w-auto lg:bg-transparent bg-header1 fixed lg:relative top-0 left-0 h-screen lg:h-auto z-50 lg:z-auto transition-transform transform lg:transform-none duration-300 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-x-2 lg:space-y-0 text-nav ">
            <Link href="/#home">
              <li className="nav-link ">Tổng quan</li>
            </Link>
            <Link href="/news">
              <li className="nav-link">Tin tức</li>
            </Link>
            <Link href="/#lantoa">
              <li className="nav-link">Mua sách</li>
            </Link>
            <Link href="/#loitua">
              <li
                className="nav-link
              
              
              
              
              "
              >
                Lời tác giả
              </li>
            </Link>
            <Link href="/#tacgia">
              <li className="nav-link">Tác giả</li>
            </Link>
            <Link href="/#nhanxet">
              <li className="nav-link">Chuyên gia đánh giá</li>
            </Link>
            <Link href="/#tuthien">
              <li className="nav-link">Quỹ từ thiện</li>
            </Link>
          </ul>
        </nav>

        {/* Overlay khi mở mobile menu */}
        {isNavOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleNav}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
