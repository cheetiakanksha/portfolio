import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/About';
import Body from './components/Body';
import Education from './components/Education';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <Header />
        <div className='w-full mt-16'>
          <section id="about"><Body /></section>
          <section id="education"><Education /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </div>
      </div>
    </Router>
  );
}

export default App;
