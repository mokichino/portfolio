import React from "react";
import {projects} from '../data/projects';
import ProjectCard from "./ProjectCard";

const Projects = ({hasAnimated}) => {
    return(
        <section id="projects" className="py-16 px-4 bg-linear-to-br from-rose-50 via-cream to-lavender-50">
            <div className="max-w-7xl mx-auto">
                <div className={`transition-all duration-1000 delay-300 ${hasAnimated?.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-12 text-center text-pink-600 font-poppins">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;