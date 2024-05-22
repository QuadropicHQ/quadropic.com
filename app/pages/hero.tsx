"use client";
import React from "react";
import { FlipWords } from "../components/ui/flipwords";
import { Spotlight } from "../components/ui/spotlight";
import QuadroBanner from "../components/inhome/quadrobanner";
import { Vortex } from "../components/ui/vortex";

export function HeroPage() {
  const words = ["AI", "Media", "Design", "Privacy", "Tech"];

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-md rounded-md flex md:items-center md:justify-center bg-black/[0.96] flex-col">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4"
        />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <QuadroBanner />
        <div className="text-3xl font-normal mx-auto text-neutral-600 dark:text-neutral-400 z-10">
          24th Avenue of
          <FlipWords words={words} /> <br />
        </div>
      </div>
    </div>
  );
}
