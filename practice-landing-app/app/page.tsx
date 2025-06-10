import AnalyticsSection from "@/components/pages/AnalyticsSection";
import AnimatedButton from "@/components/pages/AnimatedButton";
import AppSection from "@/components/pages/AppSection";
import BrandSection from "@/components/pages/BrandSection";
import CTASection from "@/components/pages/CTASection";
import EventsSection from "@/components/pages/EventsSection";
import NavigationBar from "@/components/pages/NavigationBar";
import PrivacyCoursel from "@/components/pages/PrivacyCoursel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-[30px] md:[70px] lg:px-[90px] py-[20px] md:py-[50px] relative">
      <NavigationBar />
      <section className="relative px-4 py-20 text-center bg-white rounded-2xl border border-gray-200">
        <div className="mx-auto max-w-5xl">
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
          <Image src="/heroImg.svg" alt="Hero Image" width={1000} height={1000} />
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
