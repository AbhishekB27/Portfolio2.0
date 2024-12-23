import Head from 'next/head';
import StickyScroll from '@/components/StickyScroll/StickyScroll';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raindrop Animation</title>
        <meta name="description" content="Raindrop animation using GSAP in Next.js with TailwindCSS" />
      </Head>
      <div className='relative'>
        <StickyScroll />

      </div>
    </div>
  );
}
