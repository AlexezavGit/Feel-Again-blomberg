import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES, type Language } from '../types';
import { cn } from '../lib/utils';
import { 
  PrevalenceChart, 
  FunnelChart, 
  BudgetSplitChart, 
  WorkforceChart, 
  ReconChart, 
  WarImpactChart 
} from './Charts';
import { MapPin, Info, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

type BriefingSection = 'crisis' | 'sinkhole' | 'architecture' | 'evidence' | 'ask';

interface BriefingProps {
  lang: Language;
  onBack: () => void;
}

export const BriefingView = ({ lang, onBack }: BriefingProps) => {
  const [section, setSection] = useState<BriefingSection>('crisis');
  const t = (en: string, uk: string) => (lang === 'uk' ? uk : en);

  const navItems: { id: BriefingSection; label: { en: string; uk: string } }[] = [
    { id: 'crisis', label: { en: 'The Crisis', uk: 'Криза' } },
    { id: 'sinkhole', label: { en: 'Sinkhole', uk: 'Прірва' } },
    { id: 'architecture', label: { en: 'Architecture', uk: 'Архітектура' } },
    { id: 'evidence', label: { en: 'Evidence Base', uk: 'Докази' } },
    { id: 'ask', label: { en: 'The Ask', uk: 'Запит' } },
  ];

  return (
    <div className="fixed inset-0 z-[200] bg-[#020617] overflow-y-auto selection:bg-cyan-500 selection:text-black custom-scrollbar">
      {/* ═══ BRIEFING TOP BAR ═══ */}
      <div className="fixed top-0 w-full h-14 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 flex items-center px-8 z-[210]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
          <span className="font-mono text-[11px] font-bold text-cyan-500 tracking-[0.3em] uppercase">
            FEEL AGAIN — STRATEGIC BRIEFING
          </span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={cn(
                "px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
                section === item.id 
                  ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]" 
                  : "text-white/40 hover:text-white/70 hover:bg-white/5"
              )}
            >
              {t(item.label.en, item.label.uk)}
            </button>
          ))}
        </div>

        <div className="ml-auto">
          <button 
            onClick={onBack}
            className="group relative px-5 py-2 bg-white/5 border border-white/10 rounded-full text-orange-500 font-mono text-[10px] font-bold tracking-widest uppercase transition-all hover:border-orange-500/50 hover:bg-orange-500/5"
          >
            <span className="relative flex items-center gap-2">
              <ArrowRight className="rotate-180" size={12} />
              {t('BACK TO PITCH', 'НАЗАД ДО ПРЕЗЕНТАЦІЇ')}
            </span>
          </button>
        </div>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="pt-28 pb-32 px-10 max-w-[1400px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {section === 'crisis' && <CrisisPage lang={lang} />}
            {section === 'sinkhole' && <SinkholePage lang={lang} />}
            {section === 'architecture' && <ArchitecturePage lang={lang} />}
            {section === 'evidence' && <EvidencePage lang={lang} />}
            {section === 'ask' && <AskPage lang={lang} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const CrisisPage = ({ lang }: { lang: Language }) => {
  const t = (en: string, uk: string) => (lang === 'uk' ? uk : en);
  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-500 font-mono text-[9px] font-bold tracking-[0.3em] uppercase">
              {t('01 THE CRISIS', '01 КРИЗА')}
            </div>
            <h1 className="text-white text-6xl md:text-7xl font-bold leading-[1.05] tracking-tighter">
              {t('The invisible front of the war.', 'Невидимий фронт війни.')}
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed font-light max-w-xl">
              {t(
                "Ukraine is facing the largest mental health crisis in Europe since WWII. 15 million people need support, but the system is fragmented and unmeasured.",
                "Україна стикається з найбільшою кризою психічного здоров'я в Європі з часів Другої світової війни. 15 мільйонів людей потребують підтримки, але система фрагментована та не вимірюється."
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <StatBox label={t('PREVALENCE', 'ПОШИРЕНІСТЬ')} value="36.3%" sub={t('Any of 7 major disorders', 'Будь-який з 7 розладів')} color="text-cyan-400" />
            <StatBox label={t('PTSD RISK', 'РИЗИК ПТСР')} value="25.0%" sub={t('High clinical risk', 'Високий клінічний ризик')} color="text-red-500" />
          </div>
        </div>
        <div className="d-card !p-10 !mb-0 relative group">
          <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="relative z-10">
            <div className="mb-10 flex justify-between items-end">
              <div className="space-y-1">
                <h3 className="text-white font-bold text-lg tracking-tight">{t('Disorder Prevalence', 'Поширеність розладів')}</h3>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Lancet / PMC 2024</p>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 bg-cyan-500/10 rounded border border-cyan-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span className="text-cyan-500 font-mono text-[9px] font-bold uppercase tracking-widest">Live Data</span>
              </div>
            </div>
            <PrevalenceChart lang={lang} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <MetricCard value="15M" label={t('People in need', 'Людей у потребі')} sub="MOH Estimate" color="text-white" />
        <MetricCard value="74%" label={t('Treatment Gap', 'Дефіцит лікування')} sub="PMC 2024" color="text-red-500" />
        <MetricCard value="2.5%" label={t('Budget Share', 'Частка бюджету')} sub="WHO Atlas" color="text-orange-500" />
        <MetricCard value="$3-10" label={t('ROI per $1', 'Повернення на $1')} sub="World Bank" color="text-green-500" />
      </div>
    </div>
  );
};

const StatBox = ({ label, value, sub, color }: any) => (
  <div className="d-card !p-6 !mb-0 space-y-2">
    <div className="text-[#94A3B8] font-mono text-[10px] uppercase tracking-widest font-bold">{label}</div>
    <div className={cn("text-4xl font-bold tracking-tight", color)}>{value}</div>
    <div className="text-[10px] text-[#64748B] font-mono uppercase tracking-widest">{sub}</div>
  </div>
);

const MetricCard = ({ value, label, sub, color }: any) => (
  <div className="d-card !p-8 !mb-0 text-center space-y-4">
    <div className={cn("text-5xl font-bold tracking-tighter", color)}>{value}</div>
    <div className="space-y-1">
      <div className="text-white/60 text-xs font-bold uppercase tracking-wider">{label}</div>
      <div className="text-[#94A3B8] font-mono text-[9px] uppercase tracking-[0.2em]">{sub}</div>
    </div>
  </div>
);

const SinkholePage = ({ lang }: { lang: Language }) => {
  const t = (en: string, uk: string) => (lang === 'uk' ? uk : en);
  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 font-mono text-[9px] font-bold tracking-[0.3em] uppercase">
              {t('02 THE SINKHOLE', '02 ПРІРВА')}
            </div>
            <h2 className="text-white text-5xl font-bold leading-tight tracking-tighter">
              {t('Where the resources vanish.', 'Куди зникають ресурси.')}
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              {t(
                "Current metrics measure inputs — certificates issued, meetings held, listeners counted. What's needed are outcome metrics — how many people recovered.",
                "Поточні метрики вимінюють вхідні дані — видані сертифікати, проведені зустрічі. Потрібні метрики результатів — скільки людей одужало."
              )}
            </p>
          </div>
          <div className="space-y-1 divide-y divide-[#1E293B] d-card !p-0 overflow-hidden">
            <div className="grid grid-cols-4 py-3 px-6 bg-[#1E293B]/30 text-[9px] font-bold text-[#94A3B8] uppercase tracking-[0.2em]">
              <div>{t('Input', 'Вхід')}</div>
              <div className="text-right">{t('Value', 'Значення')}</div>
              <div className="pl-6">{t('Outcome', 'Результат')}</div>
              <div className="text-right">{t('Status', 'Статус')}</div>
            </div>
            <SinkholeRow label="mhGAP certificates" value="96,000" outcome="Practicing?" status="NOT MEASURED" statusColor="text-red-500" />
            <SinkholeRow label="mhGAP in-person" value="700" outcome="Practicing?" status="42 (6%)" statusColor="text-red-500" />
            <SinkholeRow label="Health Cluster" value="$177M" outcome="MHPSS Share?" status="UNKNOWN" statusColor="text-orange-500" />
          </div>
        </div>
        <div className="space-y-8">
          <div className="d-card !p-10 !mb-0">
            <div className="mb-8 space-y-1">
              <h3 className="text-white font-bold text-lg tracking-tight">{t('Implementation Funnel', 'Воронка впровадження')}</h3>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Certificates vs Real Practice</p>
            </div>
            <FunnelChart lang={lang} />
          </div>
          <div className="d-card !p-10 !mb-0">
            <div className="mb-8 space-y-1">
              <h3 className="text-white font-bold text-lg tracking-tight">{t('Budget Allocation', 'Розподіл бюджету')}</h3>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Inpatient vs Outpatient</p>
            </div>
            <BudgetSplitChart lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ArchitecturePage = ({ lang }: { lang: Language }) => {
  const t = (en: string, uk: string) => (lang === 'uk' ? uk : en);
  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-500 font-mono text-[9px] font-bold tracking-[0.3em] uppercase">
              {t('03 ARCHITECTURE', '03 АРХІТЕКТУРА')}
            </div>
            <h2 className="text-white text-5xl font-bold leading-tight tracking-tighter">
              {t('FEEL AGAIN Infrastructure.', 'Інфраструктура FEEL AGAIN.')}
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              {t(
                "A digital layer that connects donors, clinicians, and patients through a unified protocol of accountability.",
                "Цифровий рівень, що з'єднує донорів, клініцистів та пацієнтів через єдиний протокол підзвітності."
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <ArchitectureCard 
              label={t('INTEGRATED PROTOCOLS', 'ІНТЕГРОВАНІ ПРОТОКОЛИ')} 
              title={t('Clinical Standards', 'Клінічні стандарти')}
              items={[
                t('mhGAP + Ukrainian PTSD protocols', 'mhGAP + українські протоколи ПТСР'),
                t('GEHA (Israel) + USC Bravemind VR', 'GEHA (Ізраїль) + USC Bravemind VR'),
                t('Unified standards for 8,201 specialists', 'Єдині стандарти для 8,201 спеціалістів')
              ]}
            />
            <ArchitectureCard 
              label={t('FINANCIAL TRACKING', 'ФІНАНСОВИЙ ТРЕКІНГ')} 
              title={t('Donor → Patient Loop', 'Цикл Донор → Пацієнт')}
              items={[
                t('Blockchain-verified per-session settlement', 'Блокчейн-верифіковані розрахунки за сесію'),
                t('Closed accountability cycle', 'Закритий цикл підзвітності')
              ]}
            />
          </div>
        </div>
        <div className="space-y-8">
          <div className="d-card !p-10 !mb-0">
            <h3 className="text-white font-bold text-lg mb-8 tracking-tight">{t('The Transformation', 'Трансформація')}</h3>
            <div className="space-y-2 divide-y divide-white/5">
              <ComparisonRow 
                left={t('Manual Coordination', 'Ручна координація')} 
                leftSub={t('Meetings 2x/week, no shared data', 'Зустрічі 2 рази/тиждень, без спільних даних')}
                right={t('Digital Coordination Bus', 'Цифрова шина координації')}
                rightSub={t('Real-time shared infrastructure', 'Спільна інфраструктура в реальному часі')}
              />
              <ComparisonRow 
                left={t('Certificates vs Practice', 'Сертифікати vs Практика')} 
                leftSub={t('96,000 certificates ≠ 42 practicing', '96,000 сертифікатів ≠ 42 практикуючих')}
                right={t('Verified Practitioner Registry', 'Реєстр верифікованих практиків')}
                rightSub={t('Real-time verification against HeRAMS', 'Верифікація в реальному часі через HeRAMS')}
              />
              <ComparisonRow 
                left={t('Opaque Funding', 'Непрозоре фінансування')} 
                leftSub={t('$177M in, MHPSS share unknown', '$177M вхідних, частка МЗПСП невідома')}
                right={t('Per-session Transparency', 'Прозорість за кожну сесію')}
                rightSub={t('Every dollar traceable to outcome', 'Кожен долар відстежується до результату')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EvidencePage = ({ lang }: { lang: Language }) => {
  const t = (en: string, uk: string) => (lang === 'uk' ? uk : en);
  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-500 font-mono text-[9px] font-bold tracking-[0.3em] uppercase">
              {t('04 EVIDENCE BASE', '04 ДОКАЗИ')}
            </div>
            <h2 className="text-white text-5xl font-bold leading-tight tracking-tighter">
              {t('Verified Data.', 'Верифіковані дані.')}
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              {t(
                "Every number has a source. We only use data verified from WHO, Lancet, UNICEF, and OCHA.",
                "Кожне число має джерело. Ми використовуємо лише дані, верифіковані ВООЗ, Lancet, UNICEF та OCHA."
              )}
            </p>
          </div>
          <div className="space-y-8 d-card !p-10 !mb-0">
            <h3 className="text-white font-bold text-lg tracking-tight">{t('Economic Burden', 'Економічний тягар')}</h3>
            <div className="space-y-6">
              <IndicatorRow label={t('Affected Population', 'Уражене населення')} sub="WHO 2024" value="9.6M (22%)" color="text-red-500" />
              <IndicatorRow label={t('Intensive Treatment Need', 'Потреба в інтенсивному лікуванні')} sub="MOH Estimate" value="3.9M" color="text-orange-500" />
              <IndicatorRow label={t('GDP Impact (EU Analogy)', 'Вплив на ВВП (аналогія ЄС)')} sub="Data Gap" value=">4% GDP" color="text-purple-500" />
            </div>
          </div>
        </div>
        <div className="d-card !p-10 !mb-0">
          <div className="mb-10 space-y-1">
            <h3 className="text-white font-bold text-lg tracking-tight">{t('DALYs by Region', 'DALY за регіонами')}</h3>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Disability-Adjusted Life Years</p>
          </div>
          <div className="h-[300px] flex items-end gap-12 px-6">
            <DalyGroup label="Depression" values={[6500, 12500, 11500]} />
            <DalyGroup label="PTSD" values={[3200, 4800, 4200]} />
            <DalyGroup label="Anxiety" values={[1500, 3000, 3800]} />
          </div>
        </div>
      </div>
    </div>
  );
};

const AskPage = ({ lang }: { lang: Language }) => {
  const t = (en: string, uk: string) => (lang === 'uk' ? uk : en);
  return (
    <div className="space-y-24">
      <div className="text-center space-y-8 max-w-5xl mx-auto">
        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-500 font-mono text-[9px] font-bold tracking-[0.3em] uppercase">
          {t('05 THE ASK', '05 ЗАПИТ')}
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
          <span className="text-white">{t('Stop Counting Certificates.', 'Припиніть рахувати сертифікати.')}</span><br/>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-white bg-clip-text text-transparent">
            {t('Start Measuring Recovery.', 'Почніть вимірювати одужання.')}
          </span>
        </h1>
        <p className="text-xl text-white/50 leading-relaxed font-light max-w-3xl mx-auto">
          {t(
            "15 million people need help. The money exists — $177M in Health Cluster alone. What doesn't exist is the infrastructure to connect funding to outcomes.",
            "15 мільйонів людей потребують допомоги. Гроші є — лише в Кластері охорони здоров'я 177 мільйонів доларів. Чого немає — то це інфраструктури для зв'язку фінансування з результатами."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PhaseCard 
          phase="01" 
          title={t('Pilot — 6 months', 'Пілот — 6 місяців')}
          color="text-[#00F5FF]"
          desc={t('Deploy coordination bus in 1 oblast. Connect ~100 practitioners to outcomes tracking.', 'Розгортання шини координації в 1 області. Підключення ~100 практиків до відстеження результатів.')}
          kpis={[
            t('500+ practitioners successfully onboarded', '500+ успішно залучених фахівців'),
            t('30% target reduction in administrative overhead', 'Цільове зниження адміністративних витрат на 30%'),
            t('10,000+ verified clinical sessions tracked', '10 000+ верифікованих клінічних сесій відстежено')
          ]}
        />
        <PhaseCard 
          phase="02" 
          title={t('Scale — 12 months', 'Масштаб — 12 місяців')}
          color="text-[#F59E0B]"
          desc={t('Expand to 5 oblasts. Integrate with NHSU mental health package. Launch donor portal.', 'Розширення на 5 областей. Інтеграція з пакетом ПЗ НСЗУ. Запуск порталу для донорів.')}
          kpis={[
            t('5,000+ practitioners integrated nationwide', '5 000+ інтегрованих фахівців по всій країні'),
            t('Full integration with NHSU billing systems', 'Повна інтеграція з платіжними системами НСЗУ'),
            t('50% reduction in reporting time', 'Скорочення часу на звітність на 50%')
          ]}
        />
        <PhaseCard 
          phase="03" 
          title={t('National — 24 months', 'Національний — 24 місяці')}
          color="text-[#00FF66]"
          desc={t('Full integration with HeRAMS. Real-time outcomes dashboard for all donors.', 'Повна інтеграція з HeRAMS. Дашборд результатів у реальному часі для всіх донорів.')}
          kpis={[
            t('50,000+ beneficiaries receiving tracked care', '50 000+ бенефіціарів отримують відстежувану допомогу'),
            t('Real-time HeRAMS data synchronization', 'Синхронізація даних HeRAMS у реальному часі'),
            t('€5-10M annual budget processed via smart contracts', '€5-10 млн річного бюджету обробляється через смарт-контракти')
          ]}
        />
      </div>

      <div className="d-card !p-16 !mb-0 text-center space-y-10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative space-y-6">
          <h3 className="text-4xl font-bold text-white tracking-tight">
            {t('Inputs are funded. Outcomes are invisible.', 'Вклади фінансуються. Результати невидимі.')}
          </h3>
          <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
            {t(
              "Counting certificates is not management. It is triage mistaken for strategy. Join us in building the first-ever clinical quality framework for Ukraine.",
              "Підрахунок сертифікатів — це не управління. Це тріаж, який помилково приймають за стратегію. Приєднуйтесь до нас у створенні першої в історії системи клінічної якості для України."
            )}
          </p>
        </div>
        <button className="relative px-16 py-5 bg-cyan-500 rounded-full text-black font-bold text-lg tracking-wider hover:scale-105 transition-transform shadow-[0_0_40px_rgba(6,182,212,0.4)]">
          {t('Request Technical Briefing', 'Запитати технічний брифінг')}
        </button>
      </div>
    </div>
  );
};

/* ═══ SUB-COMPONENTS ═══ */

const SinkholeRow = ({ label, value, outcome, status, statusColor }: any) => (
  <div className="grid grid-cols-4 py-4 items-center group hover:bg-[#1E293B]/30 transition-colors px-6">
    <div className="text-[11px] font-bold text-[#E2E8F0]">{label}</div>
    <div className="text-right font-mono text-[13px] text-white">{value}</div>
    <div className="pl-6 text-[11px] text-[#94A3B8] leading-tight font-mono">{outcome}</div>
    <div className={cn("text-right font-mono text-[10px] font-bold", statusColor)}>{status}</div>
  </div>
);

const ArchitectureCard = ({ label, title, items, active }: any) => (
  <div className={cn(
    "d-card !p-8 !mb-0 space-y-6 transition-all",
    active ? "!border-[#00F5FF]/50 shadow-[0_0_20px_rgba(0,245,255,0.15)]" : ""
  )}>
    <div className={cn(
      "inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest font-mono",
      active ? "bg-[#00FF66]/20 text-[#00FF66]" : "bg-white/10 text-white/40"
    )}>
      {label}
    </div>
    <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
    <ul className="space-y-4">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex gap-3 text-[13px] text-[#94A3B8] leading-relaxed font-mono">
          <div className="w-1 h-1 rounded-full bg-[#00F5FF] mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ComparisonRow = ({ left, leftSub, right, rightSub }: any) => (
  <div className="grid grid-cols-2 group">
    <div className="p-8 border-r border-[#1E293B] space-y-2">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center text-red-500">
          <AlertCircle size={14} />
        </div>
        <div className="text-sm font-bold text-[#E2E8F0]">{left}</div>
      </div>
      <div className="text-[11px] text-[#94A3B8] pl-9 font-mono">{leftSub}</div>
    </div>
    <div className="p-8 space-y-2 bg-[#00F5FF]/0 group-hover:bg-[#00F5FF]/[0.02] transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded bg-[#00F5FF]/10 flex items-center justify-center text-[#00F5FF]">
          <CheckCircle2 size={14} />
        </div>
        <div className="text-sm font-bold text-[#E2E8F0]">{right}</div>
      </div>
      <div className="text-[11px] text-[#94A3B8] pl-9 font-mono">{rightSub}</div>
    </div>
  </div>
);

const DalyGroup = ({ label, values }: any) => (
  <div className="flex-1 flex flex-col items-center gap-4">
    <div className="w-full flex items-end gap-1 h-full">
      <div className="flex-1 bg-[#00F5FF] rounded-t" style={{ height: `${(values[0]/14000)*100}%` }} />
      <div className="flex-1 bg-[#F59E0B] rounded-t" style={{ height: `${(values[1]/14000)*100}%` }} />
      <div className="flex-1 bg-red-500 rounded-t" style={{ height: `${(values[2]/14000)*100}%` }} />
    </div>
    <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest font-mono">{label}</div>
  </div>
);

const IndicatorRow = ({ label, sub, value, color }: any) => (
  <div className="flex justify-between items-center group">
    <div className="space-y-0.5">
      <div className="text-sm font-bold text-[#E2E8F0]">{label}</div>
      <div className="text-[11px] text-[#94A3B8] font-mono">{sub}</div>
    </div>
    <div className={cn("text-xl font-bold tracking-tight", color)}>{value}</div>
  </div>
);

const PhaseCard = ({ phase, title, desc, color = "text-[#00F5FF]", kpis }: any) => (
  <div className="d-card !p-8 !mb-0 space-y-6 flex flex-col h-full">
    <div className={cn("text-4xl font-bold tracking-tighter", color)}>{phase}</div>
    <div className="space-y-4 flex-1">
      <h3 className="text-white text-xl font-bold">{title}</h3>
      <p className="text-[#94A3B8] text-sm leading-relaxed font-mono">{desc}</p>
      {kpis && (
        <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
          <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">Key Performance Indicators</div>
          <ul className="space-y-2">
            {kpis.map((kpi: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#E2E8F0] leading-relaxed font-mono">
                <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", color === 'text-[#00F5FF]' ? 'bg-[#00F5FF]' : color === 'text-[#F59E0B]' ? 'bg-[#F59E0B]' : 'bg-[#00FF66]')} />
                <span>{kpi}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
