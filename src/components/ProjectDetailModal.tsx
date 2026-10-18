import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { ProjectData } from './ProjectCard';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[32px] sm:rounded-[44px] border-2 border-[#D7E2EA]/30 bg-[#0E0E12] p-6 sm:p-10 shadow-2xl text-[#D7E2EA] z-10 my-6"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D7E2EA]/15 sticky -top-6 -mx-6 sm:-top-10 sm:-mx-10 px-6 sm:px-10 py-4 bg-[#0E0E12]/95 backdrop-blur-md z-20">
            <div className="flex items-center gap-4">
              <span className="font-black text-2xl sm:text-3xl text-[#D7E2EA]">
                {project.id}
              </span>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7]">
                  {project.category} · {project.year}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                  {project.name}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-[#D7E2EA] hover:text-white hover:bg-white/10 text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">View Source</span>
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="p-2.5 rounded-full border border-white/10 text-[#BBCCD7] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* High Resolution Visual Showcase */}
          <div className="mt-6 rounded-[28px] overflow-hidden border border-white/15 relative bg-[#121118] shadow-2xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA] bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                {project.category}
              </span>
              <span className="text-xs font-mono text-emerald-300 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                Shipped &amp; Verified
              </span>
            </div>
          </div>

          {/* Description & Overview */}
          <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="text-xs uppercase tracking-wider text-[#BBCCD7] font-semibold mb-2">
              System Overview &amp; Architecture
            </h4>
            <p className="text-xs sm:text-sm font-light text-[#D7E2EA] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Engineering Accomplishments */}
          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-wider text-[#BBCCD7] font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Key Engineering Deliverables &amp; Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3"
                >
                  <span className="text-xs font-mono text-[#B600A8] font-bold mt-0.5">
                    0{idx + 1}.
                  </span>
                  <p className="text-xs text-[#D7E2EA] font-light leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline & Technical Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#D7E2EA]/15 text-sm">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#BBCCD7] font-semibold mb-2.5 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#B600A8]" />
                Technologies &amp; Libraries Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[#D7E2EA]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#BBCCD7] font-semibold mb-2.5 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  Engineering Repository
                </h4>
                <p className="text-xs text-[#BBCCD7] font-light leading-relaxed mb-3">
                  Check out the repository, setup documentation, and open source release notes on GitHub.
                </p>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
