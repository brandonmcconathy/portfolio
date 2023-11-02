import Image from "next/image"
import Navbar from "./navbar"

export default function Hero() {
  return(
    <header id='top' className="bg-blue-400 flex h-screen select-none text-white text-center">
        <Navbar />
        <div className="flex items-center gap-24 mx-auto">
          <Image src={'/brandon.JPG'} height={225} width={225} alt="Brandon McConathy profile photo" priority className="rounded-full box-pop opacity-0 fade-in" />
          <div>
            <h1 className="text-6xl font-semibold opacity-0 fade-in">Brandon McConathy</h1>
            <h2 className="text-4xl my-2 opacity-0 fade-in delay-3000">Software Developer</h2>
            <h3 className="text-lg">(909) 539-7947 | brandonmcconathy4321@gmail.com</h3>
          </div>
        </div>
      </header>
  )
}