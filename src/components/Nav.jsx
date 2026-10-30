import React from "react";
import { FileText, Mail } from "lucide-react";
import { EMAIL, getGmailUrl } from "../data/portfolio";

const LINKS = [
  { label: "Case Studies", href: "#work", testid: "nav-link-case-studies" },
  { label: "Thinking Lab", href: "#lab", testid: "nav-link-thinking-lab" },
  { label: "Competencies", href: "#competencies", testid: "nav-link-competencies" },
  { label: "Experience", href: "#experience", testid: "nav-link-experience" },
  { label: "Contact", href: "#contact", testid: "nav-link-contact" },
];

export const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50 bg-[#f5f1e8]/90 backdrop-blur-md border-b border-[#141413]/15">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
      <a href="#top" data-testid="nav-brand" className="flex items-center gap-2.5 group">
        <span className="w-8 h-8 bg-[#141413] text-[#f5f1e8] flex items-center justify-center group-hover:bg-[#c23a22] transition-colors duration-300">
          <FileText size={15} strokeWidth={1.75} />
        </span>
        <span className="font-display font-semibold tracking-tight text-lg">TRISHNA.</span>
      </a>
      <nav className="hidden md:flex items-center gap-7">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            data-testid={l.testid}
            className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-[#5e5b52] hover:text-[#c23a22] transition-colors duration-300"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href={getGmailUrl(
          "Product / Project Management — Hello Trishna",
          "Hi Trishna,\n\nI came across your portfolio and would like to connect."
        )}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="nav-email-button"
        title="Send email via Gmail to trishnakuruppath@gmail.com"
        className="flex items-center gap-2 border border-[#141413]/30 px-3.5 py-1.5 font-mono-x text-[11px] uppercase tracking-[0.15em] hover:bg-[#141413] hover:text-[#f5f1e8] hover:border-[#141413] transition-colors duration-300"
      >
        <Mail size={13} strokeWidth={1.75} />
        <span className="hidden sm:inline">Email</span>
      </a>
    </div>
  </header>
);
