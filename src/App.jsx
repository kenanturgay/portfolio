import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-noise opacity-5"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-primary-50/20 dark:from-primary-900/20 via-white dark:via-black to-white dark:to-black"></div>

      <div className="relative">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        <section id="hero" className={`${activeSection !== 'hero' ? 'hidden' : ''}`}>
          <Hero setActiveSection={setActiveSection} />
        </section>

        <section id="about" className={`${activeSection !== 'about' ? 'hidden' : ''}`}>
          <About />
        </section>

        <section id="experience" className={`${activeSection !== 'experience' ? 'hidden' : ''}`}>
          <Experience />
        </section>

        <section id="skills" className={`${activeSection !== 'skills' ? 'hidden' : ''}`}>
          <Skills />
        </section>

        <section id="projects" className={`${activeSection !== 'projects' ? 'hidden' : ''}`}>
          <Projects />
        </section>

        <section id="contact" className={`${activeSection !== 'contact' ? 'hidden' : ''}`}>
          <Contact />
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
