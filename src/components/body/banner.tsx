"use client";
import React from "react";
import Image from "next/image";
import useAOS from "@/utils/aos-init";

const Banner = () => {
  useAOS();

  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="" id="home">
      <div
        className="bg-header img-hd"
        style={{
          filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
        }}
      >
        <div className="py-24 space-x-8 flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-center lg:items-center">
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="video-wrapper w-full lg:w-[600px] h-[225px] md:h-[300px] lg:h-[400px]">
              <iframe
                // width="600"
                // height="400"
                className="w-full h-full"
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
