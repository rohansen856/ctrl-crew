import { Hero } from "@/components/hero"
import { FloatingNav } from "@/components/shared/floating-nav"
import { Members } from "@/components/team-members"

export default async function Page() {
  return (
    <main className="relative">
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <Hero />
      </section>
      <FloatingNav navItems={[]} />
      <section className="h-[400vh] w-full py-12" id="members">
        <Members />
      </section>
    </main>
  )
}
