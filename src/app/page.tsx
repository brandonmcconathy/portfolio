import Navbar from "./components/navbar"

export default function Home() {
  return (
    <>
      <section className="homepage-img bg-blue-400 relative select-none text-white">
        <h1 className="text-5xl text-center absolute top-1/4 left-1/2 homepage-img-text fade-in font-semibold">Brandon McConathy</h1>
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
