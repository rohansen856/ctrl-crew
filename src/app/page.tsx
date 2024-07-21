import { Achievements } from "@/components/achievements"
import { Hero } from "@/components/hero"
import { FloatingNav } from "@/components/shared/floating-nav"
// import { StaggerCaution } from "@/components/stagger-caution"
import { Members } from "@/components/team-members"

export default async function Page() {
  return (
    <main className="relative">
      {/* <StaggerCaution /> */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <Hero />
      </section>
      <FloatingNav />
      <section className="h-auto w-full py-12" id="members">
        <Members />
      </section>
      <section className="h-auto w-full py-12" id="achievements">
        <Achievements />
      </section>
    </main>
  )
}
