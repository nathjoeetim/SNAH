"use client";
import watchImage from "@/assets/services/watch_img.png";
import Image from "next/image";
import TitleComponent from "./title-component";
import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";

function DevicesDetails() {
  return (
    <div className="font-semibold text-white bg-custom-gradient p-5 lg:p-10  gap-10 mt-[50px]">
      <TitleComponent
        text1="Our Smart Device"
        text2="Know about our SNAH watch"
      />
      <div className="flex lg:flex-rol flex-col gap-3 my-10">
        <span className="font-bold text-[30px] lg:text-[40px] text-white">
          SNAH Smartwatch
        </span>
        <span className="text-justify font-normal">
          <h2 className="text-[20px] mb-7 font-extrabold leading-6">
            Experience Seamless Health Tracking with SNAH
          </h2>
          Discover the ultimate synergy between the SNAH smartwatch and the SNAH
          app, designed to elevate your health management experience. With the
          SNAH smartwatch, you can effortlessly monitor your vital health
          metrics directly from your wrist. Every heartbeat, step, and calorie
          burned is meticulously tracked and instantly synced with the SNAH app,
          ensuring your health data is always up-to-date. The automatic
          synchronization feature allows your health data to flow seamlessly
          into the app, providing comprehensive analysis and secure storage.
          Whether you&apos;re monitoring your heart rate during a workout or
          tracking your sleep patterns, the SNAH ecosystem keeps you informed
          and in control.
          <br />
          <br /> Stay connected, stay informed, and stay healthy with SNAH—your
          all-in-one health companion.
        </span>
      </div>
      <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row  gap-10 ">
        <Image
          src={watchImage.src}
          alt="watch"
          width={350}
          height={200}
          className="rounded-2xl mx-auto my-11 sm:rotate-0 lg:rotate-45 md:rotate-45  items-center flex flex-col justify-center lg:ml-[35px] w-[200px] flex-1 lg:w-fit"
        />
        <div className="flex flex-col lg:items-end items-startlg:mb-0 mb-20 justify-start w-full gap-6">
          <span className="font-bold text-[20px] lg:text-[30px] text-white  underline ">
            Comprehensive Health Tracking with SNAH
          </span>
          <p className="font-light w-full lg:w-[620px] text-center">
            The SNAH smartwatch seamlessly integrates with the SNAH app to
            provide a holistic view of your health. Here are the key health
            metrics that the SNAH smartwatch tracks and syncs effortlessly with
            the SNAH app for in-depth analysis and secure storage:
          </p>
          <ul className="w-full lg:w-[620px] flex flex-col gap-5 font-light ">
            <li className="custom-dot">
              <strong className="font-extrabold">Heart Rate Monitoring:</strong>{" "}
              Keep a close eye on your heart rate in real-time, whether
              you&apos;re at rest or pushing your limits during exercise.
            </li>
            <li className="custom-dot">
              <strong className="font-extrabold">Step Count:</strong>Track your
              daily steps and stay motivated to reach your fitness goals.
            </li>
            <li className="custom-dot">
              <strong className="font-extrabold">
                Blood Oxygen Levels (SpO2):
              </strong>{" "}
              Measure your blood oxygen saturation for insights into your
              respiratory health.
            </li>
            <li className="custom-dot">
              <strong className="font-extrabold">ECG Monitoring:</strong>Perform
              electrocardiogram tests to monitor heart health and detect
              irregularities.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-rol w-full h-[50px] mt-[40px] items-center justify-center">
        <Button className="bg-btn-color text-white flex flex-row gap-1 rounded-xl hover:gap-4 transition-all text-xs font-semibold uppercase font-custom w-fit">
          Learn More <BsArrowRight />
        </Button>
      </div>
      <style jsx>{`
        .custom-dot {
          position: relative;
          padding-left: 1.5rem; /* Adjust as needed for spacing */
        }
        .custom-dot::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) rotate(45deg); /* Rotate square to make diamond */
          width: 0.5rem; /* Adjust width */
          height: 0.5rem; /* Adjust height */
          background-color: blue; /* Adjust color */
        }
      `}</style>
    </div>
  );
}

export default DevicesDetails;

//
//
