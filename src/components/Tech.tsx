import React from "react";
import SectionWrapper from "./SectionWrapper";
import { technologies } from "@/constant/content";
import dynamic from "next/dynamic";

const BallCanvas = dynamic(() => import("../components/canvas/Ball"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Tech = () => {
  return (
    <SectionWrapper sectionId="technologies">
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          What I work with
        </p>
        <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technologies
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div key={tech.name} className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
