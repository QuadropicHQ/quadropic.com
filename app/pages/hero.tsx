"use client";
import React from "react";
import { FlipWords } from "../components/ui/flipwords";
import { Spotlight } from "../components/ui/spotlight";
import QuadroBanner from "../components/inhome/quadro-text";

export function HeroPage() {
  const words = ["AI", "Media", "Design", "Privacy", "Tech"];

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-md rounded-md flex md:items-center md:justify-center bg-black/[0.96] flex-col">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        {/* Title Hero Section */}
        <QuadroBanner />
        {/* Moto Hero Section */}
        <div className="text-3xl font-normal mx-auto text-neutral-600 dark:text-neutral-400">
          24th Avenue of
          <FlipWords words={words} /> <br />
        </div>
      </div>
    </div>
  );
}
