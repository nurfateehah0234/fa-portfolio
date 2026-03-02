import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>นูรฟาตีฮะห์ บากา | แฟ้มสะสมผลงาน</title>
        <meta
          name="description"
          content="นูรฟาตีฮะห์ บากา เป็นนักศึกษาครูที่มุ่งมั่นในการจัดการเรียนรู้และพัฒนาผู้เรียน"
        />
        <meta
          name="keywords"
          content="teacher, education, portfolio, student teacher, science education, nurfateehah baka"
        />
        <meta name="author" content="Nurfateehah Baka" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
