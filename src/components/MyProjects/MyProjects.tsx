import React, { MutableRefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { div } from "framer-motion/client";
import ProjectCard from "./ProjectCard";
import { ChevronsRight } from "lucide-react";
import { ProjectDrawer } from "../ProjectDrawer";

export const MyProjects = () => {
    return (
        <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
            <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
                MY PROJECTS
            </h2>
            <Cards />
            <ProjectDrawer />
        </section>
    );
};

const Cards = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardsData = [
        {
            containerRef: containerRef,
            src: "/HotHouse.png",
            alt: "Example image",
            rotate: "12deg",
            top: "45%",
            left: "60%",
            link: "https://hothousenorthwood.co.uk/",
            className: "w-[20rem] object-cover h-72",
        },
        {
            containerRef: containerRef,
            src: "/Petheeds.png",
            alt: "Example image",
            rotate: "-6deg",
            top: "20%",
            left: "40%",
            link: "https://petheeds.in/",
            className: "w-52 md:w-80",
        },
        {
            containerRef: containerRef,
            src: "/Singularity.png",
            alt: "Example image",
            rotate: "18deg",
            top: "20%",
            left: "65%",
            link: "https://snglrity.com/",
            className: "w-48 md:w-72",

        },
        {
            containerRef: containerRef,
            src: "/MountainMaverick.png",
            alt: "Example image",
            rotate: "-18deg",
            top: "50%",
            left: "60%",
            link: "https://mountainmavericks.in/",
            className: "w-40 md:w-64",
        },
        {

            containerRef: containerRef,
            src: "/HeadgenAi.png",
            alt: "Example image",
            rotate: "8deg",
            top: "50%",
            left: "40%",
            link: "https://headgen.ai/",
            className: "w-[20rem] object-cover h-72",

        },

    ];


    return (
        <div className="absolute inset-0 z-10" ref={containerRef}>
            {
                cardsData?.map(item => {
                    return <Card
                        {...item}
                    />
                })
            }



        </div>
    );
};

interface Props {
    containerRef: MutableRefObject<HTMLDivElement | null>;
    src: string;
    alt: string;
    top: string;
    left: string;
    link: string;
    rotate: string;
    className?: string;
}

const Card = ({
    containerRef,
    src,
    alt,
    top,
    left,
    link,
    rotate,
    className,
}: Props) => {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const els = document.querySelectorAll(".drag-elements");

        let maxZIndex = -Infinity;

        els.forEach((el) => {
            let zIndex = parseInt(
                window.getComputedStyle(el).getPropertyValue("z-index")
            );

            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        });

        setZIndex(maxZIndex + 1);
    };

    return (
        <motion.div
            onMouseDown={updateZIndex}
            style={{
                top,
                left,
                rotate,
                zIndex,
            }}
            className={twMerge(
                "drag-elements absolute w-48 bg-neutral-200 p-1 rounded",
                className
            )}

            drag
            dragConstraints={containerRef}
            // Uncomment below and remove dragElastic to remove movement after release
            //   dragMomentum={false}
            dragElastic={0.65}
        >
            <div className="bg-white/0 absolute w-full h-full group active:bg-white/0 hover:bg-slate-300/30 grid place-items-center">
                <button className="group-hover:block hidden group-active:hidden">
                    <Link

                        className='flex  gap-2 cursor-pointer px-4 py-3 dark:hover:bg-black bg-black hover:bg-white hover:text-black text-white border-black dark:hover:text-white transition-all border-2 dark:border-white dark:bg-white dark:text-black rounded-full font-semibold'
                        href={link}
                        target="_blank"
                    >
                        Know More
                        <ChevronsRight />
                    </Link>
                </button>
            </div>

            <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />

        </motion.div>
    );
};