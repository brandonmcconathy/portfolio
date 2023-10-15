import Image from "next/image"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <>
      <section id='top' className="bg-blue-400 hero-height relative select-none text-white text-center">
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
      <main className="mb-64">
        <div id='About' className="py-10"></div>
        <section className="bg-white px-10 py-2">
          <h1 className="text-2xl font-bold">About</h1>
        </section>
        <div id='Projects' className="py-10"></div>
        <section className="bg-white px-10 py-2">
          <h1 className="text-2xl font-bold">Projects</h1>
        </section>
        <div id='Hobbies' className="py-10"></div>
        <section className="bg-white px-10 py-2">
          <h1 className="text-2xl font-bold">Hobbies</h1>
        </section>
        <div id='Contact' className="py-10"></div>
        <section className="bg-white px-10 py-2">
          <h1 className="text-2xl font-bold">Contact</h1>
        </section>
      </main>
    </>
  )
}
