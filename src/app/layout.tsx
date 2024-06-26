import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GiPadlock } from "react-icons/gi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BiMenuAltLeft } from "react-icons/bi";

import { Card, CardContent } from "@/components/ui/card";
import SecondSectionNavBar from "@/components/component/nav-bar";
import Image from "next/image";
import logo from "@/assets/logo.png";
import FotterComponent from "@/components/fotter";
import { SideBarComponent } from "@/components/side-bar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SHAN LLC",
  description: "your personalized health hub",
  icons: "https://www.zenithbank.com/media/1400/zenith-bank-logo_1.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-custom antialiased",
          fontSans.variable
        )}
      >
        <div className="w-full h-24 p-3 px-8 bg-[#fff] fixed shadow flex items-center justify-start z-50">
          <div className="flex flex-row justify-between w-full item-center">
            <Image
              alt="logo"
              src={logo.src}
              width={60}
              height={50}
              className="mr-5"
            />
            <SecondSectionNavBar />
            <SideBarComponent />
            <div className="hidden mr-8 lg:flex ">
              <Popover>
                <PopoverTrigger>
                  {" "}
                  <Button className="bg-btn-color text-white flex flex-row gap-1 rounded-xl text-xs font-semibold uppercase font-custom">
                    <GiPadlock />
                    Register / Login
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-white">
                  <Card className="bg-white">
                    <CardContent>
                      <Button
                        variant="outline"
                        className="w-full mt-3 flex flex-rol items-center justify-center p-1 hover:border-b-2 text-lg cursor-pointer"
                      >
                        Personal
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full mt-3 flex flex-rol items-center justify-center p-1 text-lg hover:border-b-2 cursor-pointer"
                      >
                        Organization
                      </Button>
                    </CardContent>
                  </Card>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <div className="pt-24 ">{children}</div>
        <FotterComponent />
      </body>
    </html>
  );
}
