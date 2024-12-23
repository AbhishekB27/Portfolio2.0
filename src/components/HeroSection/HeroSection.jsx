"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "../Typewriter/Typewrite";

const HeroSection = () => {
  const [opacity, setOpacity] = useState(0.05);
  return (
    <main className="relative w-full ">
      <div
        className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('https://www.ui-layouts.com/noise.gif')]"
        style={{ opacity: opacity }}
      ></div>
      <section
        className={`  font-semibold min-h-screen w-full text-white flex justify-center items-center flex-col text-responsive `}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <h1 className=" font-extrabold tracking-tight leading-[120%]">
            Abhishek Bahuguna
          </h1>
        </motion.div>
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{
              opacity: 0,
              translateY: 150,
              translateX: 0,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
              translateX: -100,
            }}
            transition={{
              translateY: { duration: 0.3, ease: "easeOut" }, // Vertical motion faster
              translateX: {
                duration: 0.3,
                default: {
                  type: "spring",
                  stiffness: 100,
                  mass: 1,
                  damping: 2.5,
                },
                delay: 0.5,
                ease: "easeOut",
              }, // Horizontal shift starts sooner and is faster
              opacity: { duration: 0.1, ease: "easeOut" }, // Faster fade-in
            }}
          >
            {/* <h2 className="font-extralight tracking-tight leading-[100%]">
              Frontend
            </h2> */}
            <Typewriter examples={["Frontend", "Next.js", "Backend"]} />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              translateY: 150,
              translateX: 0,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
              translateX: 100,
              fontStyle: "italic",
            }}
            transition={{
              translateY: {
                duration: 0.3,
                ease: "easeOut",
              }, // Vertical motion faster
              translateX: {
                default: {
                  type: "spring",
                  stiffness: 100,
                  mass: 1,
                  damping: 2.5,
                },
                duration: 0.3,
                delay: 0.5,
                ease: "easeOut",
              }, // Horizontal shift starts sooner and is faster
              fontStyle: { duration: 0.3, delay: 0.6, ease: "easeOut" }, // Vertical motion faster
              opacity: { duration: 0.1, ease: "easeOut" }, // Faster fade-in
            }}
          >
            <h2 className="font-extralight tracking-tight leading-[100%]">
              Developer
            </h2>
          </motion.div>
          {/* <Typewriter examples={["Developer", "Designer", "UI/UX"]} /> */}
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
