"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const Body6 = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-white text-black flex justify-center items-center"
      id="nhanxet"
    >
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="menu-content col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Nhận xét từ chuyên gia</h1>
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
            <div className="">
              <div className="">
                <div className="single-testimonial">
                  <Image
                    height={100}
                    width={400}
                    src="/images/review1.jpg"
                    alt="Review 1"
                    quality={100}
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                    className="img-hd2 mx-auto object-contain w-full h-auto rounded-full"
                  />
                  <p className="desc">
                    Có thể bạn đang cầm trên tay một cuốn sách quý, vì Cao
                    Thanh, với ‘trái tim kim cương’ của mình, đang muốn gửi đến
                    bạn những bài học mà cô ấy chắt lọc từ chính những va vấp và
                    thất bại của 30 năm đầu đời trên hành trình tìm thấy chính
                    mình để yêu, khát vọng và tỏa sáng cho đời.
                  </p>
                  <h4>Tiến sĩ Trần Hữu Đức</h4>
                  {/* <p>CEO at Google</p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="">
                <div className="single-testimonial">
                  <Image
                    height={100}
                    width={400}
                    quality={100}
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                    className="img-hd2 mx-auto object-contain w-full h-auto rounded-full"
                    src="/images/review2.jpg"
                    alt="Review 2"
                  />
                  <p className="desc">
                    Tôi tin những gì Cao Thanh gửi gắm trong cuốn sách Trái tim
                    kim cương sẽ chạm được đến ít nhất vài khoản trong trái tim
                    bạn, sẽ giúp bạn thêm tin tưởng rằng bạn hoàn toàn có thể
                    thành công hơn và làm được những điều bấy lâu khao khát.
                  </p>
                  <h4>Nguyễn Tăng Hải</h4>
                  <p>CEO TM Branding</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="">
                <div className="single-testimonial">
                  <Image
                    height={100}
                    width={400}
                    quality={100}
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                    className="img-hd2 mx-auto object-contain w-full h-auto rounded-full"
                    src="/images/review3.jpg"
                    alt="Review 3"
                  />
                  <p className="desc">
                    Hành trình 30 năm đầu đời là hành trình của một viên kim
                    cương nâu thô ráp, qua mài dũa, cắt chỉnh của cuộc đời để
                    trở thành viên kim cương sáng long lanh, trở thành hình mẫu
                    lý tưởng cho phụ nữ. Bạn đọc sẽ thấy đâu đó trong những câu
                    chuyện của Thanh hình ảnh của bản thân mình.
                  </p>
                  <h4>Nguyễn Tuấn Quỳnh</h4>
                  <p>Chủ tịch HĐQT SaigonBooks</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="">
                <div className="single-testimonial">
                  <Image
                    height={100}
                    width={400}
                    quality={100}
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                    className="img-hd2 mx-auto object-contain w-full h-auto rounded-full"
                    src="/images/review1.jpg"
                    alt="Review 1"
                  />
                  <p className="desc">
                    Có thể bạn đang cầm trên tay một cuốn sách quý, vì Cao
                    Thanh, với ‘trái tim kim cương’ của mình, đang muốn gửi đến
                    bạn những bài học mà cô ấy chắt lọc từ chính những va vấp và
                    thất bại của 30 năm đầu đời trên hành trình tìm thấy chính
                    mình để yêu, khát vọng và tỏa sáng cho đời.
                  </p>
                  <h4>Tiến sĩ Trần Hữu Đức</h4>
                  {/* <p>CEO at Google</p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="">
                <div className="single-testimonial">
                  <Image
                    height={100}
                    width={400}
                    quality={100}
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                    className="img-hd2 mx-auto object-contain w-full h-auto rounded-full"
                    src="/images/review2.jpg"
                    alt="Review 2"
                  />
                  <p className="desc">
                    Tôi tin những gì Cao Thanh gửi gắm trong cuốn sách Trái tim
                    kim cương sẽ chạm được đến ít nhất vài khoản trong trái tim
                    bạn, sẽ giúp bạn thêm tin tưởng rằng bạn hoàn toàn có thể
                    thành công hơn và làm được những điều bấy lâu khao khát.
                  </p>
                  <h4>Nguyễn Tăng Hải</h4>
                  <p>CEO TM Branding</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="">
                <div className="single-testimonial">
                  <Image
                    height={100}
                    width={400}
                    quality={100}
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                    }}
                    className="img-hd2 mx-auto object-contain w-full h-auto rounded-full"
                    src="/images/review3.jpg"
                    alt="Review 3"
                  />
                  <p className="desc">
                    Hành trình 30 năm đầu đời là hành trình của một viên kim
                    cương nâu thô ráp, qua mài dũa, cắt chỉnh của cuộc đời để
                    trở thành viên kim cương sáng long lanh, trở thành hình mẫu
                    lý tưởng cho phụ nữ. Bạn đọc sẽ thấy đâu đó trong những câu
                    chuyện của Thanh hình ảnh của bản thân mình.
                  </p>
                  <h4>Nguyễn Tuấn Quỳnh</h4>
                  <p>Chủ tịch HĐQT SaigonBooks</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Body6;
