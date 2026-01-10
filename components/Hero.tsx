import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
type Props = {};

const Hero = ({}: Props) => {
  return (
    <div className="pb-20 pt-36">
       <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-center text-blue-100 max-w-80">
            Full-Stack Developer | 2+ Years Experience
          </p>

          <TextGenerateEffect
            words="Parth Desai"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Specialized in <span className="gradient-text font-semibold">JavaScript, TypeScript, Node.js, React.js, Next.js & Express.js</span>
          </p>

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-base lg:text-lg max-w-2xl opacity-90">
            Full Stack Software Developer with 2+ years of experience in designing, developing, and delivering scalable web applications. 
            Skilled in both front-end and back-end development with a proven track record of leading cross-functional teams.
          </p>

          <a href="#about">
            <MagicButton
              title="Explore My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
