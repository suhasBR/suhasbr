import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <section className="bg-black md:pt-24 lg:pt-24 xl:pt-24 pt-24 flex flex-col items-center">
        <div
          style={{ backgroundImage: "url(images/suhas_pic.jpeg)" }}
          className="bg-cover translate-y-0.5 md:w-72 lg:w-72 xl:w-72 lg:h-72 xl:h-72 md:h-72 w-48 h-48 rounded-full bg-white mt-12 mb-8"
        >
          {/* <img src='images/suhas2.jpeg' alt="me" className='w-full h-full rounded-full' /> */}
        </div>
        <div className="mb-4 flex flex-col items-center px-8">
          <h2 className="text-center md:text-4xl lg:text-4xl xl:text-4xl text-2xl text-slate-300 mb-4 font-semibold">
            Suhas Sharma BR
          </h2>
          <p className="text-lg text-slate-400 mb-8 text-center">
            Technology & Business Enthusiast
          </p>
          <p className="text-[1.05rem] text-slate-400 mb-8 text-center md:w-[60%] lg:w-[60%] xl:w-[60%]">
            I am an experienced Solutions Engineer with a strong background in
            programming. With a proven track record of designing and
            implementing effective solutions, I bring a wealth of technical
            expertise and experience to the table.
          </p>
        </div>

        <div className="mb-20 px-8 flex flex-row justify-between">
          <Link target="_blank"
            href="https://www.linkedin.com/in/suhas-sharma-53a776122/"
            passHref={true}
          >
            <img className="w-[1.4rem] mx-4 cursor-pointer" src="logos/in.png" alt="linkedin" />
          </Link>

          <Link target="_blank"
            href="https://github.com/suhasBR"
            passHref={true}
          >
            <img className="w-[1.4rem] mx-4 cursor-pointer" src="logos/github.png" alt="linkedin" />
          </Link>

          <Link target="_blank"
            href="https://twitter.com/techsuhas_br"
            passHref={true}
          >
            <img className="w-[1.4rem] mx-4 cursor-pointer" src="logos/x.png" alt="linkedin" />
          </Link>

          {/* <Link href="https://github.com/suhasBR/zku-final-project"
              passHref={true}> <img src='in.png' alt='linkedin' /></Link>


<Link href="https://github.com/suhasBR/zku-final-project"
              passHref={true}> <img src='in.png' alt='linkedin' /></Link> */}
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
