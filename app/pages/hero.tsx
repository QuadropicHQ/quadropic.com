"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { FlipWords } from "../components/ui/flipwords";

export function HeroPage() {
  const words = ["AI", "Entertainment", "Design", "Privacy", "Technology"];

  return (
    <AuroraBackground>
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Quadropic
      </h1>
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        The Twenty Fourth Avenue of
        <FlipWords words={words} /> <br />
      </div>
    </AuroraBackground>
  );
}
