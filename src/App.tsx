import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import ScrollToTop from './components/ScrollToTop';
import LeftSidebar from './components/LeftSidebar';
import Footer from './components/Footer';


function App() {
  const [activeSection, setActiveSection] = useState('home');

  // --- THIS IS THE DEFINITIVE FIX ---
  // This useEffect hook runs only once when the app first loads.
  useEffect(() => {
    // 1. Disable the browser's automatic scroll restoration.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 2. Force the URL to the top anchor and scroll to the top.
    // This is more forceful than just scrollTo and also fixes the URL hash issue.
    window.location.href = '#home';
    window.scrollTo(0, 0);

  }, []); // The empty array ensures this only runs on the initial render.
  // --- END OF THE FIX ---

  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (homeInView) setActiveSection('home');
    if (aboutInView) setActiveSection('about');
    if (skillsInView) setActiveSection('skills');
    if (projectsInView) setActiveSection('projects');
    if (contactInView) setActiveSection('contact');
  }, [homeInView, aboutInView, skillsInView, projectsInView, contactInView]);

  return (
    <div className="app-container">
      <Header activeSection={activeSection} />
      <LeftSidebar activeSection={activeSection} />

      <main>
        <div id="home" ref={homeRef}><Welcome /></div>
        <div id="about" ref={aboutRef}><About /></div>
        <div id="skills" ref={skillsRef}><Skills /></div>
        <div id="projects" ref={projectsRef}><Projects /></div>
        <div id="contact" ref={contactRef}><Contact /></div>
      </main>

      <SocialSidebar activeSection={activeSection} />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;