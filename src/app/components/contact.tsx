import Link from "next/link"

export default function Contact() {
  return(
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
  )
}