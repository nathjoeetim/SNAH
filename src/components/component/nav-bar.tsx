"use client";
import { CgMenuLeftAlt } from "react-icons/cg";
import {
  AboutusOption,
  CorporateOption,
  FlyoutLink,
  PersonalOptions,
  SmeOption,
} from "./flyoutlink/flyout-link";

function SecondSectionNavBar() {
  return (
    <div className=" hidden w-full lg:flex flex-row justify-end mr-5 items-center">
      <ul className="flex flex-row gap-5 uppercase items-center">
        <FlyoutLink
          href="#"
          FlyoutContent={PersonalOptions}
          className="cursor-pointer hover:text-red-600 text-slate-600 font-extrabold text-[10px] uppercase"
        >
          personal
        </FlyoutLink>
        <FlyoutLink
          href="#"
          FlyoutContent={SmeOption}
          className="cursor-pointer hover:text-red-600 text-slate-600 font-extrabold text-[10px] uppercase"
        >
          SME
        </FlyoutLink>
        <FlyoutLink
          href="#"
          FlyoutContent={CorporateOption}
          className="cursor-pointer hover:text-red-600 text-slate-600 font-extrabold text-[10px] uppercase"
        >
          corporate
        </FlyoutLink>
        <FlyoutLink
          href="#"
          FlyoutContent={AboutusOption}
          className="cursor-pointer hover:text-red-600 text-slate-600 font-extrabold text-[10px] uppercase"
        >
          About us
        </FlyoutLink>
      </ul>
    </div>
  );
}

export default SecondSectionNavBar;
