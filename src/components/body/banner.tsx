"use client";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="">
      <div className="bg-header">
        <div className="flex flex-col items-center justify-center py-24 space-x-8 lg:flex lg:flex-row lg:justify-center lg:items-center">
          <div className="">
            <div className="video-wrapper">
              <iframe
                width="600"
                height="400"
                src="https://www.youtube.com/embed/2xfj1njfcW8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
              ></iframe>
            </div>
          </div>
          {/* //banner-right */}
          <div className="col-lg-5 flex justify-center">
            <Image
              width={450}
              height={100}
              quality={100}
              priority={true}
              src="/images/header-img.png"
              alt=""
              className="responsive-image"
              style={{ filter: "brightness(0.9) contrast(1.2) saturate(1.3)" }}
            />
          </div>
        </div>
      </div>
    </section>
    // lời tác giả
  );
};

export default Banner;
