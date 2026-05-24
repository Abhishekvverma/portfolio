"use client";

import React from "react";
import { Github, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Abhishekvverma",
      label: "GitHub",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/abhishekvverma",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/abhishek-verma-a0047b26b/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="py-xl bg-surface-container-lowest border-t border-outline/10 relative overflow-hidden">
      <div className="container max-w-container-max px-gutter mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-lg">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-6 bg-primary-container rounded-full" aria-hidden="true" />
          <span className="font-display text-xl font-bold text-on-surface">Abhishek</span>
        </div>

        {/* Copyright */}
        <p className="text-on-surface-variant text-sm font-mono tracking-wide text-center">
          © {new Date().getFullYear()} Abhishek Verma. All rights reserved.
        </p>

        {/* Right group: socials + back to top */}
        <div className="flex items-center gap-md">
          <div className="flex gap-sm">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-surface-variant/50 border border-outline/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
