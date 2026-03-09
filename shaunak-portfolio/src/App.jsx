import "./components/shared.css";

import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Marquee     from "./components/Marquee";
import About       from "./components/About";
import Skills      from "./components/Skills";
import Projects    from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function App() {
  return (
    <>
      <Navbar   scrollTo={scrollTo} />
      <Hero     scrollTo={scrollTo} />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
