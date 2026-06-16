
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function IntroSection() {
  const { t } = useLanguage();
  const introTagline = t('siteData.introTagline');

  const introVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <section 
      className="text-foreground py-12 md:py-20 w-full"
    >
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="max-w-2xl mx-auto text-2xl md:text-3xl lg:text-4xl font-headline leading-relaxed text-foreground"
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {introTagline}
        </motion.p>
      </div>
    </section>
  );
}
