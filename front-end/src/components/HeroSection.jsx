import React from 'react';

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

            </div>
        </section>
    );
}

export default HeroSection;
