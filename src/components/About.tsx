"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "../constant/content";
import { fadeIn, textVariant } from "../utils/motion";
import Image, { StaticImageData } from "next/image";

const ServiceCard = ({
  service,
  index,
}: {
  index: number;
  service: {
    title: string;
    icon: StaticImageData;
  };
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <motion.div className="bg-tertiary rounded-[20px] p-4 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image
            src={service.icon}
            alt={service.title}
            className="object-contain w-16 h-16"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview
        </p>
      </div>
      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I&rsquo;m @Piyush a full stack engineer, learning to build fast and
        delightful experiences on the web. I&rsquo;m also passionate about Web
        Standards, Web performance, Animations, WebGL, and Ethereum. Aside from
        my day job, I work on a few side projects to keep my skills up to date.
        I work heavily with ReactJs, Redux, Styled Components, Next.js &
        recently picked up Node.js (express) for backend APIs.
      </p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </>
  );
};

export default About;
