import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { FileText, Sparkles } from 'lucide-react';
import saranyaWolfcut from '../assets/images/saranya_wolfcut_smooth.png';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onOpenResume }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav
          className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 w-full"
          aria-label="Main Navigation"
        >
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollTo('services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-4 h-4 text-[#B600A8]" />
            <span>Resume</span>
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden text-center select-none z-0 mt-6 sm:mt-4 md:-mt-2">
        <FadeIn delay={0.15} y={40} className="w-full">
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#BBCCD7] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Google Student Ambassador 2026 · AI &amp; Full-Stack</span>
          </div>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw]">
            Hi, i&apos;m saranya
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero 3D Cartoon Portrait (Wolf Cut & Background Removed with Magnet) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[490px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="flex justify-center items-end">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="cursor-pointer"
          >
            <div className="relative group flex flex-col items-center">
              {/* Outer soft ambient backlight glow */}
              <div className="absolute -inset-4 bg-gradient-to-t from-[#B600A8]/30 via-[#7621B0]/20 to-transparent rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Floating 3D Character with Wolf Cut and transparent background */}
              <img
                src={saranyaWolfcut}
                alt="Raja Saranya T - 3D Cartoon Developer with Wolf Cut"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] filter transition-all duration-500 group-hover:brightness-105 group-hover:scale-105"
                draggable={false}
                loading="eager"
              />

              {/* Floating interactive status badge */}
              <div className="absolute -bottom-2 sm:bottom-2 bg-[#0C0C0C]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 flex items-center gap-2 shadow-2xl whitespace-nowrap z-20 transition-transform duration-300 group-hover:scale-105">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-semibold">
                  Raja Saranya T · AI &amp; Full-Stack
                </span>
                <span className="text-[10px] font-mono text-[#BBCCD7]">
                  · CGPA 8.32
                </span>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 pointer-events-auto">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.4rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[300px]"
          >
            an ai &amp; full-stack developer driven by building intelligent systems, ai agents, and scalable web platforms
          </p>
        </FadeIn>

        {/* Right Action Buttons */}
        <FadeIn delay={0.5} y={20} className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#D7E2EA] text-[#D7E2EA] text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};
