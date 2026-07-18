import type { StaticImageData } from "next/image";
import {
  Brain,
  Building2,
  Cpu,
  FileJson,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  TrendingUp,
  Wine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProjectCategory = "backend" | "frontend" | "fullstack" | "cli" | "inDevelopment";

export type ProjectStructure = {
  id: string;
  img?: StaticImageData | string;
  github?: string;
  deployedLink?: string;
  executableUrl?: string;
  technologies: string[];
  dataAiHint?: string;
  inDevelopment?: boolean;
  category: ProjectCategory[];
  icon: LucideIcon;
  primaryTech: string;
};

export type SocialMediaHandleStructure = {
  nameKey: string;
  url: string;
  icon: LucideIcon;
};

export type NavLinkStructure = {
  key: string;
  href: string;
};

export type OrbitingTech = {
  name: string;
  icon: string;
  radius: number;
  duration?: number;
  reverse?: boolean;
  delay?: number;
};

export const projectCategories: { key: ProjectCategory | "all"; labelKey: string }[] = [
  { key: "all", labelKey: "projectCategories.all" },
  { key: "backend", labelKey: "projectCategories.backend" },
  { key: "frontend", labelKey: "projectCategories.frontend" },
  { key: "fullstack", labelKey: "projectCategories.fullstack" },
  { key: "cli", labelKey: "projectCategories.cli" },
];

export const siteData = {
  personalInfo: {
    name: "Thiago Di Faria",
    initials: "TF",
    email: "thiagodifaria@gmail.com",
    resumeUrl: "/docs/curriculo.pdf",
  },
  socialMedia: [
    { nameKey: "Github", url: "https://github.com/thiagodifaria", icon: Github },
    { nameKey: "Instagram", url: "https://www.instagram.com/thiagodifaria/?hl=en", icon: Instagram },
    { nameKey: "LinkedIn", url: "https://www.linkedin.com/in/thiago-di-faria-34304a34b/", icon: Linkedin },
    { nameKey: "Email", url: "mailto:thiagodifaria@gmail.com", icon: Mail },
    { nameKey: "Resume", url: "/docs/curriculo.pdf", icon: FileText },
  ] as SocialMediaHandleStructure[],
  orbitingTechIcons: [
    { name: "React", icon: "/icons/react.svg", radius: 60, duration: 28, reverse: false, delay: 0 },
    { name: "TypeScript", icon: "/icons/typescript.svg", radius: 60, duration: 28, reverse: true, delay: 14 },
    { name: "Python", icon: "/icons/python.svg", radius: 100, duration: 38, reverse: true, delay: 0 },
    { name: "Next.js", icon: "/icons/nextdotjs.svg", radius: 100, duration: 38, reverse: false, delay: 19 },
    { name: "TailwindCSS", icon: "/icons/tailwindcss.svg", radius: 140, duration: 48, reverse: false, delay: 0 },
  ] as OrbitingTech[],
  projectsDataStructure: [
    {
      id: "tesoriDiBacco",
      img: "/images/tesoridibacco.png",
      dataAiHint: "Premium Wine Club",
      github: "https://github.com/thiagodifaria/Tesori-di-Bacco",
      deployedLink: "https://tesoridibacco.netlify.app/",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: ["frontend"],
      icon: Wine,
      primaryTech: "React",
    },
    {
      id: "erp",
      dataAiHint: "Enterprise Business Platform",
      github: "https://github.com/thiagodifaria/ERP",
      technologies: ["TypeScript", "Python", "Rust", "Docker", "PostgreSQL"],
      category: ["backend", "fullstack"],
      icon: Building2,
      primaryTech: "TypeScript",
    },
    {
      id: "apiGateway",
      img: "/images/httpsserver.png",
      dataAiHint: "High Performance API Gateway",
      github: "https://github.com/thiagodifaria/API-Gateway",
      technologies: ["C++17", "OpenSSL", "CMake", "NASM", "SIMD"],
      category: ["backend"],
      icon: Cpu,
      primaryTech: "C++",
    },
    {
      id: "schemaAPI",
      dataAiHint: "Document Intelligence Platform",
      github: "https://github.com/thiagodifaria/SchemaAPI",
      technologies: ["Rust", "Python", "Electron", "PostgreSQL", "RabbitMQ"],
      category: ["backend", "fullstack"],
      icon: FileJson,
      primaryTech: "Rust",
    },
    {
      id: "lexiconCLI",
      img: "/images/lexiconcli.png",
      dataAiHint: "Financial Analysis Terminal",
      github: "https://github.com/thiagodifaria/LexiconCLI",
      technologies: ["Python", "Rich", "TimescaleDB", "RabbitMQ", "MLflow"],
      category: ["cli", "backend"],
      icon: TrendingUp,
      primaryTech: "Python",
    },
    {
      id: "moodAPI",
      img: "/images/moodapi.png",
      dataAiHint: "Sentiment Intelligence Platform",
      github: "https://github.com/thiagodifaria/MoodAPI",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"],
      category: ["backend", "fullstack"],
      icon: Brain,
      primaryTech: "Python",
    },
  ] as ProjectStructure[],
  navLinkStructure: [
    { key: "sobre", href: "/sobre" },
    { key: "projetos", href: "/projetos" },
    { key: "contato", href: "/#connect" },
  ] as NavLinkStructure[],
};
