import React from 'react';
import { SLIDES, type Language } from '../types';
import { cn } from '../lib/utils';
import { Logo } from './Logo';
import { Sun, Moon } from 'lucide-react';

interface LayoutProps {
  currentSlide: number;
  lang: Language;
  setLang: (lang: Language) => void;
  goSlide: (n: number) => void;
  showPage: (page: string) => void;
  activePage: string;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  children?: React.ReactNode;
}

export const TopBar = ({ lang, setLang, showPage, activePage, isDark, setIsDark }: Pick<LayoutProps, 'lang' | 'setLang' | 'showPage' | 'activePage' | 'isDark' | 'setIsDark'>) => {
  return (
    <div className="fixed top-0 w-full h-12 sm:h-10 bg-surface-theme/80 backdrop-blur-md border-b border-border-theme flex items-center px-3 sm:px-4 gap-2 sm:gap-3 z-[100] transition-colors duration-300">
      <div className="flex items-center gap-2">
        <Logo className="w-10 h-10 sm:w-8 sm:h-8 text-text-prim hover:text-teal-bright cursor-pointer" aria-label="FEEL AGAIN logo" />
        <span className="font-heading text-[13px] font-bold text-gold tracking-wider hidden xs:inline italic">FEEL AGAIN</span>
      </div>
      <div className="w-px h-5 bg-border-theme hidden xs:inline" />
      <span className="font-heading text-[10px] text-text-sec tracking-tight hidden lg:inline uppercase">
        {lang === 'uk' ? 'MHPSS Архітектура · Гуманітарний ФінТех' : 'MHPSS Architecture · Humanitarian FinTech'}
      </span>
      <div className="w-px h-5 bg-border-theme hidden lg:inline" />
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] text-teal-bright tracking-tight flex items-center gap-1.5" aria-live="polite">
          <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_var(--green)] animate-pulse" />
          <b className="uppercase hidden xs:inline tracking-widest text-text-sec">SECURE NETWORK</b>
        </span>
        <div className="w-px h-5 bg-border-theme hidden sm:inline" />
        <span className="font-mono text-[10px] text-text-sec tracking-tight hidden sm:inline">
          SYS_READY: <span className="text-green">OK</span>
        </span>
      </div>

      <nav className="ml-auto flex items-center gap-1 sm:gap-2" aria-label="Main navigation">
        <div className="flex items-center gap-1 sm:gap-3" role="tablist">
          <button
            role="tab"
            aria-selected={activePage === 'pitch'}
            onClick={() => showPage('pitch')}
            className={cn(
              "px-2 sm:px-3 py-1 font-heading text-[10px] sm:text-[12px] font-bold rounded transition-all duration-300",
              activePage === 'pitch' ? "bg-gold/15 text-gold border-b-[3px] border-gold rounded-b-none" : "text-text-sec hover:bg-gold/10 hover:text-gold border-b-[3px] border-transparent rounded-b-none"
            )}
          >
            PITCH
          </button>
          <button
             role="tab"
             aria-selected={activePage === 'dashboard'}
            onClick={() => showPage('dashboard')}
            className={cn(
              "px-2 sm:px-3 py-1 font-heading text-[10px] sm:text-[12px] font-bold rounded transition-all duration-300",
              activePage === 'dashboard' ? "bg-gold/15 text-gold border-b-[3px] border-gold rounded-b-none" : "text-text-sec hover:bg-gold/10 hover:text-gold border-b-[3px] border-transparent rounded-b-none"
            )}
          >
            DATA
          </button>
          <button
             role="tab"
             aria-selected={activePage === 'evidence'}
            onClick={() => showPage('evidence')}
            className={cn(
              "px-2 sm:px-3 py-1 font-heading text-[10px] sm:text-[12px] font-bold rounded transition-all duration-300",
              activePage === 'evidence' ? "bg-gold/15 text-gold border-b-[3px] border-gold rounded-b-none" : "text-text-sec hover:bg-gold/10 hover:text-gold border-b-[3px] border-transparent rounded-b-none"
            )}
          >
            DASH
          </button>
        </div>
        <div className="w-px h-5 bg-border-theme mx-1 sm:mx-2" />
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-1 sm:p-1.5 text-text-sec hover:text-gold rounded transition-colors"
          >
            {isDark ? <Sun size={14} aria-hidden="true" /> : <Moon size={14} aria-hidden="true" />}
          </button>
          <div className="w-px h-4 bg-border-theme mx-1" />
          <button
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
            className={cn(
              "px-2 sm:px-3 py-1 font-heading text-[10px] sm:text-[12px] font-bold rounded transition-all duration-300",
              lang === 'en' ? "bg-gold/15 text-gold" : "text-text-sec hover:bg-gold/10 hover:text-gold"
            )}
          >
            EN
          </button>
          <button
            onClick={() => setLang('uk')}
            aria-pressed={lang === 'uk'}
            className={cn(
              "px-2 sm:px-3 py-1 font-heading text-[10px] sm:text-[12px] font-bold rounded transition-all duration-300",
              lang === 'uk' ? "bg-gold/15 text-gold" : "text-text-sec hover:bg-gold/10 hover:text-gold"
            )}
          >
            UA
          </button>
        </div>
      </nav>
    </div>
  );
};

export const LeftNav = ({ currentSlide, goSlide }: Pick<LayoutProps, 'currentSlide' | 'goSlide'>) => {
  return (
    <nav className="fixed left-0 top-12 sm:top-10 bottom-7 sm:bottom-0 w-12 bg-surface-theme/80 backdrop-blur-md border-r border-border-theme flex flex-col items-center py-3 gap-0.5 z-[90] transition-colors duration-300" aria-label="Slide Navigation">
      {SLIDES.map((slide, i) => (
        <button
          key={slide.id}
          onClick={() => goSlide(i)}
          title={slide.label.en}
          aria-label={slide.label.en}
          aria-current={currentSlide === i ? 'page' : undefined}
          className={cn(
            "w-9 h-9 flex items-center justify-center rounded transition-all duration-300 relative group text",
            currentSlide === i ? "text-gold bg-gold/15" : "text-text-sec hover:text-gold hover:bg-gold/10"
          )}
        >
          {currentSlide === i && <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-gold rounded-full shadow-[0_0_8px_var(--gold)]" aria-hidden="true" />}
          <span className="font-mono text-[9px] font-bold tracking-tighter" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
        </button>
      ))}
    </nav>
  );
};

export const StatusBar = ({ currentSlide, lang }: Pick<LayoutProps, 'currentSlide' | 'lang'>) => {
  return (
    <footer className="fixed bottom-0 w-full h-8 bg-surface-theme/80 backdrop-blur-md border-t border-border-theme flex items-center px-4 gap-4 z-90 font-mono text-[12px] text-text-sec transition-colors duration-300" aria-label="Status Bar">
      <div className="flex items-center gap-2">
        <span className="uppercase hidden xs:inline font-bold tracking-widest">{lang === 'uk' ? 'ПОСОЛЬСЬКИЙ БРИФІНГ' : 'EMBASSY BRIEFING'}</span>
      </div>
      <div className="w-px h-4 bg-border-theme hidden xs:inline" />
      <span className="text-text-prim font-bold tracking-widest" aria-live="polite">{String(currentSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}</span>
      <div className="w-px h-4 bg-border-theme" />
      <div className="flex gap-1.5" aria-hidden="true">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-2.5 h-0.5 rounded-full transition-all duration-500",
              currentSlide === i ? "progress-dot-active" : i < currentSlide ? "progress-dot-visited" : "progress-dot-default"
            )}
          />
        ))}
      </div>
      <div className="ml-auto hidden md:block text-[10px] tracking-widest opacity-50">
        {lang === 'uk' ? '← → НАВІГАЦІЯ · ESC НАЗАД' : '← → NAVIGATE · ESC BACK'}
      </div>
    </footer>
  );
};
