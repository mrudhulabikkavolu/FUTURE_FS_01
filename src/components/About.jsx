import { FaGraduationCap, FaCode, FaLaptop } from "react-icons/fa"

function About() {
  return (
    <div
      id="about"
      className="px-12 py-24 bg-gray-950 text-white"
    >

      <h1 className="text-5xl font-bold text-center">
        About Me
      </h1>

      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-10">

        {/* Education */}
        <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 shadow-xl">

          <FaGraduationCap className="text-5xl text-blue-500 mb-6" />

          <h2 className="text-2xl font-bold mb-4">
            Education
          </h2>

          <p className="text-gray-400 leading-8">
            Pursuing B.Tech in Artificial Intelligence and
            Machine Learning at Gayatri Vidya Parishad
            College of Engineering for Women.
          </p>

        </div>

        {/* Skills */}
        <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 shadow-xl">

          <FaCode className="text-5xl text-blue-500 mb-6" />

          <h2 className="text-2xl font-bold mb-4">
            Skills
          </h2>

          <p className="text-gray-400 leading-8">
            Familiar with Python, C, HTML, CSS,
            SQL, DBMS, and basic frontend development
            using React.
          </p>

        </div>

        {/* Interests */}
        <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 shadow-xl">

          <FaLaptop className="text-5xl text-blue-500 mb-6" />

          <h2 className="text-2xl font-bold mb-4">
            Interests
          </h2>

          <p className="text-gray-400 leading-8">
            Interested in web development,
            machine learning, problem solving,
            and building practical projects.
          </p>

        </div>

      </div>

    </div>
  )
}

export default About