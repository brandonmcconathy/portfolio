import Image from "next/image"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <>
      <section className="bg-blue-400 h-screen relative select-none text-white text-center">
        <div className="absolute top-1/3 left-1/2 hero-div flex items-center gap-24">
          <Image src={'/brandon.JPG'} height={250} width={250} alt="Brandon McConathy profile photo" priority className="rounded-full box-pop" />
          <div>
            <h1 className="text-6xl font-semibold">Brandon McConathy</h1>
            <h2 className="text-4xl my-2">Software Developer</h2>
            <ul className="flex justify-center gap-4 text-xl">
              <li>React</li>
              <li>Javascript</li>
              <li>Next</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </section>
      <Navbar />
      <main>
        <section>
          <h1>Projects</h1>
        </section>
        <section>
          <h1>Hobbies</h1>
        </section>
        <section>
          <h1>Contact</h1>
        </section>
      </main>
    </>
  )
}
