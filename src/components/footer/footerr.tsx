"use client";
import React from "react";
import Image from "next/image";

const Footerr = () => {
  return (
    <footer
      style={{
        backgroundColor: "#131313",
      }}
      className="pt-9 pb-14 relative"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-center text-white font-bold text-xl uppercase mb-4">
          Trái tim kim cương
        </p>
        <div className="g-icon-ft items-center justify-center gap-x-8 flex">
          {[
            {
              href: "https://www.facebook.com/sach.traitimkimcuong",
              imgSrc: "/images/facebook-color-icon-2048x2048-bfly1vxr.png",
              imgAlt: "Facebook",
              width: 60,
              height: 60,
            },
            {
              href: "https://www.tiktok.com/@caothanhdiamond01",
              imgSrc: "/images/tiktok.png",
              imgAlt: "TikTok",
              width: 60,
              height: 60,
            },
            {
              href: "https://www.youtube.com/@SachTraiTimKimCuong",
              imgSrc: "/images/youtube.png",
              imgAlt: "YouTube",
              width: 60,
              height: 60,
            },
          ].map((item, index) => (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Image
                className="cursor-pointer"
                src={item.imgSrc}
                alt={item.imgAlt}
                width={item.width}
                height={item.height}
                quality={100}
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-5 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <a
          href="https://tmsoftware.vn/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#515050" }}
        >
          <div className="text-center">Design By TM Software</div>
        </a>
      </div>
    </footer>
  );
};

export default Footerr;
