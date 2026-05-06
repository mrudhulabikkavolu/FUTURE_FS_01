import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import profile from "./assets/profile.jpeg"
import resume from "./assets/resume.pdf"

import { TypeAnimation } from "react-type-animation"
import { FaReact, FaPython, FaJs } from "react-icons/fa"
import { motion } from "framer-motion"

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">

      <Navbar />

      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 top-40 left-10"></div>

      <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-20 right-10"></div>

      {/* Floating Icons */}
      <FaReact className="hidden md:block absolute top-32 left-20 text-blue-500 text-6xl animate-bounce" />

      <FaPython className="hidden md:block absolute bottom-32 left-32 text-yellow-400 text-6xl animate-pulse" />

      <FaJs className="hidden md:block absolute top-40 right-20 text-yellow-300 text-6xl animate-bounce" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-[90vh] flex flex-col md:flex-row justify-center items-center gap-16 px-10 text-center md:text-left relative z-10"
      >

        {/* Profile Image */}
        <img
          src={profile}
          alt="profile"
          className="w-72 h-72 object-cover rounded-full border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-300"
        />

        {/* Hero Content */}
        <div>

          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Hi, I'm Mrudhula
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Web Development Intern",
              2000,
              "AIML Student",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl mt-6 text-blue-400 font-semibold block"
          />

          <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-8">
            Passionate about building modern websites,
            learning React, and creating beautiful user experiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-8 justify-center md:justify-start flex-wrap">

          

            <a
              href={resume}
              download
              className="border border-blue-500 hover:bg-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold transition duration-300"
            >
              Download Resume
            </a>

          </div>

        </div>

      </motion.div>

      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}

export default App