import React from "react";
import { Spotlight } from "../components/ui/spotlight";
import { GlobeWidget } from "../components/ui/globe-white";
import AnimButton from "../components/inhome/button/anim_button";

export function HeroPage() {
  return (
    <div className="h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <p className="mt-4 font-normal text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          24th Avenue of Technology
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Quadropic
        </h1>
        <div className="flex lg:justify-around md:justify-around">
          <AnimButton />
        </div>
      </div>
      <GlobeWidget className="absolute bottom-0" />
    </div>
  );
}
