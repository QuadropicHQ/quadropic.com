import { IconContainer } from "../components/ui/iconcontainer";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaUserLock } from "react-icons/fa";
import { PiDevicesFill } from "react-icons/pi";
import { FaPaintBrush } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { IoSpeedometer } from "react-icons/io5";
import { Radar } from "../components/ui/radarpage";

export function ValuePage() {
  return (
    <div>
      <h1 className=" text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Our Values
      </h1>
      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div className="mx-auto w-full max-w-3xl">
            <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              text="Extensible"
              delay={0.2}
              icon={<IoExtensionPuzzle className=" h-8 w-8 text-gradient-to-b from-neutral-300 to-neutral-500" />}
            />
            <IconContainer
              delay={0.4}
              text="Cost Effective"
              icon={<AiFillDollarCircle className=" h-8 w-8 text-gradient-to-b from-neutral-300 to-neutral-500" />}
            />
            <IconContainer
              text="Best Ecosystem"
              delay={0.3}
              icon={<PiDevicesFill className=" h-8 w-8 text-gradient-to-b from-neutral-300 to-neutral-500" />}
            />
            </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              text="Privacy"
              delay={0.5}
              icon={<FaUserLock className=" h-8 w-8 text-gradient-to-b from-neutral-300 to-neutral-500" />}
            />
            <IconContainer
              text="Family Safe"
              icon={<MdFamilyRestroom className=" h-8 w-8 text-gradient-to-b from-neutral-300 to-neutral-500" />}
              delay={0.8}
            />
            <IconContainer
              delay={0.4}
              text="Shipped across the Globe"
              icon={<IoMdGlobe className=" h-8 w-8 text-gradient-to-b from-neutral-300 to-neutral-500" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.6}
              text="Best in Class UI"
              icon={<FaPaintBrush className=" h-8 w-8 text-gradient-to-b from-neutral-300 to-neutral-500" />}
            />
            <IconContainer
              delay={0.7}
              text="Native Performance"
              icon={<IoSpeedometer className=" h-8 w-8 text-gradient-to-b from-neutral-300 to-neutral-500" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </div>
  );
}
