
// src/components/header/Navigation.tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';
import { siteData } from '@/config/siteData';
import { NavLink } from './NavLink';

export function Navigation() {
  const { t } = useLanguage();

  return (
    <nav className="hidden items-center gap-6 md:flex">
      {siteData.navLinkStructure.map((link) => (
        <NavLink key={link.key} href={link.href}>
          {t(`siteData.navLinks.${link.key}`)}
        </NavLink>
      ))}
    </nav>
  );
}
