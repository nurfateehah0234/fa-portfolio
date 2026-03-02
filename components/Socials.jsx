import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiMailLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/nurfateehah.baka",
    Icon: RiFacebookLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/itsfqtihah",
    Icon: RiInstagramLine,
  },
  {
    name: "Email",
    link: "mailto:654153004@parichat.skru.ac.th",
    Icon: RiMailLine,
  },
  {
    name: "Github",
    link: "https://github.com/nurfateehah",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.name === "Github"
            ? "bg-accent rounded-full p-[5px] hover:text-white"
            : "hover:text-accent"
            } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
