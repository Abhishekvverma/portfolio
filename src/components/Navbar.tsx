"use client";

import React, { useState, useEffect } from "react";

import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import MagneticEffect from "@/components/MagneticEffect";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setMounted(true);
    });
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  const isDark = resolvedTheme === "dark";



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-outline/0 ${
        isScrolled || isOpen
          ? "bg-surface/85 backdrop-blur-md border-outline/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container max-w-container-max px-gutter mx-auto flex items-center justify-between" aria-label="Main Navigation">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-2xl font-bold tracking-tight text-on-surface hover:text-primary transition-colors flex items-center gap-2"
          aria-label="Scroll to top"
        >
          Abhishek<span className="text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors relative group font-medium"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-md">
          {mounted && (
            <MagneticEffect range={30} strength={0.3}>
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors rounded-full cursor-pointer"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </MagneticEffect>
          )}

          <MagneticEffect range={40} strength={0.25}>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hidden sm:block bg-primary-container text-on-primary-container px-lg py-sm rounded-xl font-body font-bold hover:shadow-[0_0_25px_rgba(0,112,243,0.4)] transition-all active:scale-95 cursor-pointer"
            >
              Hire Me
            </button>
          </MagneticEffect>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-2xl border-b border-outline/10 overflow-hidden"
          >
            <div className="flex flex-col gap-lg p-lg px-gutter">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-mono text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="w-full bg-primary-container text-on-primary-container py-md rounded-xl font-body font-bold"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
