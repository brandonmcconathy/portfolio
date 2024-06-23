'use client'

export default function Navbar() {

  const handleClick = (event : any) => {
    console.log(event.target.innerText)
    document.getElementById(event.target.innerText)?.scrollIntoView({behavior: 'smooth'})
  }

  return(
    <nav className="bg-blue-100 w-1/5 h-full flex flex-col items-center justify-center">
      <ul className="flex flex-col gap-10 text-black font-semibold text-xl">
        <li onClick={handleClick} className="cursor-pointer">About</li>
        <li onClick={handleClick} className="cursor-pointer">Projects</li>
        <li onClick={handleClick} className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}