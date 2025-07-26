
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
  Code, // Adicionado Code, TypeSquare foi removido
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// This type might need adjustment if titles/descriptions are fully managed by i18n keys
export type ProjectStructure = {
  id: string; // Used as a key for translations
  img: StaticImageData | string; // Image path remains static
  github?: string;
  deployedLink?: string;
  technologies: string[]; // Tech names are usually not translated or consistently named
  dataAiHint?: string;
};

export type SocialMediaHandleStructure = {
  nameKey: string; // Key for tooltip translation, and for general identification
  url: string;
  icon: LucideIcon;
};

export type NavLinkStructure = {
  key: string; // Key for name translation
  href: string;
};

export type OrbitingTech = {
  name: string; // Tech names are usually not translated
  icon: string; // Changed to string for SVG path
  radius: number;
  duration?: number;
  reverse?: boolean;
  delay?: number;
};
  export const siteData = {
  personalInfo: {
    name: "Thiago Di Faria",
    initials: "TF",
    email: "thiagodifaria@gmail.com",
    resumeUrl: "/curriculo.pdf"
  },
  // heroWords, heroSubtitle, introTagline moved to locale files
  socialMedia: [
    { nameKey: "Github", url: "https://github.com/thiagodifaria", icon: Github },
    { nameKey: "Instagram", url: "https://www.instagram.com/thiagodifaria/?hl=en", icon: Instagram },
    { nameKey: "LinkedIn", url: "https://www.linkedin.com/in/thiago-di-faria-34304a34b/", icon: Linkedin },
    { nameKey: "Email", url: "mailto:thiagodifaria@gmail.com", icon: Mail },
    { nameKey: "Resume", url: "/curriculo.pdf", icon: FileText }, 
  ] as SocialMediaHandleStructure[],
  orbitingTechIcons: [
    // Inner orbit (radius: 60)
    { name: "React", icon: "/icons/react.svg", radius: 60, duration: 28, reverse: false, delay: 0 },
    { name: "TypeScript", icon: "/icons/typescript.svg", radius: 60, duration: 28, reverse: true, delay: 14 },

    // Middle orbit (radius: 100)
    { name: "Python", icon: "/icons/python.svg", radius: 100, duration: 38, reverse: true, delay: 0 },
    { name: "Next.js", icon: "/icons/nextdotjs.svg", radius: 100, duration: 38, reverse: false, delay: 19 },
    

    // Outer orbit (radius: 140)
    { name: "TailwindCSS", icon: "/icons/tailwindcss.svg", radius: 140, duration: 48, reverse: false, delay: 0 },
  ] as OrbitingTech[],
  projectsDataStructure: [
    {
      id: "lexiconCLI",
      img: "/images/lexiconcli.png",
      dataAiHint: "App de Financia",
      github: "https://github.com/thiagodifaria/LexiconCLI", 
      deployedLink: undefined,
      executableUrl: "https://github.com/thiagodifaria/LexiconCLI/releases/download/v2.0.0/LexiconCLI.exe",
      technologies: ["Python", "Rich", "Plotext", "TensorFlow", "Scikit-learn"]
    },
    {
      id: "tesoriDiBacco",
      img: "/images/tesoridibacco.png",
      dataAiHint: "Clube de Vinhos",
      github: "https://github.com/thiagodifaria/Tesori-di-Bacco",
      deployedLink: "https://tesoridibacco.netlify.app/",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"]
    },
    {
      id: "moodAPI",
      img: "https://placehold.co/600x375.png",
      dataAiHint: "NLP Analista de Sentimentos",
      github: "https://github.com/thiagodifaria/MoodAPI", 
      deployedLink: undefined,
      technologies: ["Python", "FastAPI", "Transformers", "Docker", "Redis"]
    },
    {
      id: "caninana",
      img: "https://placehold.co/600x375.png",
      dataAiHint: "Antivirus Engine",
      github: "https://github.com/thiagodifaria/Caninana",
      deployedLink: undefined,
      technologies: ["C++", "Python", "Tkinter", "CMake"]
    },
    {
      id: "codex",
      img: "https://placehold.co/600x375.png",
      dataAiHint: "Aplicação de Produtividade Pessoal",
      github: "https://github.com/thiagodifaria/codex",
      deployedLink: undefined,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      inDevelopment: true
    },
    {
      id: "begriff",
      img: "https://placehold.co/600x375.png",
      dataAiHint: "Plataforma de Inteligência Financeira",
      github: "https://github.com/thiagodifaria/begriff",
      deployedLink: undefined,
      technologies: ["Python", "FastAPI", "C++", "COBOL", "Docker"],
      inDevelopment: true
    }
  ] as ProjectStructure[],
  navLinkStructure: [
    { key: "sobre", href: "/sobre" },
    { key: "projetos", href: "/projetos" },
    { key: "contato", href: "/#connect" },
  ] as NavLinkStructure[],
};
