'use client'
import AnalyticsSection from "@/components/pages/AnalyticsSection";
import AnimatedButton from "@/components/pages/AnimatedButton";
import AppSection from "@/components/pages/AppSection";
import BrandSection from "@/components/pages/BrandSection";
import CTASection from "@/components/pages/CTASection";
import EventsSection from "@/components/pages/EventsSection";
import NavigationBar from "@/components/pages/NavigationBar";
import PrivacyCoursel from "@/components/pages/PrivacyCoursel";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <div className="min-h-screen bg-gray-100 px-[30px] md:[70px] lg:px-[90px] py-[20px] md:py-[50px] relative">
      <NavigationBar />
      <section className="relative px-4 text-center bg-white rounded-2xl border border-gray-200">
        <div className="mx-auto max-w-5xl py-10 md:py-20 flex flex-col justify-between items-center">
          <h1 className="mb-6 text-4xl font-light text-[#000000] md:text-5xl lg:text-6xl">
            Lorem ipsum <span className="text-[#4368E3]">dolor sit amet</span>,<br />
            <span className="text-[#4368E3]">mollit anim</span> laborum.
          </h1>
          <p className="mb-8 text-[20px] text-[#8F8F8F] max-w-xl mx-auto font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <AnimatedButton />
          <p className="text-sm text-[#8F8F8F] mb-12">
            Free plan • No card required
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center relative">
          <div
            className={`transition-all duration-1000 ease-in-out opacity-100 scale-100 ${hasScrolled
                ? 'transform translate-y-0'
                : 'transform -translate-y-20'
              }`}
            style={{ zIndex: 1 }}
          >
            <Image
              src="/hero/hero1.svg"
              alt="Hero Image"
              width={0}
              height={0}
              className="w-[200px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
            />
          </div>

          <div
            className={`transition-all duration-1000 ease-in-out delay-200 opacity-100 scale-100 ${hasScrolled
                ? 'transform translate-y-0 -mt-[100px] sm:-mt-[200px] md:-mt-[250px]'
                : 'transform translate-y-40 -mt-[360px] sm:-mt-[450px] md:-mt-[600px]'
              }`}
            style={{ zIndex: 2 }}
          >
            <Image
              src="/hero/hero2.svg"
              alt="Hero Image"
              width={0}
              height={0}
              className="w-[250px] sm:w-[500px] md:w-[650px] lg:w-[800px]"
            />
          </div>

          <div
            className={`transition-all duration-1000 ease-in-out delay-400 opacity-100 scale-100 ${hasScrolled
                ? 'transform translate-y-0 -mt-[140px] sm:-mt-[280px] md:-mt-[330px]'
                : 'transform -translate-y-20 mt-[100px] sm:-mt-[230px] md:-mt-[250px]'
              }`}
            style={{ zIndex: 3 }}
          >
            <Image
              src="/hero/hero3.svg"
              alt="Hero Image"
              width={0}
              height={0}
              className="w-[450px] sm:w-[600px] md:w-[800px] lg:w-[1000px]"
            />
          </div>
        </div>

      </section>

      {/* Events and calenders */}
      <EventsSection />

      {/* Analytics section */}
      <AnalyticsSection />

      {/* App Integration Section */}
      <AppSection />

      {/* Brand Section */}
      <BrandSection />

      {/* Privacy Coursel */}
      <PrivacyCoursel />

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}
