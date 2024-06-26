"use client";
import { TypeAnimation } from "react-type-animation";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import FunFactSummary from "@/components/funFact";
import OurServicesComponent from "@/components/component/services";
import Properties from "@/components/products";
import OurTeamComponent from "@/components/theTeam";
import AgentBanner from "@/components/banner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main
        className="relative flex min-h-[84.7vh] flex-col items-center justify-between px-2 py-5 lg:p-14"
        style={{ background: "url()" }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          src="/assets/bg.mp4"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-start">
          <TypeAnimation
            sequence={[
              "SAHN: Your All-in-One Healthcare Companion",
              1000,
              "SAHN Special Service: Medical Delivery",
              1000,
              "SAHN Special Service: CareGiver Booking",
              1000,
              "SAHN Special Service: Ride Booking",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={Infinity}
            className=" text-[15px] lg:text-lg  font-extrabold text-white mb-2 leading-9 gap-2"
          />
        </div>
        <div className="relative top-[-60px] left-0 flex flex-col items-center justify-start w-full lg:w-[80%] z-10">
          <p className="text-white font-medium text-sm md:text-lg lg:text-lg  text-center lg:text-justify w-full lg:leading-7">
            SNAH is more than just a healthcare app—it&apos;s your personalized
            health hub. Navigating the healthcare landscape can be daunting, but
            SNAH makes it easy. With a comprehensive suite of features, SNAH
            helps you manage your well-being effortlessly, all in one convenient
            place.
          </p>
        </div>
        <div className="absolute right-2 lg:top-20 top-[15%] w-10 h-[160px] flex flex-col gap-2 bg-slate-100 rounded-3xl p-3 justify-evenly z-10">
          <CiPhone className="cursor-pointer transform transition-transform duration-200 hover:scale-150" />
          <AiOutlineMail className="cursor-pointer transform transition-transform duration-200 hover:scale-150" />
          <SiFacebook className="cursor-pointer transform transition-transform duration-200 hover:scale-150" />
          <SiWhatsapp className="cursor-pointer transform transition-transform duration-200 hover:scale-150" />
        </div>
      </main>
      <FunFactSummary />
      <OurServicesComponent />
      <Properties />
      <AgentBanner />
      <OurTeamComponent />
    </div>
  );
}
