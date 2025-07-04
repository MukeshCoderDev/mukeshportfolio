import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-[2.8rem] md:text-[3.5rem] font-extrabold text-white relative inline-block mb-20">
        {children}
        <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-[#6a11cb] to-[#00ff9d] rounded-full" />
    </h2>
);

export default SectionTitle;