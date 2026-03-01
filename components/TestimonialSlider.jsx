import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/mentor.jpg",
    name: "ครูบุญเลิศ ยาแลวา",
    position: "ครูพี่เลี้ยง",
    message:
      "ครูนูรฟาตีฮะห์เป็นนักศึกษาฝึกสอนที่มีความตั้งใจ ความทุ่มเทและวิธีการสอนที่ทันสมัยช่วยให้นักเรียนมีความกระตือรือร้นในการเรียนมากขึ้นอย่างเห็นได้ชัด",
  },
  {
    image: "/t-avt-2.png",
    name: "Kanya Raksa",
    position: "ครอาวุโส",
    message:
      "มีความเป็นครูโดยธรรมชาติและจัดการชั้นเรียนได้ดีเยี่ยม สามารถเชื่อมโยงกับนักเรียนและอธิบายเนื้อหาวิทยาศาสตร์ที่ยากให้เข้าใจง่าย",
  },
  {
    image: "/t-avt-3.png",
    name: "Wichai Panya",
    position: "นักเรียนมัธยม",
    message:
      "ครูฟาตีฮะห์สอนวิทยาศาสตร์สนุกมากครับ บทเรียนน่าสนใจตลอดเวลา และครูพร้อมช่วยเหลือพวกเราเสมอเมื่อมีข้อสงสัย",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-accent">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
