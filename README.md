# Trishna — Product Manager Portfolio Website

An editorial, high-precision portfolio website for Product Management, Data Analytics, and AI Systems.

## Features
- **Editorial Typography & Palette**: Fraunces serif headings, IBM Plex Mono technical badges, DM Sans body text, warm parchment tone (`#f5f1e8`), and restrained rust-red accents (`#c23a22`).
- **Interactive Product Thinking Lab**: 3-stage expandable teardown (*Investigate*, *Make the Call*, *Prove the Impact*) with problem statements, criteria, and link to case studies.
- **Experience & Leadership**: Dual-column showcase highlighting professional software engineering & web development internships (CodSoft & SDE) alongside campus leadership in VIT's top student organizations (IQuest Club & ACM Student Chapter).
- **Product / Project Management Internship Pitch**: Standout editorial callout card with a high-conviction value proposition bridging engineering rigor, UI/UX design, and ruthless prioritization—inviting recruiters and leaders for a 15-minute quick call or product discussion.
- **The Artifact Library**: Filterable grid (All, PM Artifacts, Data & AI) with 14 documented exercises, status tags (`Approved`, `In Progress`, `Case Study`), and links opening assigned GitHub repos in new tabs.
- **Skills Marquee**: Continuous ticker highlighting core competencies and methodology.
- **Responsive & Accessible**: Fully responsive layout with smooth scrolling, semantic HTML, and zero external runtime paywalls.

## Quick Start

### 1. Run Locally (Development)
```bash
cd portfolio
npm run dev
```

### 2. Build for Production
```bash
cd portfolio
npm run build
```
The static build is placed in `portfolio/dist/`.

### 3. Deploy
You can deploy the `portfolio/dist/` folder directly to:
- **GitHub Pages**: Push the `dist` folder to `gh-pages` branch.
- **Vercel**: Import the repository and set the root directory to `portfolio`.
- **Netlify**: Drag and drop the `portfolio/dist` folder into Netlify Drop.
