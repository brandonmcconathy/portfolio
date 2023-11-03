export default function Navbar() {
  return(
    <nav className="bg-blue-100 w-1/5 h-full flex flex-col items-center justify-center">
      <ul className="flex flex-col gap-10 text-black font-semibold text-xl">
        <li>About</li>
        <li>Projects</li>
        <li>Hobbies</li>
      </ul>
    </nav>
  )
}