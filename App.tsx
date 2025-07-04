
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import ParticleCanvas from './components/ParticleCanvas';
import Stats from './components/Stats';
import Projects from './components/Projects';
import GitHubProfile from './components/GitHubProfile';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
    
    useEffect(() => {
        const animatedElements = [
            '.project-card', 
            '.stat-card', 
            '.terminal-container', 
            '.skill-card', 
            '.github-stat-card'
        ];
        
        animatedElements.forEach(selector => {
            gsap.utils.toArray(selector).forEach((element) => {
                const el = element as HTMLElement;
                gsap.fromTo(el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                        }
                    }
                );
            });
        });
    }, []);

    return (
        <div className="relative text-slate-100 font-['Exo_2']">
            <div className="fixed top-0 left-0 -z-30 h-full w-full bg-[#05050c]"></div>
            <ParticleCanvas />
            <Header />
            <main>
                <Hero />
                <Stats />
                <Projects />
                <GitHubProfile />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;