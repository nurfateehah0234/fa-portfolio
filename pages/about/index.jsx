import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "ทักษะ",
    info: [
      {
        title: "การประยุกต์ใช้สื่อดิจิทัลและ Simulation",
        stage: " ",
      },
      {
        title: "การสร้างสรรค์สื่อการสอนสมัยใหม่",
        stage: " ",
      },
      {
        title: "ทักษะการทดลองและวิเคราะห์ข้อมูล",
        stage: " ",
      },
      {
        title: "การจัดการเรียนรู้เชิงรุก (Active Learning)",
        stage: " ",
      },
    ],
  },

  {
    title: "ประสบการณ์",
    info: [
      {
        title: "ฝึกประสบการณ์วิชาชีพครู 1 - โรงเรียนสทิงพระวิทยา",
        stage: " ",
      },
      {
        title: "ฝึกประสบการณ์วิชาชีพครู 2 - โรงเรียนละงูพิทยาคม",
        stage: " ",
      },
      {
        title: "ฝึกประสบการณ์วิชาชีพครู 3 - โรงเรียนละงูพิทยาคม",
        stage: " ",
      },
      {
        title: "ฝึกประสบการณ์วิชาชีพครู 4 - โรงเรียนละงูพิทยาคม",
        stage: " ",
      },
    ],
  },
  {
    title: "ประวัติการศึกษา",
    info: [
      {
        title: "ประถมศึกษา - โรงเรียนบ้านปะแต",
        stage: " ",
      },
      {
        title: "มัธยมศึกษาตอนต้น - โรงเรียนตัสดีกียะห์",
        stage: " ",
      },
      {
        title: "มัธยมศึกษาตอนปลาย - โรงเรียนตัสดีกียะห์",
        stage: " ",
      },
      {
        title: "ปัจจุบัน: ครุศาสตรบัณฑิต (สาขาฟิสิกส์) - มหาวิทยาลัยราชภัฏสงขลา",
        stage: "กำลังศึกษา",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            className="mb-6 w-full max-w-[450px] mx-auto xl:mx-0"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-white/20 shadow-xl group">
              <Image
                src="/experience.jpg"
                alt="กิจกรรมการสอน"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            ฉันคือ ครูนุรฟาตีฮะห์ บากา (ครูฟา) นักศึกษาครูสาขาฟิสิกส์ที่มีความหลงใหลในการสอน จากมหาวิทยาลัยราชภัฏสงขลา เป้าหมายของฉันคือการสร้างแรงบันดาลใจและสภาพแวดล้อมการเรียนรู้ที่นักเรียนทุกคนมีโอกาสประสบความสำเร็จและเติบโต
          </motion.p>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto max-h-[300px] xl:max-h-none pr-2 custom-scrollbar">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex"> </div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* Experience Image */}
            {index === 2 && (
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate="show"
                className="mt-6 w-full max-w-[450px]"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-white/20 shadow-xl group">
                  <Image
                    src="/experience.jpg"
                    alt="การฝึกประสบการณ์วิชาชีพ"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
