"use client";
import React from "react";
import Image from "next/image";
import { Spotlight } from "../components/ui/spotlight";
import { StarsBackground } from "../components/ui/star-back";
import SemiButton from "../components/ui/semibutton";
import RankAnnouncement from "../components/ui/bestbadge";

export function HeroPage() {
  return (
    <div className="h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-end h-full">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center gap-4">
        <SemiButton className="my-4" href="https://cal.com/quadropic" />
        <RankAnnouncement className="my-4"/>
      </div>
        <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 animate-text-indent-x">
          Syntheo
        </h1>
        <p className="font-normal text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 animate-text-indent-x">
          by Quadropic
        </p>
        <p className="mt-4 font-normal text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          The Next Gen Coding Agent
        </p>
        <Image
          src="https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/syntheo-quadropiccomtrailer-image.webp"
          alt="Sytheo Trailer for Web"
          width="500"
          height="300"
          priority={true}
          className="w-[90%] sm:w-[100%] md:w-[85%] lg:w-[55%] h-auto mt-8 mx-auto"
        />
      </div>
      <StarsBackground />
      <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center">
      </div>
    </div>
  );
}
