
'use client';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-auto py-0 px-0 text-xs leading-none", // Drasticamente menor
          language === 'pt'
            ? 'text-[hsl(var(--primary))] opacity-100 font-semibold'
            : 'text-[hsl(var(--header-foreground))] opacity-60 font-normal hover:opacity-90 hover:text-[hsl(var(--primary))]'
        )}
        onClick={() => setLanguage('pt')}
        disabled={language === 'pt'}
        aria-label={t('languageSwitcher.switchToPortugueseAriaLabel')}
      >
        {t('languageSwitcher.pt')}
      </Button>
      <span className="text-[hsl(var(--header-foreground))] opacity-50 text-xs">/</span>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
           "h-auto py-0 px-0 text-xs leading-none", // Drasticamente menor
           language === 'en'
            ? 'text-[hsl(var(--primary))] opacity-100 font-semibold'
            : 'text-[hsl(var(--header-foreground))] opacity-60 font-normal hover:opacity-90 hover:text-[hsl(var(--primary))]'
        )}
        onClick={() => setLanguage('en')}
        disabled={language === 'en'}
        aria-label={t('languageSwitcher.switchToEnglishAriaLabel')}
      >
        {t('languageSwitcher.en')}
      </Button>
    </div>
  );
}
