import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CloudJourney from "./components/CloudJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-[#030712] text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Projects />
      <CloudJourney />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;