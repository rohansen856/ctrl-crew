import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import RetroGrid from "@/components/magicui/retro-grid"

import { AnimatedBeamDemo } from "./animated-members"
import AnimatedGradientText from "./magicui/animated-gradient-text"
import { TypeWriter } from "./type-writer"

export async function Hero() {
  return (
    <div className="relative flex size-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <div className="absolute -left-56 -top-56 size-[50rem] rotate-45 rounded-[10%] border-2 border-primary/30 bg-cyan-600/30">
        <div className="relative hidden size-full lg:flex">
          <Image
            src={"/images/illustrations/man.png"}
            height={500}
            width={500}
            alt=""
            className="m-auto"
          />
        </div>
      </div>
      <div className="absolute -bottom-56 -right-56 size-[50rem] rotate-45 rounded-[10%] border-2 border-primary/30 bg-teal-600/30">
        <div className="relative hidden size-full lg:flex">
          <Image
            src={"/images/illustrations/woman.png"}
            height={500}
            width={500}
            alt=""
            className="m-auto"
          />
        </div>
      </div>
      <Link href={"/#members"} className="z-10 mb-6">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Who are we?
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </Link>
      <h1 className="pointer-events-none z-10 mb-2 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        We are CTRL-CREW
      </h1>
      <h2 className="z-10 flex h-20 gap-1 text-2xl font-bold lg:text-4xl 2xl:text-5xl">
        <TypeWriter />{" "}
      </h2>
      <div className="flex w-full flex-col">
        <AnimatedBeamDemo />
      </div>
      <RetroGrid />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  )
}
