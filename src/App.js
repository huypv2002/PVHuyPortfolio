import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Internships from "./components/Internships";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App tracking-widest scrollbar-custom dark:bg-black dark:text-white">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Internships />
      <ContactMe />
    </div>
  );
}

export default App;
