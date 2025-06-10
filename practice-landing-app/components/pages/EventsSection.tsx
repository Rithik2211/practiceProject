import Image from 'next/image'
import React from 'react'

const EventsSection = () => {
    return (
        <>
            <section className="px-4 py-16">
                <div className="mx-auto w-full">
                    <div className="flex flex-row flex-wrap max-w-6xl mb-8">
                        <h2 className="text-[50px] font-light text-[#000000] pr-6">Excepteur sint occaecat dolore</h2>
                        <div className="text-[#0B79AF] flex flex-row pr-6 text-[50px] font-light gap-2">
                            <Image src={'/event/mail.svg'} width={40} height={40} alt="mail" />
                            Email
                        </div>
                        <div className="text-[#AF5883] flex flex-row pr-6 text-[50px] font-light gap-2">
                            <Image src={'/event/event.svg'} width={40} height={40} alt="mail" />
                            Events
                        </div>
                        <div className="text-[#00A05E] flex flex-row pr-6 text-[50px] font-light gap-2">
                            <Image src={'/event/file.svg'} width={40} height={40} alt="mail" />
                            Files
                        </div>
                        <div className="text-[#4368E3] flex flex-row pr-6 text-[50px] font-light gap-2">
                            <Image src={'/event/document.svg'} width={40} height={40} alt="mail" />
                            Documents
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item}>
                                <h2 className="font-semibold text-[#000000] mb-3">Lorem Ipsum</h2>
                                <p className="text-[#AFAFAF] text-md leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventsSection