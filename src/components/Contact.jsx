import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, FileText, Copy, Check } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL, getGmailUrl } from "../data/portfolio";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gmailComposeUrl = getGmailUrl(
    "Product / Project Management — Hello Trishna",
    "Hi Trishna,\n\nI came across your portfolio and would like to connect."
  );

  return (
    <>
      <section id="contact" className="py-24 lg:py-32 scroll-mt-16" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono-x text-xs uppercase tracking-[0.2em] text-[#8f8a7c]">06 — Contact</p>
          <h2 className="mt-4 font-display font-semibold tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            Let&rsquo;s build the next right thing.
          </h2>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-[#5e5b52] leading-relaxed">
            Actively seeking <strong className="text-[#141413] font-semibold">Product &amp; Project Management Internship</strong> opportunities.
            Whether you have an open position, want to explore a quick call or product discussion, or want to dissect
            roadmaps and technical systems — my inbox is the fastest route.
          </p>

          <div className="mt-8 max-w-2xl p-6 bg-[#ece6d9]/70 border-l-4 border-[#c23a22]" data-testid="contact-pitch-quote">
            <p className="font-display italic text-[#141413] text-base sm:text-lg leading-relaxed">
              &ldquo;Give me 15 minutes on a quick call or product talk. I&rsquo;ll bring fresh curiosity, a sharp teardown of one of your product flows, and zero ego — ready to show you how I can help your team ship faster, prioritize ruthlessly, and build things customers genuinely love.&rdquo;
            </p>
            <p className="mt-3 font-mono-x text-[10px] uppercase tracking-[0.2em] text-[#8f8a7c]">
              — Trishna Kuruppath · Vellore Institute of Technology (VIT)
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-email-button"
              title="Open Gmail compose to trishnakuruppath@gmail.com"
              className="inline-flex items-center gap-2.5 bg-[#c23a22] text-white px-7 py-4 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#a82e19] transition-colors duration-300"
            >
              <Mail size={15} strokeWidth={1.75} />
              <span className="lowercase">{EMAIL}</span>
            </a>
            <button
              type="button"
              onClick={handleCopy}
              data-testid="contact-copy-email-button"
              className="inline-flex items-center gap-2 border border-[#141413]/30 px-5 py-4 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#141413] hover:text-[#f5f1e8] hover:border-[#141413] transition-colors duration-300"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-600" strokeWidth={2} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} strokeWidth={1.75} />
                  <span>Copy email</span>
                </>
              )}
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-resume-button"
              className="inline-flex items-center gap-1.5 border border-[#141413]/30 px-6 py-4 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#141413] hover:text-[#f5f1e8] hover:border-[#141413] transition-colors duration-300"
            >
              Résumé
              <Download size={14} strokeWidth={1.75} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-linkedin-link"
              className="inline-flex items-center gap-1.5 border border-[#141413]/30 px-6 py-4 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#141413] hover:text-[#f5f1e8] hover:border-[#141413] transition-colors duration-300"
            >
              LinkedIn
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-github-link"
              className="inline-flex items-center gap-1.5 border border-[#141413]/30 px-6 py-4 font-mono-x text-xs uppercase tracking-[0.18em] hover:bg-[#141413] hover:text-[#f5f1e8] hover:border-[#141413] transition-colors duration-300"
            >
              GitHub
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <footer className="border-t border-[#141413]/15" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 bg-[#141413] text-[#f5f1e8] flex items-center justify-center">
            <FileText size={13} strokeWidth={1.75} />
          </span>
          <div>
            <p className="font-display font-semibold tracking-tight leading-none">TRISHNA.</p>
            <p className="mt-1 font-mono-x text-[9px] uppercase tracking-[0.2em] text-[#8f8a7c]">
              Product thinking, data precision, & working software.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p className="font-mono-x text-[10px] uppercase tracking-[0.15em] text-[#8f8a7c]">
            © 2026 Trishna Kuruppath · Vellore Institute of Technology
          </p>
          <a
            href="#top"
            data-testid="footer-back-to-top"
            className="font-mono-x text-[10px] uppercase tracking-[0.15em] text-[#141413] hover:text-[#c23a22] transition-colors duration-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  </>
  );
};
