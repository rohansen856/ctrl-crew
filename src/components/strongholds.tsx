import { members } from "@/config/team"

import { RadialChart } from "./radial-chart"

export async function Strongholds() {
  return (
    <div className="mt-8 px-6">
      <h2 className="mb-8 text-center font-heading text-xl lg:text-3xl 2xl:text-5xl">
        Strong Holds
      </h2>
      <div className="container mb-12 flex flex-wrap items-center justify-center gap-6 px-4 lg:gap-12 lg:px-8">
        {members.map((member) => {
          if (
            member.strongholds.reduce((res, curr) => res + curr.stats, 0) != 100
          )
            return null
          return (
            <RadialChart
              key={member.name}
              name={member.fullName}
              chartData={member.strongholds}
            />
          )
        })}
      </div>
    </div>
  )
}
