import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES, type Language } from './types';
import { cn } from './lib/utils';
import { 
  HeroSlide, HopeSlide, HonestySlide, SolutionSlide, 
  ModelsSlide, BridgeSlide, PartnersSlide, RoadmapSlide, 
  AlignmentSlide, EvidenceView, DashboardView,
  MiddleTierSlide, Vision2027Slide,
  DeRiskedCoFinancingSlide
} from './components/Slides';
import { OnePagerModal } from './components/Modals';
import { TopBar, LeftNav, StatusBar } from './components/Layout';
import { 
  LayoutDashboard, 
  Users, 
  ClipboardCheck, 
  DollarSign, 
  TrendingUp, 
  AlertCircle,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Persist language
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('mhpss_lang');
    return (saved === 'en' || saved === 'uk') ? saved as Language : 'en';
  });

  // Persist dark mode
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('mhpss_dark');
    return saved !== 'false'; // default to true if not set
  });

  const [isOnePagerOpen, setIsOnePagerOpen] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    localStorage.setItem('mhpss_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('mhpss_dark', isDark.toString());
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) {
      nextSlide();
      setAutoPlay(false);
    } else if (swipeDistance < -50) {
      prevSlide();
      setAutoPlay(false);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      if (wheelTimeout.current) return;
      
      if (e.deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setAutoPlay(false);
      
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 500);
    }
  };

  const goSlide = useCallback((n: number) => {
    if (n >= 0 && n < SLIDES.length) {
      setCurrentSlide(n);
      setAutoPlay(false);
      setIsMobileMenuOpen(false);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setIsMobileMenuOpen(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!autoPlay) {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      return;
    }
    autoTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === SLIDES.length - 1) {
          if (autoTimerRef.current) clearInterval(autoTimerRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 8000);
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [autoPlay]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOnePagerOpen) {
        if (e.key === 'Escape') setIsOnePagerOpen(false);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
        setAutoPlay(false);
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
        setAutoPlay(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isOnePagerOpen]);

  const t = (en: string, uk: string) => (lang === 'uk' ? uk : en);

  const renderSlide = () => {
    const props = { lang };
    const slideId = SLIDES[currentSlide]?.id;

    switch (slideId) {
      case 'hero': return <HeroSlide {...props} />;
      case 'hope': return <HopeSlide {...props} />;
      case 'middle-tier': return <MiddleTierSlide {...props} />;
      case 'honesty': return <HonestySlide {...props} />;
      case 'solution': return <SolutionSlide {...props} />;
      case 'de-risked-finance': return <DeRiskedCoFinancingSlide {...props} />;
      case 'vision-2027': return <Vision2027Slide {...props} />;
      case 'models': return <ModelsSlide {...props} />;
      case 'bridge': return <BridgeSlide {...props} />;
      case 'partners': return <PartnersSlide {...props} />;
      case 'roadmap': return <RoadmapSlide {...props} />;
      case 'alignment': return <AlignmentSlide {...props} />;
      case 'evidence': return <EvidenceView {...props} />;
      case 'dashboard': return <DashboardView {...props} />;
      default: return <HeroSlide {...props} />;
    }
  };

  const activePage = currentSlide < SLIDES.findIndex(s => s.id === 'evidence') 
    ? 'pitch' 
    : currentSlide === SLIDES.findIndex(s => s.id === 'evidence') 
      ? 'evidence' 
      : 'dashboard';

  return (
    <div className="bg-bg-theme text-text-prim font-sans overflow-hidden h-screen w-screen select-none transition-colors duration-300">
      {/* Global Background Glow - Extends across all pages */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-80 transition-opacity duration-500"
           style={{
             background: `
               radial-gradient(ellipse 80% 60% at 20% 60%, rgba(0,210,170,0.15) 0%, transparent 55%),
               radial-gradient(ellipse 60% 50% at 80% 40%, rgba(0,180,200,0.1) 0%, transparent 50%),
               radial-gradient(ellipse 50% 40% at 50% 110%, rgba(46,196,182,0.1) 0%, transparent 60%)
             `
           }}
           aria-hidden="true"
      />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] pointer-events-none z-0 opacity-40 dark:opacity-80 transition-opacity duration-500"
           style={{
             background: 'radial-gradient(ellipse at center, rgba(0,210,170,0.15) 0%, transparent 70%)'
           }}
           aria-hidden="true"
      />

      <TopBar 
        lang={lang} 
        setLang={setLang} 
        isDark={isDark}
        setIsDark={setIsDark}
        showPage={(p) => {
          if (p === 'one-pager') setIsOnePagerOpen(true);
          else if (p === 'pitch') goSlide(0);
          else if (p === 'evidence') goSlide(SLIDES.findIndex(s => s.id === 'evidence'));
          else if (p === 'dashboard') goSlide(SLIDES.findIndex(s => s.id === 'dashboard'));
        }} 
        activePage={activePage} 
      />

      <LeftNav currentSlide={currentSlide} goSlide={goSlide} />

      {/* Mobile Slide Menu Toggle */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        tabIndex={0}
        className="fixed left-3 bottom-10 z-[130] sm:hidden w-10 h-10 bg-surface-theme border border-border-theme rounded-full flex items-center justify-center text-gold shadow-[0_0_15px_var(--gold)] cursor-pointer hover:bg-gold hover:text-white transition-all"
      >
        {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[105] bg-black/60 backdrop-blur-sm sm:hidden cursor-pointer"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="fixed inset-y-0 left-0 w-64 z-[110] bg-surface-theme border-r border-border-theme sm:hidden flex flex-col pt-20 px-4 gap-2 overflow-y-auto pb-20 shadow-2xl"
              role="navigation"
              aria-label="Mobile Slide Navigation"
            >
              <div className="text-gold-light font-heading text-[10px] font-bold mb-4 tracking-widest uppercase px-2">Navigation</div>
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => goSlide(i)}
                  aria-current={currentSlide === i ? 'page' : undefined}
                  tabIndex={0}
                  className={cn(
                    "flex items-center gap-4 p-3 rounded-lg border transition-all text-left group",
                    currentSlide === i ? "bg-gold/10 border-gold text-gold" : "bg-transparent border-transparent text-text-sec hover:bg-border-theme/30"
                  )}
                >
                  <span className="font-mono text-xs font-bold opacity-50 group-hover:text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-medium leading-tight font-sans tracking-wide">{lang === 'uk' ? slide.label.uk : slide.label.en}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main 
        className="fixed top-12 sm:top-10 left-12 right-0 bottom-8 overflow-hidden outline-none" 
        onClick={() => {
          setAutoPlay(false);
          if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        tabIndex={-1}
        role="region"
        aria-label="Slide content"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-${currentSlide}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </main>

      <StatusBar currentSlide={currentSlide} lang={lang} />

      <OnePagerModal 
        isOpen={isOnePagerOpen} 
        onClose={() => setIsOnePagerOpen(false)} 
        lang={lang} 
      />
    </div>
  );
}
