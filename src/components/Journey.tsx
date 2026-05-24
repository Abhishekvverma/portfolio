"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const milestones = [
  {
    period: "Aug 2024 – Present",
    title: "Junior Software Developer @ Kriotek",
    description:
      "Developing production-grade React Native applications using TypeScript. Building responsive cross-platform mobile interfaces, integrating REST APIs, payment gateways, and AI-powered chatbots to improve user experience.",
    tags: ["React Native", "TypeScript", "REST APIs", "Mobile UI"],
    side: "left" as const,
  },
  {
    period: "Mar 2023 – Jun 2023",
    title: "Independent Web Projects",
    description:
      "Designed and built responsive custom website layouts for freelance clients. Focused on translating user needs into clean, cross-browser compatible web interfaces with high performance.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    side: "right" as const,
  },
  {
    period: "2020 – 2023",
    title: "Full Stack & Mobile Exploration",
    description:
      "Transitioned from core web technologies to modern frameworks. Built full-stack applications and explored cross-platform mobile development to create end-to-end digital solutions.",
    tags: ["React", "Node.js", "React Native", "MongoDB"],
    side: "left" as const,
  },
  {
    period: "2017 – 2020",
    title: "Programming Foundations",
    description:
      "Started the programming journey with fundamental algorithmic thinking. Mastered core computer science principles and the triad of HTML, CSS, and JavaScript.",
    tags: ["C++", "Algorithms", "Data Structures", "Web Basics"],
    side: "right" as const,
  },
];

const Journey = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section className="py-xxl bg-surface relative overflow-hidden" id="journey">
      <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" aria-hidden="true" />

      <div className="container max-w-container-max px-gutter mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mx-auto md:mx-0 mb-xxl max-w-4xl">
          <ScrollReveal direction="left" className="font-mono text-sm text-primary uppercase tracking-[0.4em] mb-sm block w-full text-center md:text-left">
            My Journey
          </ScrollReveal>
          <ScrollReveal type="words" className="font-display text-4xl md:text-7xl text-on-surface mb-md leading-[1.1] justify-center md:justify-start text-center md:text-left w-full">
            Evolution of My Craft
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="font-body text-on-surface-variant max-w-2xl text-lg opacity-80 leading-relaxed text-center md:text-left w-full">
            A chronological look at the key milestones, technologies, and experiences that have
            defined my path as a developer.
          </ScrollReveal>
        </div>

        {/* Timeline container */}
        <div ref={containerRef} className="relative" style={{ position: "relative" }}>
          {/* Desktop centre line */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-outline/10 pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary-container pointer-events-none shadow-[0_0_15px_rgba(0,112,243,0.5)]"
            aria-hidden="true"
          />

          {/* Mobile left line */}
          <div
            className="md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-outline/10 pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary-container pointer-events-none shadow-[0_0_15px_rgba(0,112,243,0.5)]"
            aria-hidden="true"
          />

          <ol className="space-y-16 md:space-y-24">
            {milestones.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                style={{ listStyle: "none" }}
              >
                {/* ── DESKTOP layout: CSS grid with 2 equal columns + 0-width centre gutter ── */}
                <div className="hidden md:grid md:grid-cols-[1fr_0_1fr] md:items-start relative">
                  {/* Centre dot (positioned at the grid seam) */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-2 z-20"
                    aria-hidden="true"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(0,112,243,0.8)] border-2 border-background" />
                  </div>

                  {/* Left cell */}
                  <div className="pr-12 flex justify-end">
                    {item.side === "left" && <MilestoneCard item={item} align="right" />}
                  </div>

                  {/* Hidden centre gutter — keeps the dot centred */}
                  <div />

                  {/* Right cell */}
                  <div className="pl-12 flex justify-start">
                    {item.side === "right" && <MilestoneCard item={item} align="left" />}
                  </div>
                </div>

                {/* ── MOBILE layout: single column, indented past the bullet ── */}
                <div className="md:hidden flex gap-4 relative">
                  {/* Left line dot */}
                  <div className="flex-shrink-0 mt-1.5 z-20" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(0,112,243,0.8)] border-2 border-background" />
                  </div>
                  <MilestoneCard item={item} align="left" />
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

/* ─── Reusable card – rendered once per milestone ─── */
function MilestoneCard({
  item,
  align,
}: {
  item: (typeof milestones)[number];
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div className={`group w-full text-left md:text-left ${isRight ? "md:text-right" : "md:text-left"}`}>
      <span className="font-mono text-sm text-primary mb-2 block">{item.period}</span>
      <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed mb-4 text-sm md:text-base">
        {item.description}
      </p>
      <div className={`flex flex-wrap gap-2 justify-start md:justify-start ${isRight ? "md:justify-end" : "md:justify-start"}`}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-surface-variant/50 border border-outline/10 text-[10px] font-mono text-on-surface-variant uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Journey;
