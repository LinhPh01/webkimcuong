"use client";
import React from "react";
import Image from "next/image";
import useAOS from "@/utils/aos-init";

const Body5 = () => {
  useAOS();
  return (
    <section
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="relative px-2 bg-header text-black py-20"
      id="sohuu"
      style={{
        filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="py-8">
            <div className="title text-center font-bold text-4xl">
              <h1>Sở hữu sách</h1>
            </div>
          </div>
          <p className="italic font-normal pb-4">
            STK: 0491000028664 - Vietcombank - Cao Thị Thanh
          </p>
        </div>

        <div className="">
          <div className="form-left col-md-6 flex flex-row">
            <div className="w-full max-w-lg">
              <form id="form">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                      id="email"
                      type="text"
                      name="Email"
                    />
                    <p
                      id="message-err-3"
                      style={{ display: "none" }}
                      className="text-red-500 text-xs italic"
                    >
                      Không đúng định dạng
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="phone"
                    >
                      Số điện thoại
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                      id="phone"
                      type="text"
                      name="Số điện thoại"
                    />
                    <p
                      id="message-err-4"
                      style={{ display: "none" }}
                      className="text-red-500 text-xs italic"
                    >
                      Không đúng định dạng
                    </p>
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Họ và tên
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                      id="name"
                      type="text"
                      name="Họ và tên"
                    />
                    <p
                      id="message-err-1"
                      style={{ display: "none" }}
                      className="text-red-500 text-xs italic"
                    >
                      Không được để trống
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="diachinhanhang"
                    >
                      Địa chỉ nhận hàng
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                      id="diachinhanhang"
                      type="text"
                      name="Địa chỉ nhận hàng"
                    />
                    <p
                      id="message-err-5"
                      style={{ display: "none" }}
                      className="text-red-500 text-xs italic"
                    >
                      Không được để trống
                    </p>
                  </div>

                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="loinhan"
                    >
                      Để lại lời nhắn cho chúng tôi
                    </label>
                    <textarea
                      name="Lời nhắn"
                      id="loinhan"
                      className="resize rounded-md w-full bg-white text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                    />
                  </div>
                </div>
                <input
                  type="hidden"
                  name="access_key"
                  value="c586d47f-c7a3-4282-853c-751eee6126d7"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Thông tin người mua từ website Trái tim kim cương"
                />

                <button
                  id="id-btn-form"
                  className="bg-white text-pink-500 font-bold ml-1 rounded px-4 py-3 uppercase hover:bg-pink-500 hover:text-white"
                  type="submit"
                >
                  Xác nhận
                </button>
                <div id="result"></div>
              </form>
            </div>
            <div className="rightt col-md-6 mt-4">
              <Image
                width={300}
                height={200}
                src="/images/sach-form.png"
                alt="Sách"
                quality={100}
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
                className="img-hd mx-auto object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body5;
