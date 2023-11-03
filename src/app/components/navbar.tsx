export default function Navbar() {
  return(
    <nav className="bg-blue-100 w-1/5 h-full flex flex-col items-center justify-center">
      <ul className="flex flex-col gap-10 text-black font-semibold text-xl">
        <li id="about">About</li>
        <li id="projects">Projects</li>
        <li id="hobbies">Hobbies</li>
      </ul>
    </nav>
  )
}