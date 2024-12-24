import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";
import React, { useRef } from "react";
import Link from "next/link";
import { MyProjects } from "../MyProjects/MyProjects";
import { SmoothScrollHero } from "../ui/SmoothScroll";

export const Introduction = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.5, 0.5],
        ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    return (
        <div className="relative">
            <section
                ref={targetRef}
                className="h-[1050vh] bg-neutral-50 text-neutral-950"
            >
                <div className="sticky  top-0 flex h-screen items-center overflow-hidden">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center w-svw ">

                            <motion.p

                                className="text-5xl font-normal translate-x-14">Introduction</motion.p>
                            <div className="flex gap-5 pr-10">
                                <Link
                                    href='/aboutMe'
                                >
                                    <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                        More About Me
                                    </button>
                                </Link><button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                    Download Resume
                                </button>
                            </div>
                        </div>

                        <motion.p
                            style={{ skewX, x }}
                            className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
                        >
                            I'm a passionate Frontend Developer with 2+ years of experience in crafting visually appealing, user-friendly, and high-performing web applications.


                        </motion.p>

                    </div>
                </div>

            </section>
            <MyProjects />
            <SmoothScrollHero />

        </div>
    );
};