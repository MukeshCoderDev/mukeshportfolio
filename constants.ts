
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
        description: 'The first truly decentralized adult content platform built on Ethereum/Polygon blockchain with Helia for browser-native IPFS integration.',
        tech: ['Ethereum', 'IPFS', 'Solidity', 'React', 'Polygon', 'Helia'],
        githubUrl: 'https://github.com/MukeshCoderDev/nocensor-tv',
        liveUrl: '#'
    },
    {
        title: 'DeFi Shield Protocol',
        subtitle: 'AI-Powered DeFi Insurance',
        description: 'Advanced risk assessment platform with real-time threat detection, predictive analytics, and parametric insurance for DeFi.',
        tech: ['AI/ML', 'Python', 'Smart Contracts', 'Chainlink', 'React', 'TensorFlow'],
        githubUrl: 'https://github.com/MukeshCoderDev/defi-shield-protocol',
        liveUrl: '#'
    },
    {
        title: 'Polygon NFT Marketplace',
        subtitle: 'Multi-Chain NFT Platform',
        description: 'Full-featured NFT marketplace with lazy minting, multi-chain support, and royalty management.',
        tech: ['ERC-721', 'Next.js', 'Web3.js', 'IPFS', 'TypeScript', 'Polygon'],
        githubUrl: 'https://github.com/MukeshCoderDev/polygon-nft-marketplace',
        liveUrl: '#'
    },
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
