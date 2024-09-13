"use client";
import React from "react";
import Image from "next/image";

const Body7 = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="py-10 px-2 bg-header flex justify-center items-center"
    >
      <div className="container">
        <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-center lg:items-center">
          <div className="col-md-4">
            <Image
              width={600}
              height={300}
              src="/images/header-img.png"
              alt="Header"
              quality={100}
              className="img-hd mx-auto "
              style={{
                filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
              }}
            />
          </div>

          <div className="col-md-8 px-4 mt-5">
            <div className="text-5xl text-center text-white font-bold uppercase">
              Mua sách online
            </div>
            <p className=" text-black px-4 py-4">
              Sách Trái Tim Kim Cương đã có mặt tại các sàn thương mại điện tử.
              Cùng chờ đón phiên bản eBook tiếng Anh và sách nói sắp có mặt trên
              1 số nền tảng.
            </p>

            <div className="grid grid-cols-4 items-center rounded-md p-10 gap-y-10 border border-gray-200">
              {[
                {
                  href: "https://tiki.vn/trai-tim-kim-cuong-p275105098.html?spid=275105100",
                  imgSrc: "/images/tiki.png",
                  imgAlt: "Tiki",
                  width: 80,
                  height: 80,
                },
                {
                  href: "https://sachkhaiminh.com/trai-tim-kim-cuong-cao-thanh",
                  imgSrc: "/images/khai minh.png",
                  imgAlt: "Khai Minh",
                  width: 70,
                  height: 70,
                },
                {
                  href: "https://www.khaitam.com/sach-moi-1/trai-tim-kim-cuong-cao-thanh",
                  imgSrc: "/images/khai tam.png",
                  imgAlt: "Khai Tam",
                  width: 80,
                  height: 80,
                },
                {
                  href: "https://saigonbooks.vn/san-pham/phat-trien-ban-than-17/trai-tim-kim-cuong-2435",
                  imgSrc: "/images/sg book.png",
                  imgAlt: "SG Book",
                  width: 80,
                  height: 80,
                },
                {
                  href: "https://bookbuy.vn/sach/trai-tim-kim-cuong-p133238.html",
                  imgSrc: "/images/bookbuy.png",
                  imgAlt: "BookBuy",
                  width: 80,
                  height: 80,
                },
                {
                  href: "https://www.netabooks.vn/trai-tim-kim-cuong",
                  imgSrc: "/images/netabook.png",
                  imgAlt: "NetaBook",
                  width: 80,
                  height: 80,
                },
                {
                  href: "https://sachkhaiphong.com/trai-tim-kim-cuong-cao-thanh",
                  imgSrc: "/images/khai phong.png",
                  imgAlt: "Khai Phong",
                  width: 80,
                  height: 80,
                },
                {
                  href: "https://traitimkimcuong.com/",
                  imgSrc: "/images/Logo Trai Tim Kim Cuong.png",
                  imgAlt: "Trái Tim Kim Cương",
                  width: 80,
                  height: 80,
                },
              ].map((item, index) => (
                <div className="group-icon col-6 col-sm-3" key={index}>
                  <a
                    href={item.href}
                    className="flex justify-center cursor-pointer"
                  >
                    <Image
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
                </div>
              ))}
            </div>

            <div className="mt-4 text-white text-lg font-bold animate-wiggle-more">
              Hoặc mua sách tại website:
            </div>
            <a
              href="https://traitimkimcuong.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://traitimkimcuong.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body7;
