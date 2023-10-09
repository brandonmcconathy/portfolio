import Scroll from "./scroll"
import ScrollTop from "./scrolltop"

export default function Navbar() {

  const navItems = ['About', 'Projects', 'Hobbies', 'Contact']

  return (
    <nav className="sticky top-0 bg-blue-100 flex justify-between px-10 py-6 text-xl font-bold bottom-shadow">
      <ScrollTop />
      <div className="flex gap-10">
        {navItems.map((item, index) => <Scroll section={item} key={index} />)}
      </div>
    </nav>
  )
}