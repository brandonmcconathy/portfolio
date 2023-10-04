import Image from "next/image"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <>
      <section className="bg-blue-400 h-screen relative select-none text-white text-center">
        <div className="absolute top-1/4 left-1/2 hero-div flex gap-10">
          <Image src={'/brandon.JPG'} height={150} width={150} alt="Brandon McConathy profile photo" priority className="rounded-full" />
          <div>
            <h1 className="text-5xl font-semibold">Brandon McConathy</h1>
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
