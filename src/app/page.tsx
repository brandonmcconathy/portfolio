import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import { HobbiesLeft, HobbiesRight } from "./components/hobbies"
import { hobbies } from '../../lib/hobbies'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mb-64 text-center">
        <About />
        <Projects />
        <section id="Hobbies" className="bg-white px-10 py-4 my-5 box-pop">
          <h1 className="text-2xl font-bold mb-5">Hobbies</h1>
          <HobbiesLeft title={hobbies[0].title} imgpath={hobbies[0].imgPath} description={hobbies[0].description} />
          <HobbiesRight title={hobbies[1].title} imgpath={hobbies[1].imgPath} description={hobbies[1].description} />
          <HobbiesLeft title={hobbies[2].title} imgpath={hobbies[2].imgPath} description={hobbies[2].description} />
          <HobbiesRight title={hobbies[3].title} imgpath={hobbies[3].imgPath} description={hobbies[3].description} />
        </section>
        <Contact />
      </main>
    </>
  )
}
