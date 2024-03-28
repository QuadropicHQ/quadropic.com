import { IconContainer } from "../components/ui/iconcontainer";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidReport } from "react-icons/bi";
import { BsClipboardDataFill } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { RiFilePaper2Fill } from "react-icons/ri";
import { Radar } from "../components/ui/radarpage";

export function ValuePage() {
  return (
    <div>
      <h1 className="pt-7 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        The Values we Adhere to
      </h1>
      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer text="Web Development" delay={0.2} />
            <IconContainer
              delay={0.4}
              text="Mobile apps"
              icon={<AiFillDollarCircle className=" h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text="Designing"
              delay={0.3}
              icon={<BsClipboardDataFill className=" h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              text="Maintenence"
              delay={0.5}
              icon={<BiSolidReport className=" h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text="Server management"
              icon={
                <HiMiniDocumentArrowUp className=" h-8 w-8 text-slate-600" />
              }
              delay={0.8}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.6}
              text="GitHub Integration"
              icon={<HiDocumentReport className=" h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              delay={0.7}
              text="CMS Integration"
              icon={<RiFilePaper2Fill className=" h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </div>
  );
}
