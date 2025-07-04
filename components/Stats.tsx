import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
    return (
        <div className="container mx-auto px-6 -mt-24 mb-24 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {STATS.map((stat, index) => (
                    <div key={stat.label} className="stat-card bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="text-[3.5rem] font-extrabold mb-3 text-transparent bg-gradient-to-r from-[#00ff9d] to-[#39ff14] bg-clip-text">
                            {stat.value}
                        </div>
                        <div className="text-slate-300 text-lg">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;