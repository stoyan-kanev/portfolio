import React from 'react';
import { projects } from '../data/projects';
import {FaComputer} from "react-icons/fa6";


function Projects() {
    return (
        <section id="projects" className="projects">
            <h2><FaComputer style={{ marginRight: '8px' }} />Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                            {/*{project.liveLink && (<a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>)}*/}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;