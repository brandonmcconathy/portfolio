import Image from "next/image"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <>
      <section className="bg-blue-400 hero-height relative select-none text-white text-center">
        <div className="absolute top-1/2 left-1/2 hero-div flex items-center gap-24">
          <Image src={'/brandon.JPG'} height={225} width={225} alt="Brandon McConathy profile photo" priority className="rounded-full box-pop opacity-0 fade-in" />
          <div>
            <h1 className="text-6xl font-semibold opacity-0 fade-in">Brandon McConathy</h1>
            <h2 className="text-4xl my-2 opacity-0 fade-in delay-3000">Software Developer</h2>
            <ul className="flex justify-center gap-4 text-xl opacity-0 fade-in delay-4000">
              <li>React</li>
              <li>Javascript</li>
              <li>Next</li>
              <li>CSS</li>
              <li>Firebase</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </section>
      <Navbar />
      <main>
        <section id="About">
          <h1>About</h1>
        </section>
        <section id="Projects">
          <h1>Projects</h1>
        </section>
        <section id="Hobbies">
          <h1>Hobbies</h1>
        </section>
        <section id="Contact">
          <h1>Contact</h1>
        </section>
      </main>
      <h1 className="mb-96">Test</h1>
      <h1 className="mb-96">Test</h1>
      <h1 className="mb-96">Test</h1>
      <h1 className="mb-96">Test</h1>
    </>
  )
}
