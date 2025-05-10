"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../components/ui/featured";
import { TextGenerateEffect } from "../components/ui/typingtext";

// Define the detailed content components for each feature card
const RepoVisionContent = () => {
  const description = "RepoVision provides a comprehensive overview of your codebase, allowing you to quickly understand its structure, dependencies, and key components. Navigate through files and directories with ease, visualize relationships between different parts of your project, and gain insights into the overall architecture. It's like having an x-ray vision into your repository, helping you onboard new team members faster and making complex projects more manageable.";
  const imageUrl = "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/RepoVision.webp"; // Image URL from the data array

  return (
    <div className="flex flex-col items-center justify-center text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
      <Image
        src={imageUrl}
        alt="RepoVision Banner"
        width={300} // Adjust width and height as needed
        height={300}
        objectFit="contain"
        className="rounded-md mb-6"
      />
      <TextGenerateEffect words={description} />
      {/* Add more details or bullet points here if needed */}
    </div>
  );
};

const CodeReasonContent = () => {
  const description = "CodeReason is an intelligent engine that can reason about your code. It helps you understand the logic behind complex functions, explains the purpose of different code blocks, and can even suggest potential issues or improvements. Debugging becomes significantly easier as CodeReason can provide insights into the execution flow and identify the root cause of errors. It's like having a senior developer looking over your shoulder, providing valuable explanations and guidance.";
  const imageUrl = "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/CodeReason.png"; // Image URL from the data array

  return (
    <div className="flex flex-col items-center justify-center text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
       <Image
        src={imageUrl}
        alt="CodeReason Banner"
        width={300} // Adjust width and height as needed
        height={300}
        objectFit="contain"
        className="rounded-md mb-6"
      />
      <TextGenerateEffect words={description} />
      {/* Add more details or bullet points here if needed */}
    </div>
  );
};

const FastReadyContent = () => {
  const description = "Syntheo is designed for speed and efficiency. With pre-configured environments and streamlined workflows, you can go from idea to deployment in record time. Our platform automates repetitive tasks, allowing you to focus on building innovative features. Whether you're starting a new project or adding to an existing one, Fast & Ready ensures you have the tools and infrastructure to ship quickly and confidently.";
   const imageUrl = "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/Fast.webp"; // Image URL from the data array
  return (
    <div className="flex flex-col items-center justify-center text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
       <Image
        src={imageUrl}
        alt="Fast & Ready Banner"
        width={300} // Adjust width and height as needed
        height={300}
        objectFit="contain"
        className="rounded-md mb-6"
      />
      <TextGenerateEffect words={description} />
      {/* Add more details or bullet points here if needed */}
    </div>
  );
};

const HybridCloudContent = () => {
  const description = "Leverage the best of both worlds with our Hybrid Cloud capabilities. Enjoy the scalability and cost-effectiveness of the public cloud while maintaining control and security over sensitive data with private cloud options. Our flexible architecture allows you to seamlessly integrate your on-premises infrastructure with cloud resources, giving you the power and flexibility to adapt to your evolving needs.";
  const imageUrl = "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/HybridCloud.webp"; // Image URL from the data array
  return (
    <div className="flex flex-col items-center justify-center text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
       <Image
        src={imageUrl}
        alt="Hybrid Cloud Banner"
        width={300} // Adjust width and height as needed
        height={300}
        objectFit="contain"
        className="rounded-md mb-6"
      />
      <TextGenerateEffect words={description} />
      {/* Add more details or bullet points here if needed */}
    </div>
  );
};

const FixBugsContent = () => {
  const description = "Say goodbye to tedious debugging sessions. Syntheo's Fix Bugs feature automatically detects potential issues in your code, provides clear explanations of the errors, and even suggests possible solutions. Our intelligent analysis helps you identify and resolve bugs quickly and efficiently, ensuring your application runs smoothly and reliably.";
   const imageUrl = "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/FixBugs.webp"; // Image URL from the data array
  return (
    <div className="flex flex-col items-center justify-center text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
       <Image
        src={imageUrl}
        alt="Fix Bugs Banner"
        width={300} // Adjust width and height as needed
        height={300}
        objectFit="contain"
        className="rounded-md mb-6"
      />
      <TextGenerateEffect words={description} />
      {/* Add more details or bullet points here if needed */}
    </div>
  );
};

const MakeAppsContent = () => {
  const description = "Building applications has never been easier. Syntheo's Make Apps feature provides tools and templates for rapid application development. Generate boilerplate code, utilize pre-built components, and streamline your development process. Whether you're building a simple web application or a complex enterprise solution, Syntheo empowers you to bring your ideas to life faster.";
  const imageUrl = "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/MakeApps.webp"; // Image URL from the data array
  return (
    <div className="flex flex-col items-center justify-center text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
       <Image
        src={imageUrl}
        alt="Make Apps Banner"
        width={300} // Adjust width and height as needed
        height={300}
        objectFit="contain"
        className="rounded-md mb-6"
      />
      <TextGenerateEffect words={description} />
      {/* Add more details or bullet points here if needed */}
    </div>
  );
};

const PoweredByLLMContent = () => {
  const description = "Syntheo is powered by cutting-edge Large Language Models (LLMs) from trusted providers. These powerful models enable intelligent code reasoning, natural language interaction, and automated tasks. Benefit from the latest advancements in AI to enhance your development workflow and unlock new possibilities.";
  const imageUrl = "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/LLM.webp"; // Image URL from the data array
  return (
    <div className="flex flex-col items-center justify-center text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
       <Image
        src={imageUrl}
        alt="Powered by LLM Banner"
        width={300} // Adjust width and height as needed
        height={300}
        objectFit="contain"
        className="rounded-md mb-6"
      />
      <TextGenerateEffect words={description} />
      {/* Add more details or bullet points here if needed */}
    </div>
  );
};


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

// Update the data array with the new content components and existing image sources
const data = [
  {
    category: "Quickly overview the Code base",
    title: "RepoVision",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/RepoVision.webp",
    content: <RepoVisionContent />,
  },
  {
    category: "Engine that Reasons to Code",
    title: "CodeReason",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/CodeReason.png",
    content: <CodeReasonContent />,
  },
  {
    category: "Make Fast Ship Fast",
    title: "Fast & Ready",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/Fast.webp",
    content: <FastReadyContent />,
  },
  {
    title: "Hybrid Cloud",
    category: "Power of the cloud, with Local Flexibility",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/HybridCloud.webp",
    content: <HybridCloudContent />,
  },
  {
    title: "Fix Bugs",
    category: "Find & Fix Bugs in a moment",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/FixBugs.webp",
    content: <FixBugsContent />,
  },
  {
    title: "Make Apps",
    category: "Make Apps or add features, in a snap",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/MakeApps.webp",
    content: <MakeAppsContent />,
  },
  {
    category: "Made using the trusted LLM Providers",
    title: "Powered by LLM",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/LLM.webp",
    content: <PoweredByLLMContent />,
  },
];
