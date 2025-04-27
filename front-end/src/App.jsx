import React from 'react';
import HeroSection from './components/HeroSection';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from "./components/Certificates.jsx";
import About from "./components/About.jsx";

function App() {
    return (
        <>
            <HeroSection/>
            <About/>
            <TechStack/>
            <Certificates/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;