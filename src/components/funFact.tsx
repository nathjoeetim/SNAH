"use client";

import { Card } from "./ui/card";

function FunFactSummary() {
  return (
    <Card className="bg-slate-950 mt-[-50px] lg:mt-[-70px] z-30 h-fit mx-auto lg:w-[90%] lg:p-14 p-3 w-[95%] shadow-lg">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex flex-col gap-3 flex-1 sm::text-center">
          <h5 className="text-white font-extrabold text-4xl">Our user base</h5>
          <p className="flex flex-col lg:w-full w-fit text-justify text-slate-500">
            Our diverse and growing user base includes individuals from all
            walks of life committed to efficient health management. From young
            professionals to retirees, everyone finds value in SNAH&apos;s
            comprehensive features. Join our community and take control of your
            health journey with ease.
          </p>
        </div>
        <div className="flex flex-col lg:items-end items-start justify-start lg:justify-end lg:flex-1 w-full">
          <div className="flex sm:flex-col md:flex-row lg:flex-row gap-2 mb-5 ">
            <div className="flex flex-row gap-1 w-[150px]">
              <h2 className="text-white font-extrabold text-[30px] w-[60px]">
                10k
              </h2>
              <div className="flex flex-col items-start justify-center gap-0">
                <span className="text-blue-500 font-bold">+</span>
                <h3 className="text-white font-medium text-[12px]">
                  Total User
                </h3>
              </div>
            </div>
            <div className="flex flex-row gap-2  w-[145px]">
              <h2 className="text-white font-extrabold text-[30px] w-[55px]">
                12k
              </h2>
              <div className="flex flex-col items-start justify-center gap-0">
                <span className="text-blue-500 font-bold">+</span>
                <h3 className="text-white font-medium text-[13px]">
                  Total Ride
                </h3>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col md:flex-row gap-3 items-center lg:flex-row">
            <div className="flex flex-row gap-2 w-[140px] ">
              <h2 className="text-white font-extrabold text-[30px] w-[35px]">
                1k
              </h2>
              <div className="flex flex-col items-start justify-center gap-0">
                <span className="text-blue-500 font-bold">+</span>
                <h3 className="text-white font-medium text-[13px]">
                  Total Facility
                </h3>
              </div>
            </div>
            <div className="flex flex-row gap-2  w-[140px]">
              <h2 className="text-white font-extrabold text-[30px] w-[35px]">
                5k
              </h2>
              <div className="flex flex-col items-start justify-center gap-0">
                <span className="text-blue-500 font-bold">+</span>
                <h3 className="text-white font-medium text-[13px]">
                  Total Caregiver
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FunFactSummary;
