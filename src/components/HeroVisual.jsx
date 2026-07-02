import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const tech = [
  {
    icon: <FaReact />,
    name: "React",
    color: "text-cyan-400",
    position: "top-5 -left-8",
  },
  {
    icon: <FaNodeJs />,
    name: "Node",
    color: "text-green-400",
    position: "top-20 -right-10",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "text-green-500",
    position: "bottom-24 -left-10",
  },
  {
    icon: <FaAws />,
    name: "AWS",
    color: "text-orange-400",
    position: "bottom-10 right-4",
  },
];

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="relative hidden lg:flex justify-center"
    >
      {/* Floating Tech Badges */}

      {tech.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className={`absolute ${item.position}
          backdrop-blur-xl
          bg-white/5
          border
          border-white/10
          rounded-2xl
          px-4
          py-3
          flex
          gap-3
          items-center`}
        >
          <span className={`text-2xl ${item.color}`}>
            {item.icon}
          </span>

          <span className="text-sm text-gray-300">
            {item.name}
          </span>
        </motion.div>
      ))}

      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 blur-[120px]" />

      {/* Editor */}

      <div className="relative w-[560px] rounded-[28px] overflow-hidden border border-white/10 bg-[#0b1120]/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,255,255,.08)]">

        {/* Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

          <div className="flex gap-2">

            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          <span className="text-gray-400 text-sm">
            developer.js
          </span>

          <div />

        </div>

        {/* Code */}

        <div className="p-8 font-mono text-[15px] leading-8">

          <CodeLine
            number="1"
            code={
              <>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
              </>
            }
          />

          <CodeLine
            number="2"
            code={
              <>
                &nbsp;&nbsp;
                <span className="text-cyan-300">name</span>
                :
                <span className="text-green-300">
                  {" "}
                  "Nidhi Mishra",
                </span>
              </>
            }
          />

          <CodeLine
            number="3"
            code={
              <>
                &nbsp;&nbsp;
                <span className="text-cyan-300">role</span>
                :
                <span className="text-green-300">
                  {" "}
                  "Full Stack Developer",
                </span>
              </>
            }
          />

          <CodeLine
            number="4"
            code={
              <>
                &nbsp;&nbsp;
                <span className="text-cyan-300">backend</span>
                :
                <span className="text-orange-300">
                  {" "}
                  true,
                </span>
              </>
            }
          />

          <CodeLine
            number="5"
            code={
              <>
                &nbsp;&nbsp;
                <span className="text-cyan-300">
                  currentlyLearning
                </span>
                :
                <span className="text-green-300">
                  {" "}
                  "AWS Cloud",
                </span>
              </>
            }
          />

          <CodeLine
            number="6"
            code={
              <>
                &nbsp;&nbsp;
                <span className="text-cyan-300">stack</span>:
                <span className="text-yellow-300"> [</span>
              </>
            }
          />

          <CodeLine
            number="7"
            code={
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-green-300">
                  "React",
                </span>
              </>
            }
          />

          <CodeLine
            number="8"
            code={
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-green-300">
                  "Node.js",
                </span>
              </>
            }
          />

          <CodeLine
            number="9"
            code={
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-green-300">
                  "MongoDB",
                </span>
              </>
            }
          />

          <CodeLine
            number="10"
            code={
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-green-300">
                  "Express",
                </span>
              </>
            }
          />

          <CodeLine
            number="11"
            code={
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-green-300">
                  "AWS"
                </span>
              </>
            }
          />

          <CodeLine
            number="12"
            code={
              <>
                &nbsp;&nbsp;
                <span className="text-yellow-300">]</span>
              </>
            }
          />

          <CodeLine
            number="13"
            code={
              <>
                <span className="text-yellow-300">{"}"}</span>
              </>
            }
          />

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 px-6 py-4 flex gap-5 text-gray-400 text-sm">

          <div className="flex items-center gap-2">
            <FaGithub />
            GitHub
          </div>

          <div className="flex items-center gap-2">
            <FaDocker />
            Docker
          </div>

          <div className="flex items-center gap-2">
            <SiExpress />
            Express
          </div>

        </div>

      </div>
    </motion.div>
  );
}

function CodeLine({ number, code }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: .5,
      }}
      className="flex gap-6"
    >
      <span className="w-5 text-gray-600 select-none">
        {number}
      </span>

      <span>{code}</span>
    </motion.div>
  );
}

export default HeroVisual;