"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function GeneralServices() {
  return (
    <div className="mt-[4rem] mr-[2rem] ml-[2rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="mb-4 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Our Products and Services
      </h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  return <div>Hashes Images</div>;
};
const SkeletonTwo = () => {
  return <div>Syntheo Images</div>;
};
const SkeletonThree = () => {
  return <div>Fitter Images</div>;
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
          alt="logo"
          height="100"
          width="100"
          className="rounded-xl	h-10 w-10"
        />

        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Syntheo
        </p>
      </motion.div>
      <motion.div className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
          alt="logo"
          height="100"
          width="100"
          className="rounded-xl	h-10 w-10"
        />

        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Syntheo
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
          alt="logo"
          height="100"
          width="100"
          className="rounded-xl	h-10 w-10"
        />

        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Syntheo
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <Image
        alt="people"
        width={200}
        height={100}
        src={
          "https://images.pexels.com/photos/18361786/pexels-photo-18361786/free-photo-of-bosporus-in-istanbul-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ></Image>
    </div>
  );
};
const items = [
  {
    title: "Hashes",
    description: (
      <span className="text-sm">
        The whole Social Media in Palm of your hands.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Syntheo",
    description: (
      <span className="text-sm">
        The Only AI assistant you need for all your works.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fitter",
    description: (
      <span className="text-sm">
        Your companion for a Healthy Lifestyle and Healthy mind.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Unified Ecosystem",
    description: (
      <span className="text-sm">
        Our Apps Work together as if they are comprised of one app element
        making it more seamless.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Made for the People",
    description: (
      <span className="text-sm">
        We make our apps such that it serves to all of you.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
