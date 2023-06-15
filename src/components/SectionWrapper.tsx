"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

function SectionWrapper({
  children,
  sectionId,
}: {
  children: React.ReactNode;
  sectionId: string;
}) {
  return (
    <section className="z-0 px-6 py-10 mx-auto max-w-7xl sm:px-16 sm:py-16">
      <span className="hash-span" id={sectionId}>
        &nbsp;
      </span>
      {children}
    </section>
  );
}

export default SectionWrapper;
