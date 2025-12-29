
import type { StaticImageData } from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Layers,
  Palette,
  Coffee,
  Instagram,
  Terminal,
  Network,
  Code,
  TrendingUp,
  Wine,
  Brain,
  Shield,
  ListTodo,
  Building2,
  Server,
  Cloud,
  FileJson,
  Settings,
  Cpu,
  Zap,
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
  // Novos campos para o novo design
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
  { key: "inDevelopment", labelKey: "projectCategories.inDevelopment" },
];

export const siteData = {
  personalInfo: {
    name: "Thiago Di Faria",
    initials: "TF",
    email: "thiagodifaria@gmail.com",
    resumeUrl: "/docs/curriculo.pdf"
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
      id: "helixCore",
      img: "/images/helix.png",
      dataAiHint: "Backend Runtime Platform",
      github: "https://github.com/thiagodifaria/Helix-Core",
      deployedLink: undefined,
      technologies: ["Python", "C++", "NASM", "asyncio", "PyQt6"],
      category: ["backend", "cli", "fullstack"],
      icon: Zap,
      primaryTech: "Python",
    },
    {
      id: "lexiconCLI",
      img: "/images/lexiconcli.png",
      dataAiHint: "App de Financia",
      github: "https://github.com/thiagodifaria/LexiconCLI",
      deployedLink: undefined,
      executableUrl: "https://github.com/thiagodifaria/LexiconCLI/releases/download/v2.0.0/LexiconCLI.exe",
      technologies: ["Python", "Rich", "Plotext", "TensorFlow", "Scikit-learn"],
      category: ["cli", "backend"],
      icon: TrendingUp,
      primaryTech: "Python",
    },
    {
      id: "tesoriDiBacco",
      img: "/images/tesoridibacco.png",
      dataAiHint: "Clube de Vinhos",
      github: "https://github.com/thiagodifaria/Tesori-di-Bacco",
      deployedLink: "https://tesoridibacco.netlify.app/",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: ["frontend"],
      icon: Wine,
      primaryTech: "React",
    },
    {
      id: "moodAPI",
      img: "/images/moodapi.png",
      dataAiHint: "NLP Analista de Sentimentos",
      github: "https://github.com/thiagodifaria/MoodAPI",
      deployedLink: undefined,
      technologies: ["Python", "FastAPI", "Transformers", "Docker", "Redis"],
      category: ["backend", "fullstack"],
      icon: Brain,
      primaryTech: "Python",
    },
    {
      id: "caninana",
      img: "/images/caninana.png",
      dataAiHint: "Antivirus Engine",
      github: "https://github.com/thiagodifaria/Caninana",
      deployedLink: undefined,
      technologies: ["C++", "Python", "Tkinter", "CMake"],
      category: ["cli", "backend"],
      icon: Shield,
      primaryTech: "C++",
    },
    {
      id: "codex",
      img: "/images/codex.png",
      dataAiHint: "Aplicação de Produtividade Pessoal",
      github: "https://github.com/thiagodifaria/codex",
      deployedLink: undefined,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      inDevelopment: true,
      category: ["fullstack", "inDevelopment"],
      icon: ListTodo,
      primaryTech: "Next.js",
    },
    {
      id: "begriff",
      img: "/images/begriff.png",
      dataAiHint: "Plataforma de Inteligência Financeira",
      github: "https://github.com/thiagodifaria/begriff",
      deployedLink: undefined,
      technologies: ["Python", "FastAPI", "C++", "COBOL", "Docker"],
      inDevelopment: true,
      category: ["backend", "inDevelopment"],
      icon: Building2,
      primaryTech: "Python",
    },
    {
      id: "consiliumAPI",
      img: undefined,
      dataAiHint: "API de Gestão de Projetos Enterprise",
      github: "https://github.com/thiagodifaria/ConsiliumAPI",
      deployedLink: undefined,
      technologies: ["Java", "Spring Boot", "Redis", "RabbitMQ", "PostgreSQL"],
      category: ["backend"],
      icon: Server,
      primaryTech: "Java",
    },
    {
      id: "sphinx",
      img: "/images/sphinx.png",
      dataAiHint: "Plataforma de Cloud Engineering",
      github: "https://github.com/thiagodifaria/Sphinx",
      deployedLink: undefined,
      executableUrl: "https://github.com/thiagodifaria/Sphinx/releases/download/Sphinx/sphinx.exe",
      technologies: ["Python", "Textual", "Gemini AI", "Terraform", "Prometheus"],
      category: ["cli", "backend"],
      icon: Cloud,
      primaryTech: "Python",
    },
    {
      id: "httpsServer",
      img: "/images/httpsserver.png",
      dataAiHint: "Servidor HTTPS de Alta Performance",
      github: "https://github.com/thiagodifaria/HTTPS-Server",
      deployedLink: undefined,
      technologies: ["C++", "OpenSSL", "SIMD", "CMake", "NASM"],
      category: ["backend", "fullstack"],
      icon: Cpu,
      primaryTech: "C++",
    },
    {
      id: "env",
      img: "/images/env.png",
      dataAiHint: "Framework de Automação Windows",
      github: "https://github.com/thiagodifaria/Env",
      deployedLink: undefined,
      technologies: ["PowerShell", "Chocolatey", "Winget", "Scoop", "Pester"],
      inDevelopment: true,
      category: ["cli", "inDevelopment"],
      icon: Settings,
      primaryTech: "PowerShell",
    },
    {
      id: "schemaAPI",
      img: undefined,
      dataAiHint: "API de Processamento de Documentos",
      github: "https://github.com/thiagodifaria/SchemaAPI",
      deployedLink: undefined,
      technologies: ["Python", "Rust", "FastAPI", "Transformers", "PostgreSQL"],
      inDevelopment: true,
      category: ["backend", "inDevelopment"],
      icon: FileJson,
      primaryTech: "Python",
    }
  ] as ProjectStructure[],
  navLinkStructure: [
    { key: "sobre", href: "/sobre" },
    { key: "projetos", href: "/projetos" },
    { key: "contato", href: "/#connect" },
  ] as NavLinkStructure[],
};
