import { projects } from '../data/projects';


export function Projects() {
    return (
        <section id="projects" className="py-20 text-white px-4">
            <div className="w-100 h-1 bg-gray-500 mx-auto mb-8 rounded-full" />


            <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
                        <h3 className="text-2xl font-semibold mb-2 text-center">{project.title}</h3>
                        <p className="text-gray-400 mb-3 text-center">{project.description}</p>
                        <div className="flex justify-center gap-4">
                            <a href={project.githubLink} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                            {project.liveLink && (
                                <a href={project.liveLink} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                    Live
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}