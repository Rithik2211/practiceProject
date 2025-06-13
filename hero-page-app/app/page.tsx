'use client';

import ClientMarque from '@/components/pages/ClientMarque';
import TextEditor from '@/components/pages/TextEditor';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="min-h-screen bg-[#181B1F] text-white py-10 font-sans flex flex-col items-center justify-center">

      {/* Hero Text */}
      <div className="mt-20 text-center px-6 md:px-16 lg:px-24">
        <h1 className="text-[60px] md:text-6xl font-bold leading-tight">
          Lorem ipsum <span className="underline decoration-pink-500">dolor sit</span>
          <br /> in tempor
        </h1>
        <p className="mt-4 text-[#CFD3D8]">
          Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod
        </p>
      </div>

      {/* Text Editor */}
      <TextEditor />

      {/* Feature Icons Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-1.6/3 min-w-[300px] pb-[50px] px-6 md:px-16 lg:px-24">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex flex-row items-center justify-center gap-4">
            <Image src={'/sheild.svg'} alt='logo' width={40} height={40}/>
            <div className='flex flex-col items-start justify-center'>
              <h4 className="font-semibold text-[16px]">Lorem ipsum dolor</h4>
              <p className="text-[#858C94] text-[14px]">sit met consectetur</p>
            </div>
          </div>
        ))}
      </div>

      {/* Client Logos Section */}
      <ClientMarque />
    </div>
  );
}
