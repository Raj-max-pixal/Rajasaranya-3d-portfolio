import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Mail, Send, Sparkles, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Full-Stack / AI Opportunity');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = 'rajasaranyaraj20@gmail.com';
  const contactPhone = '+91 93855 44328';

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

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
            className="relative w-full max-w-xl rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#111113] p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10 my-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 text-[#BBCCD7] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-light">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#D7E2EA] mt-1 tracking-tight">
                Connect With Raja Saranya T
              </h2>
              <p className="text-sm font-light text-[#BBCCD7] mt-2">
                Open for software engineering roles, full-stack opportunities, and AI agent collaborations.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col gap-2.5 p-4 rounded-2xl bg-[#1A1A1F] border border-white/10 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-[#281533] text-[#B600A8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-[#D7E2EA] truncate">
                    {contactEmail}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/5 text-xs text-[#BBCCD7] font-mono">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#BBCCD7]" />
                  <span>{contactPhone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#BBCCD7]" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center justify-center gap-2"
              >
                <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  Message Sent to Rajasaranya!
                </h3>
                <p className="text-xs text-emerald-200">
                  Thank you for reaching out. She will get back to you directly at your email address.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-[#BBCCD7]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Recruiters / Team"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1A1A1F] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-[#BBCCD7]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="team@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1A1A1F] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-[#BBCCD7]">
                    Inquiry Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A1A1F] border border-white/10 text-white text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                  >
                    <option value="Full-Stack / AI Opportunity">Software Engineering / AI Opportunity</option>
                    <option value="Internship / Full-time Role">Internship / Full-Time Role</option>
                    <option value="Project Collaboration">Project Collaboration / Hackathon</option>
                    <option value="Research & Publications">Research / Technical Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-[#BBCCD7]">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Rajasaranya about the role or project..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A1A1F] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                  className="w-full py-3.5 rounded-full font-medium uppercase tracking-widest text-white text-sm transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}

            {/* Social & Portfolio Links */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10 text-xs text-[#BBCCD7]">
              <span>Location: Chennai · Remote Open</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/raja-saranya-ba9545342"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/raj-max-pixal"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://rajasaranya.me"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>rajasaranya.me</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
