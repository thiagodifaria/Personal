"use client";

import { useReveals } from "@/hooks/useReveals";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { TerritoriesSection } from "@/components/sections/TerritoriesSection";
import { EvidenceSection } from "@/components/sections/EvidenceSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ArchiveSection } from "@/components/sections/ArchiveSection";
import { ConversionSection } from "@/components/sections/ConversionSection";

export default function HomePage() {
  useReveals();

  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <TerritoriesSection />
      <EvidenceSection />
      <MethodSection />
      <ArchiveSection />
      <ConversionSection />
    </>
  );
}
