import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../variants";
import { RiFacebookLine, RiInstagramLine, RiMailLine, RiGithubLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col justify-center items-center xl:flex-row gap-x-12">
        {/* Contact Info Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center xl:text-left"
          >
            มาทำความรู้จัก <span className="text-accent">และติดต่อกัน!</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 text-white/60 text-lg text-center xl:text-left"
          >
            คุณสามารถติดตามกิจกรรมการเรียนรู้ของฉันหรือติดต่อสอบถามข้อมูลเพิ่มเติมได้ทางช่องทางด้านล่างนี้ครับ
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-y-4 items-center xl:items-start"
          >
            <a
              href="https://www.facebook.com/nurfateehah.baka"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-4 text-xl hover:text-accent transition-all duration-300 group"
            >
              <div className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent">
                <RiFacebookLine size={24} />
              </div>
              <span className="font-light">Nurfateehah baka</span>
            </a>
            <a
              href="https://www.instagram.com/itsfqtihah"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-4 text-xl hover:text-accent transition-all duration-300 group"
            >
              <div className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent">
                <RiInstagramLine size={24} />
              </div>
              <span className="font-light">itsfqtihah</span>
            </a>
            <a
              href="mailto:654153004@parichat.skru.ac.th"
              className="flex items-center gap-x-4 text-xl hover:text-accent transition-all duration-300 group"
            >
              <div className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent">
                <RiMailLine size={24} />
              </div>
              <span className="font-light text-base md:text-xl">654153004@parichat.skru.ac.th</span>
            </a>
          </motion.div>
        </div>

        {/* Activity Image */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 w-full max-w-[600px] mt-12 xl:mt-0"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl group">
            <Image
              src="/contact_img.jpg"
              alt="กิจกรรมการสอนและการเรียนรู้"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl font-bold">เก็บภาพความประทับใจ</p>
              <p className="text-sm">กิจกรรมปฐมนิเทศและการฝึกสอน</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
