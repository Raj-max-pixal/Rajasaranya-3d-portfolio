import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2, Eye } from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  category: string;
  year?: string;
  tools: string[];
  description: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  accentColor: string;
  type: 'maxie' | 'multimax' | 'careerforge' | 'smartwaste';
  image: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[82vh] flex items-start justify-center sticky top-20 sm:top-24 md:top-28"
      style={{
        top: `calc(5rem + ${index * 26}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl mx-auto rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-md"
      >
        {/* Top Row: Number, Category, Name, and Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* Number */}
            <span
              style={{ fontSize: 'clamp(2.5rem, 5vw, 80px)' }}
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tighter"
            >
              {project.id}
            </span>

            {/* Category & Project Name */}
            <div className="flex flex-col">
              <span className="text-xs font-light text-[#BBCCD7] uppercase tracking-widest">
                {project.category} · {project.year}
              </span>
              <h3
                style={{ fontSize: 'clamp(1.2rem, 2.6vw, 2.2rem)' }}
                className="font-bold text-[#D7E2EA] tracking-tight uppercase"
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 self-start sm:self-auto shrink-0 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-[#D7E2EA] hover:text-white hover:bg-white/10 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => onOpenProject(project)}
              className="group rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white hover:text-white px-6 py-2.5 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Project</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Row: Project Details & Visual Project Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-5">
          {/* Left Column (5 cols / ~40%): Highlights & Tech */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <p className="text-xs sm:text-sm font-light text-[#D7E2EA] leading-relaxed">
                {project.description}
              </p>

              {/* Highlights List */}
              <div className="flex flex-col gap-2 pt-2">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-[#BBCCD7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Pipeline tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
              {project.tools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#D7E2EA]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (7 cols / ~60%): High-Fidelity Project Visual Imagery */}
          <div className="md:col-span-7">
            <div
              onClick={() => onOpenProject(project)}
              className="w-full h-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/15 relative group cursor-pointer shadow-2xl bg-[#121118]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={`${project.name} Project Showcase`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Top status indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#BBCCD7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Bottom detail teaser on hover */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight text-sm sm:text-base">
                    {project.name}
                  </h4>
                  <span className="text-[11px] font-mono text-[#BBCCD7]">
                    Click to view full architecture &amp; case study
                  </span>
                </div>

                <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:scale-110 group-hover:bg-[#B600A8] transition-all">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
