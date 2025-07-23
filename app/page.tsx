import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <ScrollArea className="h-full">
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </ScrollArea>
  )
}
