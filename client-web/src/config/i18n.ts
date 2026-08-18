export interface Translations {
  talk: string;
  navAbout: string;
  navProjects: string;
  navBlog: string;
  navContact: string;
  heroKicker: string;
  heroTitle: string[];
  heroIntro: string;
  heroTechnical: string;
  projectsCTA: string;
  contactCTA: string;
  validated: string;
}

export const i18n: Record<'pt' | 'en', Translations> = {
  pt: {
    talk: 'Vamos conversar',
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    navBlog: 'Blog',
    navContact: 'Contato',
    heroKicker: 'DESENVOLVEDOR DE SOFTWARE · BELO HORIZONTE, MG',
    heroTitle: ['Processos reais.', 'Sistemas claros.', 'Decisões que', 'conseguem avançar.'],
    heroIntro: 'Eu transformo processos que vivem em planilhas, mensagens e memória de equipe em software que ajuda o trabalho a andar.',
    heroTechnical: 'Do modelo de dados à interface, construo sistemas com contexto e espaço para evoluir.',
    projectsCTA: 'Conhecer projetos',
    contactCTA: 'Falar sobre uma solução',
    validated: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
  },
  en: {
    talk: "Let's talk",
    navAbout: 'About',
    navProjects: 'Projects',
    navBlog: 'Journal',
    navContact: 'Contact',
    heroKicker: 'SOFTWARE DEVELOPER · BELO HORIZONTE, BRAZIL',
    heroTitle: ['Real processes.', 'Clear systems.', 'Decisions that', 'can move forward.'],
    heroIntro: 'I turn processes living in spreadsheets, messages and team memory into software that helps work move forward.',
    heroTechnical: 'From data models to interfaces, I build systems with context and room to evolve.',
    projectsCTA: 'Explore projects',
    contactCTA: 'Discuss a solution',
    validated: 'Message validated in this prototype. Configure delivery to receive submissions.',
  },
};
