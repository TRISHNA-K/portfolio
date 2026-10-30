import React from "react";
import { SKILLS } from "../data/portfolio";

const Row = () => (
  <div className="flex shrink-0 items-center">
    {SKILLS.map((skill) => (
      <span key={skill} className="flex items-center">
        <span className="font-display text-xl sm:text-2xl tracking-tight whitespace-nowrap px-6">{skill}</span>
        <span className="text-[#c23a22] text-lg select-none">✳</span>
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div
    className="border-y border-[#141413]/15 py-5 overflow-hidden bg-[#ece6d9]/60"
    data-testid="skills-marquee"
    aria-hidden="true"
  >
    <div className="marquee-track flex w-max">
      <Row />
      <Row />
    </div>
  </div>
);
