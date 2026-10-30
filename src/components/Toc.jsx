import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ENTRIES = [
  { index: "01", title: "Case studies", meta: "14 documents", href: "#work", testid: "toc-link-case-studies" },
  { index: "02", title: "Product Thinking Lab", meta: "3 panels", href: "#lab", testid: "toc-link-thinking-lab" },
  { index: "03", title: "Competencies & tooling", meta: "4 disciplines", href: "#competencies", testid: "toc-link-competencies" },
  { index: "04", title: "Experience & education", meta: "Education · Internships · VIT", href: "#experience", testid: "toc-link-experience" },
  { index: "05", title: "Contact & socials", meta: "Let's connect", href: "#contact", testid: "toc-link-contact" },
];

export const Toc = () => (
  <section className="py-20 lg:py-28" data-testid="toc-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono-x text-xs uppercase tracking-[0.2em] text-[#8f8a7c]">01 — Table of contents</p>
        <h2 className="mt-4 font-display font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">
          Built to be skimmed.
        </h2>
        <p className="mt-3 max-w-lg text-[#5e5b52] leading-relaxed">
          Recruiters scan before they read. Every section of this dossier is one jump away.
        </p>
      </motion.div>
      <div className="mt-12 border-t border-[#141413]/15">
        {ENTRIES.map((e, i) => (
          <motion.a
            key={e.index}
            href={e.href}
            data-testid={e.testid}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-baseline gap-6 sm:gap-10 py-6 border-b border-[#141413]/15 hover:bg-[#ece6d9]/50 transition-colors duration-300 px-2 sm:px-4"
          >
            <span className="font-mono-x text-sm text-[#c23a22] font-semibold">{e.index}</span>
            <span className="font-display text-xl sm:text-2xl lg:text-3xl tracking-tight flex-1 group-hover:translate-x-2 transition-transform duration-300">
              {e.title}
            </span>
            <span className="font-mono-x text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#8f8a7c]">
              {e.meta}
            </span>
            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className="text-[#8f8a7c] group-hover:text-[#c23a22] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
