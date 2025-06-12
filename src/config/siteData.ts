
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
  icon: LucideIcon;
  radius: number;
  duration?: number;
  reverse?: boolean;
  delay?: number;
};

// siteData now holds structure and non-translatable parts.
// Translatable strings (titles, descriptions, names) will be fetched using i18n.
export const siteData = {
  personalInfo: {
    name: "Thiago Di Faria", 
    initials: "TF", 
    email: "thiagodifaria@gmail.com", 
    resumeUrl: "https://example.com/seu-curriculo.pdf", 
  },
  // heroWords, heroSubtitle, introTagline moved to locale files
  socialMedia: [
    { nameKey: "Github", url: "https://github.com/thiagodifaria", icon: Github },
    { nameKey: "Instagram", url: "https://www.instagram.com/thiagodifaria/?hl=en", icon: Instagram },
    { nameKey: "LinkedIn", url: "https://www.linkedin.com/in/thiago-di-faria-34304a34b/", icon: Linkedin },
    { nameKey: "Email", url: "mailto:thiagodifaria@gmail.com", icon: Mail },
    { nameKey: "Resume", url: "https://example.com/seu-curriculo.pdf", icon: FileText }, 
  ] as SocialMediaHandleStructure[],
  orbitingTechIcons: [
    { name: "React", icon: Layers, radius: 80, duration: 28, reverse: false, delay: 0 },
    { name: "TypeScript", icon: Code, radius: 80, duration: 28, reverse: true, delay: 9 }, // Alterado TypeSquare para Code
    { name: "TailwindCSS", icon: Palette, radius: 80, duration: 28, reverse: false, delay: 18 },
    { name: "Python", icon: Terminal, radius: 120, duration: 38, reverse: true, delay: 0 },
    { name: "Java", icon: Coffee, radius: 120, duration: 38, reverse: false, delay: 12 },
    { name: "NextJS", icon: Network, radius: 120, duration: 38, reverse: true, delay: 24 },
  ] as OrbitingTech[],
  projectsDataStructure: [
    {
      id: "tesoriDiBacco",
      img: "/images/tesoridibacco.png",
      dataAiHint: "Clube de Vinhos",
      github: "https://github.com/thiagodifaria/Tesori-di-Bacco",
      deployedLink: "https://tesoridibacco.netlify.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "lexiconCLI",
      img: "/images/lexiconcli.png",
      dataAiHint: "App de Financia",
      github: "https://github.com/thiagodifaria/LexiconCLI", 
      deployedLink: undefined,
      technologies: ["Python"]
    },
    {
      id: "moodAPI",
      img: "https://placehold.co/600x375.png",
      dataAiHint: "NLP Analista de Sentimentos",
      github: "https://github.com/thiagodifaria/MoodAPI", 
      deployedLink: undefined,
      technologies: ["Python"]
    },
    {
      id: "ecommerceInovador",
      img: "https://placehold.co/600x375.png",
      dataAiHint: "ecommerce platform modern",
      github: "https://github.com/Thgdi/placeholder-ecommerce",
      deployedLink: undefined,
      technologies: ["NextJS", "TypeScript", "Tailwind CSS", "GraphQL"]
    },
    {
      id: "gerenciamentoTarefas",
      img: "https://placehold.co/600x375.png",
      dataAiHint: "task manager app",
      github: "https://github.com/Thgdi/placeholder-task-app",
      deployedLink: undefined,
      technologies: ["React Native", "Firebase", "TypeScript"]
    },
    {
      id: "analiseDados",
      img: "https://placehold.co/600x375.png",
      dataAiHint: "data dashboard analytics",
      github: "https://github.com/Thgdi/placeholder-dashboard",
      deployedLink: undefined,
      technologies: ["Python", "Dash", "Plotly", "Pandas"]
    }
  ] as ProjectStructure[],
  navLinkStructure: [
    { key: "sobre", href: "/sobre" },
    { key: "projetos", href: "/projetos" },
    { key: "contato", href: "/#connect" },
  ] as NavLinkStructure[],
};
