import Image from 'next/image'
import React from 'react'

const BrandSection = () => {
    const Brands = ["/brand/brand1.svg", "/brand/brand2.svg", "/brand/brand3.svg", "/brand/brand4.svg"]
    return (
        <>
            <section className="px-4 py-16">
                <h2 className="text-4xl font-extralight mb-8">Lorem Ipsum</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Brands.map((brand, idx) => (
                        <div
                            key={idx}
                            className="group transition duration-300 rounded-sm h-[400px] border p-6 bg-white hover:bg-gray-900 hover:text-white shadow-sm flex flex-col justify-between"
                        >
                            <div className='flex flex-col'>
                            <Image
                                src={brand}
                                alt="brand"
                                width={100}
                                height={100}
                                className="w-full"
                                />
                            <h3 className="mb-2 text-lg font-light">
                                {idx < 2
                                    ? "At pulvinar pulvinar mi dui efficitur?"
                                    : "Sodales sapien nullam duis aenean; erat eget amet."}
                            </h3>
                            <p className="text-sm text-[#8F8F8F] group-hover:text-gray-300">
                                {idx === 0
                                    ? "Mollis varius ullamcorper rutrum enim, netus nisi. Nibh magna curabitur vestibulum himenaeos eget sollicitudin consectetur velit."
                                    : idx === 1
                                        ? "Bibendum lobortis phasellus ornare enim, netus eu platea nibh. Faucibus nam sit sapien feugiat molestie scelerisque."
                                        : "Tellus vulputate sed elementum lobortis nam mus amet. Curabitur finibus mus habitasse est porttitor fames."}
                            </p>
                            </div>
                            
                            <div className='flex flex-col'>
                                <hr className="my-4 border-gray-200 group-hover:border-gray-700" />
                                <button className="px-3 py-1 rounded bg-gray-100 text-xs text-[#696969] group-hover:bg-gray-800 group-hover:text-white transition w-fit border border-gray-200 group-hover:border-none">
                                    LOREM IPSUM
                                </button>
                            </div>    
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default BrandSection