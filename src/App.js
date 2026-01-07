import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Certificate from './components/Certificate/Certificate';
import Education from './components/Education/Education';
import Experience from "./components/Experience/Experience";

import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <Projects />
      <Skills />
      <Certificate />
      <Education />
      <Experience />
      <About />
      <Footer />
    </div>
  );
}

export default App;
