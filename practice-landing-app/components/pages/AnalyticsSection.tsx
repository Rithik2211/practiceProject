import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AnalyticsSection = () => {
    return (
        <>
            <section className="px-4 py-16 bg-white rounded-lg border border-gray-200">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Top Card */}
                    <div className="bg-white shadow rounded-xl border border-gray-100 relative overflow-hidden min-h-[330px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] flex flex-col justify-between">
                        <div className="absolute top-4 right-4 z-2">
                            <div className="p-2 rounded-full border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:border-black group">
                                <ArrowUpRight className="w-4 h-4 text-gray-600 transition-all duration-300 ease-in-out group-hover:text-white group-hover:rotate-45" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start relative z-1 p-6">
                            <div className="space-y-2 flex-1 max-w-md">
                                <div className="w-8 h-5 bg-[#BBE2F5] rounded-sm shadow-sm" />
                                <h2 className="font-semibold text-gray-900">Duis aute irure dolor in reprehenderit</h2>
                                <p className="text-sm text-[#AFAFAF]">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-center">
                            <Image
                                src="/analytic/analytic1.svg"
                                alt="Overview"
                                width={300}
                                height={208}
                                className="rounded-b-xl w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Bottom Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Analytics Card 1 */}
                        <div className="bg-white shadow rounded-xl p-6 border border-gray-100 relative overflow-hidden min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px]">
                            <div className="absolute top-4 right-4">
                                <div className="p-2 rounded-full border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:border-black group">
                                    <ArrowUpRight className="w-4 h-4 text-gray-600 transition-all duration-300 ease-in-out group-hover:text-white group-hover:rotate-45" />
                                </div>
                            </div>
                            <div className="space-y-2 pr-4 pb-28">
                                <div className="w-8 h-5 bg-[#BBE2F5] rounded-sm shadow-md" />
                                <h2 className="font-semibold text-gray-900">Duis aute irure dolor in reprehenderit</h2>
                                <p className="text-sm text-[#AFAFAF]">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            {/* <div className="h-15 md:h-30 lg:h-40 xl:h-50"></div> */}
                            <div className="absolute bottom-0 right-0 w-9/10">
                                <Image
                                    src="/analytic/analytic2.svg"
                                    alt="Overview"
                                    width={500}
                                    height={208}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Analytics Card 2 */}
                        <div className="bg-white shadow rounded-xl p-6 border border-gray-100 relative overflow-hidden min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px]">
                            <div className="absolute top-4 right-4">
                            <div className="p-2 rounded-full border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:border-black group">
                                <ArrowUpRight className="w-4 h-4 text-gray-600 transition-all duration-300 ease-in-out group-hover:text-white group-hover:rotate-45" />
                            </div>
                            </div>
                            <div className="space-y-2 pr-4 pb-28">
                                <div className="w-8 h-5 bg-[#BBE2F5] rounded-sm shadow-md" />
                                <h2 className="font-semibold text-gray-900">Duis aute irure dolor in reprehenderit</h2>
                                <p className="text-sm text-[#AFAFAF]">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            {/* <div className="h-15 md:h-30 lg:h-40 xl:h-50"></div> */}
                            <div className="absolute bottom-0 right-0 w-9/10">
                                <Image
                                    src="/analytic/analytic3.svg"
                                    alt="Overview"
                                    width={500}
                                    height={208}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AnalyticsSection