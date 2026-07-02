import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712]"
    >
      {/* Left Glow */}
      <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[160px]" />

      {/* Right Glow */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[160px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)
        `,
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <HeroContent />

          <HeroVisual />

        </div>

      </div>
    </section>
  );
}

export default Hero;