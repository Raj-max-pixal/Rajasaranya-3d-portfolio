import React, { useRef, useEffect, useState } from 'react';
import {
  Bot,
  BrainCircuit,
  Cpu,
  Layers,
  Sparkles,
  Award,
  Terminal,
  Cloud,
  Code2,
  FileSearch,
} from 'lucide-react';

import maxieImg from '../assets/images/maxie_ai_companion_1792339979071.jpg';
import multimaxImg from '../assets/images/multimax_ai_workspace_1792339979999.jpg';
import careerforgeImg from '../assets/images/careerforge_ai_engine_1792339979789.jpg';
import smartwasteImg from '../assets/images/smart_waste_iot_system_1792339980092.jpg';
import ambassadorStarImg from '../assets/images/about_ambassador_star_1792340199361.jpg';
import techCubeImg from '../assets/images/about_tech_cube_1792340199856.jpg';

import androidMobileImg from '../assets/images/android_mobile_3d_1792340385178.jpg';
import samsungSolveImg from '../assets/images/samsung_solve_tomorrow_3d_1792340385840.jpg';
import aiOrbImg from '../assets/images/about_ai_neural_orb_1792340198804.jpg';
import aiAgentsImg from '../assets/images/ai_agents_network_3d_1792340385664.jpg';
import cloudServersImg from '../assets/images/cloud_devops_servers_3d_1792340385265.jpg';
import iotChipImg from '../assets/images/about_iot_sensor_chip_1792340200167.jpg';

interface ProjectBadgeCard {
  title: string;
  category: string;
  badge: string;
  description: string;
  tech: string[];
  image: string;
  icon: React.ReactNode;
}

const ROW_1_DATA: ProjectBadgeCard[] = [
  {
    title: 'MAXie',
    category: 'AI Desktop Companion',
    badge: 'Shipped Release',
    description:
      'Cross-platform desktop companion with local memory engine, plugin system, and frameless transparent UI with idle animations.',
    tech: ['Electron', 'JavaScript', 'Local Memory', 'Animations'],
    image: maxieImg,
    icon: <Bot className="w-4 h-4 text-[#B600A8]" />,
  },
  {
    title: 'multimax-ai-hub',
    category: 'All-in-One AI Platform',
    badge: 'MIT Open Source',
    description:
      'Full-stack AI workspace unifying chat, coding assistance, image generation, voice, and autonomous AI agents.',
    tech: ['Python', 'TypeScript', 'Docker', 'Azure Cloud'],
    image: multimaxImg,
    icon: <BrainCircuit className="w-4 h-4 text-blue-400" />,
  },
  {
    title: 'CareerForge AI',
    category: 'Recommendation Engine',
    badge: 'Microsoft Hackathon 2026',
    description:
      'AI-driven career path matching engine with resume analyzer and RESTful API pipeline for automated job skill matching.',
    tech: ['Python', 'LLM APIs', 'REST APIs', 'Resume NLP'],
    image: careerforgeImg,
    icon: <FileSearch className="w-4 h-4 text-amber-400" />,
  },
  {
    title: 'Smart Waste Segregation',
    category: 'IoT & Embedded Research',
    badge: 'IJFMR Journal Published',
    description:
      'Hardware + software automated recycling system combining IoT sensors with real-time software categorization.',
    tech: ['IoT Sensors', 'Embedded C/C++', 'SIH', 'Research'],
    image: smartwasteImg,
    icon: <Cpu className="w-4 h-4 text-emerald-400" />,
  },
  {
    title: 'Google Student Ambassador',
    category: 'Leadership & Community',
    badge: 'Cohort 2026',
    description:
      'Selected to represent Google on campus, driving student engagement with Google developer programs and cloud technologies.',
    tech: ['GCP', 'Community', 'Workshops', 'Developer Tech'],
    image: ambassadorStarImg,
    icon: <Award className="w-4 h-4 text-purple-400" />,
  },
  {
    title: 'Full-Stack Development',
    category: 'Femtosoft Technologies',
    badge: 'Internship 2026',
    description:
      'Built dynamic, data-driven web applications across frontend, backend, and database layers with React.js & Java.',
    tech: ['Java', 'React.js', 'Databases', 'REST APIs'],
    image: techCubeImg,
    icon: <Layers className="w-4 h-4 text-pink-400" />,
  },
];

const ROW_2_DATA: ProjectBadgeCard[] = [
  {
    title: 'Android Native Apps',
    category: 'Srishti Innovative',
    badge: 'Internship 2025',
    description:
      'Built native mobile UI components and responsive application flows using Kotlin and modern Android Studio architecture.',
    tech: ['Kotlin', 'Android Studio', 'Mobile UI', 'APIs'],
    image: androidMobileImg,
    icon: <Terminal className="w-4 h-4 text-teal-400" />,
  },
  {
    title: 'Samsung Solve for Tomorrow',
    category: 'Innovation Challenge',
    badge: 'Participant 2026',
    description:
      'Applied design thinking, user-centric research, and rapid prototyping to solve high-impact real-world community problems.',
    tech: ['Design Thinking', 'Problem Solving', 'Prototyping'],
    image: samsungSolveImg,
    icon: <Sparkles className="w-4 h-4 text-indigo-400" />,
  },
  {
    title: 'Claude & Amazon Bedrock',
    category: 'Certification',
    badge: 'Anthropic Certified',
    description:
      'Advanced prompt engineering, enterprise LLM orchestration, and generative AI pipelines using Claude 3 models on AWS Bedrock.',
    tech: ['Claude API', 'Amazon Bedrock', 'Prompt Eng', 'Safety'],
    image: aiOrbImg,
    icon: <Code2 className="w-4 h-4 text-rose-400" />,
  },
  {
    title: 'Agents & Workflows',
    category: 'Certification',
    badge: 'OpenAI Academy',
    description:
      'Autonomous agent design, multi-agent coordination, function calling, stateful loops, and memory retrieval systems.',
    tech: ['AI Agents', 'OpenAI API', 'Function Calling', 'RAG'],
    image: aiAgentsImg,
    icon: <BrainCircuit className="w-4 h-4 text-sky-400" />,
  },
  {
    title: 'Cloud & DevOps CI/CD',
    category: 'Infrastructure',
    badge: 'AWS & Azure & GCP',
    description:
      'Docker containerization, AWS S3 storage buckets, Microsoft Azure app services, and automated GitHub Actions workflows.',
    tech: ['Docker', 'Azure', 'AWS S3', 'CI/CD Pipelines'],
    image: cloudServersImg,
    icon: <Cloud className="w-4 h-4 text-yellow-400" />,
  },
  {
    title: 'Smart IoT Hardware',
    category: 'Arunachala College of Engg',
    badge: 'Embedded Systems',
    description:
      'Sensor calibration, edge computing microcontrollers, and real-time serial telemetry data acquisition architectures.',
    tech: ['Sensors', 'Microcontrollers', 'Embedded C', 'Hardware'],
    image: iotChipImg,
    icon: <Cpu className="w-4 h-4 text-emerald-400" />,
  },
];

// Tripled lists for seamless scrolling
const ROW_1_CARDS = [...ROW_1_DATA, ...ROW_1_DATA, ...ROW_1_DATA];
const ROW_2_CARDS = [...ROW_2_DATA, ...ROW_2_DATA, ...ROW_2_DATA];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      animationFrameId = requestAnimationFrame(() => {
        setOffset(scrollOffset);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const row1Transform = `translateX(${offset - 200 - 1200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3.5 w-full">
        {/* Row 1: Moves right */}
        <div
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
          className="flex gap-3.5 whitespace-nowrap transition-transform duration-75 ease-out"
        >
          {ROW_1_CARDS.map((card, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden border border-white/15 p-6 flex flex-col justify-between shadow-2xl relative group hover:border-[#BBCCD7]/50 transition-colors"
            >
              {/* 3D Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* High-Contrast Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/45" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-black/60 border border-white/15 backdrop-blur-md">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#BBCCD7] block drop-shadow">
                      {card.category}
                    </span>
                    <h4 className="text-xl font-bold uppercase tracking-tight text-white drop-shadow">
                      {card.title}
                    </h4>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white">
                  {card.badge}
                </span>
              </div>

              {/* Description */}
              <p className="relative z-10 text-xs font-light text-[#D7E2EA] leading-relaxed line-clamp-3 drop-shadow">
                {card.description}
              </p>

              {/* Tech Pills */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-2 border-t border-white/15">
                {card.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-black/60 text-[#BBCCD7] border border-white/15 backdrop-blur-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves left */}
        <div
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
          className="flex gap-3.5 whitespace-nowrap transition-transform duration-75 ease-out"
        >
          {ROW_2_CARDS.map((card, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden border border-white/15 p-6 flex flex-col justify-between shadow-2xl relative group hover:border-[#BBCCD7]/50 transition-colors"
            >
              {/* 3D Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* High-Contrast Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/45" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-black/60 border border-white/15 backdrop-blur-md">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#BBCCD7] block drop-shadow">
                      {card.category}
                    </span>
                    <h4 className="text-xl font-bold uppercase tracking-tight text-white drop-shadow">
                      {card.title}
                    </h4>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white">
                  {card.badge}
                </span>
              </div>

              {/* Description */}
              <p className="relative z-10 text-xs font-light text-[#D7E2EA] leading-relaxed line-clamp-3 drop-shadow">
                {card.description}
              </p>

              {/* Tech Pills */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-2 border-t border-white/15">
                {card.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-black/60 text-[#BBCCD7] border border-white/15 backdrop-blur-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
