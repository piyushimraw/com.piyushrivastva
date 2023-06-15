"use client";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/constant/content";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "@/utils/motion";
import Image, { StaticImageData } from "next/image";

const ExperienceCard = ({
  experience,
}: {
  experience: {
    title: string;
    company_name: string;
    icon: StaticImageData;
    iconBg: string;
    date: string;
    points: string[];
  };
  index: number;
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-fill rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <SectionWrapper sectionId="work">
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          What I have done so far
        </p>
        <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience
        </p>
      </div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              experience={experience}
              key={experience.title}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
