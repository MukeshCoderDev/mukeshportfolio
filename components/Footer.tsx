
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="pt-16 pb-12 text-center border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-8">
                    {SOCIAL_LINKS.map(link => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xl flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#6a11cb] hover:to-[#2575fc] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-[#6a11cb]/40">
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </div>
                <p className="text-slate-500">
                    © {new Date().getFullYear()} MukeshCoderDev. All rights reserved. Built for the decentralized future.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
