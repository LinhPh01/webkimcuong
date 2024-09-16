"use client";
import React from "react";
import Image from "next/image";
import useAOS from "@/utils/aos-init";

const Body3 = () => {
  useAOS();
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      className=" bg-white py-20"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row justify-center items-center">
          <div className="py-8">
            <div className="title text-center text-black font-bold text-4xl">
              <h1 id="lantoa">Giúp sức lan tỏa cuốn sách</h1>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row md:justify-center h-auto px-2 mx-auto">
          <div className="flex flex-col justify-center items-center bg-slate-50 border-2 border-slate-200">
            <div className="no-padding text-black flex flex-col justify-center items-center">
              <div className="px-8 py-4">
                <h4>Trái tim kim cương</h4>
              </div>
              <div className="flex flex-col justify-center items-center py-8">
                <h1 className="mb-3 border-t-2 border-slate-200 text-5xl px-20 pt-9">
                  <span>đ</span> 179.000
                </h1>
                <a
                  href="#sohuu"
                  className="rounded-full text-white bg-pink-400 hover:bg-pink-700 px-4 py-2"
                >
                  Mua ngay
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              width={800}
              height={200}
              quality={100}
              src="/images/sach-lantoa.jpg"
              alt="Sách Lan Tỏa"
              style={{
                filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
              }}
              className="img-hd mx-auto object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body3;
