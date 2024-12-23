import { InfiniteMovingCards } from "../components/ui/infinite-cards";

export function TestimonialsSection() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black/10 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Hear what they say
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}


const testimonials = [
  {
    quote:
      "RepoVision helped me grasp the structure of an unfamiliar codebase in minutes. I could jump between files and features seamlessly, saving me tons of time figuring out how everything was organized.",
    name: "Quadropic's Syntheo",
    title: "RepoVision",
  },
  {
    quote:
      "I've never deployed improvements so quickly. This feature handles packaging, testing, and deployment in a swift process, letting me iterate faster with confidence.",
    name: "Quadropic's Syntheo",
    title: "Speed",
  },
  {
    quote:
      "The hybrid cloud approach let me leverage powerful remote computing while maintaining a local setup for easy troubleshooting. It's a best-of-both-worlds scenario.",
    name: "Quadropic's Syntheo",
    title: "Hybrid Cloud Functionality",
  },
  {
    quote:
      "When a bug crept in, the fix process was practically automated. The tool identifies likely problem areas and even suggests patches.",
    name: "Quadropic's Syntheo",
    title: "Fixing Bugs",
  },
  {
    quote:
      "I was impressed by how quickly I got a new feature up and running. No complicated boilerplate—just define the idea and everything's scaffolded in seconds.",
    name: "Quadropic's Syntheo",
    title: "Making Apps & Features",
  },
  {
    quote:
      "The large language model support has been stellar for code suggestions. It seems to understand my context and propose realistic solutions without me digging through endless docs.",
    name: "Quadropic's Syntheo",
    title: "LLM powered responses",
  },
];
