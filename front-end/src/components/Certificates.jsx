import {Reveal} from "./reveal.jsx";

export function Certificates() {
    const certs = [
        {
            href: "https://softuni.bg/certificates/details/225828/6173141e",
            img: "/js.png",
            alt: "JS Diploma",
            caption: "Software Engineering with JavaScript"
        },
        {
            href: "https://softuni.bg/certificates/details/171643/4f930d85",
            img: "/python.png",
            alt: "Python Diploma",
            caption: "Software Engineering with Python"
        },
        {
            href: "https://softuni.bg/certificates/details/185444/4677035a",
            img: "/python_full_stack.png",
            alt: "Python Full Stack Diploma",
            caption: "Python Full‑Stack Developer"
        }
    ];
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
        <section id="certificates" className="py-20">
            <div className={container}>
                {sectionTitle("Certificates", "Formal learning that backs up my practical work.")}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {certs.map((c, i) => (
                        <Reveal key={c.href} delay={i * 50} className={`${cardBase} group block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400`}>
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={c.img}
                                    alt={c.alt}
                                    className="h-full w-full object-contain p-4 group-hover:scale-[1.02] transition-transform"
                                />
                            </div>
                            <div className="border-t border-white/10 p-4">
                                <p className="text-center text-sm text-gray-300/90">{c.caption}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

