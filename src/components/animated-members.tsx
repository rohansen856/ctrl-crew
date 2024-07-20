"use client"

import React, { forwardRef, useRef } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-secondary p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Link href={"/#rohan"}>
              <Avatar className="size-12 border-2 border-green-800">
                <AvatarImage
                  src="/images/avatars/rohan.jpg"
                  alt="@rcsen"
                  className="object-cover"
                />
                <AvatarFallback>RCS</AvatarFallback>
              </Avatar>
            </Link>
          </Circle>
          <Circle ref={div5Ref}>
            <Link href={"/#tanmay"}>
              <Avatar className="size-12 border-2 border-green-800">
                <AvatarImage
                  src="/images/avatars/tanmay.jpg"
                  alt="@rcsen"
                  className="object-cover"
                />
                <AvatarFallback>RCS</AvatarFallback>
              </Avatar>
            </Link>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Link href={"/#ritankar"}>
              <Avatar className="size-12 border-2 border-green-800">
                <AvatarImage
                  src="/images/avatars/ritankar.jpg"
                  alt="@rcsen"
                  className="object-cover"
                />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
            </Link>
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <span className="text-2xl">CC</span>
          </Circle>
          <Circle ref={div6Ref}>
            <Link href={"/#om"}>
              <Avatar className="size-12 border-2 border-green-800">
                <AvatarImage
                  src="/images/avatars/om.jpg"
                  alt="@rcsen"
                  className="object-cover"
                />
                <AvatarFallback>OT</AvatarFallback>
              </Avatar>
            </Link>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Link href={"/#aryan"}>
              <Avatar className="size-12 border-2 border-green-800">
                <AvatarImage
                  src="/images/avatars/aryan.jpg"
                  alt="@rcsen"
                  className="object-cover"
                />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
            </Link>
          </Circle>
          <Circle ref={div7Ref}>
            <Link href={"/#rohan"}>
              <Avatar className="size-12 border-2 border-green-800">
                <AvatarImage
                  src="/images/avatars/rohan.jpg"
                  alt="@rcsen"
                  className="object-cover"
                />
                <AvatarFallback>RCS</AvatarFallback>
              </Avatar>
            </Link>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  )
}
