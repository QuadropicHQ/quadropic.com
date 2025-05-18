"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../components/ui/featured"
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

const ThreeDOperatorContent = () => {
  const description = "Control 3D software like Blender with intuitive tools.";
  const imageUrl = "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/3D-Operator.png";
  return (
    <div className="flex flex-col items-center justify-center text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
       <Image
        src={imageUrl}
        alt="3D Operator Banner"
        width={300} // Adjust width and height as needed
        height={300}
        objectFit="contain"
        className="rounded-md mb-6"
      />
      <TextGenerateEffect words={description} />
    </div>
  );
};

const AdvancedResearchAnalysisContent = () => {
  const description = "Analyze complex research data, including biomedical and physics images.";
  const imageUrl = "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/bio-research.png";
  return (
    <div className="flex flex-col items-center justify-center text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
       <Image
        src={imageUrl}
        alt="Advanced Research Analysis Banner"
        width={300} // Adjust width and height as needed
        height={300}
        objectFit="contain"
        className="rounded-md mb-6"
      />
      <TextGenerateEffect words={description} />
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
    detailedDescription: "RepoVision provides a comprehensive overview of your codebase, allowing you to quickly understand its structure, dependencies, and key components. Navigate through files and directories with ease, visualize relationships between different parts of your project, and gain insights into the overall architecture. It's like having an x-ray vision into your repository, helping you onboard new team members faster and making complex projects more manageable.",
    keyFeatures: [
        "Interactive file tree visualization",
        "Dependency mapping",
        "Code structure analysis",
        "Quick navigation"
    ],
    useCases: [
        "Onboarding new developers",
        "Understanding legacy code",
        "Refactoring projects",
        "Codebase audits"
    ],
    demoLink: "#",
  },
  {
    category: "Engine that Reasons to Code",
    title: "CodeReason",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/CodeReason.png",
    content: <CodeReasonContent />,
    detailedDescription: "CodeReason is an AI-powered engine that understands and reasons about code. It can analyze code snippets, explain complex logic, identify potential issues, and even suggest improvements. Think of it as a co-pilot that helps developers write better code faster. It leverages advanced machine learning techniques to comprehend the nuances of various programming languages and provide intelligent insights.",
    keyFeatures: [
        "Code analysis and explanation",
        "Intelligent code suggestions",
        "Bug detection and identification",
        "Support for multiple programming languages"
    ],
    useCases: [
        "Code reviews and quality assurance",
        "Learning new programming languages",
        "Debugging and troubleshooting",
        "Automated code documentation"
    ],
    demoLink: "#",
  },
  {
    category: "Make Fast Ship Fast",
    title: "Fast & Ready",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/Fast.webp",
    content: <FastReadyContent />,
    detailedDescription: "Fast & Ready helps you accelerate your development and deployment process. It provides tools and workflows to quickly build, test, and ship your code. Reduce time-to-market and increase your team's productivity with streamlined pipelines and automated tasks. Focus on writing code, and let Fast & Ready handle the rest of the software delivery lifecycle.",
    keyFeatures: [
        "Automated build and test pipelines",
        "Streamlined deployment workflows",
        "Continuous integration and delivery",
        "Accelerated time-to-market"
    ],
    useCases: [
        "Rapid prototyping and iteration",
        "Deploying microservices",
        "Setting up CI/CD for new projects",
        "Improving release frequency"
    ],
    demoLink: "#",
  },
  {
    title: "Hybrid Cloud",
    category: "Power of the cloud, with Local Flexibility",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/HybridCloud.webp",
    content: <HybridCloudContent />,
    detailedDescription: "Hybrid Cloud combines the scalability and power of the cloud with the flexibility and control of local infrastructure. This allows organizations to leverage the best of both worlds, keeping sensitive data on-premises while utilizing cloud resources for demanding workloads. Achieve greater agility, optimize costs, and meet specific regulatory requirements with a tailored hybrid cloud solution.",
    keyFeatures: [
        "Seamless integration of cloud and on-premises resources",
        "Data locality and compliance",
        "Scalability and cost optimization",
        "Increased agility and flexibility"
    ],
    useCases: [
        "Handling sensitive data",
        "Meeting regulatory requirements",
        "Leveraging existing IT infrastructure",
        "Disaster recovery and business continuity"
    ],
    demoLink: "#",
  },
  {
    title: "Fix Bugs",
    category: "Find & Fix Bugs in a moment",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/FixBugs.webp",
    content: <FixBugsContent />,
    detailedDescription: "Fix Bugs helps developers quickly identify and resolve issues in their code. It uses advanced analysis techniques to pinpoint the root cause of bugs and provides suggestions for fixes. Reduce debugging time and improve code quality with this powerful tool. It integrates with your development workflow to provide real-time feedback and accelerate the debugging process.",
    keyFeatures: [
        "Automated bug detection",
        "Root cause analysis",
        "Intelligent fix suggestions",
        "Integration with development environments"
    ],
    useCases: [
        "Debugging complex applications",
        "Improving code quality",
        "Reducing technical debt",
        "Accelerating the development cycle"
    ],
    demoLink: "#",
  },
  {
    title: "Make Apps",
    category: "Make Apps or add features, in a snap",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/MakeApps.webp",
    content: <MakeAppsContent />,
    detailedDescription: "Make Apps allows you to quickly build new applications or add features to existing ones. It provides tools and frameworks to accelerate the development process, from initial setup to deployment. Whether you're starting from scratch or enhancing an existing project, Make Apps helps you turn your ideas into reality faster and more efficiently.",
    keyFeatures: [
        "Rapid application scaffolding",
        "Streamlined feature integration",
        "Code generation and automation",
        "Support for various platforms"
    ],
    useCases: [
        "Building new applications quickly",
        "Adding features to existing apps",
        "Prototyping and experimentation",
        "Accelerating development cycles"
    ],
    demoLink: "#",
  },
  {
    category: "Made using the trusted LLM Providers",
    title: "Powered by LLM",
    src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/LLM.webp",
    content: <PoweredByLLMContent />,
    detailedDescription: "Powered by LLM leverages trusted Large Language Model providers to deliver intelligent and powerful features. By integrating with state-of-the-art LLMs, this service can perform complex tasks such as code analysis, content generation, and natural language processing. Benefit from the latest advancements in AI to enhance your workflows and unlock new capabilities.",
    keyFeatures: [
        "Integration with leading LLM providers",
        "Advanced natural language processing",
        "Code understanding and generation",
        "Access to cutting-edge AI models"
    ],
    useCases: [
        "Generating code from natural language descriptions",
        "Summarizing technical documents",
        "Building conversational interfaces",
        "Analyzing and refactoring code with AI assistance"
    ],
    demoLink: "#",
  },
  {
  src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/3D-Operator.png",
  title: "3D Operator",
  category: "Creative Tools",
  content: <ThreeDOperatorContent />,
  detailedDescription: "Syntheo's 3D Operator feature allows seamless integration and control over popular 3D modeling and animation software such as Blender. Automate tasks, manage complex scenes, and enhance your 3D workflow with powerful scripting and AI assistance.",
  keyFeatures: ["Blender integration", "Automated scene setup", "Scripting support", "AI-assisted modeling and animation"],
  useCases: ["3D asset creation", "Animation production", "Architectural visualization", "Product design"],
  demoLink: "#",
},
{
  src: "https://raw.githubusercontent.com/QuadropicHQ/web-assets/refs/heads/main/quadropicdotcom-images/bio-research.png",
  title: "Advanced Research ",
  category: "Scientific Tools",
  content: <AdvancedResearchAnalysisContent />,
  detailedDescription: "Syntheo provides advanced tools for analyzing scientific research data, including specialized support for biomedical images, physics simulations, and other complex datasets. Utilize powerful visualization and analytical capabilities to accelerate your discoveries.",
  keyFeatures: ["Biomedical image analysis", "Physics data processing", "Advanced visualization", "Statistical analysis tools"],
  useCases: ["Medical imaging research", "Particle physics data analysis", "Genomic data processing", "Materials science simulations"],
  demoLink: "#",
},
];
