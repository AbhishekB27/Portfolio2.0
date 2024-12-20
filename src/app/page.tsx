import Head from 'next/head';
import RainCanvas from '@/components/RainCanvas/RainCanvas';
import HeroSection from '@/components/HeroSection/HeroSection';
import { AuroraHero } from '@/components/AuraHero/AuraHero';
import StickyScroll from '@/components/StickyScroll/StickyScroll';

export default function Home() {
  return (
    <>
      <Head>
        <title>Raindrop Animation</title>
        <meta name="description" content="Raindrop animation using GSAP in Next.js with TailwindCSS" />
      </Head>
      <StickyScroll />

      {/* <AuroraHero /> */}
    </>
  );
}
