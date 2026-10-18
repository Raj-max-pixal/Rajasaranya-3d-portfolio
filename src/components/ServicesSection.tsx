import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: '01',
    name: 'Full-Stack Engineering',
    description:
      'Architecture and development of dynamic, data-driven web applications across frontend, backend, and database layers using React.js, Next.js, Node.js, Express, and Java.',
  },
  {
    id: '02',
    name: 'AI & LLM Integration',
    description:
      'Designing autonomous AI agents, prompt engineering pipelines, and multi-model API integrations with Anthropic Claude, OpenAI, and Amazon Bedrock.',
  },
  {
    id: '03',
    name: 'Desktop & Mobile Apps',
    description:
      'Building cross-platform desktop companions with Electron and local memory engines, alongside native mobile Android components crafted in Kotlin.',
  },
  {
    id: '04',
    name: 'Cloud & DevOps Architecture',
    description:
      'Architecting scalable cloud infrastructure using Google Cloud Platform, Microsoft Azure, AWS S3, Docker containerization, and automated CI/CD pipelines.',
  },
  {
    id: '05',
    name: 'IoT & Embedded Systems',
    description:
      'Integrating hardware IoT sensors with software automation layers and algorithmic data processing pipelines for intelligent real-world solutions.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={30} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-center"
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="border-t border-[#0C0C0C]/15">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} y={30}>
              <div className="group flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 transition-colors duration-300 hover:bg-black/[0.02]">
                {/* Number (Left) */}
                <div
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black text-[#0C0C0C] leading-none select-none shrink-0 min-w-[120px] sm:min-w-[160px] md:min-w-[220px]"
                >
                  {service.id}
                </div>

                {/* Name + Description (Right) */}
                <div className="flex flex-col gap-2 md:gap-3 flex-1">
                  <h3
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    className="font-medium uppercase text-[#0C0C0C] tracking-tight transition-transform duration-300 group-hover:translate-x-1"
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
