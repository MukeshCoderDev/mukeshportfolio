import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import SectionTitle from './SectionTitle';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="project-card bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6a11cb]/20">
            <div className="p-8 border-b border-white/10 bg-black/20">
                <h3 className="text-[2rem] font-bold text-white mb-1">{project.title}</h3>
                <p className="text-slate-400">{project.subtitle}</p>
            </div>
            <div className="p-8">
                <p className="text-slate-300 mb-6 min-h-[84px]">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map(tech => (
                        <span key={tech} className="bg-[#00ff9d]/10 text-[#00ff9d] text-sm font-['Share_Tech_Mono'] px-4 py-1 rounded-full border border-[#00ff9d]/20">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 hover:text-[#00ff9d] transition-colors duration-300 bg-white/5 hover:bg-[#00ff9d]/10 px-5 py-2 rounded-full border border-white/10">
                        <i className="fab fa-github"></i> GitHub Repo
                    </a>
                     {project.liveUrl && project.liveUrl !== '#' && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 hover:text-[#00ff9d] transition-colors duration-300 bg-white/5 hover:bg-[#00ff9d]/10 px-5 py-2 rounded-full border border-white/10">
                            <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <SectionTitle>Featured Projects</SectionTitle>
                <div className="grid lg:grid-cols-2 gap-10">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;