"use client";

import { siteData } from "@/config/siteData";
import { SectionThemeUpdater } from "@/components/SectionThemeUpdater";
import { motion } from "framer-motion";

export function IntroSection() {
  const introVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <SectionThemeUpdater
      theme="dark" // Changed to dark as its background will be light (secondary)
      className="bg-secondary text-foreground py-12 md:py-20 min-h-screen flex flex-col justify-center items-center"
      id="intro"
    >
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="max-w-2xl mx-auto text-2xl md:text-3xl lg:text-4xl font-headline leading-relaxed text-foreground"
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {siteData.introTagline}
        </motion.p>
      </div>
    </SectionThemeUpdater>
  );
}
