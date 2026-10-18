import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import saranyaWolfcut from '../assets/images/saranya_wolfcut_smooth.png';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0E0E12] p-6 sm:p-10 shadow-2xl text-[#D7E2EA] z-10 my-6 selection:bg-[#B600A8]/30"
          >
            {/* Top Action Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 sticky -top-6 -mx-6 sm:-top-10 sm:-mx-10 px-6 sm:px-10 py-4 bg-[#0E0E12]/95 backdrop-blur-md z-20">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-mono">
                  Official Curriculum Vitae
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-[#D7E2EA] hover:text-white hover:bg-white/10 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full border border-white/10 text-[#BBCCD7] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close resume"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Document Wrapper */}
            <div className="flex flex-col gap-8 font-sans">
              {/* Header Info with Profile Avatar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#B600A8]/60 shadow-lg shrink-0 bg-[#0C0C0C] flex items-center justify-center">
                    <img
                      src={saranyaWolfcut}
                      alt="Raja Saranya T"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-['Kanit',sans-serif]">
                      Raja Saranya T
                    </h1>
                    <p className="text-sm text-[#B600A8] font-medium tracking-wide mt-1">
                      Full-Stack &amp; AI Integration Engineer · Google Student Ambassador 2026
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-[#BBCCD7] font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#BBCCD7]" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#BBCCD7]" />
                    <span>+91 93855 44328</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#BBCCD7]" />
                    <a
                      href="mailto:rajasaranyaraj20@gmail.com"
                      className="hover:text-white transition-colors underline"
                    >
                      rajasaranyaraj20@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px]">
                    <a
                      href="https://linkedin.com/in/raja-saranya-ba9545342"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-3 h-3 text-blue-400" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/raj-max-pixal"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Github className="w-3 h-3 text-purple-400" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://rajasaranya.me"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Globe className="w-3 h-3 text-emerald-400" />
                      <span>rajasaranya.me</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7] font-semibold mb-2.5 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#B600A8]" />
                  Summary
                </h2>
                <p className="text-xs sm:text-sm font-light text-[#D7E2EA] leading-relaxed p-4 rounded-2xl bg-white/5 border border-white/5">
                  Computer Science / Information Technology undergraduate (CGPA 8.32/10) with hands-on experience across full-stack development, AI/LLM integration, and cloud platforms. Built and shipped an AI desktop companion, a full-stack AI workspace platform, and a production-grade React frontend. Strong foundation in data structures, algorithms, and object-oriented programming, with 3+ years of programming experience across Python, Java, and JavaScript/TypeScript. Google Student Ambassador (2026) with a track record of self-directed learning and rapid delivery.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7] font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-semibold text-white block mb-1">Languages</span>
                    <span className="text-[#BBCCD7]">
                      Python, Java, C, C++, JavaScript (ES6+), TypeScript, Dart, SQL
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-semibold text-white block mb-1">Frameworks &amp; Libraries</span>
                    <span className="text-[#BBCCD7]">
                      React.js, Next.js, Node.js, Express.js, Flutter, Electron
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-semibold text-white block mb-1">Cloud &amp; DevOps</span>
                    <span className="text-[#BBCCD7]">
                      Google Cloud Platform, Microsoft Azure, AWS (S3), Docker, CI/CD Pipelines, Firebase Hosting
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-semibold text-white block mb-1">AI/ML &amp; Tools</span>
                    <span className="text-[#BBCCD7]">
                      LLM Integration, Prompt Engineering, AI Agent Design, Anthropic Claude API, Amazon Bedrock, OpenAI API, Git, GitHub, VS Code, Postman
                    </span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7] font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  Education
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-white text-sm">
                        Arunachala College of Engineering for Women, Tamil Nadu
                      </span>
                      <span className="text-xs font-mono text-[#BBCCD7]">
                        2024 – 2028 (Expected)
                      </span>
                    </div>
                    <div className="text-xs text-[#D7E2EA]">
                      <span className="font-medium text-[#B600A8]">
                        Bachelor of Technology (B.Tech), Information Technology
                      </span>{' '}
                      · <span className="font-semibold text-white">CGPA: 8.32 / 10.0</span> (2nd Year, Semester 4 Completed)
                    </div>
                    <p className="text-[11px] text-[#BBCCD7] leading-relaxed pt-1 border-t border-white/5">
                      <span className="font-semibold text-white">Relevant Coursework:</span> Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Distributed Systems, Full-Stack Web Development, Machine Learning Fundamentals.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-white text-sm">
                        Hebron Matriculation Higher Secondary School, Nagercoil
                      </span>
                      <span className="text-xs font-mono text-[#BBCCD7]">
                        2010 – 2024
                      </span>
                    </div>
                    <span className="text-xs text-[#BBCCD7]">
                      Higher Secondary Education, Computer Science
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7] font-semibold mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  Experience
                </h2>
                <div className="flex flex-col gap-3">
                  {/* Femtosoft */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-white text-sm">
                        Full-Stack Developer Intern · Femtosoft Technologies
                      </span>
                      <span className="text-xs font-mono text-[#BBCCD7]">
                        Dec 2025 – Jan 2026
                      </span>
                    </div>
                    <span className="text-xs text-[#BBCCD7]">
                      Chennai, Tamil Nadu, India | On-site
                    </span>
                    <ul className="list-disc list-inside text-xs text-[#D7E2EA] space-y-1 font-light pt-1">
                      <li>
                        Built dynamic, data-driven web applications as a Java full-stack developer, working across frontend, backend, and database layers.
                      </li>
                      <li>
                        Completed a structured full-stack training program covering JavaScript, React.js, and production development practices.
                      </li>
                    </ul>
                  </div>

                  {/* Srishti */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-white text-sm">
                        Android App Development Intern · Srishti Innovative
                      </span>
                      <span className="text-xs font-mono text-[#BBCCD7]">
                        Jul 2025
                      </span>
                    </div>
                    <span className="text-xs text-[#BBCCD7]">
                      Thiruvananthapuram, Kerala, India | On-site
                    </span>
                    <ul className="list-disc list-inside text-xs text-[#D7E2EA] space-y-1 font-light pt-1">
                      <li>
                        Completed an intensive Android development internship, building native mobile UI components using Kotlin and Android Studio.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects Summary */}
              <div>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7] font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  Key Shipped Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white">MAXie — AI Companion</span>
                        <a
                          href="https://github.com/raj-max-pixal/Maxie"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#B600A8] hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <span className="text-[11px] font-mono text-[#BBCCD7] block mb-2">
                        Electron, JavaScript, Local Memory
                      </span>
                      <p className="text-[11px] font-light text-[#D7E2EA] leading-relaxed">
                        Cross-platform AI desktop companion with local memory engine for personalized interactions and frameless transparent UI.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white">multimax-ai-hub</span>
                        <a
                          href="https://github.com/raj-max-pixal/multimax-ai-hub"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#B600A8] hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <span className="text-[11px] font-mono text-[#BBCCD7] block mb-2">
                        Python, TypeScript, Docker, Azure
                      </span>
                      <p className="text-[11px] font-light text-[#D7E2EA] leading-relaxed">
                        All-in-one AI platform unifying chat, coding assistance, autonomous agents, and voice with staged CI/CD delivery.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white">CareerForge AI</span>
                        <span className="text-[10px] font-mono text-amber-400">Microsoft Hackathon</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#BBCCD7] block mb-2">
                        Python, LLM APIs, RESTful APIs
                      </span>
                      <p className="text-[11px] font-light text-[#D7E2EA] leading-relaxed">
                        AI-driven career recommendation engine with resume analyzer and job-matching pipeline.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white">Smart Waste Segregation</span>
                        <span className="text-[10px] font-mono text-emerald-400">IJFMR Published</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#BBCCD7] block mb-2">
                        IoT, Embedded Systems, SIH
                      </span>
                      <p className="text-[11px] font-light text-[#D7E2EA] leading-relaxed">
                        IoT sensor-driven automated segregation system published as peer-reviewed research in IJFMR Journal, 2026.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h2 className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7] font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-400" />
                    Certifications
                  </h2>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-white font-medium">Claude with Amazon Bedrock</span>
                      <span className="text-[11px] text-[#BBCCD7] block font-mono">Anthropic</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-white font-medium">Agents and Workflows</span>
                      <span className="text-[11px] text-[#BBCCD7] block font-mono">OpenAI Academy</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-white font-medium">AWS S3 Basics</span>
                      <span className="text-[11px] text-[#BBCCD7] block font-mono">Coursera</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-white font-medium">Artificial Intelligence Fundamentals</span>
                      <span className="text-[11px] text-[#BBCCD7] block font-mono">IBM SkillsBuild</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-white font-medium">Git &amp; GitHub Foundations</span>
                      <span className="text-[11px] text-[#BBCCD7] block font-mono">DataCamp</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-white font-medium">Programming in Java</span>
                      <span className="text-[11px] text-[#BBCCD7] block font-mono">NPTEL</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7] font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-pink-400" />
                    Key Achievements
                  </h2>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Google Student Ambassador</span>
                        <span className="text-[10px] font-mono text-purple-300">2026</span>
                      </div>
                      <p className="text-[11px] text-[#BBCCD7] font-light leading-relaxed">
                        Selected to represent Google on campus, driving student engagement with Google developer programs and cloud technologies.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Samsung Solve for Tomorrow</span>
                        <span className="text-[10px] font-mono text-blue-300">2026</span>
                      </div>
                      <p className="text-[11px] text-[#BBCCD7] font-light leading-relaxed">
                        Participant applying human-centered design thinking and rapid hardware-software prototyping to real-world community challenges.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Smart India Hackathon (SIH)</span>
                        <span className="text-[10px] font-mono text-emerald-300">2026</span>
                      </div>
                      <p className="text-[11px] text-[#BBCCD7] font-light leading-relaxed">
                        Designed automated waste segregation IoT prototype leading to peer-reviewed publication in IJFMR Journal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
