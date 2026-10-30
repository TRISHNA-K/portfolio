import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FileClock } from "lucide-react";
import { ARTIFACTS } from "../data/portfolio";

const FILTERS = [
  { id: "all", label: "All", count: 14, testid: "filter-tab-all" },
  { id: "pm", label: "PM artifacts", count: 10, testid: "filter-tab-pm" },
  { id: "data", label: "Data & AI", count: 4, testid: "filter-tab-data" },
];

const stampClass = (status) =>
  status === "In Progress"
    ? "bg-[#c23a22] text-white border-[#c23a22]"
    : status === "Approved"
      ? "bg-[#141413] text-[#f5f1e8] border-[#141413]"
      : "text-[#141413] border-[#141413]/40 bg-transparent";

const Card = ({ a, i }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: (i % 3) * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="group flex flex-col border border-[#141413]/20 bg-[#faf8f5] p-6 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-20px_rgba(20,20,19,0.35)] transition-all duration-300"
    data-testid={`artifact-card-${a.code.toLowerCase()}`}
  >
    <div className="flex items-center justify-between gap-3">
      <span className="font-mono-x text-xs font-semibold tracking-[0.15em] text-[#c23a22]">[{a.code}]</span>
      <span
        className={`font-mono-x text-[9px] uppercase tracking-[0.15em] border px-2 py-1 ${stampClass(a.status)}`}
        data-testid={`artifact-status-${a.code.toLowerCase()}`}
      >
        {a.status}
      </span>
    </div>
    <p className="mt-4 font-mono-x text-[10px] uppercase tracking-[0.2em] text-[#8f8a7c]">{a.domain}</p>
    <h3 className="mt-2 font-display font-semibold text-xl sm:text-2xl leading-snug tracking-tight">{a.title}</h3>
    <p className="mt-2 font-display italic text-[#c23a22]">{a.impact}</p>
    <p className="mt-3 text-sm text-[#5e5b52] leading-relaxed">{a.description}</p>
    {a.problem && (
      <div className="mt-4 border-l-2 border-[#c23a22]/60 pl-3">
        <p className="font-mono-x text-[9px] uppercase tracking-[0.2em] text-[#8f8a7c]">Problem</p>
        <p className="mt-1 text-xs text-[#5e5b52] leading-relaxed italic">{a.problem}</p>
      </div>
    )}
    <div className="mt-4 flex flex-wrap gap-1.5">
      {a.tags.map((t) => (
        <span
          key={t}
          className="font-mono-x text-[9px] uppercase tracking-[0.12em] text-[#5e5b52] border border-[#141413]/15 bg-[#141413]/[0.04] px-2 py-1"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="mt-auto pt-5 mt-6 border-t border-[#141413]/10 flex items-center justify-between">
      {a.url ? (
        <a
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`artifact-link-${a.code.toLowerCase()}`}
          className="inline-flex items-center gap-1.5 font-mono-x text-[11px] uppercase tracking-[0.15em] text-[#141413] group-hover:text-[#c23a22] transition-colors duration-300"
        >
          {a.category === "data" ? "Explore project" : "Open case study"}
          <ArrowUpRight size={13} strokeWidth={1.75} />
        </a>
      ) : (
        <span
          className="inline-flex items-center gap-1.5 font-mono-x text-[11px] uppercase tracking-[0.15em] text-[#8f8a7c]"
          data-testid={`artifact-link-${a.code.toLowerCase()}`}
        >
          <FileClock size={13} strokeWidth={1.75} />
          Case study in progress
        </span>
      )}
      <span className="font-mono-x text-[9px] uppercase tracking-[0.2em] text-[#8f8a7c]">
        {a.category === "data" ? "Build" : "Artifact"}
      </span>
    </div>
  </motion.article>
);

const SectionHeader = ({ kicker, title, count }) => (
  <div className="flex items-baseline justify-between gap-4 mb-8 mt-14 first:mt-0">
    <div>
      <p className="font-mono-x text-[10px] uppercase tracking-[0.2em] text-[#c23a22]">{kicker}</p>
      <h3 className="mt-1 font-display font-semibold text-xl sm:text-2xl tracking-tight">{title}</h3>
    </div>
    <span className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-[#8f8a7c]">{count}</span>
  </div>
);

export const Work = () => {
  const [filter, setFilter] = useState("all");
  const pm = ARTIFACTS.filter((a) => a.category === "pm");
  const data = ARTIFACTS.filter((a) => a.category === "data");

  return (
    <section id="work" className="py-20 lg:py-28 scroll-mt-16" data-testid="work-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono-x text-xs uppercase tracking-[0.2em] text-[#8f8a7c]">02 — Selected work</p>
          <h2 className="mt-4 font-display font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">
            The artifact library.
          </h2>
          <p className="mt-3 max-w-xl text-[#5e5b52] leading-relaxed">
            Fourteen documented exercises in product craft — each with a problem, an approach, and a
            measurable outcome.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2" data-testid="work-filter-tabs">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              data-testid={f.testid}
              className={`font-mono-x text-[11px] uppercase tracking-[0.15em] px-4 py-2 border transition-colors duration-300 ${
                filter === f.id
                  ? "bg-[#141413] text-[#f5f1e8] border-[#141413]"
                  : "border-[#141413]/25 text-[#5e5b52] hover:border-[#141413] hover:text-[#141413]"
              }`}
            >
              {f.label} — {f.count}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-10"
          >
            {(filter === "all" || filter === "pm") && (
              <>
                {filter === "all" && (
                  <SectionHeader
                    kicker="Section A"
                    title="Core product management artifacts"
                    count="10 docs"
                  />
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pm.map((a, i) => (
                    <Card key={a.code} a={a} i={i} />
                  ))}
                </div>
              </>
            )}
            {(filter === "all" || filter === "data") && (
              <>
                {filter === "all" && (
                  <SectionHeader
                    kicker="Section B"
                    title="Data analysis & AI engineering"
                    count="04 docs"
                  />
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  {data.map((a, i) => (
                    <Card key={a.code} a={a} i={i} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
