import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import AnimatedButton from './AnimatedButton'

const CTASection = () => {
    return (
        <>
            <section className='w-full relative overflow-visible'>

                {/* Green gradient - responsive positioning */}
                <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 md:-top-14 md:-left-24 lg:-top-14 lg:-left-32 z-3">
                    <Image
                        src="/cta/green.svg"
                        alt="CTA"
                        width={200}
                        height={200}
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72"
                    />
                </div>

                {/* Blue gradient - responsive positioning */}
                <div className="absolute bottom-12 -right-12 sm:bottom-16 sm:-right-16 md:bottom-20 md:-right-24 lg:bottom-20 lg:-right-32 z-1">
                    <Image
                        src="/cta/blue.svg"
                        alt="CTA"
                        width={200}
                        height={200}
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72"
                    />
                </div>

                <div className="px-4 py-20 text-center bg-white rounded-sm relative z-2">

                    <div className="relative z-10 max-w-4xl mx-auto py-25">
                        <div className="flex justify-center items-center mb-6">
                            <Image
                                src="/cta/cta.svg"
                                alt="CTA"
                                width={300}
                                height={300}
                            />
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#000000] mb-8 leading-tight">
                            Sodales sapien nullam
                        </h1>

                        <p className="text-lg md:text-xl text-[#707070] max-w-2xl mx-auto leading-relaxed">
                            Tellus vulputate sed elementum lobortis nam mus amet.
                        </p>
                        <p className="text-lg md:text-xl text-[#707070] mb-4 max-w-2xl mx-auto leading-relaxed">
                            Curabitur finibus mus habitasse est porttitor fames.
                        </p>

                        <div className="mb-6">
                        <AnimatedButton />
                        </div>

                        <p className="text-sm text-[#8F8F8F]">
                            Free plan • No card required
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTASection