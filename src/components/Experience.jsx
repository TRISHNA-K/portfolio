import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Code2,
  Palette,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Mail,
  PhoneCall,
  Download,
  GraduationCap,
  Award,
  Copy,
  Check,
} from "lucide-react";
import {
  EDUCATION,
  EXPERIENCES,
  LEADERSHIP_CLUBS,
  PITCH_DATA,
  EMAIL,
  RESUME_URL,
  LINKEDIN_URL,
  getGmailUrl,
} from "../data/portfolio";

export const Experience = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gmailHref = getGmailUrl(
    PITCH_DATA.ctaEmailSubject,
    PITCH_DATA.ctaEmailBody
  );

  return (
    <section
      id="experience"
      className="py-20 lg:py-28 scroll-mt-16"
      data-testid="experience-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono-x text-xs uppercase tracking-[0.2em] text-[#8f8a7c]">
            05 — Background, track record &amp; leadership
          </p>
          <h2 className="mt-4 font-display font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">
            Education, Experience &amp; VIT Communities.
          </h2>
          <p className="mt-3 text-[#5e5b52] leading-relaxed">
            Rigorous software engineering foundation from Vellore Institute of Technology, paired with
            practical developer internships and active leadership across design and computing societies.
          </p>
        </motion.div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 border border-[#141413]/20 bg-[#faf8f5] p-6 sm:p-8 hover:shadow-[0_16px_36px_-18px_rgba(20,20,19,0.25)] transition-all duration-300"
          data-testid="education-card"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#141413]/10">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-[#141413] text-[#f5f1e8] flex items-center justify-center shrink-0 mt-1">
                <GraduationCap size={20} strokeWidth={1.75} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono-x text-xs uppercase tracking-[0.18em] text-[#c23a22] font-semibold">
                    {EDUCATION.institution}
                  </span>
                  <span className="font-mono-x text-[10px] uppercase tracking-[0.14em] bg-[#141413]/[0.04] border border-[#141413]/15 px-2.5 py-0.5 text-[#5e5b52]">
                    {EDUCATION.period}
                  </span>
                </div>
                <h3 className="mt-1 font-display font-semibold text-2xl sm:text-3xl tracking-tight text-[#141413]">
                  {EDUCATION.degree}
                </h3>
                <p className="mt-2 text-sm text-[#5e5b52] max-w-2xl leading-relaxed">
                  {EDUCATION.description}
                </p>
              </div>
            </div>

            {/* Standout CGPA Pill */}
            <div className="flex items-center gap-3.5 self-start md:self-auto bg-[#f5f1e8] border-2 border-[#141413] px-5 py-3 shrink-0">
              <div>
                <p className="font-mono-x text-[9px] uppercase tracking-[0.2em] text-[#8f8a7c]">
                  Cumulative GPA
                </p>
                <p className="font-display font-semibold text-3xl text-[#c23a22] leading-none mt-0.5">
                  {EDUCATION.cgpa}
                </p>
              </div>
              <span className="font-mono-x text-[9px] uppercase tracking-[0.15em] bg-[#c23a22] text-[#f5f1e8] px-2.5 py-1 font-semibold">
                {EDUCATION.badge}
              </span>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {EDUCATION.highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#5e5b52] leading-relaxed">
                <span className="text-[#c23a22] mt-0.5 font-bold">›</span>
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-[#141413]/10 flex flex-wrap items-center gap-2">
            <span className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-[#8f8a7c] mr-2">
              Core Technical Grounding:
            </span>
            {EDUCATION.coursework.map((c) => (
              <span
                key={c}
                className="font-mono-x text-[9px] uppercase tracking-[0.12em] text-[#5e5b52] border border-[#141413]/15 bg-[#141413]/[0.03] px-2.5 py-0.5"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Dual Column: Work Internships & Campus Leadership */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-8 items-start">
          {/* Column 1: Industry Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#141413]/15">
              <span className="w-7 h-7 bg-[#141413] text-[#f5f1e8] flex items-center justify-center">
                <Briefcase size={14} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg tracking-tight">
                  Work Experience &amp; Internships
                </h3>
                <p className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-[#8f8a7c]">
                  Software &amp; Web Development
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, i) => (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group border border-[#141413]/20 bg-[#faf8f5] p-6 sm:p-7 hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(20,20,19,0.3)] transition-all duration-300"
                  data-testid={`experience-card-${exp.id}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono-x text-[11px] font-semibold text-[#c23a22] tracking-[0.12em]">
                      <Calendar size={12} strokeWidth={1.75} />
                      {exp.period}
                    </span>
                    <span className="font-mono-x text-[9px] uppercase tracking-[0.15em] border border-[#141413]/30 px-2 py-0.5 bg-[#141413]/[0.03]">
                      {exp.badge}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display font-semibold text-xl tracking-tight leading-snug">
                    {exp.role}
                  </h4>
                  <p className="font-mono-x text-xs text-[#8f8a7c] tracking-[0.08em] mt-0.5">
                    {exp.organization}
                  </p>

                  <p className="mt-3 text-sm text-[#5e5b52] leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#141413]/10 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5e5b52] leading-relaxed">
                        <span className="text-[#c23a22] mt-0.5 font-bold">›</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono-x text-[9px] uppercase tracking-[0.12em] text-[#5e5b52] border border-[#141413]/15 bg-[#141413]/[0.04] px-2 py-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Column 2: Campus Leadership at VIT */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#141413]/15">
              <span className="w-7 h-7 bg-[#c23a22] text-[#f5f1e8] flex items-center justify-center">
                <Users size={14} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg tracking-tight">
                  Clubs &amp; Leadership at VIT
                </h3>
                <p className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-[#8f8a7c]">
                  Vellore Institute of Technology
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {LEADERSHIP_CLUBS.map((club, i) => (
                <motion.article
                  key={club.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group border border-[#141413]/20 bg-[#faf8f5] p-6 sm:p-7 hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(20,20,19,0.3)] transition-all duration-300"
                  data-testid={`club-card-${club.id}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono-x text-[11px] font-semibold text-[#141413] tracking-[0.12em]">
                      {club.id === "iquest-club" ? (
                        <Palette size={13} className="text-[#c23a22]" strokeWidth={1.75} />
                      ) : (
                        <Code2 size={13} className="text-[#c23a22]" strokeWidth={1.75} />
                      )}
                      {club.organization}
                    </span>
                    <span className="font-mono-x text-[9px] uppercase tracking-[0.15em] border border-[#141413]/30 px-2 py-0.5 bg-[#141413]/[0.03]">
                      {club.badge}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display font-semibold text-xl tracking-tight leading-snug">
                    {club.role}
                  </h4>
                  <p className="font-mono-x text-xs text-[#8f8a7c] tracking-[0.08em] mt-0.5">
                    {club.institution}
                  </p>

                  <p className="mt-3 text-sm text-[#5e5b52] leading-relaxed">
                    {club.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#141413]/10 space-y-2">
                    {club.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5e5b52] leading-relaxed">
                        <span className="text-[#c23a22] mt-0.5 font-bold">›</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {club.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono-x text-[9px] uppercase tracking-[0.12em] text-[#5e5b52] border border-[#141413]/15 bg-[#141413]/[0.04] px-2 py-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* High-Impact Opportunity / Product Talk Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 border-2 border-[#141413] bg-[#faf8f5] p-8 sm:p-10 lg:p-12 relative overflow-hidden"
          data-testid="product-talk-cta"
        >
          {/* Watermark accent */}
          <div className="absolute -right-8 -bottom-10 pointer-events-none opacity-[0.04] font-display text-9xl font-bold select-none text-[#141413]">
            PM
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-[#c23a22] text-[#f5f1e8] font-mono-x text-[10px] uppercase tracking-[0.18em] px-2.5 py-1">
                <Sparkles size={11} strokeWidth={2} />
                {PITCH_DATA.kicker}
              </span>
              <span className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-[#8f8a7c]">
                {PITCH_DATA.badge}
              </span>
            </div>

            <h3 className="mt-5 font-display font-semibold tracking-tight leading-[1.12] text-2xl sm:text-3xl lg:text-[2.2rem]">
              {PITCH_DATA.headline}
            </h3>

            <p className="mt-4 text-base sm:text-lg text-[#5e5b52] leading-relaxed">
              {PITCH_DATA.lead}
            </p>

            {/* Value proposition pillars */}
            <div className="mt-8 grid sm:grid-cols-3 gap-6 pt-6 border-t border-[#141413]/15">
              {PITCH_DATA.valueProps.map((vp) => (
                <div key={vp.title} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#c23a22] shrink-0" strokeWidth={2} />
                    <p className="font-display font-semibold text-sm tracking-tight text-[#141413]">
                      {vp.title}
                    </p>
                  </div>
                  <p className="text-xs text-[#5e5b52] leading-relaxed pl-5">
                    {vp.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* The standout persuasive closing line */}
            <div className="mt-8 p-5 sm:p-6 bg-[#ece6d9]/70 border-l-4 border-[#c23a22]">
              <p className="font-display italic text-[#141413] text-base sm:text-lg leading-relaxed">
                {PITCH_DATA.compellingPitch}
              </p>
              <p className="mt-3 font-mono-x text-[10px] uppercase tracking-[0.2em] text-[#8f8a7c]">
                — Let&rsquo;s start with a product conversation.
              </p>
            </div>

            {/* Direct action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-quick-call-button"
                title="Open Gmail compose to trishnakuruppath@gmail.com"
                className="inline-flex items-center gap-2.5 bg-[#c23a22] text-[#f5f1e8] px-6 py-3.5 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#a82e19] transition-colors duration-300 shadow-sm"
              >
                <Mail size={14} strokeWidth={1.75} />
                {PITCH_DATA.ctaButtonText}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                data-testid="cta-copy-email-button"
                className="inline-flex items-center gap-2 border border-[#141413]/30 px-5 py-3.5 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#141413] hover:text-[#f5f1e8] hover:border-[#141413] transition-colors duration-300"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-600" strokeWidth={2} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} strokeWidth={1.75} />
                    <span>Copy email</span>
                  </>
                )}
              </button>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-resume-button"
                className="inline-flex items-center gap-2 border border-[#141413]/30 px-5 py-3.5 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#141413] hover:text-[#f5f1e8] hover:border-[#141413] transition-colors duration-300"
              >
                Download Résumé
                <Download size={14} strokeWidth={1.75} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-linkedin-button"
                className="inline-flex items-center gap-2 border border-[#141413]/30 px-5 py-3.5 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#141413] hover:text-[#f5f1e8] hover:border-[#141413] transition-colors duration-300"
              >
                Connect on LinkedIn
                <ArrowUpRight size={14} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
