"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export function StaggerCaution() {
  const [isVisible, setVisible] = useState(true)
  return (
    <div
      className={cn(
        `fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-8 bg-background lg:hidden`,
        isVisible && "hidden"
      )}
    >
      <p className="text-pretty text-center text-3xl">
        If it staggers, its ur device&apos;s fault
      </p>
      <Button
        onClick={() => setVisible(false)}
        className="gap-2 bg-yellow-500 hover:bg-yellow-400"
      >
        <Icons.warning />
        Confirm
      </Button>
    </div>
  )
}
