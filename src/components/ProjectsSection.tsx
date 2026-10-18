import React from 'react';
import { FadeIn } from './FadeIn';
import { ProjectCard, ProjectData } from './ProjectCard';

import maxieImg from '../assets/images/maxie_ai_companion_1792339979071.jpg';
import multimaxImg from '../assets/images/multimax_ai_workspace_1792339979999.jpg';
import careerforgeImg from '../assets/images/careerforge_ai_engine_1792339979789.jpg';
import smartwasteImg from '../assets/images/smart_waste_iot_system_1792339980092.jpg';

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectData) => void;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: '01',
    name: 'MAXie — AI Companion',
    category: 'Desktop & Mobile AI',
    year: '2026',
    tools: ['Electron', 'JavaScript', 'Local Memory Engine', 'Cross-Platform UI', 'Node.js'],
    description:
      'A cross-platform AI desktop companion built for Windows, macOS, and Linux featuring a local memory engine for persistent long-term interactions, a community plugin system, and a frameless, transparent-window UI with smooth idle animations.',
    highlights: [
      'Built a local memory engine for persistent, personalized user interactions over time',
      'Engineered an extensible plugin system for community-driven skill additions',
      'Crafted a frameless, transparent-window UI with smooth idle animations and responsive physics',
      'Shipped a public release with an accompanying technical write-up and video demo',
    ],
    githubUrl: 'https://github.com/raj-max-pixal/Maxie',
    accentColor: 'bg-purple-600',
    type: 'maxie',
    image: maxieImg,
  },
  {
    id: '02',
    name: 'multimax-ai-hub',
    category: 'All-in-One AI Platform',
    year: '2026',
    tools: ['Python', 'TypeScript', 'Docker', 'Microsoft Azure', 'CI/CD Workflows', 'REST APIs'],
    description:
      'A full-stack AI workspace platform unifying chat, coding assistance, content/image generation, voice processing, document tools, and autonomous AI agents into a single modular architecture, containerized with Docker and hosted on Azure.',
    highlights: [
      'Architected modular backend and frontend services unifying multimodal tools & agents',
      'Containerized all services using Docker with Microsoft Azure cloud deployment',
      'Open-sourced under MIT license with comprehensive technical documentation',
      'Staged phase-by-phase delivery with automated GitHub Actions CI/CD workflows',
    ],
    githubUrl: 'https://github.com/raj-max-pixal/multimax-ai-hub',
    accentColor: 'bg-blue-600',
    type: 'multimax',
    image: multimaxImg,
  },
  {
    id: '03',
    name: 'CareerForge AI',
    category: 'AI Recommendation Platform',
    year: '2026',
    tools: ['Python', 'LLM APIs', 'RESTful APIs', 'Prompt Engineering', 'NLP Pipeline'],
    description:
      'Built for Microsoft Hackathon 2026, CareerForge AI is an algorithmic recommendation platform that analyzes resumes, maps candidate skill graphs to current market roles, and provides personalized career development trajectories.',
    highlights: [
      'Engineered an algorithmic skill-matching engine powered by Python and LLM APIs',
      'Designed a high-throughput RESTful API architecture with an automated resume analyzer',
      'Drastically reduced manual career-assessment review time with structured JSON parsing',
      'Recognized at Microsoft Hackathon 2026 for high-impact workforce enablement',
    ],
    githubUrl: 'https://github.com/raj-max-pixal',
    accentColor: 'bg-amber-600',
    type: 'careerforge',
    image: careerforgeImg,
  },
  {
    id: '04',
    name: 'Smart Waste Segregation',
    category: 'IoT & Published Research',
    year: '2026',
    tools: ['IoT Sensors', 'Embedded Systems', 'Hardware-Software Integration', 'SIH'],
    description:
      'Developed for Smart India Hackathon (SIH) and published as peer-reviewed research in IJFMR Journal. Combines physical sensor arrays with automated software classification layers to streamline waste sorting and recycling efficiency.',
    highlights: [
      'Designed a hardware + software automated system combining multiple IoT sensors',
      'Integrated real-time decision layer to categorize recyclable vs. biodegradable matter',
      'Published research: "Smart Waste Segregation and Recycling System" in IJFMR Journal, Vol. 2026, Issue 1',
      'Presented at Smart India Hackathon (SIH) addressing sustainable municipal workflows',
    ],
    githubUrl: 'https://github.com/raj-max-pixal',
    accentColor: 'bg-emerald-600',
    type: 'smartwaste',
    image: smartwasteImg,
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: "Projects" */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          >
            Projects
          </h2>
        </FadeIn>

        {/* 4 Sticky Stacking Project Cards */}
        <div className="relative flex flex-col gap-12 sm:gap-16">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
