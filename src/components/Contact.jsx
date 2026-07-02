import { useState } from "react"; // 1. Import useState
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  CheckCircle,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  // 2. State to handle the copy notification toast/text
  const [copied, setCopied] = useState(false);
  const emailAddress = "mishra2004nidhi@gmail.com";

  const handleEmailClick = (e) => {
    // We still let the default mailto run just in case they have an app...
    // But we also copy it to their clipboard automatically!
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    
    // Reset the "Copied!" message after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  const highlights = [
    "Full Stack MERN Developer",
    "AI-Powered Applications",
    "REST APIs & JWT Authentication",
    "MongoDB & Express.js",
    "AWS Cloud Learner",
    "Strong DSA & Problem Solving",
  ];

  return (
    <section id="contact" className="py-24 px-6 text-white bg-[#030712]">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-semibold">
            LET'S CONNECT
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">
            Have an Idea?
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Let's Build It Together.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-7">
            Open to internships, collaborations and exciting projects.
            Let's create something meaningful together.
          </p>
        </motion.div>

        {/* Well-Balanced Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mt-16">
          
          {/* Left Column: Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-200 mb-6">Why Work With Me?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
                  <CheckCircle size={20} className="text-cyan-400 shrink-0" />
                  <span className="text-gray-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: CTA and Social Grids */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-3xl p-8 lg:p-12 backdrop-blur-md"
          >
            {/* CTA Button */}
            <a
              href={`mailto:${emailAddress}`}
              onClick={handleEmailClick}
              className="mb-10 text-center w-full sm:w-auto rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-10 py-4 font-semibold shadow-[0_0_35px_rgba(124,58,237,.35)] transition duration-300 hover:scale-105"
            >
              {copied ? "Email Copied!" : "Let's Connect Directly"}
            </a>

            {/* Social Grid Container */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md justify-items-center">
              
              {/* Email Card */}
              <a
                href={`mailto:${emailAddress}`}
                onClick={handleEmailClick}
                className="group flex h-36 w-full max-w-[160px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10 cursor-pointer"
              >
                <Mail size={30} className="text-cyan-400 transition group-hover:scale-110" />
                <h4 className="mt-3 font-semibold text-sm sm:text-base">
                  {copied ? "Copied!" : "Email"}
                </h4>
                <p className="mt-1 text-xs text-gray-400 text-center px-2">
                  {copied ? "Ready to paste" : "Contact Me"}
                </p>
              </a>

              {/* Github */}
              <a
                href="https://github.com/nidhi829n"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-36 w-full max-w-[160px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >
                <FaGithub size={30} className="text-cyan-400 transition group-hover:rotate-12" />
                <h4 className="mt-3 font-semibold text-sm sm:text-base">GitHub</h4>
                <p className="mt-1 text-xs text-gray-400">View Projects</p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nidhi-mishra-512327243/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-36 w-full max-w-[160px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >
                <FaLinkedin size={30} className="text-cyan-400 transition group-hover:scale-110" />
                <h4 className="mt-3 font-semibold text-sm sm:text-base">LinkedIn</h4>
                <p className="mt-1 text-xs text-gray-400">Connect</p>
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="group flex h-36 w-full max-w-[160px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >
                <Download size={30} className="text-cyan-400 transition group-hover:translate-y-1" />
                <h4 className="mt-3 font-semibold text-sm sm:text-base">Resume</h4>
                <p className="mt-1 text-xs text-gray-400">Download CV</p>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;