"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import useAOS from "@/utils/aos-init";

const Body2 = () => {
  useAOS();
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="flex justify-center items-center  bg-slate-100 py-20"
    >
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="menu-content col-lg-9">
            <div className="title text-center text-black mb-10 pt-8">
              <h1 className="text-4xl font-bold" id="tacgia">
                Về tác giả
              </h1>
              <p>Cao Thị Thanh, sinh năm 1993, tại Thanh Hóa</p>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: null,
          }}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={12}
          breakpoints={{
            320: {
              // Mobile devices
              slidesPerView: 1,
            },
            640: {
              // Tablets
              slidesPerView: 2,
            },
            1024: {
              // Desktops
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="single-course item">
              <Image
                width={350}
                height={400}
                quality={100}
                className="img-hd mx-auto "
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
                src="/images/tacgia1.jpg"
                alt="Tác giả sách: Trái Tim Kim Cương"
              />
              <p className="sale-btn">Nổi bật</p>
              <div className="details">
                <a href="#" className="text-black font-bold">
                  <h4>Tác giả sách: Trái Tim Kim Cương</h4>
                </a>
                <p className="text-slate-700">
                  Cuốn sách này là món quà tôi tự dành tặng tuổi 30 của mình.
                  Cuộc sống thật mầu nhiệm và dám sống là chính mình là một kỳ
                  tích rực rỡ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-course item">
              <Image
                className="img-hd mx-auto "
                width={350}
                height={400}
                quality={100}
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
                src="/images/tacgia2.jpg"
                alt="Nữ Doanh Nhân Kim Cương"
              />
              <p className="sale-btn">Nổi bật</p>
              <div className="details">
                <a href="#" className="text-black font-bold">
                  <h4>Nữ Doanh Nhân Kim Cương</h4>
                </a>
                <p className="text-slate-700">
                  Hiện Mss Cao Thanh là CEO Công ty Cao Diamond, Người sáng lập
                  thương hiệu trang sức Lapola Jewelry
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-course item">
              <Image
                className="img-hd mx-auto"
                width={350}
                height={400}
                quality={100}
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
                src="/images/tacgia3.jpg"
                alt="Diễn Giả Cao Thanh"
              />
              <p className="sale-btn">Nổi bật</p>
              <div className="details">
                <a href="#" className="text-black font-bold">
                  <h4>Diễn Giả Cao Thanh</h4>
                </a>
                <p className="text-slate-700">
                  Với tất cả tình yêu và những nỗi niềm trong trái tim, tôi hy
                  vọng những chia sẻ của mình sẽ giúp ích cho bạn trên con đường
                  sự nghiệp.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-course item">
              <Image
                className="img-hd mx-auto"
                width={350}
                height={400}
                quality={100}
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
                src="/images/tacgia1.jpg"
                alt="Cô Gái Vàng Ngành Kim Cương"
              />
              <p className="sale-btn">Nổi bật</p>
              <div className="details">
                <a href="#" className="text-black font-bold">
                  <h4>Tác giả sách: Trái Tim Kim Cương</h4>
                </a>
                <p className="text-slate-700">
                  Cuốn sách này là món quà tôi tự dành tặng tuổi 30 của mình.
                  Cuộc sống thật mầu nhiệm và dám sống là chính mình là một kỳ
                  tích rực rỡ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-course item ">
              <Image
                className="img-hd mx-auto"
                width={350}
                height={400}
                quality={100}
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
                src="/images/tacgia2.jpg"
                alt="Người Phụ Nữ Lãnh Đạo Truyền Cảm Hứng"
              />
              <p className="sale-btn">Nổi bật</p>
              <div className="details">
                <a href="#" className="text-black font-bold">
                  <h4>Nữ Doanh Nhân Kim Cương</h4>
                </a>
                <p className="text-slate-700">
                  Hiện Mss Cao Thanh là CEO Công ty Cao Diamond, Người sáng lập
                  thương hiệu trang sức Lapola Jewelry
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Body2;
