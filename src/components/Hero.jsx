import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, BadgeCheck } from "lucide-react";
import { EMAIL, RESUME_URL, STATS, getGmailUrl } from "../data/portfolio";

const PORTRAIT = "./hero_sketch.jpg";

const LINES = ["Product thinking,", "data precision,", "& working software."];

const lineVariants = {
  hidden: { y: "112%" },
  show: (i) => ({
    y: 0,
    transition: { delay: 0.25 + i * 0.14, duration: 1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="pt-28 lg:pt-36 pb-16 lg:pb-24" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display italic text-[#c23a22] text-lg sm:text-xl mb-6"
              data-testid="hero-intro-heading"
            >
              From curiosity to products that matter.
            </motion.p>
            <h1 className="font-display font-semibold tracking-tight leading-[1.04] text-4xl sm:text-5xl lg:text-[4.4rem]">
              {LINES.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    custom={i}
                    variants={lineVariants}
                    initial="hidden"
                    animate="show"
                    data-testid={`hero-headline-line-${i + 1}`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl text-base sm:text-lg text-[#5e5b52] leading-relaxed"
              data-testid="hero-description"
            >
              I&rsquo;m Trishna - driven by an insatiable curiosity for how things work and why users behave the way they do. Fascinated by the intersection of user psychology, data patterns, and engineering architecture, I love digging into everyday friction, exploring the &ldquo;why&rdquo; behind product choices, and turning genuine curiosity into clear strategies and working solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                data-testid="hero-cta-case-studies"
                className="inline-flex items-center gap-2.5 bg-[#141413] text-[#f5f1e8] px-6 py-3.5 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#c23a22] transition-colors duration-300"
              >
                Read the case studies
                <ArrowDown size={14} strokeWidth={1.75} />
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Trishna_K_Resume.pdf"
                data-testid="hero-resume-button"
                className="inline-flex items-center gap-2.5 border border-[#141413]/30 px-6 py-3.5 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#141413] hover:text-[#f5f1e8] hover:border-[#141413] transition-colors duration-300"
              >
                Download résumé
                <ArrowUpRight size={14} strokeWidth={1.75} />
              </a>
              <a
                href={getGmailUrl(
                  "Product / Project Management — Hello Trishna",
                  "Hi Trishna,\n\nI came across your portfolio and would like to connect."
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-email-link"
                title="Send email via Gmail to trishnakuruppath@gmail.com"
                className="font-mono-x text-xs tracking-[0.08em] text-[#141413] underline underline-offset-4 decoration-[#c23a22] decoration-2 hover:text-[#c23a22] transition-colors duration-300"
              >
                {EMAIL}
              </a>
            </motion.div>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
            data-testid="hero-portrait-card"
          >
            <div className="border border-[#141413]/25 bg-[#faf8f5] p-3">
              <div className="relative overflow-hidden aspect-[4/5] bg-[#ece6d9]">
                <motion.img
                  src={PORTRAIT}
                  alt="Product strategy document, user goals brief, and architectural workflow diagram on a workspace desk"
                  style={{ y: imgY }}
                  className="absolute inset-0 w-full h-[115%] object-cover grayscale contrast-105"
                  data-testid="hero-portrait-image"
                  onError={(e) => {
                    // Fallback to Unsplash if local file is missing
                    e.target.src = "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=srgb&fm=jpg&q=85";
                  }}
                />
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-[#141413] text-[#f5f1e8] font-mono-x text-[10px] uppercase tracking-[0.15em] px-2.5 py-1.5 rotate-2">
                  <BadgeCheck size={12} strokeWidth={1.75} />
                  Verified
                </span>
              </div>
              <figcaption className="flex items-center justify-between pt-3 px-1">
                <span className="font-mono-x text-[10px] uppercase tracking-[0.2em] text-[#8f8a7c]">
                  Fig. 01 — System architecture &amp; product brief
                </span>
                <span className="font-mono-x text-[10px] uppercase tracking-[0.2em] text-[#c23a22]">
                  Est. 14 artifacts
                </span>
              </figcaption>
            </div>
            <p className="mt-3 font-mono-x text-[10px] uppercase tracking-[0.2em] text-[#8f8a7c] text-center">
              Where product decisions take shape
            </p>
          </motion.figure>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-[#141413]/15"
          data-testid="hero-stats-row"
        >
          {STATS.map((s) => (
            <div key={s.label} className="pt-6 pr-6 border-r border-[#141413]/10 last:border-r-0">
              <p className="font-display font-semibold text-4xl lg:text-5xl tracking-tight">{s.value}</p>
              <p className="mt-2 font-mono-x text-[10px] uppercase tracking-[0.18em] text-[#8f8a7c]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
