import { projects } from '../data/projects';
import {Reveal} from "./reveal.jsx";


export function Projects() {
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
        <section id="projects" className="py-20">
            <div className={container}>
                {sectionTitle("Projects", "A curated selection showcasing code quality, UX and depth.")}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={index * 60} className={`${cardBase} p-6 flex flex-col`}>
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="mt-2 text-gray-300/90 leading-relaxed flex-1">{project.description}</p>

                            <div className="mt-4 flex gap-3">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                                >
                                    GitHub
                                </a>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                                    >
                                        Live
                                    </a>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}