import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { IdentityForAgents } from '@/components/IdentityForAgents'
import { Experience } from '@/components/Experience'
import { Awards } from '@/components/Awards'
import { Projects } from '@/components/Projects'
import { Speaking } from '@/components/Speaking'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <IdentityForAgents />
      <Experience />
      <Awards />
      <Projects />
      <Speaking />
      <Contact />
      <Footer />
    </main>
  )
}
