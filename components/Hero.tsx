import React from 'react';

const Hero: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="container mx-auto px-6 z-10">
                <div className="max-w-4xl">
                    <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-extrabold text-slate-100 leading-[1.1] mb-5">
                        Building the <span className="text-transparent bg-gradient-to-r from-[#00ff9d] to-[#39ff14] bg-clip-text">Future</span> of Blockchain & AI
                    </h1>
                    <p className="text-lg sm:text-xl md:text-[1.6rem] text-slate-300 mb-10 max-w-3xl mx-auto">
                        Full Stack Developer specializing in DeFi, Smart Contracts, and AI-powered solutions.
                    </p>
                    <a 
                        href="#projects" 
                        onClick={(e) => handleNavClick(e, '#projects')}
                        className="inline-block text-white font-semibold text-lg py-4 px-12 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:shadow-[0_10px_30px_rgba(0,255,157,0.4)] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
                        Explore My Work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;