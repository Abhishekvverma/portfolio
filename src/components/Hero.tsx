"use client";

import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Layers, Github, Linkedin, Twitter } from "lucide-react";
import MagneticEffect from "@/components/MagneticEffect";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveGlowCard from "@/components/InteractiveGlowCard";

const ParticlesCanvas = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const numParticles = 45;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 112, 243, 0.12)";
      ctx.strokeStyle = "rgba(0, 112, 243, 0.04)";
      ctx.lineWidth = 0.8;

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0" />;
};

const Hero = () => {
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const phrases = useMemo(
    () => ["Full Stack Developer", "Mobile App Developer", "Building Modern Digital Experiences"],
    []
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Abhishekvverma",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/abhishek-verma-a0047b26b/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/abhishekvverma",
      label: "Twitter",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center pt-[72px] hero-mesh overflow-hidden"
      aria-label="Hero"
    >
      <ParticlesCanvas />
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      {/* Background Orbs */}
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] floating-orb" aria-hidden="true" />
      <div
        className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-secondary-fixed-dim/5 rounded-full blur-[120px] floating-orb"
        style={{ animationDelay: "-5s" }}
        aria-hidden="true"
      />

      <div className="container max-w-container-max px-gutter mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl lg:gap-xxl items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-sm bg-surface-container-high/60 backdrop-blur-md px-md py-xs rounded-full border border-outline/10 mb-lg overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse flex-shrink-0" />
              <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-on-surface-variant min-w-[240px] text-center lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="block"
                  >
                    {phrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>

            <ScrollReveal type="words" className="font-display text-4xl md:text-7xl mb-md leading-snug tracking-tight text-on-surface justify-center lg:justify-start">
              Crafting Scalable Digital Products With Modern Technologies
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="font-body text-lg md:text-xl text-on-surface-variant max-w-[540px] mb-xl leading-relaxed">
              I build fast, scalable, and visually refined applications across mobile and web
              platforms — combining clean architecture, modern UI/UX, and powerful backend systems.
            </ScrollReveal>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-md mb-xl">
              <MagneticEffect range={40} strength={0.25}>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-primary-container text-on-primary-container px-xl py-md rounded-xl font-body font-bold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-sm shadow-xl shadow-primary-container/20 group cursor-pointer"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </MagneticEffect>
              <MagneticEffect range={40} strength={0.25}>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="glass-btn text-on-surface px-xl py-md rounded-xl font-body font-bold active:scale-95 cursor-pointer"
                >
                  Contact Me
                </button>
              </MagneticEffect>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-md">
              <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant mr-md">
                Connect
              </span>
              <div className="flex gap-sm">
                {socials.map((social) => (
                  <MagneticEffect key={social.label} range={30} strength={0.35}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 glass-btn rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
                    >
                      {social.icon}
                    </a>
                  </MagneticEffect>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex relative items-center justify-center h-full min-h-[600px]"
          >
            <div className="relative w-full h-full flex items-center justify-center scale-110">
              <InteractiveGlowCard glowColor="rgba(0, 112, 243, 0.2)" className="relative z-20 w-[420px] h-[300px] rounded-[32px] rotate-[-2deg] shadow-2xl">
                <div className="w-full h-full bg-[#131313]/90 p-xl border border-outline/20 flex flex-col justify-between overflow-hidden group">
                  <div>
                    <div className="flex justify-between items-start mb-lg">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                      </div>
                      <div className="font-mono text-[10px] text-on-surface-variant/40">main.ts</div>
                    </div>
                    <div className="space-y-3 font-mono text-[12px] text-primary/80">
                      <p>
                        <span className="text-secondary-fixed-dim">const</span> developer = {"{"}
                      </p>
                      <p className="pl-4">
                        name: <span className="text-on-surface">&quot;Abhishek Verma&quot;</span>,
                      </p>
                      <p className="pl-4">
                        focus: <span className="text-on-surface">&quot;Performance&quot;</span>,
                      </p>
                      <p className="pl-4">
                        stack: [
                        <span className="text-on-surface">&quot;React&quot;, &quot;Node&quot;, &quot;Flutter&quot;</span>
                        ],
                      </p>
                      <p className="pl-4">
                        passion: <span className="text-on-surface">&quot;Building the future&quot;</span>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-[-20%] right-[-10%] w-40 h-40 bg-primary/20 blur-[50px] group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                </div>
              </InteractiveGlowCard>

              <div className="absolute z-30 top-[15%] right-[10%] w-24 h-24 rounded-full border border-outline/20 bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm floating-orb shadow-[0_0_30px_rgba(0,112,243,0.15)] flex items-center justify-center">
                <Zap className="text-primary w-8 h-8" />
              </div>
              <div
                className="absolute z-10 bottom-[15%] left-[5%] w-32 h-32 rounded-full border border-outline/20 bg-gradient-to-tr from-secondary-fixed-dim/20 to-transparent backdrop-blur-sm floating-orb shadow-[0_0_30px_rgba(0,218,243,0.15)] flex items-center justify-center"
                style={{ animationDelay: "-3s" }}
              >
                <Layers className="text-secondary-fixed-dim w-10 h-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
