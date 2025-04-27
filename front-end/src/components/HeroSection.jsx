import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

function HeroSection() {
    return (
        <section id="home" className="hero">
            <div className="hero-me">
                <div>
                    <h1 className="hero-title">Hi, I'm Stoyan</h1>
                    <p className="hero-subtitle">Junior Web Developer</p>
                    <a href="#projects" className="hero-button">View Projects</a>

                </div>
                <img src="/1647349180831.jpg" alt="me"/>

                <div className="contact-items">

                    <div className="contact-item">
                        <FaLinkedin className="contact-icon"/>
                        <a href="https://www.linkedin.com/in/stoyan-kanev-042386207" target="_blank"
                           rel="noopener noreferrer">
                            Stoyan Kanev
                        </a>
                    </div>
                    <div className="contact-item">
                        <FaGithub className="contact-icon"/>
                        <a href="https://github.com/LazyPotato02" target="_blank" rel="noopener noreferrer">
                            Stoyan Kanev
                        </a>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon"/>
                        <a href="mailto:stoyan.kanev178@gmail.com">stoyan.kanev178@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
