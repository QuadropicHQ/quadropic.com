"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../components/ui/featured";

export function GServices() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Explore Syntheo
      </h1>
      <p className="mb-4 mr-2 ml-2 font-normal text-2m text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        See what Syntheo can do for you.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Dolphin club is that you boast about Dolphin
                club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Quickly overview the Code base",
    title: "RepoVision",
    src: "https://i.postimg.cc/ZK2F5k5Q/Repo-Vision.webp",
    content: <DummyContent />,
  },
  {
    category: "Make Fast Ship Fast",
    title: "Fast & Ready",
    src: "https://i.postimg.cc/j5c4xLD6/Fast.webp",
    content: <DummyContent />,
  },
  {
    title: "Hybrid Cloud",
    category: "Power of the cloud, with Local Flexibility",
    src: "https://i.postimg.cc/3rLFz05Y/Hybrid-Cloud.webp",
    content: <DummyContent />,
  },
  {
    title: "Fix Bugs",
    category: "Find & Fix Bugs in a moment",
    src: "https://i.postimg.cc/j2k6fmQL/FixBugs.webp",
    content: <DummyContent />,
  },
  {
    title: "Make Apps",
    category: "Make Apps or add features, in a snap",
    src: "https://i.postimg.cc/HnL4VdMq/MakeApps.webp",
    content: <DummyContent />,
  },
  {
    category: "Made using the trusted LLM Providers",
    title: "Powered by LLM",
    src: "https://i.postimg.cc/sDv4zfsS/LLM.webp",
    content: <DummyContent />,
  },
];
