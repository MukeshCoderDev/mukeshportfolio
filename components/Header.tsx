import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
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
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'py-4 bg-[#05050c]/80 backdrop-blur-lg shadow-lg shadow-black/30' : 'py-6'}`}>
            <div className="container mx-auto px-6">
                <nav className="flex justify-between items-center">
                    <a href="#" onClick={(e) => handleNavClick(e, '#')} className="font-['Share_Tech_Mono'] text-[2.2rem] font-bold text-transparent bg-gradient-to-r from-[#00ff9d] to-[#39ff14] bg-clip-text">
                        MukeshCoderDev
                    </a>
                    <div className="hidden md:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-slate-100 font-medium text-lg relative hover:text-[#00ff9d] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-[#00ff9d] after:transition-all after:duration-400 after:ease-in-out hover:after:w-full cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;