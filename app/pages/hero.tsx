import { Spotlight } from "../components/ui/spotlight";
import QuadroBanner from "../components/inhome/quadrobanner";
import { FlipWords } from "../components/ui/flipwords";

export function HeroPage() {
  const words = ["AI", "Media", "Design", "Privacy", "Tech"];

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-md rounded-md flex md:items-center md:justify-center bg-black/[0.96] flex-col">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="blue"
        />
        <Spotlight
          className="-top-20 left-0 md:left-40 md:-top-10 sm:left-200 sm:-top-10"
          fill="lightblue"
        />
        <Spotlight
          className="-top-10 left-0 md:left-20 md:-top-5 sm:left-180 sm:-top-20"
          fill="darkblue"
        />
        <Spotlight
          className="-top-40 left-0 md:left-80 md:-top-30 sm:left-160 sm:-top-40"
          fill="white"
        />
        <QuadroBanner />
        <div className="text-3xl font-normal mx-auto text-neutral-600 dark:text-neutral-400 z-10">
          24th Avenue of
          <FlipWords words={words} /> <br />
        </div>
      </div>
    </div>
  );
}
