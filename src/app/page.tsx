import { Achievements } from "@/components/achievements"
import { Hero } from "@/components/hero"
import { FloatingNav } from "@/components/shared/floating-nav"
import { Strongholds } from "@/components/strongholds"
import { Members } from "@/components/team-members"
import { TechUsed } from "@/components/tech-stack"

export default function Page() {
  return (
    <main className="relative">
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <Hero />
      </section>
      <FloatingNav />
      <section className="h-auto w-full py-12" id="members">
        <Members />
      </section>
      <section className="h-auto w-full py-12" id="members">
        <Strongholds />
      </section>
      <section className="h-auto w-full py-12" id="tech">
        <TechUsed />
      </section>
      <section className="h-auto w-full py-12" id="achievements">
        <Achievements />
      </section>
    </main>
  )
}
