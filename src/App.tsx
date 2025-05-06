import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import GetInvolved from './components/GetInvolved';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <GetInvolved />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;