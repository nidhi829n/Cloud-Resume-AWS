import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

function HeroContent() {
    const handleScroll = () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
    >
      <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-cyan-300 text-sm">

        👋 Welcome to my Portfolio

      </div>

      <h1 className="mt-8 text-6xl xl:text-7xl font-black leading-tight tracking-tight">

        Hi, I'm

        <br />

        <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">

          Nidhi Mishra

        </span>

      </h1>

      <h2 className="mt-7 text-3xl font-semibold text-white">

        Full Stack Developer

      </h2>

      <p className="mt-5 text-cyan-300 text-xl font-medium">

        Building AI-powered & Scalable Web Applications.

      </p>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

        Passionate about crafting secure full-stack applications,
        solving DSA problems and exploring AWS Cloud to build
        production-ready systems.

      </p>

      <div className="mt-12 flex flex-wrap gap-5">

       <button
        onClick={handleScroll}
        className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-medium transition hover:scale-105 shadow-[0_0_35px_rgba(124,58,237,.35)]"
      >
        View Projects

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </button>



      </div>

    </motion.div>
  );
}

export default HeroContent;