"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { HiDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

export const IconContainer = ({ icon, text, delay }: any) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        delay: delay ? delay : 0,
      }}
      className={twMerge(
        "relative z-30 flex flex-col items-center justify-center space-y-2"
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#333333] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] shadow-lg hover:shadow-xl transition-shadow duration-200">
        {icon || <HiDocumentText className="h-8 w-8 text-[#666666]" />}
      </div>
      <div className=" rounded-md px-2 py-1 md:block">
        <div className="text-center text-xs font-bold text-slate-400">
          {text || `Web Development`}
        </div>
      </div>
    </motion.div>
  );
};
