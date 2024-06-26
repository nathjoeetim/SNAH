import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BiMenuAltLeft } from "react-icons/bi";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export function SideBarComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <BiMenuAltLeft
          size={40}
          color="#00F38"
          className="flex lg:hidden text-customBlue cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-custom-gradient flex flex-col gap-4 py-4 px-3"
      >
        <SheetHeader className="mb-5">
          <div className="flex flex-row gap-1 items-center">
            <Image src={logo.src} width={70} height={70} alt="logo" />
            <span className="text-[10px] text-slate-400 text-center">
              SNAH is more than just a healthcare app — it&apos;s your
              personalized health hub
            </span>
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-3 items-center justify-start">
          <ul className="flex flex-col gap-5 text-slate-400 text-center ">
            <li className="cursor-pointer hover:text-red-600 font-extrabold  uppercase">
              Home
            </li>
            <li className="cursor-pointer hover:text-red-600 font-extrabold  uppercase">
              About Us
            </li>
            <li className="cursor-pointer hover:text-red-600 font-extrabold  uppercase">
              Product
            </li>
            <li className="cursor-pointer hover:text-red-600 font-extrabold  uppercase">
              Care Givers
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
