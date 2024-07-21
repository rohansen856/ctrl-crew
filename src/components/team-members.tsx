import { members } from "@/config/team"

import { AnimatedTooltip } from "./avatar-stack"
import { MemberSection } from "./member-section"
import { FileTreeDemo } from "./member-tree"

export async function Members() {
  return (
    <div className="mt-8 px-6">
      <h2 className="mb-8 text-center font-heading text-xl lg:text-3xl 2xl:text-5xl">
        Team Members
      </h2>
      <div className="mb-8 flex justify-center">
        <AnimatedTooltip
          items={members.map((member, i) => ({
            image: `/images/avatars/${member.name.toLowerCase() || "rohan"}.jpg`,
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
        <MemberSection key={i} index={i} member={member} />
      ))}
    </div>
  )
}
