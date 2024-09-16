"use client";
import React, { useState } from "react";
import Image from "next/image";
import useAOS from "@/utils/aos-init";

const Body1 = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  useAOS();
  return (
    <section
      data-aos="fade-down"
      data-aos-duration="1000"
      className="mt-100 py-20 info-area bg-white flex flex-col justify-center items-center"
    >
      <h1
        className="mb-10 text-center text-black text-4xl pt-8 font-bold"
        id="loitua"
      >
        Lời tác giả
      </h1>
      <div className="container">
        <div className=" single-info mt-30 pr-2 px-2 flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center">
          <div className="col-lg-6 col-md-12 text-center no-padding info-left bg-white">
            <div className="flex">
              <Image
                width={400}
                height={1080}
                src="/images/tac gia sach.jpg"
                className="img-hd"
                alt=""
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.3)",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 lg:w-1/2 no-padding info-right bg-white">
            <div className="info-content text-mid flex flex-col justify-center items-center">
              <h2 className="pb-30 text-black text-4xl pl-6">
                Tác giả Cao Thanh
              </h2>
              <p className="text-slate-700 pl-6">
                “Tôi đã tìm lại chính mình và tìm thấy con đường mới cần theo
                đuổi.”
              </p>
              <p className="text-slate-700 px-6">
                Tôi được sinh ra trong một gia đình nông dân nghèo ở vùng nông
                thôn. Từ thời thơ ấu đến khi trưởng thành, tôi chủ yếu chìm
                trong bi kịch và sự cô đơn: sống xa bố mẹ từ lúc tám tuổi, từng
                bị nhiều người cùng khu vực sinh sống chỉ trích và xa lánh vì
                những hành xử khác biệt, từng bị một nhóm hàng chục người bạo
                lực học đường, từng bị lợi dụng lòng tin, từng bị những người
                yêu thương bỏ rơi. Khi trưởng thành, tôi gầy dựng sự nghiệp kinh
                doanh, bị lừa mất số tiền lớn. Tồi tệ hơn, tôi liên tục bị chính
                kẻ lừa mình làm tiền, bôi nhọ nhân phẩm và uy hiếp tính mạng
                suốt một thời gian dài.
              </p>
              {showMore && (
                <span id="more-text">
                  <p className="text-slate-700 px-6">
                    Những năm tháng trước biến cố ấy, tôi hứng thú với của cải
                    vật chất, cứ tưởng chìa khóa của hạnh phúc chính là tự mua
                    được những gì mình chưa bao giờ có: một căn nhà to, một
                    chiếc xe hơi sang trọng, những món hàng hiệu xa xỉ, những
                    viên kim cương giá trị lớn,… Suốt quãng đời ấu thơ, tôi
                    chứng kiến bố mẹ mình vất vả nai lưng làm việc đêm ngày song
                    không lúc nào ngừng lo lắng, thậm chí thường xuyên cãi vã về
                    chuyện cơm áo gạo tiền. Điều ấy khiến một suy nghĩ lớn dần
                    trong tôi: “Mình và gia đình sẽ hạnh phúc hơn một khi mình
                    trở nên giàu có!”
                  </p>
                  <p className="text-slate-700 px-6">
                    Tôi tốt nghiệp đại học chậm hai năm so với nhiều bạn bè cùng
                    trang lứa. Chỉ trong vòng năm năm sau khi nhận cùng lúc hai
                    tấm bằng cử nhân, tôi đã Nam tiến, khởi nghiệp trong lĩnh
                    vực kinh doanh kim cương, làm việc chăm chỉ, đối diện nhiều
                    sóng gió và gặt hái một số thành tựu nhất định. Nhiều người
                    nghĩ rằng tôi thành công rất dễ dàng và đang sống hạnh phúc,
                    nhưng thật ra tôi chưa bao giờ cân bằng trong khoảng thời
                    gian ấy dù vẫn thường nở nụ cười rạng rỡ. Áp lực và những
                    khó khăn trong việc kinh doanh khiến tôi tăng cân vùn vụt,
                    đỉnh điểm tăng tận mười ký, sức khỏe gần như đến bờ vực thẳm
                    vì bị trầm cảm kéo dài. Trong những phút giây tâm trạng u ám
                    nhất, tôi từng nghĩ đến tự tử.
                  </p>
                  <p className="text-slate-700 px-6">
                    Nhưng ngay cả khi rơi vào những hoàn cảnh cùng cực ấy, tôi
                    vẫn không từ bỏ cuộc sống, thu hết can đảm đứng dậy thêm lần
                    nữa để sống cuộc đời như mình thật sự mong muốn. Thật không
                    dễ dàng gì vứt bỏ con người cũ với nhiều nếp nghĩ, thói quen
                    đã hằn sâu để tái sinh thành con người mới.
                  </p>
                  <p className="text-slate-700 px-6">
                    Đời người không chỉ có niềm vui, hạnh phúc mà còn thường có
                    cả những khổ đau, biến cố, mất mát, những điều bất định,… Dù
                    bất kể điều gì xảy ra, cuộc sống vẫn luôn rất nhiệm mầu. Mỗi
                    người xuất hiện trên cuộc đời này đều là một thành tựu vĩ
                    đại, đều vô cùng đặc biệt và là duy nhất. Hãy dám sống là
                    chính mình, đặt niềm tin vào bản thân, nỗ lực hết sức và
                    đừng quá kỳ vọng vào kết quả. Hãy thả lỏng mình như một dòng
                    nước, tận hưởng và ăn mừng sự thi vị của cuộc sống. Chúc bạn
                    sẽ là nắng ấm, là mặt trời dẫn đường của chính cuộc đời
                    mình.
                  </p>
                  <p className="text-slate-700 px-6">
                    Những nỗi đau, bài học cuộc sống, công việc, cuộc hành trình
                    mới mà tôi theo đuổi,... đều được gửi gắm vào những trang
                    sách này. Hy vọng cuốn sách sẽ đem đến niềm cảm hứng và hy
                    vọng cho những bạn trẻ đang đi tìm bản sắc riêng, những
                    người đang vật lộn với bệnh trầm cảm và cả những ai đang ấp
                    ủ khát khao khởi nghiệp, nhất là trong lĩnh vực kim cương.
                    Tôi là một doanh nhân viết sách, đây lại là cuốn sách đầu
                    tay, thế nên khó tránh khỏi những hạn chế, thiếu sót. Rất
                    mong bạn đọc thông cảm và cởi mở góp ý. Và nếu có thể, mong
                    bạn sẽ chia sẻ cuốn sách này đến những người mà bạn nghĩ
                    cuốn sách này có thể có ích cho họ. Đó sẽ và luôn là những
                    món quà tinh thần vô giá đối với tác giả.
                  </p>
                  <p className="text-slate-700 px-6">
                    Thân mến chia sẻ cùng bạn đọc!
                  </p>
                  <br />
                  <Image
                    className="px-6"
                    width={100}
                    height={100}
                    src="/images/KY.png"
                    alt=""
                  />
                </span>
              )}
              <button
                onClick={toggleShowMore}
                className="mt-4 text-blue-500 focus:outline-none"
              >
                {showMore ? "Thu gọn" : "Xem thêm"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body1;
