// @ts-nocheck
'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import RainCanvas from '../RainCanvas/RainCanvas';
import { AuroraHero } from '../AuraHero/AuraHero';
import HeroSection from '../HeroSection/HeroSection';

export default function StickyScroll() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <>
            <main ref={container} className='relative h-[200vh] bg-black  '>
                <Section1 scrollYProgress={scrollYProgress} />
                <Section2 scrollYProgress={scrollYProgress} />
                <footer className='group bg-[#06060e] '>
                    <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
                        ui-layout
                    </h1>
                    <div className='bg-black text-white h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
                </footer>
            </main>
        </>
    );
}

const Section1 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        <motion.section
            style={{ scale, rotate }}
            className='sticky  font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
        >

            <RainCanvas />
            <HeroSection />
        </motion.section>
    );
};

const Section2 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white '
        >
            <AuroraHero />
        </motion.section>
    );
};