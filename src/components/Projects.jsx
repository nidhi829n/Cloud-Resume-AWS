import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Plane,
  HeartHandshake,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    icon: <Brain size={28} />,
    title: "Code Analyst",
    subtitle: "AI Powered Code Review Platform",
    description:
      "An intelligent code review platform that analyzes source code using Gemini AI, provides optimization suggestions, secure authentication, user history, and project management.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Gemini AI",
    ],
    github: "https://github.com/nidhi829n/Code-Analyst",
    demo: "https://code-analyst.vercel.app/",
    featured: true,
  },
  {
    icon: <HeartHandshake size={26} />,
    title: "SafeHeal",
    subtitle: "Mental Health Platform",
    description:
      "AI-powered mental wellness platform with emotion tracking, authentication, and personalized support using Gemini AI.",
    tech: [
      "React",
      "Node",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/nidhi829n/SafeHeal",
    demo: "https://safe-heal.vercel.app/",
  },
  {
    icon: <Plane size={26} />,
    title: "Wanderlust",
    subtitle: "Travel Booking Platform",
    description:
      "Full-stack travel platform with authentication, Cloudinary, Mapbox integration and secure booking experience.",
    tech: [
      "Node",
      "Express",
      "MongoDB",
      "Passport.js",
    ],
    github: "https://github.com/nidhi829n/WanderLust",
    demo: "https://major-project-lh8g.onrender.com/listings",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="text-cyan-400 font-medium">
            FEATURED PROJECTS
          </span>

          <h2 className="mt-4 text-5xl font-black">

            Things I've

            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Built.
            </span>

          </h2>

        </motion.div>

        <div className="mt-20 space-y-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .12,
              }}
              className="
              rounded-[30px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-10
              hover:border-cyan-400/30
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div className="flex flex-col lg:flex-row justify-between gap-10">

                <div className="flex-1">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">

                      {project.icon}

                    </div>

                    <div>

                      <h3 className="text-3xl font-bold">

                        {project.title}

                      </h3>

                      <p className="text-cyan-300">

                        {project.subtitle}

                      </p>

                    </div>

                  </div>

                            <p className="mt-8 text-gray-400 leading-8">

                                {project.description}

                            </p>

                            <div className="flex flex-wrap gap-3 mt-8">

                                {project.tech.map((tech) => (

                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                                >

                                    {tech}

                                </span>

                                ))}

                            </div>

                            </div>
            <div className="flex flex-col justify-between">

            <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 hover:scale-105 transition w-full justify-center"
                >
                Live Demo
                <ArrowUpRight size={18} />
                </button>
            </a>

            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button
                className="flex items-center gap-2 mt-5 rounded-full border border-white/10 bg-white/5 px-6 py-3 hover:bg-white/10 transition w-full justify-center"
                >
                GitHub
                <FaGithub size={18} />
                </button>
            </a>

            </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;