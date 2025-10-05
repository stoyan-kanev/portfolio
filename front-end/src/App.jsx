import React from 'react';
import HeroSection from './components/HeroSection';
import {About} from "./components/About.jsx";
import {TechStack} from "./components/TechStack.jsx";
import {Projects} from "./components/Projects.jsx";
import {Certificates} from "./components/Certificates.jsx";
import {Footer} from "./components/Footer.jsx";
import {Contact} from "./components/Contact.jsx";


function App() {

    return (
        <>
            <HeroSection/>
            <About/>
            <Certificates/>
            <Projects/>
            <TechStack/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;