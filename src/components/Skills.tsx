"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Smartphone, Database, Wrench } from "lucide-react";
import InteractiveGlowCard from "@/components/InteractiveGlowCard";
import ScrollReveal from "@/components/ScrollReveal";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Layout className="text-primary w-5 h-5" />,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="text-primary w-5 h-5" />,
      skills: [
        "React Native",
        "Flutter",
        "Expo",
        "React Navigation",
        "Cross-Platform UI",
        "Push Notifications",
      ],
    },
    {
      title: "Backend & Integrations",
      icon: <Database className="text-primary w-5 h-5" />,
      skills: [
        "Node.js",
        "REST APIs",
        "Firebase",
        "MongoDB",
        "Supabase",
        "Payment Gateways",
        "AI / OpenAI API",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="text-primary w-5 h-5" />,
      skills: [
        "Git & GitHub",
        "VS Code",
        "Figma",
        "Postman",
        "Docker (basics)",
        "Vercel / Netlify",
      ],
    },
  ];

  return (
    <section className="py-xxl bg-surface-container-lowest relative overflow-hidden" id="skills">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="container max-w-container-max px-gutter mx-auto relative z-10">
        <div className="text-center mb-xxl max-w-3xl mx-auto">
          <ScrollReveal direction="up" className="font-mono text-sm text-secondary-fixed-dim uppercase tracking-[0.4em] mb-sm block">
            Technical Arsenal
          </ScrollReveal>
          <ScrollReveal type="words" className="font-display text-4xl md:text-5xl text-on-surface mb-md justify-center leading-snug">
            Technologies I Build With
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="font-body text-on-surface-variant opacity-80">
            A curated stack of modern technologies, frameworks, and tools used to craft scalable,
            performant, and user-focused digital products.
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <InteractiveGlowCard className="tech-card rounded-2xl p-lg h-full" glowColor="rgba(0, 218, 243, 0.15)">
                <div className="flex flex-col gap-lg h-full">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-bold text-on-surface">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-sm">
                    {group.skills.map((skill, badgeIdx) => (
                      <motion.div
                        key={skill}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + badgeIdx * 0.03, type: "spring", stiffness: 150, damping: 12 }}
                        className="tech-badge flex items-center gap-xs px-md py-sm rounded-xl text-sm text-on-surface-variant cursor-default"
                      >
                        <span className="neon-dot" aria-hidden="true" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </InteractiveGlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
