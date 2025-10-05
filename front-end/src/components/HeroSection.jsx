import React from "react";
import profileImage from "../../public/me.jpg";
import {Reveal} from "./reveal.jsx";


export default function HeroSection() {
    const container = "container mx-auto max-w-6xl px-4";


    return (
        <section className="relative overflow-hidden py-24 md:py-28">
            {/* Background gradient blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
            </div>

            <div className={`${container} grid items-center gap-10 md:grid-cols-2`}>
                <Reveal className="flex justify-center">
                    <img
                        src={profileImage}
                        alt="Stoyan Kanev"
                        className="h-44 w-44 md:h-64 md:w-64 rounded-full object-cover ring-4 ring-white/10 shadow-xl"
                    />
                </Reveal>

                <Reveal delay={50}>
                    <h1 className="text-center md:text-left text-4xl md:text-5xl font-extrabold leading-tight">
                        Hi, I'm <span className="text-white">Stoyan</span>
                    </h1>
                    <p className="mt-4 text-center md:text-left text-base md:text-lg text-gray-300/90 max-w-xl">
                        Junior Full‑Stack Developer with a passion for clean code, delightful UX, and
                        scalable apps using <span className="font-semibold">Python</span> & <span className="font-semibold">JavaScript</span>.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-xl border border-white/15 px-5 py-2.5 font-medium text-gray-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        >
                            Contact Me
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
