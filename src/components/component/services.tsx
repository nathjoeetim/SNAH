"use client";
import program0 from "@/assets/services/care-taker.jpg";
import program1 from "@/assets/services/contract.jpg";
import program2 from "@/assets/services/medic.jpg";
import program3 from "@/assets/services/rider.jpg";
import Image from "next/image";
import TitleComponent from "../title-component";

function OurServicesComponent() {
  return (
    <>
      <TitleComponent text1="our Program" text2="what we offer" />
      <main className="my-12 transition-all duration-500 mx-auto w-[80%] lg:w-[90%] flex lg:flex-row flex-col items-center justify-between gap-3 mb-14">
        <div className="basis-[40%] hover:basis-[50%] transition-all duration-500  relative">
          <Image
            src={program0.src}
            width={250}
            height={250}
            alt="icon"
            className="w-[100%] rounded-lg border block"
          />
          <div className="rounded-xl opacity-0 absolute top-0 right-0 bottom-0 left-0 bg-slate-500 hover:opacity-50 pt-[70%] hover:pt-0 cursor-pointer flex items-center justify-center flex-col text-white transition-all duration-500">
            {/* <Image /> */}
            <p>Care Taker</p>
          </div>
        </div>
        <div className="basis-[40%] hover:basis-[50%] transition-all duration-500  relative">
          <Image
            src={program1.src}
            width={250}
            height={250}
            alt="icon"
            className="w-[100%] rounded-lg border block"
          />
          <div className="rounded-xl opacity-0 absolute top-0 right-0 bottom-0 left-0 bg-slate-500 hover:opacity-50 pt-[70%] hover:pt-0 cursor-pointer flex items-center justify-center flex-col text-white transition-all duration-500">
            {/* <Image /> */}
            <p>Appoinment Booking</p>
          </div>
        </div>
        <div className="basis-[40%] hover:basis-[50%] transition-all duration-500  relative">
          <Image
            src={program2.src}
            width={250}
            height={250}
            alt="icon"
            className="w-[100%] rounded-lg border block"
          />
          <div className="rounded-xl opacity-0 absolute top-0 right-0 bottom-0 left-0 bg-slate-500 hover:opacity-50 pt-[70%] hover:pt-0 cursor-pointer flex items-center justify-center flex-col text-white transition-all duration-500">
            {/* <Image /> */}
            <p>Medical Delivery</p>
          </div>
        </div>
        <div className="basis-[40%] hover:basis-[50%] transition-all duration-500  relative">
          <Image
            src={program3.src}
            width={250}
            height={250}
            alt="icon"
            className="w-[100%] rounded-lg border block"
          />
          <div className="rounded-xl opacity-0 absolute top-0 right-0 bottom-0 left-0 bg-slate-500 hover:opacity-50 pt-[70%] hover:pt-0 cursor-pointer flex items-center justify-center flex-col text-white transition-all duration-500">
            {/* <Image /> */}
            <p>Ride Booking</p>
          </div>
        </div>
      </main>
      <p className="text-xl font-semibold text-white bg-slate-600 p-10 text-center">
        Our services are designed to boost the efficiency and profitability of
        service-based businesses, while offering engaging options for customers.
        We strive to be your all-encompassing solution for healthcare
        management.
      </p>
    </>
  );
}

export default OurServicesComponent;
