"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { type MembersProps } from "@/config/team"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { MarqueeDemo } from "./slider-comments"
import { Socials } from "./socials"
import { Badge } from "./ui/badge"
import { buttonVariants } from "./ui/button"

interface MemberSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number
  member: MembersProps[number]
}

const badgeColors = [
  "bg-red-700/30",
  "bg-green-700/30",
  "bg-blue-700/30",
  "bg-teal-700/30",
  "bg-cyan-700/30",
]

export function MemberSection({ index, member, ...props }: MemberSectionProps) {
  return (
    <div
      id={member.name.toLowerCase()}
      className={cn(
        "mb-12 flex w-full flex-col gap-8 pt-4 lg:h-[95vh]",
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "flex max-w-[650px] flex-1 overflow-hidden",
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          className="bg-gradient-to-b from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text"
        >
          <h3 className="text-vertical pointer-events-none h-[35vh] text-start font-heading text-3xl uppercase text-transparent lg:text-5xl 2xl:text-7xl">
            {member.name}
          </h3>
        </motion.div>

        <div className="relative max-w-[650px] flex-1 overflow-hidden rounded-3xl rounded-bl-[30%] rounded-tr-[30%] border-x-4 border-teal-700">
          <Image
            src={`/images/avatars/${member.name.toLowerCase() || "rohan"}.jpg`}
            fill
            className="object-cover"
            alt={""}
          />
        </div>
      </div>
      <div className="flex h-full min-h-40 flex-1 flex-col">
        <h3 className="h-18 mb-4 flex overflow-visible text-start font-heading text-3xl capitalize lg:text-5xl 2xl:text-7xl">
          {member.fullName.split(" ").map((w, i) => (
            <span key={w} className="mr-4">
              {w.split("").map((l, j) => (
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeIn",
                    duration: 0.15,
                    delay: (i * 10 + j) * 0.1,
                  }}
                  className="inline-block"
                >
                  {l}
                </motion.span>
              ))}
            </span>
          ))}
        </h3>
        <span className="mb-8 flex max-w-xl flex-wrap gap-2">
          {member.domains.map((domain, i) => (
            <Badge
              key={domain}
              className={cn(
                "pointer-events-none border border-primary text-primary duration-300",
                badgeColors[i % badgeColors.length]
              )}
            >
              {domain}
            </Badge>
          ))}
        </span>
        <div className="mb-8 flex">
          <Socials socials={member.socials} />
        </div>
        <div className="relative max-w-3xl">
          <MarqueeDemo />
        </div>
        <Link
          href={member.portfolio}
          className={cn(buttonVariants(), "group mt-auto flex gap-2 text-xl")}
        >
          Meet me
          <Icons.arrowRight
            size={20}
            className="duration-300 group-hover:translate-x-6 group-hover:opacity-100 lg:opacity-0"
          />
        </Link>
      </div>
    </div>
  )
}
