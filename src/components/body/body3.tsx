"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import useAOS from "@/utils/aos-init";

const Body3 = () => {
  const [logo, setLogo] = useState("");
  const [price, setPrice] = useState("");

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };

  useEffect(() => {
    const fetchLatestLogo = async () => {
      try {
        const response = await fetch(`https://test.devtest.asia/api/v1/price`);
        if (!response.ok) throw new Error("Failed to fetch logo");

        const result = await response.json();
        if (result.EC === 1 && result.data && result.data.length > 0) {
          // Assuming the latest logo is the first in the array
          const latestLogo = result.data[0]; // Get the first item
          setLogo(latestLogo.thumbnail);
          setPrice(latestLogo.price);
        } else {
          console.error("No logo data available.");
        }
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    fetchLatestLogo();
  }, []);

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
                  <span>{formatPrice(Number(price))}</span>
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
            {logo ? (
              <Image
                width={800}
                height={200}
                quality={100}
                src={logo}
                alt="Sách Lan Tỏa"
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
                className="img-hd mx-auto object-contain w-full h-auto"
              />
            ) : (
              <p>No logo available</p> // Optional: Provide feedback if no logo is available
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body3;
