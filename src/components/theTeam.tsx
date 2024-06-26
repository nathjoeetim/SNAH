"use client";
import program0 from "@/assets/services/care-taker.jpg";
import Image from "next/image";
import TitleComponent from "./title-component";
import executives from "@/assets/executive/exe-1.jpeg";
import { ExecutiveDetails } from "./model-home/executive-model";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";

function OurTeamComponent() {
  return (
    <div className="flex flex-col w-full h-fit py-5">
      <TitleComponent
        text1="Meet Our Team"
        text2="An Ensemble of Exceptional Talent"
      />
      <section className="mb-10">
        <div className="mx-auto gap-5 p-4">
          <div className="grid grid-cols-1 items-center gap-4 lg:gap-14 md:grid-cols-2 lg:grid-cols-3">
            {ExecutiveDetails.map((element, index) => {
              return (
                <div
                  key={index}
                  className="basis-[20%] gap-10 hover:basis-[50%] h-[350px] transition-all duration-500  relative"
                >
                  <Image
                    src={element.user_image}
                    width={280}
                    height={350}
                    alt="icon"
                    className="lg:w-[90%] w-fit items-center mx-auto rounded-lg border block h-[350px]"
                  />
                  <div className="rounded-xl opacity-0 absolute top-0 right-0 bottom-0 left-0 bg-transparent hover:opacity-50 pt-[70%] hover:pt-0 cursor-pointer flex items-center justify-end flex-col text-white transition-all duration-500">
                    <div className="relative flex flex-col justify-center items-center bg-slate-900 h-[40%] lg:w-[90%] w-full rounded-b-xl">
                      <h4 className="text-white font-bold text-lg">
                        {element.user_name}
                      </h4>
                      <span>{element.title} </span>
                    </div>
                    {/* social media  */}
                    <div className="absolute left-2 lg:left-8 lg:top-3 top-2 w-10 h-[160px] flex flex-col gap-2 bg-slate-100 rounded-3xl p-3 justify-evenly z-10">
                      <CiPhone
                        className="cursor-pointer transform transition-transform duration-200 hover:scale-150"
                        color="black"
                      />
                      <AiOutlineMail
                        color="black"
                        className="cursor-pointer transform transition-transform duration-200 hover:scale-150"
                      />
                      <SiFacebook
                        color="black"
                        className="cursor-pointer transform transition-transform duration-200 hover:scale-150"
                      />
                      <SiWhatsapp
                        color="black"
                        className="cursor-pointer transform transition-transform duration-200 hover:scale-150"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurTeamComponent;
