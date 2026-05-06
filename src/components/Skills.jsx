import { FaCode, FaDatabase, FaTools, FaBrain, FaGlobe } from "react-icons/fa"

function Skills() {

  const skillCategories = [
    {
      title: "Programming",
      icon: <FaCode />,
      skills: ["C", "Python"],
    },

    {
      title: "Web Technologies",
      icon: <FaGlobe />,
      skills: ["HTML", "CSS", "React"],
    },

    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["SQL", "DBMS"],
    },

    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: ["GitHub", "Jenkins"],
    },

    {
      title: "Concepts",
      icon: <FaBrain />,
      skills: ["Data Structures", "Data Mining", "Machine Learning"],
    },
  ]

  return (
    <div className="px-12 py-24 bg-black text-white">

      <h1 className="text-5xl font-bold text-center">
        Skills
      </h1>

      <div className="grid md:grid-cols-2 gap-10 mt-16">

        {skillCategories.map((category) => (

          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-xl">

            {/* Icon */}
            <div className="text-5xl text-blue-500 mb-6">
              {category.icon}
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-8">
              {category.title}
            </h2>

            {/* Skills */}
            <div className="flex flex-wrap gap-4">

              {category.skills.map((skill) => (

                <div className="bg-black border border-gray-700 px-5 py-3 rounded-xl text-gray-200 hover:border-blue-500 hover:text-blue-400 hover:scale-105 transition duration-300 shadow-lg">

                  {skill}

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Skills