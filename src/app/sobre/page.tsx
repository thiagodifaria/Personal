
"use client"; 

import { usePathname } from 'next/navigation'; 
import { useEffect } from 'react'; 
import { SectionThemeUpdater } from "@/components/SectionThemeUpdater";
import { BlurFade } from "@/components/ui/BlurFade";
import { useLanguage } from "@/context/LanguageContext";

export default function SobrePage() {
  const pathname = usePathname(); 
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return (
    <SectionThemeUpdater
      key={pathname} 
      theme="dark"
      as="main"
      className="flex flex-col min-h-screen bg-background text-foreground"
    >
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex-grow">
        <BlurFade delay={0.1} viewportAmount={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-12 text-center text-primary">
            {t('sobrePage.mainTitle')}
          </h1>
        </BlurFade>

        <BlurFade delay={0.2} viewportAmount={0.1}>
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-6 text-foreground">{t('sobrePage.minhaJornadaTitle')}</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>{t('sobrePage.minhaJornadaP1')}</p>
              <p>{t('sobrePage.minhaJornadaP2')}</p>
              <p>{t('sobrePage.minhaJornadaP3')}</p>
              <p>{t('sobrePage.minhaJornadaP4')}</p>
              <p>{t('sobrePage.minhaJornadaP5')}</p>
              <p>{t('sobrePage.minhaJornadaP6')}</p>
            </div>
          </section>
        </BlurFade>

        <BlurFade delay={0.3} viewportAmount={0.1}>
          <section>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-6 text-foreground">{t('sobrePage.formacaoCompetenciasTitle')}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              {t('sobrePage.formacaoCompetenciasDescription')}
            </p>

            <div className="space-y-10">
              <BlurFade delay={0.4} viewportAmount={0.5}>
                <div>
                  <h3 className="text-2xl font-headline font-medium mb-4 text-primary">{t('sobrePage.formacaoAcademicaTitle')}</h3>
                  <ul className="space-y-2 text-lg text-muted-foreground">
                    <li>{t('sobrePage.formacaoAcademicaGraduacao')}</li>
                    <li>{t('sobrePage.formacaoAcademicaInstituicao')}</li>
                    <li>{t('sobrePage.formacaoAcademicaInicio')}</li>
                  </ul>
                </div>
              </BlurFade>

              <BlurFade delay={0.5} viewportAmount={0.5}>
                <div>
                  <h3 className="text-2xl font-headline font-medium mb-4 text-primary">{t('sobrePage.idiomasTitle')}</h3>
                  <ul className="space-y-2 text-lg text-muted-foreground">
                    <li>{t('sobrePage.idiomasPt')}</li>
                    <li>{t('sobrePage.idiomasEn')}</li>
                    <li>{t('sobrePage.idiomasIt')}</li>
                    <li>{t('sobrePage.idiomasDe')}</li>
                  </ul>
                </div>
              </BlurFade>

              <BlurFade delay={0.6} viewportAmount={0.2}>
                <div>
                  <h3 className="text-2xl font-headline font-medium mb-4 text-primary">{t('sobrePage.educacaoContinuadaTitle')}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    {t('sobrePage.educacaoContinuadaDescription')}
                  </p>
                  <div className="space-y-6">
                    <BlurFade delay={0.65} viewportAmount={0.5}>
                      <div>
                        <h4 className="text-xl font-headline font-medium mb-3 text-foreground/90">{t('sobrePage.algoritmosTitle')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-lg text-muted-foreground">
                          <li>{t('sobrePage.algoritmosC1')}</li>
                          <li>{t('sobrePage.algoritmosC2')}</li>
                        </ul>
                      </div>
                    </BlurFade>
                    <BlurFade delay={0.7} viewportAmount={0.5}>
                      <div>
                        <h4 className="text-xl font-headline font-medium mb-3 text-foreground/90">{t('sobrePage.pythonDSTitle')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-lg text-muted-foreground">
                          <li>{t('sobrePage.pythonDSC1')}</li>
                          <li>{t('sobrePage.pythonDSC2')}</li>
                          <li>{t('sobrePage.pythonDSC3')}</li>
                          <li>{t('sobrePage.pythonDSC4')}</li>
                          <li>{t('sobrePage.pythonDSC5')}</li>
                        </ul>
                      </div>
                    </BlurFade>
                    <BlurFade delay={0.75} viewportAmount={0.5}>
                      <div>
                        <h4 className="text-xl font-headline font-medium mb-3 text-foreground/90">{t('sobrePage.tecnologiasNegociosTitle')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-lg text-muted-foreground">
                          <li>{t('sobrePage.tecnologiasNegociosC1')}</li>
                          <li>{t('sobrePage.tecnologiasNegociosC2')}</li>
                          <li>{t('sobrePage.tecnologiasNegociosC3')}</li>
                        </ul>
                      </div>
                    </BlurFade>
                  </div>
                </div>
              </BlurFade>
            </div>
          </section>
        </BlurFade>
      </div>
    </SectionThemeUpdater>
  );
}
