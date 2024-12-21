import React from "react";
import AnimButton from "../components/inhome/button/anim_button";
import { StarsBackground } from "../components/ui/star-back";

export function Manifesto() {
  return (
    <div className="p-4 pt-22 sm:p-8 md:p-16 w-full">
      <h1 className="py-7 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
        The Vision
      </h1>
      <div className="w-full relative max-w-full mx-auto">
        <div className="relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm bg-[#2A2A2A]/50 border border-gray-700/50 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-200"
            >
              <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-gray-100 mb-4 relative z-30">
            Making Automation Agents for every Job
          </h1>

          <p className="font-normal text-base text-gray-400 mb-4 relative z-30">
          At Quadropic, we harness the power of intelligent automation and AI-driven agents to transform workflows and redefine productivity. Our mission is to simplify tasks like coding, debugging, and testing, enabling professionals to focus on creativity and innovation. By building intuitive, user-centric tools, we aim to unlock potential, drive progress, and shape a future where technology empowers everyone to achieve more effortlessly.
          </p>

          <AnimButton />

      <StarsBackground />
        </div>
      </div>
    </div>
  );
}
