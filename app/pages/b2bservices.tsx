import React from "react";
import { Meteors } from "../components/ui/meteorcard";

export function B2BservicesSection() {
  return (
    <div className="p-4 sm:p-8 md:p-16 w-full">
      <div className="w-full relative max-w-full mx-auto">
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-30">
            Want custom solutions for your Business or Organisation?
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-30">
            Quadropic&apos;s innovative B2B services are the catalyst your
            company needs to scale quickly and effectively in an ever-evolving
            technology landscape. With expertise in web development, AI
            integration and more, Quadropic enables your business to stay at the
            forefront of technological advancements.
          </p>

          <button className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            Explore B2B Services
          </button>

          <Meteors number={40} />
        </div>
      </div>
    </div>
  );
}
