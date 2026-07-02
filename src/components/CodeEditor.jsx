import { motion } from "framer-motion";

const code = [
  'const developer = {',
  '  name: "Nidhi Mishra",',
  '  role: "Full Stack Developer",',
  '  skills: [',
  '    "React",',
  '    "Node.js",',
  '    "Express.js",',
  '    "MongoDB",',
  '    "AWS"',
  '  ],',
  '  currentlyLearning: "Cloud Computing",',
  '  openToWork: true',
  "};",
];

function CodeEditor() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-[550px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 blur-3xl rounded-3xl"></div>

      {/* Editor */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B1120]/90 backdrop-blur-xl shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">

          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>

          <span className="text-sm text-gray-400 tracking-wide">
            developer.js
          </span>

          <div />
        </div>

        {/* Code */}

        <div className="p-8 font-mono text-[15px] leading-8">

          {code.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.08,
              }}
              className="flex gap-5"
            >
              <span className="text-gray-600 select-none w-5">
                {index + 1}
              </span>

              <span className="text-gray-300 whitespace-pre">
                {line}
              </span>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.div>
  );
}

export default CodeEditor;