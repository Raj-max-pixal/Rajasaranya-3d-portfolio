import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { FileText } from 'lucide-react';

import aiNeuralOrb from '../assets/images/about_ai_neural_orb_trans.png';
import ambassadorStar from '../assets/images/about_ambassador_star_trans.png';
import techCodeCube from '../assets/images/about_tech_cube_trans.png';
import iotSensorChip from '../assets/images/about_iot_sensor_chip_trans.png';

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact, onOpenResume }) => {
  const paragraphText =
    "Computer Science & Information Technology undergraduate (CGPA 8.32/10) with hands-on experience across full-stack development, AI/LLM integration, and cloud platforms. Built and shipped an AI desktop companion, a full-stack AI workspace, and production-grade applications with 3+ years of programming across Python, Java, and TypeScript. Google Student Ambassador (2026) driven by rapid delivery and real-world impact!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Floating 3D Corner Assets with Background Removed */}

      {/* Top-left: 3D AI Neural Orb */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none select-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <div className="relative group">
            <img
              src={aiNeuralOrb}
              alt="3D AI Neural Orb"
              className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(182,0,168,0.35)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-6"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>

      {/* Bottom-left: 3D Tech Code Cube */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[8%] pointer-events-none select-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <div className="relative group">
            <img
              src={techCodeCube}
              alt="3D Holographic Code Cube"
              className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(0,180,216,0.35)] transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-6"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>

      {/* Top-right: 3D Google Developer Ambassador Star Badge */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none select-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <div className="relative group">
            <img
              src={ambassadorStar}
              alt="3D Google Developer Ambassador Star"
              className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(255,215,0,0.35)] transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-6"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>

      {/* Bottom-right: 3D IoT Sensor Processor */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[8%] pointer-events-none select-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <div className="relative group">
            <img
              src={iotSensorChip}
              alt="3D IoT Sensor Chip"
              className="w-[120px] sm:w-[160px] md:w-[200px] h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(16,185,129,0.35)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-6"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph */}
        <AnimatedText
          text={paragraphText}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px] text-[clamp(1rem,1.8vw,1.35rem)]"
        />

        {/* Gap between text block and button */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Actions: View Resume Button & Contact Button */}
        <FadeIn delay={0.2} y={30} className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-[#D7E2EA]/10 hover:border-white hover:text-white transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#B600A8]" />
            <span>Read Full Resume</span>
          </button>
          <ContactButton onClick={onOpenContact} label="Let's Connect" />
        </FadeIn>
      </div>
    </section>
  );
};
