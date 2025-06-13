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
    <div className="relative w-full max-w-7xl mx-auto bg-[#181B1F] flex flex-col items-center justify-center border-t border-[#2B292E]">
      <div className="w-full overflow-hidden px-4 md:px-12 lg:px-24">
        <Marquee className="[--duration:20s] md:[--duration:25s] lg:[--duration:30s]">
          {brands.map((brand) => (
            <div key={brand.name} className="flex-shrink-0 text-center text-[#2B3036] px-8">
              <Image 
                src={brand.link} 
                alt={`${brand.name} logo`} 
                width={100}
                height={100}
                className="w-24 h-24 xl:w-28 xl:h-28 object-contain text-[#2B3036]"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className='flex flex-row w-full justify-between items-center px-4 md:px-12 lg:px-24'>
        <a
            href="https://example.com/case-study-left"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs border border-gray-600 px-3 py-1 rounded-[5px] bg-[#2B3036] hover:bg-white hover:text-black transition"
        >
            CASE STUDY
        </a>
        <a
            href="https://example.com/case-study-right"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs border border-gray-600 px-3 py-1 rounded-[5px] bg-[#2B3036] hover:bg-white hover:text-black transition"
        >
            CASE STUDY
        </a>
      </div>
    </div>
  )
}

export default ClientMarque


