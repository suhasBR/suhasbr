export type ProjectStatus = 'live' | 'coming-soon'

export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
  award?: string
  status: ProjectStatus
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'PlushieOS',
    description:
      "A physical AI companion that provides emotional support and manages your daily life with full environmental context. Built with Raspberry Pi, Google Gemini, and a Kotlin companion app. Shipped from scratch in the final 24 hours of the hackathon.",
    tech: ['Raspberry Pi', 'Google Gemini', 'Kotlin', 'Python'],
    link: 'https://x.com/devfolio/status/1937149426788909278',
    award: '2nd Runner-up — Warpspeed Agentic AI Hackathon (Lightspeed × Devfolio)',
    status: 'live',
    featured: true,
  },
  {
    title: 'zkEmailAuth',
    description:
      'Zero-knowledge proof system for email-verified anonymous identities. Applications can confirm whether users belong to certain organizations while preserving full privacy; the email address is never revealed.',
    tech: ['ZK Proofs', 'Circom', 'JavaScript', 'Solidity'],
    github: 'https://github.com/suhasBR/zku-final-project',
    status: 'live',
    featured: true,
  },
  {
    title: 'CollabDocs',
    description:
      'AI-powered education platform that helps schools and colleges deliver adaptive learning experiences. Integrates AI into classrooms through adaptive quizzes, self-help bots, and collaborative tools.',
    tech: ['Next.js', 'OpenAI', 'Node.js'],
    link: 'https://colllabdocs-v2.vercel.app/',
    status: 'live',
    featured: true,
  },
  {
    title: 'TechnologyDAO',
    description:
      'Decentralized platform for publishing AI-augmented articles and earning tokens for contributions.',
    tech: ['Solidity', 'React', 'IPFS'],
    link: 'https://technologydao.xyz/',
    status: 'live',
    featured: false,
  },
  {
    title: 'Defi Explorer',
    description:
      'Unity + ReactJS educational game that gamifies DeFi concepts for new users. Winner of EthGlobal HackMoney 2022.',
    tech: ['Unity', 'React', 'Ethereum'],
    link: 'https://showcase.ethglobal.com/hackmoney2022/defi-explorer-q7v72',
    award: 'EthGlobal HackMoney 2022 — Best Use WalletConnect',
    status: 'live',
    featured: false,
  },
  {
    title: 'Minerpets DAO',
    description:
      'Open-source framework for community-driven world-building and DAO governance. Winner of EthGlobal DaoHacks 2022.',
    tech: ['Solidity', 'React', 'IPFS'],
    link: 'https://showcase.ethglobal.com/daohacks/miningpetsdao-snf41',
    award: 'EthGlobal DaoHacks 2022 — Best Use Unlock',
    status: 'live',
    featured: false,
  },
  {
    title: 'Delta Racers',
    description:
      'Crypto-asset-driven racing game where car performance is tied to underlying cryptocurrency prices.',
    tech: ['React', 'Web3.js', 'Ethereum'],
    github: 'https://github.com/suhasBR/delta-racers',
    status: 'live',
    featured: false,
  },
  {
    title: 'Land Broker',
    description:
      'MERN stack real estate listing platform with admin controls and property management.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://www.landbroker.in',
    status: 'live',
    featured: false,
  },
]
