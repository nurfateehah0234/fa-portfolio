import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "กิจกรรมรวมพลังนักเรียน",
          path: "/work1.jpg",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "การประชุมในหอประชุมโรงเรียน",
          path: "/work2.jpg",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "พิธีมอบรางวัลและเกียรติบัตร",
          path: "/work3.png",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "การจัดการเรียนการสอนกลุ่มฟิสิกส์",
          path: "/work4.png",
          link: "https://facebook.com/nurfateehah.baka",
        },
      ],
    },
    {
      images: [
        {
          title: "กิจกรรมกลุ่มนักเรียนฟิสิกส์",
          path: "/work5.jpg",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "การสอนเรื่องพลังงานศักย์โน้มถ่วง",
          path: "/work6.png",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "การทดลองปฏิบัติการฟิสิกส์",
          path: "/work7.png",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "กิจกรรมฐานการเรียนรู้ภายนอก",
          path: "/work8.jpg",
          link: "https://facebook.com/nurfateehah.baka",
        },
      ],
    },
    {
      images: [
        {
          title: "กิจกรรม Bases Against Time",
          path: "/work9.jpg",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "รูปหมู่คณะครูและนักศึกษา",
          path: "/work10.jpg",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "ความสดใสของนักศึกษาพาสาวๆถ่ายรูป",
          path: "/extra1.png",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "การประชุมในหอประชุมระดับภูมิภาค",
          path: "/extra2.jpg",
          link: "https://facebook.com/nurfateehah.baka",
        },
      ],
    },
    {
      images: [
        {
          title: "กิจกรรมรวมพลังในห้องสำนักงาน",
          path: "/extra3.jpg",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "การทดลองวิทยาศาสตร์ในชั้นเรียน",
          path: "/extra4.png",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "การจัดการเรียนการสอนแบบดิจิทัล",
          path: "/extra5.png",
          link: "https://facebook.com/nurfateehah.baka",
        },
        {
          title: "เก็บภาพความประทับใจร่วมกับเพื่อนครู",
          path: "/contact_img.jpg",
          link: "https://facebook.com/nurfateehah.baka",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">ดู</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        กิจกรรม
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
