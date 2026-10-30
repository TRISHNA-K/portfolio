import React from "react";
import { motion } from "framer-motion";
import { COMPETENCIES } from "../data/portfolio";

export const Competencies = () => (
  <section id="competencies" className="py-20 lg:py-28 scroll-mt-16" data-testid="competencies-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <p className="font-mono-x text-xs uppercase tracking-[0.2em] text-[#8f8a7c]">
          04 — Competencies & tooling
        </p>
        <h2 className="mt-4 font-display font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">
          A candid appraisal.
        </h2>
        <p className="mt-3 text-[#5e5b52] leading-relaxed">
          Strongest where product judgment meets technical depth: rigorous with documents, comfortable in SQL
          and Python, and fluent enough in RAG systems to ship AI features engineers respect.
        </p>
      </motion.div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#141413]/15 border border-[#141413]/15">
        {COMPETENCIES.map((c, i) => (
          <motion.div
            key={c.index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f5f1e8] p-6 lg:p-7 hover:bg-[#faf8f5] transition-colors duration-300"
            data-testid={`competency-card-${c.index}`}
          >
            <p className="font-mono-x text-sm font-semibold text-[#c23a22]">{c.index}</p>
            <h3 className="mt-3 font-display font-semibold text-xl tracking-tight leading-snug">
              {c.title}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {c.items.map((item) => (
                <li key={item} className="flex items-baseline gap-2.5 text-sm text-[#5e5b52]">
                  <span className="text-[#c23a22] text-[10px]">✳</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
