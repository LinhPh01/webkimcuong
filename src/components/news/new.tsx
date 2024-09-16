"use client";
import React from "react";
import Image from "next/image";

const PageNews = () => {
  return (
    <section id="tintuc" className="flex flex-col bg-new">
      {/* Tiêu đề */}
      <h1 className="mt-10 text-center text-white text-4xl pt-8 font-bold">
        Tin tức
      </h1>

      <div className="px-4 sm:px-8 lg:px-20">
        {/* Grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 py-10 text-white">
          {/* Card 1 */}
          <div className="relative rounded-lg custom-shadow overflow-hidden zoom-image">
            <div className="flex flex-col items-center justify-center">
              <div className=" flex items-center justify-center px-2 py-2">
                <Image
                  loading="lazy"
                  width={300}
                  height={100}
                  quality={100}
                  src="/images/tacgia1.jpg"
                  alt=""
                  className="img-hd3 rounded-lg"
                />
              </div>
              <div className="fixed-two-lines px-4 text-center">
                contentcontentcontentcontentcontentcontentcontentcontent
              </div>
              <div className="rounded-3xl space-x-1 button py-2">
                <div className="text-white py-2">Trái tim kim cương</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-lg custom-shadow zoom-image">
            <div className="flex flex-col items-center justify-center">
              <div className=" flex items-center justify-center px-2 py-2">
                <Image
                  loading="lazy"
                  width={300}
                  height={100}
                  quality={100}
                  src="/images/tacgia1.jpg"
                  alt=""
                  className="img-hd3 rounded-lg"
                />
              </div>
              <div className="fixed-two-lines px-4 text-center">
                contentcontentcontentcontentcontentcontentcontentcontent
              </div>
              <div className="rounded-3xl space-x-1 button py-2">
                <div className="text-white py-2">Trái tim kim cương</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" relative rounded-lg custom-shadow zoom-image ">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center px-2 py-2">
                <Image
                  loading="lazy"
                  width={300}
                  height={100}
                  quality={100}
                  src="/images/tacgia1.jpg"
                  alt=""
                  className="img-hd3 rounded-lg"
                />
              </div>
              <div className="fixed-two-lines px-4 text-center">
                contentcontentcontentcontentcontentcontentcontentcontent
              </div>
              <div className="rounded-3xl space-x-1 button py-2">
                <div className="text-white py-2">Trái tim kim cương</div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className=" relative rounded-lg custom-shadow zoom-image">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center px-2 py-2">
                <Image
                  loading="lazy"
                  width={300}
                  height={100}
                  quality={100}
                  src="/images/tacgia1.jpg"
                  alt=""
                  className="img-hd3 rounded-lg"
                />
              </div>
              <div className="fixed-two-lines px-4 text-center">
                contentcontentcontentcontentcontentcontentcontentcontent
              </div>
              <div className="rounded-3xl space-x-1 button py-2">
                <div className="text-white py-2">Trái tim kim cương</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNews;
