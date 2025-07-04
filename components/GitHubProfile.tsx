import React from "react";
import { GITHUB_STATS } from "../constants";
import SectionTitle from "./SectionTitle";

const TerminalWindow: React.FC = () => (
  <div className="terminal-container font-['Share_Tech_Mono'] bg-black/60 border border-white/10 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
    <div className="bg-slate-900/80 px-4 py-2 flex items-center gap-2 border-b border-white/10">
      <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
      <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
      <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
    </div>
    <div className="p-6 text-sm md:text-base text-[#39ff14] leading-relaxed whitespace-pre-wrap overflow-x-auto">
      <span className="text-blue-400">mukesh@coderdev:~$</span>{" "}
      <span className="text-white">cat github_profile.txt</span>
      <br />
      <br />
      <span className="text-blue-400">{">"} Repositories:</span>
      <br />
      <span className="text-gray-400">- </span>
      <span className="text-[#00ff9d]">nocensor-tv</span>: Decentralized adult
      content platform
      <br />
      <span className="text-gray-400">- </span>
      <span className="text-[#00ff9d]">defi-shield</span>: AI-powered DeFi
      insurance
      <br />
      <span className="text-gray-400">- </span>
      <span className="text-[#00ff9d]">polygon-nft-market</span>: Multi-chain
      NFT marketplace
      <br />
      <br />
      <span className="text-blue-400">{">"} GitHub Stats:</span>
      <br />
      <span className="text-gray-400">- </span>Commits: 24 (last 30 days)
      <br />
      <span className="text-gray-400">- </span>Pull Requests: 12
      <br />
      <span className="text-gray-400">- </span>Issues Closed: 18
      <br />
      <span className="text-gray-400">- </span>Languages: TypeScript 94.8%,
      Solidity 2.8%, JavaScript 1.9%
      <br />
      <br />
      <span className="text-blue-400">{">"} Recent Activity:</span>
      <br />
      <span className="text-blue-400">mukesh@coderdev:~/nocensor-tv$</span>{" "}
      <span className="text-white">git log --oneline</span>
      <br />
      <span className="text-yellow-400">4018c0b</span> (HEAD -{">"} main)
      updating - yesterday
      <br />
      <span className="text-yellow-400">7f3d2a1</span> frontend deployment
      preparation - 2 days ago
      <br />
      <span className="text-yellow-400">e9b4f5c</span> frontend deployment
      preparation - 2 days ago
      <br />
      <span className="text-yellow-400">a1b2c3d</span> Initial project commit -
      4 days ago
      <br />
    </div>
  </div>
);

const GitHubProfile: React.FC = () => {
  return (
    <section id="github" className="py-24 bg-slate-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <SectionTitle>GitHub Profile</SectionTitle>

        <div className="bg-[#050510]/80 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12 text-center md:text-left">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#6a11cb] to-[#2575fc] flex-shrink-0 flex items-center justify-center text-white text-6xl shadow-lg shadow-[#6a11cb]/40">
              <i className="fab fa-github"></i>
            </div>
            <div>
              <h3 className="text-[2.5rem] font-bold text-white">
                MukeshCoderDev
              </h3>
              <p className="text-slate-300 text-lg mt-1">
                Blockchain & AI Developer | Open Source Contributor
              </p>
              <a
                href="https://github.com/MukeshCoderDev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 items-center gap-2 text-slate-200 hover:text-[#00ff9d] transition-colors duration-300 bg-white/5 hover:bg-[#00ff9d]/10 px-5 py-2 rounded-full border border-white/10"
              >
                <i className="fab fa-github"></i> github.com/MukeshCoderDev
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {GITHUB_STATS.map((stat) => (
              <div
                key={stat.label}
                className="github-stat-card bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6a11cb]/20"
              >
                <div className="text-[2.5rem] font-extrabold mb-2 text-transparent bg-gradient-to-r from-[#00ff9d] to-[#39ff14] bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          <TerminalWindow />
        </div>
      </div>
    </section>
  );
};

export default GitHubProfile;
