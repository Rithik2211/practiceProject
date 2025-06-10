import BrandSection from "@/components/pages/BrandSection";
import NavigationBar from "@/components/pages/NavigationBar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-[30px] md:[70px] lg:px-[90px] py-[20px] md:py-[50px]">
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
          <Button className="bg-black hover:bg-gray-800 text-white px-10 py-3 rounded-xl">Start free trial <ArrowRight className="w-4 h-4" /></Button>
          <div className="flex flex-row justify-center items-center gap-2 mt-4">
            <span className="text-sm text-[#8F8F8F] font-light pb-10 align-text-bottom">Free plan</span>
            <span className="text-sm bg-[#8F8F8F] font-light pb-10 align-text-bottom rounded-full w-0.5"></span>
            <span className="text-sm text-[#8F8F8F] font-light pb-10 align-text-bottom">No card required</span>
          </div>
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
      <section className="px-4 py-16 bg-white rounded-lg border border-gray-200">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Top Card */}
          <div className="bg-white shadow rounded-xl p-6 border border-gray-100 relative overflow-hidden min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px]">
            <div className="absolute top-4 right-4">
              <div className="p-2 rounded-full border border-gray-200">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
              <div className="space-y-2 flex-1 max-w-md">
                <div className="w-8 h-5 bg-[#BBE2F5] rounded-sm shadow-sm" />
                <h2 className="font-semibold text-gray-900">Duis aute irure dolor in reprehenderit</h2>
                <p className="text-sm text-[#AFAFAF]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 md:left-1/3 w-9/10 md:w-2/4 lg:w-3/5">
              <Image
                src="/analytic/analytic1.svg"
                alt="Overview"
                width={500}
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
                <div className="p-2 rounded-full border border-gray-200">
                  <ArrowUpRight className="w-4 h-4" />
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
                <div className="p-2 rounded-full border border-gray-200">
                  <ArrowUpRight className="w-4 h-4" />
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

      {/* App Integration Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl p-12 shadow border border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-12">
              Egestas viverra senectus?
            </h2>
            <p className="text-[#707070] font-light text-base mb-4 max-w-lg">
              Sodales sapien nullam duis aenean; erat eget amet. Tellus vulputate sed elementum lobortis nam mus amet.
            </p>
            <a
              href="#"
              className="text-[#4368E3] font-medium flex items-center gap-1"
            >
              Claim credits <ArrowRight className="w-4 h-4 text-[#4368E3]" />
            </a>
          </div>

          <div className="hidden xl:block xl:absolute xl:right-3 xl:bottom-0 xl:w-2/4">
                <Image
                  src="/analytic/mobile.svg"
                  alt="Overview"
                  width={500}
                  height={208}
                  className="w-full object-cover"
                />
              </div>
        </div>
      </section>

      {/* Brand Section */}
      <BrandSection />
    </div>
  );
}
