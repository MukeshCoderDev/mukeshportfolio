import React from 'react';
import { SKILLS } from '../constants';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-6">
                <SectionTitle>Technical Skills</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SKILLS.map(skill => (
                        <div key={skill.title} className="skill-card bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6a11cb]/20">
                            <div className="text-5xl mb-6 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-transparent bg-clip-text">
                                <i className={skill.icon}></i>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{skill.title}</h3>
                            <p className="text-slate-400">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;