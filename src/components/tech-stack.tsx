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
    <div className="flex w-full flex-col items-center justify-center">
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
              className="flex h-24 w-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 p-2 duration-300 hover:bg-secondary"
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
