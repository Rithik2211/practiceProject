'use client'
import Image from 'next/image';
import React from 'react'
import { useState } from "react"
import { MenuIcon, XIcon } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';

const NavigationBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const productItems = [
        {
            title: "App Builder",
            href: "/nav/appbuild.svg",
        },
        {
            title: "Workflows",
            href: "/nav/workflow.svg",
        },
        {
            title: "Database",
            href: "/nav/db.svg",
        },
    ]

    const blogItems = [
        {
            title: "Blogs",
            href: "/nav/blog.svg",
        },
    ]

    const resourceItems = [
        {
            title: "Templates",
            href: "/nav/appbuild.svg",
        },
        {
            title: "Blogs",
            href: "/nav/blog.svg",
        },
    ]

    return (
        <div className="w-full fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-[#2B292E]">
            <div className="w-full h-[55px] flex justify-between items-center text-white px-6 md:px-16 lg:px-24">
                <div className='flex flex-row gap-12 items-center justify-center'>
                    <div className="flex items-center pb-[4px]">
                        <Image src={'/logo.svg'} alt='logo' width={120} height={120} />
                    </div>
                     
                    <div className="hidden lg:flex items-center space-x-8">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList className="space-x-2 bg-transparent text-white">

                                {/* Platform Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="!bg-transparent !text-white hover:!bg-[#181B1F] focus:!bg-[#181B1F] active:!bg-[#181B1F] font-medium px-3 py-1 rounded-md text-sm">
                                        Platform
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!bg-[#181B1F] !text-white border-0">
                                        <div className="w-[130px]">
                                            <div className="flex flex-col gap-2 items-start justify-center">
                                                {productItems.map((item) => (
                                                    <NavigationMenuLink key={item.title} asChild>
                                                        <div className="flex flex-row gap-2">
                                                            <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                                            <div className="font-medium mb-1">
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Product Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="!bg-transparent !text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent font-medium px-3 py-1 rounded-md text-sm">
                                        Product
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!bg-[#181B1F] !text-white border-0">
                                        <div className="w-[130px]">
                                            <div className="flex flex-col gap-2 items-start justify-center">
                                                {productItems.map((item) => (
                                                    <NavigationMenuLink key={item.title} asChild>
                                                        <div className="flex flex-row gap-2">
                                                            <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                                            <div className="font-medium mb-1">
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Pricing Link */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/"
                                            className="!bg-transparent !text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent font-medium px-3 py-1 rounded-md text-sm"
                                        >
                                            Pricing
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* Company Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="!bg-transparent !text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent font-medium px-3 py-1 rounded-md text-sm">
                                        Company
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!bg-[#181B1F] !text-white border-0">
                                        <div className="w-[130px] p-1">
                                            <div className="flex flex-col gap-2 items-start justify-center">
                                                {blogItems.map((item) => (
                                                    <NavigationMenuLink key={item.title} asChild>
                                                        <div className="flex flex-row gap-2">
                                                            <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                                            <div className="font-medium mb-1">
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Resources Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="!bg-transparent !text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent font-medium px-3 py-1 rounded-md text-sm">
                                        Resources
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!bg-[#181B1F] !text-white border-0">
                                        <div className="w-[130px] p-1">
                                            <div className="flex flex-col gap-2 items-start justify-center">
                                                {resourceItems.map((item) => (
                                                    <NavigationMenuLink key={item.title} asChild>
                                                        <div className="flex flex-row gap-2">
                                                            <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                                            <div className="font-medium mb-1">
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>

                        </NavigationMenu>
                    </div>
                </div>

                <div className="hidden xl:flex space-x-8 items-center">
                    <button className="text-white text-sm">Login</button>
                    <button className="bg-[#1E2226] text-white px-4 py-1 rounded-md text-[14px] hover:bg-gray-800 transition border-1 border-[#4A6DD966] flex flex-row gap-2">
                        Try for free <Image src={'/arrowupright.svg'} alt='btn logo' width={20} height={20} />
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="xl:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white p-2 rounded-md transition-colors duration-200"
                    >
                        {isMobileMenuOpen ? (
                            <XIcon className="h-6 w-6" />
                        ) : (
                            <MenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="xl:hidden bg-[#181B1F] border-t border-[#2B292E] text-white max-h-[calc(100vh-55px)] overflow-y-auto">
                    <div className="space-y-4 px-6 md:px-16 lg:px-24 py-4">
                        {/* Mobile Platform Section */}
                        <div>
                            <h3 className="font-semibold text-white mb-2">Platform</h3>
                            <div className="space-y-1 pl-4">
                                {productItems.map((item, index) => (
                                    <div key={index} className="flex flex-row gap-2 cursor-pointer hover:bg-[#2B292E] p-2 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                        <div className="font-medium">
                                            {item.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Product Section */}
                        <div>
                            <h3 className="font-semibold text-white mb-2">Product</h3>
                            <div className="space-y-1 pl-4">
                                {productItems.map((item, index) => (
                                    <div key={index} className="flex flex-row gap-2 cursor-pointer hover:bg-[#2B292E] p-2 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                        <div className="font-medium">
                                            {item.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Pricing */}
                        <Link
                            href="/"
                            className="block py-2 text-white rounded-md font-medium hover:bg-[#2B292E] transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>

                        {/* Mobile Company Section */}
                        <div>
                            <h3 className="font-semibold text-white mb-2">Company</h3>
                            <div className="space-y-1 pl-4">
                                {blogItems.map((item, index) => (
                                    <div key={index} className="flex flex-row gap-2 cursor-pointer hover:bg-[#2B292E] p-2 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                        <div className="font-medium">
                                            {item.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Resources Section */}
                        <div>
                            <h3 className="font-semibold text-white mb-2">Resources</h3>
                            <div className="space-y-1 pl-4">
                                {resourceItems.map((item, index) => (
                                    <div key={index} className="flex flex-row gap-2 cursor-pointer hover:bg-[#2B292E] p-2 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                        <div className="font-medium">
                                            {item.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Auth Buttons */}
                        <div className="pt-4 border-t border-[#2B292E] space-y-2">
                            <Link
                                href="/"
                                className="block w-full text-center px-4 py-2 text-white font-medium border border-[#2B292E] rounded-lg hover:bg-[#2B292E] transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                href="/"
                                className="block w-full text-center px-4 py-2 text-white font-medium bg-[#1E2226] rounded-lg hover:bg-gray-800 transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Try for free
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavigationBar;