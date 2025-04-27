import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <TechStack/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;