import { SiPython, SiJavascript, SiReact, SiDjango, SiNodedotjs, SiPostgresql, SiAngular, SiDocker } from "react-icons/si";

const techIcons = {
    Python: <SiPython size={32} className="mx-auto mb-2 text-blue-400" />,
    JavaScript: <SiJavascript size={32} className="mx-auto mb-2 text-yellow-300" />,
    React: <SiReact size={32} className="mx-auto mb-2 text-cyan-400" />,
    Django: <SiDjango size={32} className="mx-auto mb-2 text-green-500" />,
    "Node.js": <SiNodedotjs size={32} className="mx-auto mb-2 text-green-400" />,
    PostgreSQL: <SiPostgresql size={32} className="mx-auto mb-2 text-blue-500" />,
    "Angular": <SiAngular size={32} className="mx-auto mb-2 text-red-400" />,
    Docker: <SiDocker size={32} className="mx-auto mb-2 text-blue-300" />,
};
export function TechStack() {
    const techs = ["Python", "JavaScript", "React", "Django", "Node.js", "PostgreSQL", "Angular", "Docker"];

    return (
        <section id="tech" className="py-20 bg-gray-900 text-white px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
                {techs.map((tech) => (
                    <div
                        key={tech}
                        className="bg-gray-800 p-4 rounded-lg hover:scale-105 transform transition"
                    >
                        {techIcons[tech]}
                        <p>{tech}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}