import { Achievements } from "@/components/achievements"
import { Hero } from "@/components/hero"
import Particles from "@/components/magicui/particles"
import { FloatingNav } from "@/components/shared/floating-nav"
import { Members } from "@/components/team-members"

export default async function Page() {
  return (
    <main className="relative">
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <Hero />
      </section>
      <FloatingNav navItems={[]} />
      <section className="h-auto w-full py-12" id="members">
        <Members />
      </section>
      <section className="h-auto w-full py-12" id="achievements">
        <Achievements />
      </section>
      <Particles
        className="absolute inset-0 -z-10"
        quantity={1000}
        ease={80}
        color={"#ddd"}
        refresh
      />
    </main>
  )
}
