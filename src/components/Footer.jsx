import { ArrowUp, Heart } from "lucide-react";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full py-8 px-6 border-t border-white/5 bg-[#030712]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Credit Text */}
          <p className="text-gray-500 font-medium text-sm flex items-center gap-2 tracking-wide select-none">
            Made by Nidhi Mishra with
            <Heart
              size={15}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            using React & Tailwind CSS
          </p>

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