import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxPencil2,
    title: "การวางแผนการสอน",
    description: "ออกแบบแผนการจัดการเรียนรู้ที่สอดคล้องกับมาตรฐานหลักสูตรและน่าสนใจสำหรับผู้เรียน",
  },
  {
    Icon: RxReader,
    title: "การวัดและประเมินผลผู้เรียน",
    description: "ประเมินความก้าวหน้าของผู้เรียนและให้ข้อมูลย้อนกลับเพื่อการพัฒนา",
  },
  {
    Icon: RxDesktop,
    title: "การเรียนรู้ออนไลน์",
    description: "บูรณาการเครื่องมือและแพลตฟอร์มดิจิทัลเพื่อยกระดับประสบการณ์การเรียนรู้",
  },
  {
    Icon: RxCrop,
    title: "การจัดการชั้นเรียน",
    description: "สร้างบรรยากาศเชิงบวกในชั้นเรียนเพื่อส่งเสริมการเรียนรู้ที่มีประสิทธิภาพ",
  },
  {
    Icon: RxRocket,
    title: "นวัตกรรมทางการศึกษา",
    description: "ประยุกต์ใช้ทฤษฎีการสอนสมัยใหม่ในการจัดการเรียนรู้ในชั้นเรียน",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
