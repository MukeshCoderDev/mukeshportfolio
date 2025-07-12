
import { Project, Stat, Skill, SocialLink, ContactInfo } from './types';

export const NAV_LINKS = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
    { value: '24+', label: 'Projects Deployed' },
    { value: '$3.8B+', label: 'Assets Protected' },
    { value: '99.2%', label: 'Success Rate' },
    { value: '18.7K', label: 'Active Users' },
];

export const PROJECTS: Project[] = [
    {
        title: 'NoCensor TV',
        subtitle: 'Decentralized Adult Content Platform',
        description: 'The first truly decentralized adult content platform built on Ethereum/Polygon with Helia for browser-native IPFS integration, ensuring censorship resistance.',
        tech: ['Ethereum', 'IPFS', 'Solidity', 'React', 'Polygon', 'Helia'],
        githubUrl: 'https://github.com/MukeshCoderDev/nocensor-tv',
        liveUrl: null
    },
    {
        title: 'Abacus NFT Perp Trading',
        subtitle: 'NFT Perpetual Futures Trading Platform',
        description: 'A decentralized platform for trading NFT perpetual futures, allowing users to hedge or speculate on the floor price of NFT collections with leverage.',
        tech: ['React', 'Solidity', 'Ethers.js', 'Chainlink', 'The Graph', 'Hardhat'],
        githubUrl: 'https://github.com/MukeshCoderDev/abacus-nft-perp-trading',
        liveUrl: 'https://abacus-nft-perp-trading.netlify.app'
    },
    {
        title: 'ArbitraPro',
        subtitle: 'DeFi Flash Loan Arbitrage DApp',
        description: 'An automated DApp that leverages flash loans from Aave and Uniswap to execute atomic arbitrage strategies across various decentralized exchanges for profit.',
        tech: ['Solidity', 'Hardhat', 'Ethers.js', 'Aave', 'Uniswap', 'Node.js'],
        githubUrl: 'https://github.com/MukeshCoderDev/ArbitraPro---DeFi-Flash-Loan-Arbitrage-DApp',
        liveUrl: 'https://mukeshcoderdev.github.io/ArbitraPro---DeFi-Flash-Loan-Arbitrage-DApp/'
    },
    {
        title: 'YieldMatrix',
        subtitle: 'DeFi Yield Aggregator Dashboard',
        description: 'A comprehensive dashboard aggregating data from top DeFi protocols, enabling users to track, manage, and optimize their yield farming and staking positions.',
        tech: ['React', 'The Graph', 'Ethers.js', 'Chart.js', 'DeFi SDKs', 'Next.js'],
        githubUrl: 'https://github.com/MukeshCoderDev/yieldmatrix-defi-dashboard',
        liveUrl: 'https://mukeshcoderdev.github.io/yieldmatrix-defi-dashboard/'
    }
];

export const GITHUB_STATS: Stat[] = [
    { value: '24', label: 'Repositories' },
    { value: '187', label: 'Commits' },
    { value: '18.7K', label: 'Users' },
    { value: '99.2%', label: 'Success Rate' },
];

export const SKILLS: Skill[] = [
    { icon: 'fab fa-ethereum', title: 'Blockchain Development', description: 'Solidity, Smart Contracts, Ethereum, Polygon, Web3.js, Ethers.js, Hardhat, Truffle' },
    { icon: 'fas fa-server', title: 'Backend Development', description: 'Node.js, Express, Python, Django, REST APIs, GraphQL, Database Design, IPFS' },
    { icon: 'fas fa-brain', title: 'AI & Machine Learning', description: 'Python, TensorFlow, PyTorch, NLP, Predictive Analytics, Data Science' },
    { icon: 'fas fa-code', title: 'Frontend Development', description: 'React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind, Redux' }
];

export const CONTACT_INFO: ContactInfo[] = [
    { icon: 'fas fa-envelope', title: 'Email', detail: 'mukeshcoder1984@gmail.com' },
    { icon: 'fab fa-github', title: 'GitHub', detail: 'github.com/MukeshCoderDev' },
    { icon: 'fab fa-twitter', title: 'Twitter', detail: '@MukeshCoderDev' },
    { icon: 'fab fa-linkedin-in', title: 'LinkedIn', detail: 'linkedin.com/in/mukeshcoderdev' },
    { icon: 'fas fa-map-marker-alt', title: 'Location', detail: 'Remote - Available Worldwide' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { icon: 'fab fa-github', url: 'https://github.com/MukeshCoderDev' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/MukeshCoderDev' },
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/mukeshcoderdev' },
    { icon: 'fab fa-discord', url: '#' },
    { icon: 'fab fa-medium-m', url: '#' },
];
