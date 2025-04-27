import React from 'react';
import HeroSection from './components/HeroSection';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from "./components/Certificates.jsx";

function App() {
    return (
        <>
            <HeroSection/>
            <TechStack/>
            <Certificates/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;