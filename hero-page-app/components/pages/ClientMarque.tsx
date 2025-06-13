import Image from 'next/image'
import React from 'react'
import { Marquee } from "@/components/magicui/marquee";

const ClientMarque = () => {
  const brands = [
    { name: 'Grapho', link: '/marque/grapho.svg' },
    { name: 'Emblem', link: '/marque/emblem.svg' },
    { name: 'Dexign', link: '/marque/dexign.svg' },
    { name: 'Signum', link: '/marque/signum.svg' },
    { name: 'Logique', link: '/marque/logique.svg' },
    { name: 'Iconize', link: '/marque/iconize.svg' },
    { name: 'Wayline', link: '/marque/wayline.svg' },
    { name: 'Signet', link: '/marque/signet.svg' },
    { name: 'Grapherz', link: '/marque/grapherz.svg' },
    { name: 'Artistry', link: '/marque/artistry.svg' },
    { name: 'Prelude', link: '/marque/prelude.svg' },
    { name: 'Iconiz', link: '/marque/iconix.svg' },
    { name: 'Vectra', link: '/marque/vectra.svg' },
    { name: 'Visually', link: '/marque/visualy.svg' },
    { name: 'Optimal', link: '/marque/optimal.svg' },
    { name: 'Imprintify', link: '/marque/imprintify.svg' },
  ]

  return (
    <div className="relative flex w-full bg-[#181B1F] flex-col items-center justify-center overflow-hidden border-t-1 py-8 border-[#2B292E]">
      <Marquee className="[--duration:20s]">
        {brands.map((brand) => (
            <div key={brand.name} className="text-center text-[#2B3036] px-8">
                <Image src={brand.link} alt='logo' width={120} height={120} className='text-[#2B3036]'/>
            </div>
        ))}
      </Marquee>
      <div className='flex flex-row justify-between items-center pt-3'>
        <a
            href="https://example.com/case-study-left"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-4 bottom-4 text-xs border border-gray-600 px-3 py-1 rounded-[5px] bg-[#2B3036] hover:bg-white hover:text-black transition"
        >
            CASE STUDY
        </a>
        <a
            href="https://example.com/case-study-right"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 bottom-4 text-xs border border-gray-600 px-3 py-1 rounded-[5px] bg-[#2B3036] hover:bg-white hover:text-black transition"
        >
            CASE STUDY
        </a>
      </div>
    </div>
  )
}

export default ClientMarque


