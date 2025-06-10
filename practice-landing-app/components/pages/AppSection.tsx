import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AppSection = () => {
  return (
   <>
   <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl p-12 shadow border border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-12">
              Egestas viverra senectus?
            </h2>
            <p className="text-[#707070] font-light text-base mb-4 max-w-lg">
              Sodales sapien nullam duis aenean; erat eget amet. Tellus vulputate sed elementum lobortis nam mus amet.
            </p>
            <a
              href="#"
              className="text-[#4368E3] font-medium flex items-center gap-1"
            >
              Claim credits <ArrowRight className="w-4 h-4 text-[#4368E3]" />
            </a>
          </div>

          <div className="hidden xl:block xl:absolute xl:right-3 xl:bottom-0 xl:w-2/4">
                <Image
                  src="/analytic/mobile.svg"
                  alt="Overview"
                  width={500}
                  height={208}
                  className="w-full object-cover"
                />
              </div>
        </div>
      </section>
   </>
  )
}

export default AppSection