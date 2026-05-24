"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import InteractiveGlowCard from "@/components/InteractiveGlowCard";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticEffect from "@/components/MagneticEffect";

const projects = [
  {
    title: "QuickBite",
    category: "Food Ordering Ecosystem",
    tags: ["React Native", "React.js", "Firebase"],
    description:
      "A full-stack food ordering platform featuring a customer mobile app, admin dashboard, real-time tracking, and Razorpay integration.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Abhishekvverma",
    demo: "#",
  },
  {
    title: "LuxeJewels",
    category: "Mobile E-Commerce",
    tags: ["React Native", "React Query", "Razorpay"],
    description:
      "A premium jewellery shopping app with high-quality image galleries, wishlist functionality, and a visually optimized mobile UI/UX.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Abhishekvverma",
    demo: "#",
  },
  {
    title: "PrepGenius AI",
    category: "EdTech Platform",
    tags: ["OpenAI API", "React Native", "TypeScript"],
    description:
      "An AI-powered interview prep app that generates mock sessions, evaluates answers, and provides personalized feedback.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Abhishekvverma",
    demo: "#",
  },
  {
    title: "TastyPlates",
    category: "Client Application",
    tags: ["React Native CLI", "Firebase", "REST APIs"],
    description:
      "A dedicated restaurant ordering mobile app enabling robust menu browsing, item customization, and seamless cart management.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Abhishekvverma",
    demo: "#",
  },
  {
    title: "Retail Pro",
    category: "Retail Management",
    tags: ["Google Vision API", "TypeScript", "React Native"],
    description:
      "A scalable app for shopkeepers to manage inventory and sales, featuring Google Vision API integration for product automation.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Abhishekvverma",
    demo: "#",
  },
];

const ProjectCard = ({ project, i }: { project: typeof projects[0]; i: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for x/y mouse offset relative to card size
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Springs for smooth, responsive movement
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 120, damping: 20 });

  // Light glare reflection follow effect
  const glareX = useSpring(useTransform(x, [0, 1], [0, 100]), { stiffness: 120, damping: 20 });
  const glareY = useSpring(useTransform(y, [0, 1], [0, 100]), { stiffness: 120, damping: 20 });

  const background = useMotionTemplate`radial-gradient(circle 240px at ${glareX}% ${glareY}%, rgba(0, 112, 243, 0.12), transparent)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative position from 0 to 1
    const mouseX = (event.clientX - rect.left) / width;
    const mouseY = (event.clientY - rect.top) / height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative h-full w-full"
    >
      <InteractiveGlowCard className="rounded-[32px] h-full" glowColor="rgba(0, 112, 243, 0.15)">
        <div 
          style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
          className="noir-card rounded-[32px] overflow-hidden flex flex-col h-full border border-outline/10 bg-surface-variant/30 hover:bg-surface-variant/60 transition-all duration-500 relative"
        >
          {/* Subtle Glare overlay effect following mouse */}
          <motion.div 
            style={{ background }}
            className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          <div className="noir-glow-edge opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Image Container */}
          <div 
            className="h-72 relative overflow-hidden"
            style={{ transform: "translateZ(10px)" }}
          >
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category} project screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              priority={i < 3}
              className="object-cover grayscale-[0.4] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-black/40 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-full font-mono uppercase tracking-widest border border-outline/20">
                {project.category}
              </span>
            </div>

            {/* Project Link Icon */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 text-background">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div 
            className="p-8 md:p-10 flex flex-col flex-grow"
            style={{ transform: "translateZ(15px)" }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-on-surface-variant/60 uppercase tracking-widest border-b border-outline/20 pb-0.5"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-on-surface-variant/80 mb-8 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            <div className="mt-auto flex items-center justify-between pt-6 border-t border-outline/10">
              <div className="flex gap-4">
                <MagneticEffect range={35} strength={0.3}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code on GitHub`}
                    className="flex items-center gap-2 text-sm font-bold text-on-surface hover:text-primary transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </MagneticEffect>
                <MagneticEffect range={35} strength={0.3}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="flex items-center gap-2 text-sm font-bold text-on-surface hover:text-primary transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </MagneticEffect>
              </div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                View Details
              </span>
            </div>
          </div>
        </div>
      </InteractiveGlowCard>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-xxl bg-background relative overflow-hidden" id="projects">
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" aria-hidden="true" />

      <div className="container max-w-container-max px-gutter mx-auto relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-xxl max-w-4xl">
          <ScrollReveal direction="left" className="font-mono text-sm text-primary uppercase tracking-[0.4em] mb-sm block">
            Featured Works
          </ScrollReveal>
          <ScrollReveal type="words" className="font-display text-4xl md:text-7xl text-on-surface mb-md leading-snug">
            Digital Masterpieces
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="font-body text-on-surface-variant max-w-2xl text-lg opacity-80 leading-relaxed">
            A curated collection of high-performance applications and immersive digital
            experiences crafted with precision and modern engineering.
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <MagneticEffect range={40} strength={0.25}>
            <a
              href="https://github.com/Abhishekvverma"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 glass-btn px-xl py-md rounded-xl font-body font-bold text-on-surface hover:text-primary transition-all cursor-pointer"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </MagneticEffect>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
