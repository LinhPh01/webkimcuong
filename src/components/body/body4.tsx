"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const Body4 = () => {
  return (
    // End price Area
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className="pb-20 flex justify-center items-center text-black bg-white"
    >
      <div className="container" id="tuthien">
        <div className="flex justify-center">
          <div className="menu-content col-lg-9">
            <div className="title text-center">
              <h1 className="mb-10">Quỹ từ thiện trái tim kim cương</h1>
              <p className="italic">
                Lợi nhuận bán sách sẽ dành làm từ thiện cho trẻ em nghèo Việt
                Nam - Ấn Độ
              </p>
            </div>
          </div>
        </div>
        <div className="text-black">
          <div className="col-sm-12">
            <p>
              “Tôi cảm thấy thật may mắn khi đã trải qua nhiều biến cố lớn. Nhờ
              rơi vào tận cùng vực thẳm khổ đau mà tôi có thể trở về với sự
              sống, nhận thức rõ ràng mục đích sống của đời mình, khám phá những
              tiềm năng của bản thân. Hành trình đi từ khổ đau đến hạnh phúc ấy
              cũng đã giúp tôi đúc kết được rất nhiều bài học giá trị sâu sắc.
              Tôi nhận ra rằng những thành công lớn đều xuất phát từ tấm lòng vì
              con người. Tôi tìm được hạnh phúc thực sự khi có thể giúp đỡ người
              khác. Nếu có thể giúp cho dù chỉ một người có cuộc sống tốt đẹp
              hơn thì tôi vẫn luôn sẵn sàng hành động. Đó cũng chính là động lực
              mạnh mẽ nhất khi tôi quyết định sẽ viết cuốn sách này dù đây là
              lần đầu tôi viết sách và đôi khi cảm thấy mình còn quá trẻ để viết
              về đời mình. Hãy cùng tôi tiếp thêm sức mạnh và nâng đỡ cho nhiều
              người đang vấp ngã và còn đói nghèo ngoài kia.”
            </p>
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
            spaceBetween={8}
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
              <div className="col-sm-12 active-tuthien-carusel">
                <div className="item">
                  <Image
                    width={400}
                    height={100}
                    src="/images/tuthien.jpg"
                    alt="Từ thiện 1"
                    quality={100}
                    className="img-hd1 mx-auto "
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-12 active-tuthien-carusel">
                <div className="item">
                  <Image
                    width={400}
                    height={100}
                    src="/images/tuthien2.jpg"
                    alt="Từ thiện 2"
                    quality={100}
                    className="img-hd1 mx-auto "
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-12 active-tuthien-carusel">
                <div className="item">
                  <Image
                    width={400}
                    height={100}
                    src="/images/tuthien3.jpg"
                    alt="Từ thiện 3"
                    quality={100}
                    className="img-hd1 mx-auto "
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-12 active-tuthien-carusel">
                <div className="item">
                  <Image
                    width={400}
                    height={100}
                    src="/images/tuthien4.jpg"
                    alt="Từ thiện 4"
                    quality={100}
                    className="img-hd1 mx-auto "
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-12 active-tuthien-carusel">
                <div className="item">
                  <Image
                    width={400}
                    height={100}
                    src="/images/tuthien5.jpg"
                    alt="Từ thiện 5"
                    quality={100}
                    className="img-hd1 mx-auto "
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-12 active-tuthien-carusel">
                <div className="item">
                  <Image
                    width={400}
                    height={100}
                    src="/images/tuthien6.jpg"
                    alt="Từ thiện 6"
                    quality={100}
                    className="img-hd1 mx-auto "
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-sm-12 active-tuthien-carusel">
                <div className="item">
                  <Image
                    width={400}
                    height={400}
                    src="/images/tuthien7.jpg"
                    alt="Từ thiện 7"
                    quality={100}
                    className="img-hd1 mx-auto "
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Body4;
