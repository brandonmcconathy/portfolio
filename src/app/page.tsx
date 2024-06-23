import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Hobbies from "./components/hobbies"

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mb-64 text-center">
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
