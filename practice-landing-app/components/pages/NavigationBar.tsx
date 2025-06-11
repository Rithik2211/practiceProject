"use client"

import * as React from "react"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Button } from "../ui/button"

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

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
        <div className="absolute top-2 md:top-8 left-1/2 transform -translate-x-1/2 z-100 w-full max-w-[55%]">
            <nav className="bg-black/90 backdrop-blur-lg text-white rounded-xl border border-gray-800/50 shadow-2xl">
                    <div className="flex justify-between items-center h-11 px-1">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                        <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                        </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <NavigationMenu viewport={false}>
                        <NavigationMenuList className="space-x-2 bg-black text-white">
                            {/* Product Dropdown */}
                            <NavigationMenuItem>
                            <NavigationMenuTrigger className="!bg-black !text-white hover:!bg-black focus:!bg-black active:!bg-black font-medium px-3 py-1 rounded-md text-sm">
                                Product
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="!bg-black !text-white border-0">
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
                                className="!bg-black !text-white hover:!bg-black focus:!bg-black active:!bg-black font-medium px-3 py-1 rounded-md text-sm"
                                >
                                Pricing
                                </Link>
                            </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Blog Dropdown */}
                            <NavigationMenuItem>
                            <NavigationMenuTrigger className="!bg-black !text-white hover:!bg-black focus:!bg-black active:!bg-black font-medium px-3 py-1 rounded-md text-sm">
                                Blog
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="!bg-black !text-white border-0">
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
                            <NavigationMenuTrigger className="!bg-black !text-white hover:!bg-black focus:!bg-black active:!bg-black font-medium px-3 py-1 rounded-md text-sm">
                                Resources
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="!bg-black !text-white border-0">
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

                            {/* Download Link */}
                            <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link 
                                href="/"
                                className="!bg-black !text-white hover:!bg-black focus:!bg-black active:!bg-black font-medium px-3 py-1 rounded-md text-sm"
                                >
                                Download
                                </Link>
                            </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        
                        </NavigationMenu>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden xl:flex items-center space-x-4">
                        <Link 
                        href="/"
                        className="text-white font-medium px-3 py-1 text-sm"
                        >
                        Sign in
                        </Link>
                        <Button className="!bg-white !text-black hover:!bg-white focus:!bg-white active:!bg-white font-medium px-3 py-1 rounded-md text-sm">
                            Start for free
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="xl:hidden">
                        <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white  p-2 rounded-md transition-colors duration-200"
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
                    <div className="xl:hidden border-t border-gray-200 py-4 text-white">
                        <div className="space-y-4">
                        {/* Mobile Product Section */}
                        <div>
                            <h3 className="font-semibold text-white mb-2 px-3">Product</h3>
                            <div className="space-y-1 pl-4">
                            {productItems.map((item, index) => (
                                <div key={index} className="flex flex-row gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                    <div className="font-medium mb-1">
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        {/* Mobile Pricing */}
                        <Link
                            href="/"
                            className="block px-3 py-2 text-white rounded-md font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>

                        {/* Mobile Blog Section */}
                        <div>
                            <h3 className="font-semibold text-white mb-2 px-3">Blog</h3>
                            <div className="space-y-1 pl-4">
                            {blogItems.map((item, index) => (
                                <div key={index} className="flex flex-row gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                    <div className="font-medium mb-1">
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        {/* Mobile Resources Section */}
                        <div>
                            <h3 className="font-semibold text-white mb-2 px-3">Resources</h3>
                            <div className="space-y-1 pl-4">
                            {resourceItems.map((item, index) => (
                                <div key={index} className="flex flex-row gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Image src={item.href} alt="Arrow Right" width={20} height={20} />
                                    <div className="font-medium mb-1">
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        {/* Mobile Download */}
                        <Link
                            href="/"
                            className="block px-3 py-2 text-white rounded-md font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Download
                        </Link>

                        {/* Mobile Auth Buttons */}
                        <div className="pt-4 border-t border-gray-200 space-y-2 px-4">
                            <Link
                            href="/"
                            className="block w-full text-center px-4 py-2 text-white font-medium border border-gray-300 rounded-lg transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                            >
                            Sign in
                            </Link>
                            <Link
                            href="/"
                            className="block w-full text-center px-4 py-2 text-white font-medium rounded-lg transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                            >
                            Start for free
                            </Link>
                        </div>
                        </div>
                    </div>
                    )}
            </nav>
        </div>
    </>
  )
}

export default NavigationBar;