import { SiPython, SiJavascript, SiReact, SiDjango, SiNodedotjs, SiPostgresql, SiAngular, SiDocker } from "react-icons/si";
import {Reveal} from "./reveal.jsx";

export function TechStack() {
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

    const techs = [
        { name: "Python", icon: <SiPython className="mx-auto mb-2" size={28} /> },
        { name: "JavaScript", icon: <SiJavascript className="mx-auto mb-2" size={28} /> },
        { name: "React", icon: <SiReact className="mx-auto mb-2" size={28} /> },
        { name: "Django", icon: <SiDjango className="mx-auto mb-2" size={28} /> },
        { name: "Node.js", icon: <SiNodedotjs className="mx-auto mb-2" size={28} /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="mx-auto mb-2" size={28} /> },
        { name: "Angular", icon: <SiAngular className="mx-auto mb-2" size={28} /> },
        { name: "Docker", icon: <SiDocker className="mx-auto mb-2" size={28} /> }
    ];

    return (
        <section id="tech" className="py-20">
            <div className={container}>
                {sectionTitle("Tech Stack", "Tools I use to move fast with quality.")}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {techs.map((t, i) => (
                        <Reveal key={t.name} delay={i * 40} className={`${cardBase} p-4 md:p-5 text-center group`}>
                            <div className="text-slate-200 group-hover:scale-105 transition-transform">{t.icon}</div>
                            <p className="mt-1 font-medium">{t.name}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}