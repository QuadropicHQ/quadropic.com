"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { TextGenerateEffect } from "../components/ui/typingtext";
import { Button } from "../components/ui/dynamicbutton";

export function HeroPage() {
  const words = "Ready to Dive in and Explore Next Dimension of Technology?";

  return (
    <AuroraBackground>
      <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Quadropic
      </h1>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <TextGenerateEffect words={words} />

        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Join Us
        </Button>
      </motion.div>
    </AuroraBackground>
  );
}
