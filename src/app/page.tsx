import Image from "next/image"
import Navbar from "./components/navbar"
import Link from "next/link"

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
              <li>Java</li>
              <li>Next</li>
              <li>CSS</li>
              <li>Firebase</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </section>
      <Navbar />
      <main className="mb-64 text-center">
        <div id='About' className="py-10"></div>
        <section className="bg-white px-10 py-6 box-pop">
          <h1 className="text-2xl font-bold mb-2">About</h1>
          <p className="pl-5">I am a motivated software developer with experience in React.js, Javascript, Java, SQL, Next.js, Firebase, HTML, CSS, and Python. I am always eager to step outside my comfort zone and embrace new technologies, viewing each as an exciting opportunity for growth and innovation in my journey as a programmer. I am very excited to grow and improve in the technical industry.</p>
        </section>
        <div id='Projects' className="py-10"></div>
        <section className="bg-white px-10 py-4 box-pop">
          <h1 className="text-2xl font-bold">Projects</h1>
        </section>
        <div id='Hobbies' className="py-10"></div>
        <section className="bg-white px-10 py-4 box-pop">
          <h1 className="text-2xl font-bold">Hobbies</h1>
        </section>
        <div id='Contact' className="py-10"></div>
        <section className="bg-white px-10 py-4 box-pop">
          <h1 className="text-2xl font-bold mb-4">Contact</h1>
          <div className="flex flex-col items-center gap-2 text-lg mb-4 font-semibold">
            <h2>brandonmcconathy4321@gmail.com</h2>
            <h2>(909) 539-7947</h2>
          </div>
          <div className="flex justify-center gap-10 text-lg">
            <Link href='https://github.com/brandonmcconathy' target="_blank" className="bg-black text-white rounded-lg px-3 py-1 font-semibold">Github</Link>
            <Link href='https://www.linkedin.com/in/brandon-mcconathy-646b121a9/' target="_blank" className="linkedin-blue text-white rounded-lg px-3 py-1 font-semibold">LinkedIn</Link>
          </div>
        </section>
      </main>
    </>
  )
}
