import React from 'react'
import About from './components/About';
import Developers from './components/Developers';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Developers />
        <Subscribe />
        <Footer />
    </div>
  );
}

export default App;
