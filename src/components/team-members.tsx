import Image from "next/image"
import Link from "next/link"

import { members } from "@/config/team"
import { cn } from "@/lib/utils"

import { AnimatedTooltip } from "./avatar-stack"
import { Icons } from "./icons"
import { FileTreeDemo } from "./member-tree"
import { MarqueeDemo } from "./slider-comments"
import { Badge } from "./ui/badge"
import { buttonVariants } from "./ui/button"

const badgeColors = [
  "bg-red-700/30",
  "bg-green-700/30",
  "bg-blue-700/30",
  "bg-teal-700/30",
  "bg-cyan-700/30",
]

export async function Members() {
  return (
    <div className="mt-8 px-6">
      <h2 className="mb-8 text-center font-heading text-xl lg:text-3xl 2xl:text-5xl">
        Team Members
      </h2>
      <div className="mb-8 flex justify-center">
        <AnimatedTooltip
          items={members.map((member, i) => ({
            image: `/images/avatars/${member.name || "rohan"}.jpg`,
            id: i + 1,
            designation: "",
            name: member.fullName,
          }))}
        />
      </div>
      <div className="mb-12 flex flex-col justify-center gap-6 lg:flex-row lg:gap-12">
        <FileTreeDemo />
        <div className="flex flex-col justify-center gap-4 border-l-4 pl-8 font-heading text-xl lg:text-3xl 2xl:text-5xl">
          <h4>
            Team Members:{" "}
            <span className="bg-gradient-to-br from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent">
              {members.length}
            </span>
          </h4>
          <h4>
            Hackathons:{" "}
            <span className="bg-gradient-to-br from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent">
              3
            </span>
          </h4>
          <h4>
            Skills:{" "}
            <span className="bg-gradient-to-br from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent">
              8
            </span>
          </h4>
        </div>
      </div>
      {members.map((member, i) => (
        <div
          key={member.name}
          id={member.name.toLowerCase()}
          className={cn(
            "mb-12 flex w-full flex-col gap-8 pt-4 lg:h-[90vh]",
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          )}
        >
          <div
            className={cn(
              "flex max-w-2xl flex-1 bg-gradient-to-b from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text",
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            )}
          >
            <h3 className="text-vertical h-[35vh] text-start font-heading text-3xl uppercase text-transparent lg:text-5xl 2xl:text-7xl">
              {member.name}
            </h3>
            <div className="relative max-w-xl flex-1 overflow-hidden rounded-3xl rounded-bl-[30%] rounded-tr-[30%] border-x-4 border-teal-700">
              <Image
                src={`/images/avatars/${member.name || "rohan"}.jpg`}
                fill
                className="object-cover"
                alt={""}
              />
            </div>
          </div>
          <div className="flex h-full min-h-40 flex-1 flex-col">
            <h3 className="mb-4 text-start font-heading text-3xl capitalize lg:text-5xl 2xl:text-7xl">
              {member.fullName}
            </h3>
            <span className="mb-8 flex max-w-xl flex-wrap gap-2">
              {member.domains.map((domain, i) => (
                <Badge
                  key={domain}
                  className={cn(
                    "pointer-events-none border border-primary text-primary hover:bg-secondary",
                    badgeColors[i % badgeColors.length]
                  )}
                >
                  {domain}
                </Badge>
              ))}
            </span>
            <div className="relative max-w-3xl">
              <MarqueeDemo />
            </div>
            <Link
              href={member.portfolio}
              className={cn(
                buttonVariants(),
                "group mt-auto flex gap-4 text-xl"
              )}
            >
              Meet me
              <Icons.arrowRight
                size={20}
                className="duration-300 group-hover:translate-x-6"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
