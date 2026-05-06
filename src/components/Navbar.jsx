import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-black text-white border-b border-gray-800 sticky top-0 z-50">

      <h1 className="text-2xl font-bold">
        Mrudhula
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg">

        <a href="#about" className="hover:text-blue-500 transition">
          About
        </a>

        <a href="#projects" className="hover:text-blue-500 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-blue-500 transition">
          Contact
        </a>

      </div>

      {/* Mobile Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-8 md:hidden text-xl">

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  )
}

export default Navbar