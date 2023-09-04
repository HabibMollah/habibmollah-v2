import { createElement } from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tiktokFind from "@/public/tiktok-find.webp";
import affling from "@/public/affling.webp";
import gamepedia from "@/public/gamepedia.webp";
import portfolioV2 from "@/public/porfolio-v2.webp";
import moneymate from "@/public/moneymate.webp";
import portfolioV1 from "@/public/portfolio-v1.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "TikTok Find (freelance project)",
    description:
      "Single vendor e-commerce site with admin panel and user & admin authentication. Products can be added, updated, deleted with ease.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Redux", "Firebase"],
    imageUrl: tiktokFind,
    sourceCode: "",
    live: "",
    demo: "https://youtu.be/_unb9NCeEaQ",
  },
  {
    title: "Affling (ongoing freelance project)",
    description:
      "A social-media like website for a affiliate marketing stuff, where people can register a profile and show there services",
    tags: ["Next.js", "TypeScript", "Zod", "...", "...", "..."],
    imageUrl: affling,
    sourceCode: "",
    live: "",
    demo: "",
  },
  {
    title: "GamePedia",
    description:
      "A multi-genre, multi-platform game discovery website with multi level filtering and sorting",
    tags: ["TypeScript", "React", "Vite", "Chakra UI"],
    imageUrl: gamepedia,
    sourceCode: "https://github.com/HabibMollah/gamepedia",
    live: "https://gamepedia-pi.vercel.app/",
    demo: "",
  },
  {
    title: "This portfolio",
    description: "The website you're looking at right now.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: portfolioV2,
    sourceCode: "",
    live: "",
    demo: "",
  },
  {
    title: "MoneyMate",
    description:
      "A simple but powerful expense tracker app with the ability to filter items with specific category.",
    tags: ["React", "Vite", "Daisy UI"],
    imageUrl: moneymate,
    sourceCode: "",
    live: "",
    demo: "",
  },
  {
    title: "HTML CSS only Portfolio",
    description: "My first porfolio made only with HTML and CSS.",
    tags: ["HTML5", "CSS3"],
    imageUrl: portfolioV1,
    sourceCode: "",
    live: "",
    demo: "",
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: "TbBrandHtml5" },
  { name: "CSS", icon: "css-icon-url" },
  { name: "JavaScript", icon: "js-icon-url" },
  { name: "TypeScript", icon: "ts-icon-url" },
  { name: "React", icon: "react-icon-url" },
  { name: "Next.js", icon: "nextjs-icon-url" },
  { name: "Node.js", icon: "nodejs-icon-url" },
  { name: "Git", icon: "git-icon-url" },
  { name: "Tailwind", icon: "tailwind-icon-url" },
  { name: "Prisma", icon: "prisma-icon-url" },
  { name: "MongoDB", icon: "mongodb-icon-url" },
  { name: "Redux", icon: "redux-icon-url" },
  { name: "GraphQL", icon: "graphql-icon-url" },
  { name: "Apollo", icon: "apollo-icon-url" },
  { name: "Express", icon: "express-icon-url" },
  { name: "PostgreSQL", icon: "postgresql-icon-url" },
  { name: "Python", icon: "python-icon-url" },
  { name: "Django", icon: "django-icon-url" },
  { name: "Framer Motion", icon: "framer-motion-icon-url" },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: createElement(FaReact),
    date: "2021 - present",
  },
] as const;
