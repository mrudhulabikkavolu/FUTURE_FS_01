import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa"

function Contact() {
  return (
    <div
      id="contact"
      className="px-12 py-24 bg-black text-white"
    >

      <h1 className="text-5xl font-bold text-center">
        Contact
      </h1>

      <p className="text-gray-400 text-center mt-6 text-lg">
        Feel free to connect with me through the platforms below.
      </p>

      <div className="max-w-3xl mx-auto mt-16">

        <div className="bg-gray-950 border border-gray-800 rounded-3xl p-10 hover:border-blue-500 transition duration-300 shadow-xl">

          <h2 className="text-3xl font-bold mb-10 text-blue-400">
            Contact Me
          </h2>

          <div className="space-y-10">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-3xl text-blue-500" />

              <div>
                <p className="text-gray-400">
                  Email
                </p>

                <p className="text-lg">
                  mrudulabikkavolu@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-3xl text-blue-500" />

              <div>
                <p className="text-gray-400">
                  Phone
                </p>

                <p className="text-lg">
                  +91 8328649412
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaGithub className="text-3xl text-blue-500" />

              <div>
                <p className="text-gray-400">
                  GitHub
                </p>

                <a
                  href="https://github.com/mrudhulabikkavolu"
                  target="_blank"
                  className="text-lg hover:text-blue-400"
                >
                  https://github.com/mrudhulabikkavolu
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-3xl text-blue-500" />

              <div>
                <p className="text-gray-400">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/mrudhula-bikkavolu-3a5a61330/"
                  target="_blank"
                  className="text-lg hover:text-blue-400"
                >
                  https://www.linkedin.com/in/mrudhula-bikkavolu-3a5a61330/
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact