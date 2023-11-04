export default function Navbar() {

  const handleClick = (event) => {
    console.log(event)
    document.getElementById()?.scrollIntoView
  }

  return(
    <nav className="bg-blue-100 w-1/5 h-full flex flex-col items-center justify-center">
      <ul className="flex flex-col gap-10 text-black font-semibold text-xl">
        <li onClick={handleClick}>About</li>
        <li onClick={handleClick}>Projects</li>
        <li onClick={handleClick}>Hobbies</li>
      </ul>
    </nav>
  )
}