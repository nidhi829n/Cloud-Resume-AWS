import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Cloud,
  Rocket,
} from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={24} />,
    title: "Full Stack Development",
    description:
      "Building scalable web applications using React, Node.js, Express & MongoDB.",
  },
  {
    icon: <BrainCircuit size={24} />,
    title: "AI Integration",
    description:
      "Developing AI-powered applications using Gemini & OpenAI APIs.",
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Technologies",
    description:
      "Currently exploring AWS while building cloud-ready applications.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Problem Solving",
    description:
      "Solved 350+ LeetCode problems with strong DSA fundamentals.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="text-cyan-400 font-medium">
            ABOUT ME
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Passionate about building
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}modern web applications.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-gray-400 text-lg leading-9">
            I'm a Computer Science undergraduate passionate about
            full-stack development, backend engineering and cloud
            technologies. I enjoy building real-world applications,
            integrating AI capabilities and continuously improving my
            problem-solving skills through Data Structures &
            Algorithms.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              hover:-translate-y-2
              hover:border-cyan-400/20
              transition-all
              duration-300
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center mb-6">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-400 leading-8">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default About;