"use client";
import { AiFillCustomerService } from "react-icons/ai";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AboutUsAlises,
  AccountType,
  CorporateAlises,
  SmeAlises,
} from "@/components/model-home/homePersonalAlises";

export type FlyoutOutProps = {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ComponentType;
  className?: string;
};

export const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
  className,
}: FlyoutOutProps) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit z-[1000]"
    >
      <a
        href={href}
        className="relative font-bold text-slate-600 text-sm hover:text-red-400"
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className={`absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full  bg-red-600 transition-transform duration-300 ease-out z-50 ${className}`}
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black "
          >
            <div className="absolute -top-6 left-0 right-0 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PersonalOptions = () => {
  return (
    <div className="w-[400px] bg-white p-3 shadow-xl z-50">
      <div className="mb-3 space-y-3">
        <h3 className="font-extrabold text-base">
          Get an account that suits you!
        </h3>
      </div>
      <div className="flex flex-row items-start gap-11 justify-start">
        {AccountType.map((element, i) => {
          return (
            <div key={i} className="flex flex-col gap-8 ">
              <h4 className="text-[11px] font-bold text-slate-500 mb-2">
                {element.header}
              </h4>
              {element.properties.map((elementos, i) => {
                return (
                  <div key={i} className="flex flex-col gap-2 max-w-[300px]">
                    <span className="text-[9px] font-bold cursor-pointer hover:text-slate-500 ">
                      {elementos.text}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <button className="w-full flex flex-rol items-center justify-center gap-3 rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white mt-7">
        <AiFillCustomerService />
        Customer Service{" "}
      </button>
    </div>
  );
};

export const SmeOption = () => {
  return (
    <div className="w-[400px] bg-white p-3 shadow-xl z-50">
      <div className="flex flex-row items-start gap-11 justify-start">
        {SmeAlises.map((element, i) => {
          return (
            <div key={i} className="flex flex-col gap-8 ">
              <h4 className="text-[11px] font-bold text-slate-500 mb-2">
                {element.header}
              </h4>
              {element.properties.map((elementos, i) => {
                return (
                  <div key={i} className="flex flex-col gap-2 max-w-[300px]">
                    <span className="text-[9px] font-bold cursor-pointer hover:text-slate-500 ">
                      {elementos.text}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const CorporateOption = () => {
  return (
    <div className="w-[400px] bg-white p-3 shadow-xl z-50">
      <div className="flex flex-row items-start gap-11 justify-start">
        {CorporateAlises.map((element, i) => {
          return (
            <div key={i} className="flex flex-col gap-8 ">
              <h4 className="text-[11px] font-bold text-slate-500 mb-2">
                {element.header}
              </h4>
              {element.properties.map((elementos, i) => {
                return (
                  <div key={i} className="flex flex-col gap-2 max-w-[300px]">
                    <span className="text-[9px] font-bold cursor-pointer hover:text-slate-500 ">
                      {elementos.text}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const AboutusOption = () => {
  return (
    <div className="w-[400px] bg-white p-3 shadow-xl z-50">
      <div className="flex flex-row items-start gap-11 justify-start">
        {AboutUsAlises.map((element, i) => {
          return (
            <div key={i} className="flex flex-col gap-8 ">
              <h4 className="text-[11px] font-bold text-slate-500 mb-2">
                {element.header}
              </h4>
              {element.properties.map((elementos, i) => {
                return (
                  <div key={i} className="flex flex-col gap-2 max-w-[300px]">
                    <span className="text-[9px] font-bold cursor-pointer hover:text-slate-500 ">
                      {elementos.text}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
