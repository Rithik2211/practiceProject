import AnalyticsSection from "@/components/pages/AnalyticsSection";
import AppSection from "@/components/pages/AppSection";
import BrandSection from "@/components/pages/BrandSection";
import CTASection from "@/components/pages/CTASection";
import NavigationBar from "@/components/pages/NavigationBar";
import PrivacyCoursel from "@/components/pages/PrivacyCoursel";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
          <Button className="bg-black hover:bg-gray-800 text-white px-10 py-3 mb-4 rounded-xl">Start free trial <ArrowRight className="w-4 h-4" /></Button>
          <p className="text-sm text-[#8F8F8F] mb-12">
              Free plan • No card required
          </p>
          <Image src="/heroImg.svg" alt="Hero Image" width={1000} height={1000} />
        </div>
      </section>

      {/* Events and calenders */}
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

      {/* Blue gradient */}
      <div className="absolute bottom-0 right-0 z-[-10]">
          <Image
              src="/cta/blue.svg"
              alt="CTA"
              width={200}
              height={200}
          />
      </div>
    </div>
  );
}
