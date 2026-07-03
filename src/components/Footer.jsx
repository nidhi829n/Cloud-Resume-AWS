import { useEffect, useState } from "react";
import { ArrowUp, Heart } from "lucide-react";

function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  const API_URL = import.meta.env.VITE_API_URL;

  if (!API_URL) {
  console.error("VITE_API_URL is not defined");
}

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full py-8 px-6 border-t border-white/5 bg-[#030712]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Credit + Visitor Count */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <p className="text-gray-500 font-medium text-sm flex items-center gap-2 tracking-wide select-none">
            Made by Nidhi Mishra with
            <Heart
              size={15}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            using React & Tailwind CSS
          </p>

          <p className="text-gray-400 text-sm">
            👁 Visitors:{" "}
            <span className="font-semibold text-cyan-400">
              {visitorCount}
            </span>
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollTop}
          aria-label="Scroll to top"
          className="group w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-900/20 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ArrowUp
            size={20}
            className="text-white transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </button>

      </div>
    </footer>
  );
}

export default Footer;