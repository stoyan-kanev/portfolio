import {Reveal} from "./reveal.jsx";


export function About() {
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
    const container = "container mx-auto max-w-6xl px-4";

    const cardBase =
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/10 hover:shadow-black/20 transition-all";

    return (
        <section id="about" className="py-20">
            <div className={container}>
                {sectionTitle("About Me", "A snapshot of what I love building and why.")}
                <Reveal className={`${cardBase} p-6 md:p-8`}>
                    <p className="text-lg leading-relaxed text-gray-300/95">
                        I'm a junior developer focused on full‑stack development. I enjoy turning complex problems into simple,
                        elegant, and intuitive experiences. My toolkit includes
                        <span className="font-semibold"> React</span>, <span className="font-semibold">Django</span>, <span className="font-semibold">FastAPI</span>,
                        <span className="font-semibold"> PostgreSQL</span>, and <span className="font-semibold">Docker</span>. I'm quick to learn, strong on ownership,
                        and happiest when shipping features that users actually love.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}