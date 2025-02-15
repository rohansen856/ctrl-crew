"use client"

import React, { useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"

import { cn } from "@/lib/utils"

import { AnimatedNavbar } from "./sticky-nav"

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-[5000] mx-auto flex max-w-fit items-center justify-center rounded-full",
          className
        )}
      >
        <AnimatedNavbar />
      </motion.div>
    </AnimatePresence>
  )
}
