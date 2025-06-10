'use client'

import Image from 'next/image'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'

const PrivacyCoursel = () => {
  const courselData = [
    { icon: '/coursel/ai.svg', tag: "Skiff Team", title: "Lorem ipsum odor amet", desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Id condimentum penatibus dui pulvinar morbi." },
    { icon: '/coursel/mobile.svg', tag: "Guy Serfaty", title: "Lorem ipsum odor amet", desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Id condimentum penatibus dui pulvinar morbi." },
    { icon: '/coursel/tab.svg', tag: "Richard Liu", title: "Arcu id ipsum imperdiet, amet rutrum at.", desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Id condimentum penatibus dui pulvinar morbi." },
    { icon: '/coursel/mobile.svg', tag: "Gilbert Zhang", title: "Lorem ipsum odor amet", desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Id condimentum penatibus dui pulvinar morbi." },
    { icon: '/coursel/mobile.svg', tag: "Guy Serfaty", title: "Lorem ipsum odor amet", desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Id condimentum penatibus dui pulvinar morbi." },
  ]

  return (
    <section className="px-4 py-16 mb-[45px]">
      <div className="mx-auto max-w-7xl">

        <Carousel className="w-full"> 

            <div className='flex flex-row justify-between items-center mb-6'>
                <h2 className="text-4xl font-extralight text-start">Get the latest in Privacy</h2>
                <div className="flex gap-2">
                    <CarouselPrevious className="static translate-y-0 left-auto size-10" />
                    <CarouselNext className="static translate-y-0 right-auto size-10" />
                </div>
            </div>      
            

          <CarouselContent className="-ml-4">
            {courselData.map((device, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="items-start">
                  <div className="bg-[#EFEFEF] rounded-sm mb-6 h-48 flex items-start justify-center">
                    <Image
                      src={device.icon}
                      alt="brand"
                      width={100}
                      height={100}
                      className="w-full object-contain"
                    />
                  </div>
                  <button className="rounded bg-gray-100 p-[2px] text-sm font-light uppercase tracking-wide mb-4 text-[#696969] transition w-fit border border-gray-200 shadow-sm">
                    {device.tag}
                    </button>
                  <p className="text-[#000000] text-lg font-light">{device.title}</p>
                  <p className="text-md text-[#707070] mt-2">{device.desc}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </div>
    </section>
  )
}

export default PrivacyCoursel
