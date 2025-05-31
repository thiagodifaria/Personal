
import type { StaticImageData } from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  Layers,
  Palette,
  Server,
  FileCode,
  Coffee,
  Instagram,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  img: StaticImageData | string;
  github?: string;
  deployedLink?: string;
  technologies: string[];
  dataAiHint?: string;
};

export type SocialMediaHandle = {
  name:string;
  url: string;
  icon: LucideIcon;
  tooltip?: string;
};

export type OrbitingTech = {
  name: string;
  icon: LucideIcon;
  radius: number;
  duration?: number;
  reverse?: boolean;
  delay?: number;
};

export const siteData = {
  personalInfo: {
    name: "Thiago Di Faria", 
    initials: "TF", 
    email: "seuemail@example.com", 
    resumeUrl: "https://example.com/seu-curriculo.pdf", 
  },
  heroWords: [
    "Desenvolvedor Front-End", 
    "Especialista em Python", 
    "Projetos Back-End Escaláveis", 
    "Designer UI/UX"
  ],
  heroSubtitle: "Desenvolvedor apaixonado por criar aplicações e website únicos, inovadores e eficientes.",
  introTagline: "Eu crio experiências web intuitivas e responsivas que combinam design estético com elegância funcional.",
  socialMedia: [
    { name: "Github", url: "https://github.com/thiagodifaria", icon: Github, tooltip: "GitHub" },
    { name: "Instagram", url: "https://www.instagram.com/thiagodifaria/?hl=en", icon: Instagram, tooltip: "Instagram" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/thiago-di-faria-34304a34b/", icon: Linkedin, tooltip: "LinkedIn" },
    { name: "Email", url: "mailto:thiagodifaria@gmail.com", icon: Mail, tooltip: "Email" },
    { name: "Resume", url: "https://example.com/meu-curriculo.pdf", icon: FileText, tooltip: "Currículo" },
  ] as SocialMediaHandle[],
  orbitingTechIcons: [
    { name: "React", icon: Layers, radius: 70, duration: 25, reverse: false, delay: 0 },
    { name: "TypeScript", icon: FileCode, radius: 70, duration: 25, reverse: true, delay: 8 },
    { name: "TailwindCSS", icon: Palette, radius: 70, duration: 25, reverse: false, delay: 16 },
    
    { name: "Python", icon: Code2, radius: 110, duration: 35, reverse: true, delay: 0 },
    { name: "Java", icon: Coffee, radius: 110, duration: 35, reverse: false, delay: 12 },
    { name: "NextJS", icon: Server, radius: 110, duration: 35, reverse: true, delay: 24 },
  ] as OrbitingTech[],
  projectsData: [
    {
      title: "Tesori di Bacco",
      description: "Aplicação web sofisticada concebida como uma plataforma exclusiva para um clube de vinhos premium inspirado na tradição italiana. Este projeto foi desenvolvido utilizando tecnologias modernas para proporcionar aos usuários uma experiência digital rica e elegante, centrada na descoberta e apreciação de vinhos selecionados.",
      img: "/images/tesoridibacco.png",
      dataAiHint: "wine club luxury",
      github: "https://github.com/thiagodifaria/Tesori-di-Bacco",
      deployedLink: "https://tesoridibacco.netlify.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "LexiconCLI",
      description: "Sistema de análise financeira abrangente e interativo, permitindo monitoramento de mercados, análises técnicas, com poderosas ferramentas para monitoramento de mercados em tempo real, execução de análises técnicas aprofundadas e obtenção de previsões de séries temporais baseadas em modelos de Machine Learning.",
      img: "/images/lexiconcli.png",
      dataAiHint: "finance stock market",
      github: "https://github.com/thiagodifaria/LexiconCLI", 
      deployedLink: undefined,
      technologies: ["Python"]
    },
    {
      title: "MoodAPI",
      description: "API para análise de sentimentos em textos utilizando técnicas de Processamento de Linguagem Natural (NLP). Este projeto oferece uma solução completa para classificação emocional de textos, incluindo análise de sentimentos básica e detalhada, extração de entidades, e armazenamento de histórico.",
      img: "https://placehold.co/600x375.png",
      dataAiHint: "nlp sentiment analysis",
      github: "https://github.com/thiagodifaria/MoodAPI", 
      deployedLink: undefined,
      technologies: ["Python"]
    }
  ] as Project[],
  navLinks: [
    { name: "Sobre", href: "#intro" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#connect" },
  ],
};
