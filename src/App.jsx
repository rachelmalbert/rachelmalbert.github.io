import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <About />

      <Skills />

      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
