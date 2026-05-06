import {
  FaReact,
  FaPython,
  FaCode,
  FaBrain,
} from "react-icons/fa"

function Projects() {

  const projects = [
    {
      title: "Portfolio Website",

      description:
        "A modern responsive portfolio website built using React and Tailwind CSS.",

      github: "https://github.com/",
      live: "https://yourwebsite.com",

      icons: [
        <FaReact />,
        <FaCode />,
      ],
    },

    {
      title: "Fake News Detection",

      description:
        "Machine learning model using Naive Bayes to classify news articles as real or fake.",

      github: "https://github.com/",
      live: "https://yourwebsite.com",

      icons: [
        <FaPython />,
        <FaBrain />,
      ],
    },

    {
      title: "Programming Language Predictor",

      description:
        "ML web app that predicts programming language from code snippets.",

      github: "https://github.com/",
      live: "https://yourwebsite.com",

      icons: [
        <FaCode />,
        <FaPython />,
      ],
    },
  ]

  return (
    <div
      id="projects"
      className="px-12 py-24 bg-gray-950 text-white"
    >

      <h1 className="text-5xl font-bold text-center">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        {projects.map((project) => (

          <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-3 transition duration-300 shadow-xl">

            {/* Project Preview */}
            <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 mb-6 flex items-center justify-center gap-8 text-white text-6xl relative overflow-hidden">

              <div className="absolute inset-0 bg-black/20"></div>

              {project.icons.map((icon) => (
                <div className="z-10 animate-pulse">
                  {icon}
                </div>
              ))}

            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold">
              {project.title}
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-400 leading-8">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <a
                href={project.github}
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="border border-blue-500 hover:bg-blue-500 px-5 py-3 rounded-xl transition"
              >
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Projects