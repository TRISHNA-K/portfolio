import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { LAB_STEPS } from "../data/portfolio";

export const Lab = () => {
  const [open, setOpen] = useState("investigate");

  return (
    <section id="lab" className="py-20 lg:py-28 bg-[#ece6d9]/60 border-y border-[#141413]/15 scroll-mt-16" data-testid="lab-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono-x text-xs uppercase tracking-[0.2em] text-[#8f8a7c]">03 — Method</p>
          <h2 className="mt-4 font-display font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">
            The Product Thinking Lab
          </h2>
          <p className="mt-3 text-[#5e5b52] leading-relaxed">
            Every product decision starts with a question. Here&rsquo;s how I investigate the problem, weigh
            the evidence, and decide what deserves to be built — traced end-to-end through one real
            exercise: Nykaa&rsquo;s first-order conversion problem.
          </p>
        </motion.div>

        <div className="mt-12 border-t border-[#141413]/15">
          {LAB_STEPS.map((step, i) => {
            const isOpen = open === step.id;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-[#141413]/15"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : step.id)}
                  data-testid={`lab-panel-${step.id}`}
                  aria-expanded={isOpen}
                  className="w-full flex items-start gap-6 sm:gap-10 py-7 text-left px-2 sm:px-4 hover:bg-[#f5f1e8]/70 transition-colors duration-300"
                >
                  <span className="font-mono-x text-sm font-semibold text-[#c23a22] pt-1.5">
                    {step.index}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display font-semibold text-xl sm:text-2xl lg:text-3xl tracking-tight">
                      {step.title}
                    </span>
                    <span className="mt-2 block max-w-xl text-sm sm:text-base text-[#5e5b52] leading-relaxed">
                      {step.description}
                    </span>
                  </span>
                  <span className="mt-1.5 w-8 h-8 shrink-0 border border-[#141413]/25 flex items-center justify-center text-[#141413]">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className="grid sm:grid-cols-2 gap-px bg-[#141413]/15 border border-[#141413]/15 mx-2 sm:mx-4 mb-3"
                        data-testid={`lab-panel-content-${step.id}`}
                      >
                        {step.items.map(([label, value]) => (
                          <div key={label} className="bg-[#faf8f5] p-5">
                            <p className="font-mono-x text-[10px] uppercase tracking-[0.2em] text-[#c23a22]">
                              {label}
                            </p>
                            <p className="mt-2 text-sm text-[#5e5b52] leading-relaxed">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                      {step.artifact && (
                        <div className="mx-2 sm:mx-4 mb-7">
                          <a
                            href={step.artifact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`lab-artifact-link-${step.id}`}
                            className="inline-flex items-center gap-1.5 font-mono-x text-[10px] uppercase tracking-[0.15em] text-[#141413] underline underline-offset-4 decoration-[#c23a22] hover:text-[#c23a22] transition-colors duration-300"
                          >
                            {step.artifact.label}
                            <ArrowUpRight size={12} strokeWidth={1.75} />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
