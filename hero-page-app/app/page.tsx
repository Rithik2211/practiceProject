'use client';

import ClientMarque from '@/components/pages/ClientMarque';
import TextEditor from '@/components/pages/TextEditor';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="min-h-screen bg-[#181B1F] text-white py-10 font-sans flex flex-col items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <div className="relative w-full h-full max-w-8xl mx-auto">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute top-[55px] bottom-0 w-px opacity-20"
              style={{
                left: `${(i + 1) * (100 / 9)}%`,
                background: i % 2 === 0 
                  ? '#4A5568'
                  : 'transparent',
                backgroundImage: i % 2 !== 0 
                  ? 'repeating-linear-gradient(to bottom, #4A5568 0px, #4A5568 8px, transparent 8px, transparent 16px)'
                  : 'none'
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] opacity-8 pointer-events-none "
        style={{
          background: 'radial-gradient(ellipse 1000px 500px at center, #FF7750 40%, #4B2494 40%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      ></div>

      {/* Hero Text */}
      <div className="mt-20 text-center px-6 md:px-16 lg:px-24 relative z-20">
        <h1 className="text-[48px] md:text-6xl font-bold leading-tight">
          Lorem ipsum{" "}
          <span className="relative inline-block">
            <span className="relative z-10">dolor sit</span>
            <span
              className="absolute left-0 -bottom-2 w-full h-4 z-0 bg-no-repeat bg-contain bg-left"
              style={{ backgroundImage: 'url(/style.svg)' }}
            ></span>
          </span>
          <br /> in tempor
        </h1>
        <p className="mt-4 text-[#CFD3D8]">
          Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod
        </p>
      </div>

      {/* Text Editor */}
      <TextEditor />

      {/* Feature Icons Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-1.6/3 min-w-[300px] pb-[50px] px-6 md:px-16 lg:px-24 relative z-20">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex flex-row items-center justify-center gap-4">
            <Image src={'/sheild.svg'} alt='logo' width={40} height={40} />
            <div className='flex flex-col items-start justify-center'>
              <h4 className="font-semibold text-[16px]">Lorem ipsum dolor</h4>
              <p className="text-[#858C94] text-[14px]">sit met consectetur</p>
            </div>
          </div>
        ))}
      </div>

      {/* Client Logos Section */}
      <div className="relative z-20">
        <ClientMarque />
      </div>
    </div>
  );
}
