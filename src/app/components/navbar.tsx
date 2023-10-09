import Scroll from "./scroll"

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-blue-100 flex justify-between px-10 py-6 text-xl font-bold bottom-shadow">
      <h1>Brandon McConathy</h1>
      <div className="flex gap-10">
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Hobbies</h2>
        <h2>Contact</h2>
      </div>
    </nav>
  )
}