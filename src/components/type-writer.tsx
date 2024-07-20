"use client"

import Typewriter from "typewriter-effect"

export function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web developers",
          "Blockchain enthusiasts",
          "Backend engineers",
          "Frontend designers",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  )
}
