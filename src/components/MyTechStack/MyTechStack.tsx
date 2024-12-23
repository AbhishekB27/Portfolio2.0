"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import IconCloud from "../ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "tailwindcss",
    "clerk",
    "framer",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mongodb",
    "redux",
    "vercel",
    "git",
    "jira",
    "github",
    "visualstudiocode",
];

export function MyTechStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 }); // Trigger animation when 50% of the element is visible
    useEffect(() => {
        console.log("Element in view:", isInView);
    }, [isInView]);
    return (
        <div
            ref={ref} // Attach the ref to the parent container
            className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 "
        >
            <div className="text-black self-start text-8xl">
                <motion.p
                    className="-translate-x-12"
                >
                    Tech
                </motion.p>
                <motion.p

                >
                    Stack
                </motion.p>
            </div>
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
