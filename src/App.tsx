import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectData } from './components/ProjectCard';
import { ArrowUp, FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{ overflowX: 'clip' }}
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] relative"
    >
      {/* 1. Hero Section */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* 2. Marquee Section (Projects & Engineering Highlights) */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section (4 Featured Projects) */}
      <ProjectsSection onOpenProject={(proj) => setSelectedProject(proj)} />

      {/* Minimalist Footer */}
      <footer className="w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#BBCCD7] uppercase tracking-wider relative z-20">
        <div>
          <span>© 2026 Raja Saranya T · AI &amp; Full-Stack Developer</span>
        </div>

        <div className="flex items-center gap-6 flex-wrap">
          <button
            type="button"
            onClick={() => setIsResumeOpen(true)}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-[#B600A8]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
          <a
            href="https://github.com/raj-max-pixal"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/raja-saranya-ba9545342"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
