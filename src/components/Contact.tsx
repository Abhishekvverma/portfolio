"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import InteractiveGlowCard from "@/components/InteractiveGlowCard";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticEffect from "@/components/MagneticEffect";

const Contact = () => {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "1cad1715-fd80-4f94-b1dd-16ba4425f876");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) { setStatus("success"); form.reset(); setTimeout(() => setStatus("idle"), 6000); }
      else { setStatus("error"); setTimeout(() => setStatus("idle"), 6000); }
    } catch { setStatus("error"); setTimeout(() => setStatus("idle"), 6000); }
  };

  return (
    <section className="py-xxl bg-surface relative overflow-hidden" id="contact">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="container max-w-container-max px-gutter mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl lg:items-center">
          <div className="space-y-xl flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start">
              <ScrollReveal direction="left" className="font-mono text-sm text-primary uppercase tracking-[0.4em] mb-sm block w-full text-center lg:text-left">Get in Touch</ScrollReveal>
              <ScrollReveal type="words" className="font-display text-4xl md:text-6xl text-on-surface mb-md leading-tight justify-center lg:justify-start text-center lg:text-left w-full">
                {"Let's Build Something Exceptional"}
              </ScrollReveal>
              <ScrollReveal delay={0.2} className="font-body text-on-surface-variant max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed text-center lg:text-left w-full">
                Have a project idea, collaboration opportunity, or just want to connect? I am always open to discussing new products and digital experiences.
              </ScrollReveal>
            </div>
            <div className="flex flex-col gap-4 w-full items-center lg:items-start">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email Me", value: "abhishekverma.dev@gmail.com", href: "mailto:abhishekverma.dev@gmail.com" },
                { icon: <MessageSquare className="w-5 h-5" />, label: "Quick Chat", value: "Book a 15-min discovery call", href: "#contact" },
              ].map((item) => (
                <InteractiveGlowCard key={item.label} className="rounded-2xl w-full max-w-[440px]" glowColor="rgba(0, 112, 243, 0.12)">
                  <motion.a href={item.href} whileHover={{ x: 8 }} className="flex items-center gap-4 group cursor-pointer p-4 bg-surface-variant/30 border border-outline/10 hover:border-primary/30 transition-all text-left w-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all text-primary">{item.icon}</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-0.5">{item.label}</div>
                      <div className="text-sm sm:text-base font-bold text-on-surface truncate">{item.value}</div>
                    </div>
                  </motion.a>
                </InteractiveGlowCard>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full">
            <InteractiveGlowCard className="rounded-[32px] w-full" glowColor="rgba(0, 112, 243, 0.15)">
              <div className="noir-card p-lg md:p-xl rounded-[32px] border border-outline/20 relative group">
                <div className="noir-glow-edge opacity-50 group-hover:opacity-100" />
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-[10px] font-mono text-on-surface-variant uppercase tracking-[0.2em] pl-1">Name</label>
                      <input id="contact-name" type="text" name="name" required autoComplete="name" placeholder="John Doe" className="w-full bg-surface-variant/50 border border-outline/20 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface placeholder:text-on-surface-variant/40 interactive-input" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-[10px] font-mono text-on-surface-variant uppercase tracking-[0.2em] pl-1">Email</label>
                      <input id="contact-email" type="email" name="email" required autoComplete="email" placeholder="john@example.com" className="w-full bg-surface-variant/50 border border-outline/20 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface placeholder:text-on-surface-variant/40 interactive-input" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-[10px] font-mono text-on-surface-variant uppercase tracking-[0.2em] pl-1">Subject</label>
                    <select id="contact-subject" name="subject" className="w-full bg-surface-variant/50 border border-outline/20 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface appearance-none cursor-pointer interactive-input">
                      <option className="bg-surface text-on-surface">Project Inquiry</option>
                      <option className="bg-surface text-on-surface">Collaboration</option>
                      <option className="bg-surface text-on-surface">Freelance Work</option>
                      <option className="bg-surface text-on-surface">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-[10px] font-mono text-on-surface-variant uppercase tracking-[0.2em] pl-1">Message</label>
                    <textarea id="contact-message" name="message" required rows={4} placeholder="Tell me about your project..." className="w-full bg-surface-variant/50 border border-outline/20 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all resize-none text-on-surface placeholder:text-on-surface-variant/40 interactive-input" />
                  </div>
                  <div className="flex justify-center w-full">
                    <MagneticEffect range={40} strength={0.15}>
                      <motion.button
                        type="submit"
                        disabled={status === "submitting" || status === "success"}
                        whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                        whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                        className="w-full max-w-[280px] bg-primary-container text-on-primary-container font-bold py-5 px-6 rounded-2xl shadow-xl shadow-primary-container/20 hover:shadow-primary-container/40 transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {status === "submitting" ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : status === "success" ? (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            <span>Message Sent!</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </motion.button>
                    </MagneticEffect>
                  </div>
                  {status === "success" && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-green-500 text-sm font-medium text-center"><CheckCircle className="w-4 h-4 flex-shrink-0" />Thank you! Your message has been sent successfully.</motion.p>}
                  {status === "error" && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-red-500 text-sm font-medium text-center"><AlertCircle className="w-4 h-4 flex-shrink-0" />Oops! Something went wrong. Please try again later.</motion.p>}
                </form>
              </div>
            </InteractiveGlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;