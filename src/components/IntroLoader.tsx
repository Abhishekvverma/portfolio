"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logSequence = [
  "abhishek.init()",
  "Loading responsive UI elements... [OK]",
  "Compiling TypeScript models... [OK]",
  "Initializing Framer Motion modules... [OK]",
  "Connecting API gateways... [OK]",
  "Decrypting environment configurations... [OK]",
  "Access Granted. System ready."
];

const IntroLoader = () => {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const addLog = () => {
      if (index < logSequence.length) {
        setLogs((prev) => [...prev, logSequence[index]]);
        index++;
        const nextDelay = index === 1 ? 250 : index === logSequence.length - 1 ? 500 : Math.random() * 150 + 80;
        setTimeout(addLog, nextDelay);
      } else {
        setTimeout(() => setLoading(false), 800);
      }
    };

    const initialTimeout = setTimeout(addLog, 400);
    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } 
          }}
          className="fixed inset-0 bg-[#0b0b0b] z-[9999] flex flex-col items-center justify-center p-6 font-mono text-[11px] sm:text-[13px]"
        >
          {/* Futuristic grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,112,243,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

          <div className="max-w-[480px] w-full space-y-4 border border-outline/10 bg-[#111111]/80 backdrop-blur-xl p-6 rounded-[24px] shadow-2xl relative">
            {/* Corner glowing nodes */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-primary -translate-x-[1px] -translate-y-[1px] rounded-tl-sm" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-primary translate-x-[1px] -translate-y-[1px] rounded-tr-sm" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-primary -translate-x-[1px] translate-y-[1px] rounded-bl-sm" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-primary translate-x-[1px] translate-y-[1px] rounded-br-sm" />

            {/* Glowing spotlight effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary-fixed-dim/5 rounded-[24px] pointer-events-none" />

            <div className="flex items-center justify-between border-b border-outline/10 pb-2 mb-4">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] text-on-surface-variant/40 tracking-widest font-mono">CONSOLE_BRIDGE</span>
            </div>

            <div className="min-h-[160px] flex flex-col justify-start space-y-2 text-on-surface-variant font-mono">
              {logs.map((log, index) => {
                const isFirst = index === 0;
                const isLast = index === logSequence.length - 1;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${
                      isFirst 
                        ? "text-primary font-bold text-[12px] sm:text-[14px]" 
                        : isLast 
                          ? "text-secondary-fixed-dim font-bold" 
                          : "text-on-surface-variant/80"
                    }`}
                  >
                    {isFirst ? "> " : "  "}
                    {log}
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-outline/10 pt-4 flex items-center justify-between text-[9px] text-on-surface-variant/40 uppercase tracking-widest">
              <span>SYSTEM: ONLINE</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>LOADER_V2</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
