"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Magnetic } from "./magnetic-button"

export function TechUsed() {
  const stacks = [
    "blender",
    "cpp",
    "dartlang",
    "docker",
    "figma",
    "flutter",
    "github",
    "java",
    "javascript",
    "next-js",
    "tailwindcss",
    "typescript",
  ]
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="absolute inset-0 -mt-4 size-full px-4 lg:px-12">
        <div className="bg-grains-ellipse size-full overflow-hidden border border-primary/30 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-30"></div>
      </div>
      <h2 className="mb-8 text-center font-heading text-xl lg:text-3xl 2xl:text-5xl">
        Our Tools
      </h2>
      <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-12 py-12">
        {stacks.map((item) => (
          <Magnetic key={item}>
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.01,
                delay: 0.5,
              }}
              className="flex h-24 w-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-primary/50 p-2 duration-300 hover:bg-secondary"
            >
              <Image
                src={`/images/tech/${item}.svg`}
                height={40}
                width={40}
                alt=""
              />
              <span className="capitalize">{item}</span>
            </motion.span>
          </Magnetic>
        ))}
      </div>
    </div>
  )
}
