"use client";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import appStore from "@/assets/appstore.png";
import playStore from "@/assets/playstore.png";

function FotterComponent() {
  return (
    <section className=" py-8 text-center bg-transparent dark:text-slate-100 text-white bg-custom-gradient border-t-2 border-gray-400 gap-10">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-3 items-start lg:justify-evenly justify-start ">
        {/* <Logo /> */}
        <div>
          <Image src={logoImg.src} alt="logo" width={150} height={150} />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h5 className="text-xl font-bold">Contact Us</h5>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer hover:text-slate-600">
              Phone number
            </li>
            <li className="cursor-pointer hover:text-slate-600">
              Email Address
            </li>
            <li className="cursor-pointer hover:text-slate-600">FaceBook</li>
            <li className="cursor-pointer hover:text-slate-600">
              Twitter currectly X
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h5 className="text-xl font-bold">Our Office</h5>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer hover:text-slate-600">
              Atlanta GA, USA
            </li>
            <li className="cursor-pointer hover:text-slate-600">
              @234 new lane
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-0">
          <Image
            src={appStore.src}
            alt="app Store"
            width={200}
            height={100}
            className="cursor-pointer"
          />
          <Image
            src={playStore.src}
            alt="app Store"
            width={200}
            height={100}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="mx-auto mt-[50px]">
        Copyright &copy; 2022. All Rights Reserved.
      </div>
    </section>
  );
}

export default FotterComponent;
