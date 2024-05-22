"use client";
import React from "react";
import { FlipWords } from "../components/ui/flipwords";
import { Spotlight } from "../components/ui/spotlight";
import QuadroBanner from "../components/inhome/quadrobanner";
import { AuroraBackground } from "../components/ui/aurora-background";
import { motion } from "framer-motion";

export function HeroPage() {
  const words = ["AI", "Media", "Design", "Privacy", "Tech"];

  return (
    <AuroraBackground>
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
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <QuadroBanner />
        <div className="text-3xl font-normal mx-auto text-neutral-600 dark:text-neutral-400 z-10">
          <h1 className="text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            24th Avenue of
            <FlipWords words={words} /> <br />
          </h1>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
