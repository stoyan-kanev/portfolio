import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {Reveal} from "./reveal.jsx";

export function Contact() {
    const container = "container mx-auto max-w-6xl px-4";
    const sectionTitle = (
        title,
        subtitle
    ) => (
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
      <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </span>
            </h2>
            {subtitle && (
                <p className="mt-3 text-sm md:text-base text-muted-foreground/80 text-gray-400">
                    {subtitle}
                </p>
            )}
        </div>
    );

    const cardBase =
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/10 hover:shadow-black/20 transition-all";


    return (
        <section id="contact" className="py-20">
            <div className={`${container} max-w-3xl`}>
                {sectionTitle("Get in Touch", "Open to roles, collaborations, and interesting problems.")}

                <Reveal className={`${cardBase} p-6 md:p-8`}>
                    <div className="grid gap-6 md:grid-cols-3">
                        <a
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                            href="https://www.linkedin.com/in/stoyan-kanev-042386207"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="text-blue-500" />
                            <span className="font-medium">LinkedIn</span>
                        </a>
                        <a
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                            href="https://github.com/LazyPotato02"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span className="font-medium">GitHub</span>
                        </a>
                        <a
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                            href="mailto:stoyan.kanev178@gmail.com"
                        >
                            <FaEnvelope className="text-red-400" />
                            <span className="font-medium">Email</span>
                        </a>
                    </div>

                </Reveal>
            </div>
        </section>
    );
}