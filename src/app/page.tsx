import {
  Hero,
  Navbar,
  About,
  Experience,
  Feedbacks,
  Tech,
  Works,
  StarsCanvas,
} from "@/components";
import SectionWrapper from "@/components/SectionWrapper";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="relative z-0 bg-primary">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern ">
          <Navbar />
          <SectionWrapper sectionId="/">
            <Hero />
          </SectionWrapper>
        </div>
        <SectionWrapper sectionId="about">
          <About />
        </SectionWrapper>
        <Experience />
        <Tech />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </main>
  );
}
