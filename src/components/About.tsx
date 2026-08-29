"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Layers, Code2 } from "lucide-react";
import InteractiveGlowCard from "@/components/InteractiveGlowCard";
import ScrollReveal from "@/components/ScrollReveal";

function useCountUp(target: number, isActive: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isActive, target, duration]);

  return count;
}

const StatItemValue = ({
  value,
  suffix = "+",
  isActive,
}: {
  value: number;
  suffix?: string;
  isActive: boolean;
}) => {
  const count = useCountUp(value, isActive);
  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const StatProgressCircle = ({
  value,
  max,
  isActive,
}: {
  value: number;
  max: number;
  isActive: boolean;
}) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(value / max, 1);
  const offset = isActive ? circumference - percentage * circumference : circumference;

  return (
    <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="stroke-on-surface/5 fill-none"
          strokeWidth="3.5"
        />
        <motion.circle
          cx="24"
          cy="24"
          r={radius}
          className="stroke-primary fill-none"
          strokeWidth="3.5"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-80px" });

  const stats = [
    { label: "Years Exp.", value: 2, suffix: "+" },
    { label: "Projects", value: 6, suffix: "+" },
    { label: "Companies", value: 1, suffix: "" },
  ];

  const services = [
    {
      title: "Mobile App Dev",
      description:
        "Native-quality cross-platform applications using Flutter and React Native for iOS and Android.",
      icon: <Smartphone className="text-primary w-6 h-6" />,
      deliverables: ["Flutter", "React Native", "iOS & Android", "App Store / Play Store", "Animations"],
      glowColor: "rgba(0, 218, 243, 0.15)",
    },
    {
      title: "Full Stack Dev",
      description:
        "End-to-end development bridging robust backends with reactive, modern frontend architectures.",
      icon: <Layers className="text-primary w-6 h-6" />,
      deliverables: ["React / Next.js", "Node.js", "REST / GraphQL", "PostgreSQL / Mongo", "Web Sockets"],
      glowColor: "rgba(0, 112, 243, 0.15)",
    },
    {
      title: "Technical Architecture",
      description:
        "Designing scalable system architectures, RESTful APIs, and cloud-native infrastructure for production-grade applications.",
      icon: <Code2 className="text-primary w-6 h-6" />,
      deliverables: ["System Design", "Cloud Native (AWS)", "Docker & CI/CD", "Security Standards", "APIs"],
      glowColor: "rgba(168, 85, 247, 0.15)",
    },
  ];

  return (
    <section className="py-xxl relative bg-surface overflow-hidden" id="about">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] orb-glow opacity-30 animate-slow-spin" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] orb-glow opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />

      <div className="container max-w-container-max px-gutter mx-auto relative z-10">
        <div className="mb-xxl max-w-3xl flex flex-col items-center lg:items-start mx-auto lg:mx-0">
          <ScrollReveal direction="left" className="font-mono text-sm text-primary uppercase tracking-[0.3em] mb-sm block w-full text-center lg:text-left">
            About Me
          </ScrollReveal>
          <ScrollReveal type="words" className="font-display text-4xl md:text-5xl leading-tight mb-md text-on-surface w-full justify-center lg:justify-start text-center lg:text-left">
            Building Modern Digital Experiences
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="font-body text-on-surface-variant text-xl w-full text-center lg:text-left">
            Focusing on innovation, performance, and user-focused development.
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg lg:gap-xl">
          {/* Main Biography Card */}
          <div className="lg:col-span-8 md:col-span-2">
            <InteractiveGlowCard className="rounded-3xl glass-card border border-outline/20 p-xl relative overflow-hidden group h-full" glowColor="rgba(0, 112, 243, 0.15)">
              <div className="flex flex-col justify-between h-full relative z-10 gap-lg">
                <div className="space-y-md flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-center gap-xs justify-center lg:justify-start">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest pl-1">Available for new projects</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-on-surface leading-snug">
                    Bridging Design Precision with Advanced Systems Engineering
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed text-base">
                    I am Abhishek Verma, a software developer dedicated to crafting modern, premium digital ecosystems. 
                    I build high-performance mobile and web solutions that fuse technical robustness with refined UI/UX.
                  </p>
                  <p className="font-body text-on-surface-variant leading-relaxed text-sm opacity-90">
                    My engineering process is centered on writing clean, modular code, integrating seamless AI models, 
                    and architecting scalable backends. I thrive on solving complex development hurdles and building products 
                    that users love.
                  </p>
                </div>
                {/* Code window mock */}
                <div className="bg-surface-container/50 border border-outline/10 rounded-2xl p-md font-mono text-xs text-primary/80 overflow-hidden relative select-none">
                  <div className="flex gap-1.5 mb-3 border-b border-outline/5 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="space-y-1">
                    <p><span className="text-secondary-fixed-dim">import</span> {"{ Engineer }"} <span className="text-secondary-fixed-dim">from</span> <span className="text-emerald-500">&apos;./developer&apos;</span>;</p>
                    <p><span className="text-secondary-fixed-dim">const</span> profile = <span className="text-secondary-fixed-dim">new</span> Engineer({'{'}</p>
                    <p className="pl-4">name: <span className="text-emerald-500">&apos;Abhishek Verma&apos;</span>,</p>
                    <p className="pl-4">roles: [<span className="text-emerald-500">&apos;Full-Stack&apos;</span>, <span className="text-emerald-500">&apos;Mobile Lead&apos;</span>],</p>
                    <p className="pl-4">philosophy: <span className="text-emerald-500">&apos;Pixel-perfect UI + Ironclad architecture&apos;</span></p>
                    <p>{'});'}</p>
                  </div>
                </div>
              </div>
            </InteractiveGlowCard>
          </div>

          {/* Stats Card */}
          <div className="lg:col-span-4 md:col-span-1" ref={statsRef}>
            <InteractiveGlowCard className="rounded-3xl glass-card border border-outline/20 p-xl relative overflow-hidden group h-full" glowColor="rgba(0, 218, 243, 0.15)">
              <div className="flex flex-col justify-between h-full relative z-10 gap-lg">
                <div className="space-y-sm flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">Metrics & Growth</h4>
                  <p className="text-sm text-on-surface-variant opacity-85">A record of constant learning and delivery.</p>
                </div>
                <div className="space-y-lg pt-md">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="flex items-center justify-between border-b border-outline/5 pb-sm last:border-0 last:pb-0">
                      <div>
                        <div className="text-2xl font-black text-on-surface flex items-baseline">
                          <StatItemValue value={stat.value} suffix={stat.suffix} isActive={isInView} />
                        </div>
                        <div className="text-[10px] font-mono uppercase text-on-surface-variant tracking-widest pl-0.5">{stat.label}</div>
                      </div>
                      <StatProgressCircle value={stat.value} max={stat.label.includes("Exp") ? 3 : stat.label.includes("Proj") ? 10 : 2} isActive={isInView} />
                    </div>
                  ))}
                </div>
              </div>
            </InteractiveGlowCard>
          </div>

          {/* Services Cards */}
          {services.map((service, i) => (
            <div key={service.title} className="lg:col-span-4 md:col-span-1">
              <InteractiveGlowCard 
                className="rounded-3xl glass-card border border-outline/20 p-lg hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface-variant/40 h-full relative group" 
                glowColor={service.glowColor}
              >
                <div className="flex flex-col gap-lg h-full relative z-10 justify-between">
                  <div className="space-y-md flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-on-surface">{service.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {/* Service Deliverables Badge list */}
                  <div className="flex flex-wrap gap-1.5 pt-md border-t border-outline/10 justify-center lg:justify-start">
                    {service.deliverables.map((item) => (
                      <span key={item} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-surface-container-high/40 border border-outline/10 text-on-surface-variant tracking-wider uppercase">{item}</span>
                    ))}
                  </div>
                </div>
              </InteractiveGlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
