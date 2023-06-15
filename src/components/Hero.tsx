"use client";
import { motion } from "framer-motion";

import { styles } from "../constant/styles";
import dynamic from "next/dynamic";

const ComputersCanvas = dynamic(
  () => import("../components/canvas/Computers"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        <div>
          <h1
            className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-lg lg:leading-[98px] mt-2`}
          >
            Hi, I&rsquo;m <span className="text-[#915EFF]">Piyush</span>
          </h1>
          <p
            className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
          >
            I am a full stack developer and I develop{" "}
            <br className="hidden sm:block" />
            mobile and web applications.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
