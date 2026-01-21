import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
