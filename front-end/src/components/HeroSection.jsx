import React from "react";
import profileImage from "../../public/me.jpg";
export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                    src={profileImage}
                    alt="Stoyan Kanev"
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto shadow-lg"
                />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Stoyan</h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-xl mx-auto">
                    Junior Full-Stack Developer with a passion for clean code, UI/UX, and building scalable apps using Python & JavaScript.
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                    <a
                        href="#projects"
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-2 border border-gray-500 hover:border-white rounded-lg text-gray-300 hover:text-white transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
