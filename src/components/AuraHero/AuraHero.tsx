
import { useEffect } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Introduction } from "../Introduction/Introduction";

const COLORS_TOP = ["#ffffff", "#f3f3f3", "#e5e5e5"]; // Subtle white gradient

export const AuroraHero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${color}, #000000)`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden bg-black px-8 py-24 text-white"
        >
            <Introduction />
        </motion.section>
    );
};
