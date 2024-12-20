"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="relative bg-transparent text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
            {/* Main Content */}
            <div className="text-center max-w-4xl space-y-6">
                {/* Heading with Unique Typography */}
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-2"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Hi, I'm <span className="text-blue-400 font-serif">Abhishek Bahuguna</span>
                </motion.h1>
                <motion.h2
                    className="text-xl md:text-2xl font-medium tracking-wide uppercase text-gray-300 mb-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Bringing Ideas to Life Through Design and Code
                </motion.h2>

                {/* Dynamic Typing Effect */}
                <motion.div
                    className="text-lg md:text-3xl font-light text-gray-300 leading-relaxed"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <span className="font-bold text-blue-400">Web Developer </span> |{" "}
                    <span className="italic text-purple-400">UI/UX Designer</span> |{" "}
                    <span className="underline text-pink-400">Freelancer</span>
                </motion.div>

                {/* Call-to-Actions */}
                <motion.div
                    className="flex justify-center gap-4 mt-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    <a
                        href="#portfolio"
                        className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>


        </section>
    );
};

export default HeroSection;
