"use client"

import Lenis from '@studio-freight/lenis';
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useEffect, useRef } from "react";

// Custom ReactLenis Wrapper
const ReactLenis = ({ children, options = {} }) => {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            ...options,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [options]);

    return <>{children}</>;
};

export const SmoothScrollHero = () => {
    return (
        <div className="bg-zinc-950">
            <ReactLenis
                options={{
                    // Lenis options: https://github.com/studio-freight/lenis#options
                    lerp: 0.05,
                    // infinite: true,
                    // syncTouch: true,
                }}
            >
                <Hero />
            </ReactLenis>
        </div>
    );
};



const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
            className="relative w-full"
        >
            <CenterImage />
            {/* <ParallaxImages /> */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();

    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 500],
        ["170%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage:
                    "url(https://zentry.com/export/images/home/intro/custom-home-intro-desktop@lg.webp)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};




