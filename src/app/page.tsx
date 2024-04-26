import Link from "next/link"
import Project from "./components/project"
import { HobbiesLeft, HobbiesRight } from "./components/hobbies"
import { projects } from '../../lib/projects'
import { hobbies } from '../../lib/hobbies'
import Hero from "./components/hero"

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mb-64 text-center">
        <section id="About" className="bg-white px-10 py-6 my-5 box-pop">
          <h1 className="text-2xl font-bold mb-2">About</h1>
          <p className="px-24">I am a motivated software developer with experience in React.js, Typescript/Javascript, Java, SQL, Next.js, Firebase, HTML, CSS, Python, MATLAB, C#, C++, Swift, .NET, OOP, RESTful API, and Git. I am always eager to step outside my comfort zone and embrace new technologies, viewing each as an exciting opportunity for growth and innovation in my journey as a programmer. I am very excited to grow and improve in the technical industry.</p>
        </section>
        <section id="Projects" className="bg-white px-10 py-4 my-5 box-pop">
          <h1 className="text-2xl font-bold mb-5">Projects</h1>
          <div className="flex justify-center flex-wrap gap-5">
            {projects.map((project) => <Project title={project.title} pageLink={project.pageLink} gitHubLink={project.gitHubLink} imgPath={project.imgPath} tech={project.tech} description={project.description} key={project.id} />)}
          </div>
        </section>
        <section id="Hobbies" className="bg-white px-10 py-4 my-5 box-pop">
          <h1 className="text-2xl font-bold mb-5">Hobbies</h1>
          <HobbiesLeft title={hobbies[0].title} imgpath={hobbies[0].imgPath} description={hobbies[0].description} />
          <HobbiesRight title={hobbies[1].title} imgpath={hobbies[1].imgPath} description={hobbies[1].description} />
          <HobbiesLeft title={hobbies[2].title} imgpath={hobbies[2].imgPath} description={hobbies[2].description} />
          <HobbiesRight title={hobbies[3].title} imgpath={hobbies[3].imgPath} description={hobbies[3].description} />
        </section>
        <section id="Contact" className="bg-white px-10 py-4 my-5 box-pop">
          <h1 className="text-2xl font-bold mb-4">Contact</h1>
          <div className="flex flex-col items-center gap-1 text-lg mb-4 font-semibold">
            <h2>brandonmcconathy4321@gmail.com</h2>
            <h2>(909) 539-7947</h2>
          </div>
          <div className="flex justify-center gap-10 text-lg">
            <Link href='https://github.com/brandonmcconathy' target="_blank" className="bg-black text-white rounded-lg px-3 py-1 font-semibold hover:bg-gray-700  transition duration-300">Github</Link>
            <Link href='https://www.linkedin.com/in/brandon-mcconathy-646b121a9/' target="_blank" className="linkedin-blue text-white rounded-lg px-3 py-1 font-semibold hover:bg-cyan-800 transition duration-300">LinkedIn</Link>
          </div>
        </section>
      </main>
    </>
  )
}
