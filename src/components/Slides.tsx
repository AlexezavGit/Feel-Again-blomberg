import React from 'react';
import { motion } from 'motion/react';
import { 
  PrevalenceChart, 
  FunnelChart, 
  BudgetSplitChart, 
  WorkforceChart, 
  ReconChart, 
  WarImpactChart, 
  SectorPieChart,
  CoordinationChart,
  FinancialChart,
  ComplianceChart
} from './Charts';
import { Language } from '../types';
import { cn } from '../lib/utils';
import { Logo } from './Logo';
import { 
  Users, 
  ClipboardCheck, 
  DollarSign, 
  TrendingUp, 
  AlertCircle,
  ChevronRight,
  ShieldCheck,
  Database,
  Zap
} from 'lucide-react';

interface SlideProps {
  lang: Language;
}

export const HeroSlide = ({ lang }: SlideProps) => (
  <div className="relative flex flex-col items-center justify-center text-center h-full w-full mx-auto px-6 sm:px-10 overflow-hidden"
       role="region" aria-label="Hero Introduction"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="relative z-10 mb-8 w-full max-w-4xl"
    >
      <div className="text-gold font-heading text-[8.5px] font-[700] tracking-[2px] mb-6 uppercase flex items-center justify-center gap-2">
        <span className="w-8 h-px bg-gold/50" />
        FIRST-IN-CLASS HUMANITARIAN FINTECH IN MHPSS
        <span className="w-8 h-px bg-gold/50" />
      </div>
      <h1 className="text-text-prim text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight mb-8">
        {lang === 'uk' 
          ? 'Цифрова координація. Доказові послуги. Відстеження кожної трансакції.'
          : 'Digital coordination. Evidence-based services. Tracking of every transaction.'}
      </h1>
      
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-text-sec font-sans text-[10px] sm:text-[11px] tracking-widest uppercase font-bold">
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 bg-gold rounded-full shadow-[0_0_8px_var(--gold)]" />
          {lang === 'uk' ? 'Комплаєнс протоколів' : 'Protocol compliance'}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 bg-gold rounded-full shadow-[0_0_8px_var(--gold)]" />
          {lang === 'uk' ? 'Підтримання стандартів' : 'Standards maintenance'}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 bg-gold rounded-full shadow-[0_0_8px_var(--gold)]" />
          {lang === 'uk' ? 'Розрахунок за сесію' : 'Settlement per session'}
        </span>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-60 hover:opacity-100 transition-opacity duration-700">
        <div className="flex flex-col items-center gap-2 group">
           <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg" alt="SDG 3" className="w-10 h-10 sm:w-14 sm:h-14 rounded shadow-[0_0_15px_rgba(46,196,182,0.3)] border border-teal/20 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(46,196,182,0.6)]" referrerPolicy="no-referrer" />
           <span className="font-heading text-[7px] sm:text-[9px] uppercase tracking-tighter text-text-sec transition-colors group-hover:text-teal">Good Health</span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
           <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg" alt="SDG 11" className="w-10 h-10 sm:w-14 sm:h-14 rounded shadow-[0_0_15px_rgba(200,164,92,0.3)] border border-gold/20 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(200,164,92,0.6)]" referrerPolicy="no-referrer" />
           <span className="font-heading text-[7px] sm:text-[9px] uppercase tracking-tighter text-text-sec transition-colors group-hover:text-gold">Sustainable Cities</span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
           <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg" alt="SDG 17" className="w-10 h-10 sm:w-14 sm:h-14 rounded shadow-[0_0_15px_rgba(224,85,69,0.3)] border border-red/20 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(224,85,69,0.6)]" referrerPolicy="no-referrer" />
           <span className="font-heading text-[7px] sm:text-[9px] uppercase tracking-tighter text-text-sec transition-colors group-hover:text-red">Partnerships</span>
        </div>
      </div>

    </motion.div>
  </div>
);

export const HopeSlide = ({ lang }: SlideProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full px-6 sm:px-10 py-8 sm:py-12 items-start overflow-y-auto">
    <div className="space-y-6">
      <div className="text-gold font-heading text-[8.5px] font-[700] tracking-[2px] uppercase flex items-center gap-2">
        <span className="w-2 h-2 bg-gold rounded-sm" />
        {lang === 'uk' ? 'РЕСУРСИ Є' : 'THE RESOURCES EXIST'}
      </div>
      <h2 className="text-text-prim font-heading text-3xl sm:text-5xl font-bold leading-tight tracking-tight mt-4">
        {lang === 'uk' ? 'Україна має відповідь. Зобов\'язання — реальні.' : 'Ukraine has the answer. The commitment is real.'}
      </h2>
      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="d-card !mb-0 !p-3 sm:!p-4 group border border-teal/30 hover:border-teal transition-colors" tabIndex={0} aria-label="96,000 mhGAP clinicians">
          <div className="text-teal font-heading text-3xl sm:text-4xl font-bold leading-none mb-1 group-hover:scale-105 transition-transform" style={{ textShadow: '0 0 10px rgba(26,138,126,0.3)' }}>96k</div>
          <div className="text-text-sec font-sans text-[10px] sm:text-[11px] uppercase tracking-wider font-bold">{lang === 'uk' ? 'фахівців з mhGAP' : 'mhGAP clinicians'}</div>
        </div>
        <div className="d-card !mb-0 !p-3 sm:!p-4 group border border-gold/30 hover:border-gold transition-colors" tabIndex={0} aria-label="$177 million via Health Cluster">
          <div className="text-gold font-heading text-3xl sm:text-4xl font-bold leading-none mb-1 group-hover:scale-105 transition-transform" style={{ textShadow: '0 0 10px rgba(139,105,20,0.3)' }}>$177M</div>
          <div className="text-text-sec font-sans text-[10px] sm:text-[11px] uppercase tracking-wider font-bold">{lang === 'uk' ? 'через Health Cluster' : 'via Health Cluster'}</div>
        </div>
        <div className="d-card !mb-0 !p-3 sm:!p-4 group border border-teal-bright/30 hover:border-teal-bright transition-colors" tabIndex={0} aria-label="4 evidence protocols">
          <div className="text-teal-bright font-heading text-3xl sm:text-4xl font-bold leading-none mb-1 group-hover:scale-105 transition-transform drop-shadow-[0_0_10px_rgba(46,196,182,0.6)]">4</div>
          <div className="text-text-sec font-sans text-[10px] sm:text-[11px] uppercase tracking-wider font-bold">{lang === 'uk' ? 'доказові протоколи' : 'evidence protocols'}</div>
        </div>
        <div className="d-card !mb-0 !p-3 sm:!p-4 group border border-red/30 hover:border-red transition-colors" tabIndex={0} aria-label="15 million need support">
          <div className="text-red font-heading text-3xl sm:text-4xl font-bold leading-none mb-1 group-hover:scale-105 transition-transform drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">15M</div>
          <div className="text-text-sec font-sans text-[10px] sm:text-[11px] uppercase tracking-wider font-bold">{lang === 'uk' ? 'потребують підтримки' : 'need support'}</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-gold font-heading text-[8.5px] font-[700] tracking-[2px] uppercase mb-4">
        {lang === 'uk' ? 'АНАЛІТИЧНИЙ ВИСНОВОК' : 'ANALYTICAL CONCLUSION'}
      </div>
      <p className="text-text-sec text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-sans">
        {lang === 'uk' 
          ? 'Будівельні блоки є: підготовлені фахівці, виділене міжнародне фінансування, доказові клінічні протоколи та потужні локальні інституції. Сектор психічного здоров\'я України не починає з нуля — він готовий до інфраструктури.'
          : 'The building blocks are in place: trained professionals, committed international funding, evidence-based clinical protocols, and strong local institutions. Ukraine\'s mental health sector is not starting from zero — it is ready for infrastructure.'}
      </p>
      <div className="space-y-4">
        <StatBar label={lang === 'uk' ? 'Фахівців підготовлено' : 'Clinicians trained'} value="96,000" percent={92} color="bg-teal" />
        <StatBar label={lang === 'uk' ? 'Фінансування виділено' : 'Funding committed'} value="$177M" percent={85} color="bg-gold" />
        <StatBar label={lang === 'uk' ? 'Протоколи валідовані' : 'Protocols validated'} value="4/4" percent={100} color="bg-teal-bright" />
        <StatBar label={lang === 'uk' ? 'Інфраструктура зв\'язку' : 'Infrastructure connecting them'} value="0%" percent={0} color="bg-red-bright" />
      </div>
    </div>
  </div>
);

const StatBar = ({ label, value, percent, color }: { label: string, value: string, percent: number, color: string }) => (
  <div className="space-y-1">
    <div className="flex justify-between font-sans text-[11px] uppercase tracking-wider">
      <span className="text-text-sec">{label}</span>
      <span className={cn("font-heading font-bold drop-shadow-[0_0_8px_currentColor]", color.replace('bg-', 'text-'))}>{value}</span>
    </div>
    <div className="h-1.5 bg-border-theme rounded-full overflow-hidden border border-border-theme">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
        className={cn("h-full rounded-full shadow-[0_0_10px_currentColor]", color)}
      />
    </div>
  </div>
);

export const HonestySlide = ({ lang }: SlideProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full px-6 sm:px-10 py-8 sm:py-12 items-start overflow-y-auto">
    <div className="space-y-6">
      <div className="text-red-bright font-sans text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
        <span className="w-2 h-2 bg-red-bright rounded-sm" />
        {lang === 'uk' ? 'КРИТИЧНИЙ СТАН' : 'CRITICAL STATE'}
      </div>
      <h2 className="text-text-prim text-2xl sm:text-4xl font-bold leading-tight tracking-tight uppercase">
        {lang === 'uk' 
          ? <>Чому <span className="text-red-bright underline decoration-wavy drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">74%</span> досі не отримують лікування?</>
          : <>Why do <span className="text-red-bright underline decoration-wavy drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">74%</span> still receive no treatment?</>}
      </h2>
      <div className="space-y-4">
        <ChainRow left="96,000" leftSub={lang === 'uk' ? 'сертифікатів' : 'certificates'} right="~42" rightSub={lang === 'uk' ? 'у практиці' : 'in practice'} color="text-teal" />
        <ChainRow left="$177M" leftSub={lang === 'uk' ? 'інвестовано' : 'invested'} right="0%" rightSub={lang === 'uk' ? 'відстеження' : 'tracking'} color="text-gold" />
        <ChainRow 
          left="89%" 
          leftSub={<span className="text-text-prim font-bold">{lang === 'uk' ? 'стаціонар' : 'inpatient'}</span>} 
          right="64-71%" 
          rightSub={<span className="text-text-prim font-bold">{lang === 'uk' ? 'потребують амб.' : 'need outpat.'}</span>} 
          color="text-teal-bright" 
        />
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
        {lang === 'uk' ? 'СИСТЕМНИЙ ЗБІЙ' : 'SYSTEM FAILURE'}
      </div>
      <p className="text-text-sec text-[16px] leading-relaxed mb-6 font-sans">
        {lang === 'uk' 
          ? <><strong className="text-red-bright">30-40% усіх ресурсів</strong> поглинаються адміністративним тертям. Фахівці витрачають 37-50% часу на звітність у 8 розрізнених системах.</>
          : <><strong className="text-red-bright">30-40% of all resources</strong> are absorbed by administrative friction. Clinicians spend 37-50% of time on paperwork across 8 disconnected systems.</>}
      </p>
      <div className="d-card border-l-4 border-l-[#F59E0B]">
        <p className="text-text-prim text-[16px] leading-relaxed mb-0 italic">
          {lang === 'uk'
            ? <>Це не питання спроможності України. <strong className="text-gold">Це питання готовності міжнародних систем локалізуватися.</strong></>
            : <>This is not a question of Ukrainian capacity. <strong className="text-gold">This is a question of whether international systems are ready to localize.</strong></>}
        </p>
      </div>
    </div>
  </div>
);

export const SolutionSlide = ({ lang }: SlideProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full px-6 sm:px-10 py-8 sm:py-12 items-start overflow-y-auto">
    {/* LEFT COLUMN: Title, Layers, Text */}
    <div className="flex flex-col h-full space-y-6">
      <div>
        <div className="text-teal font-heading text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-teal rounded-sm" />
          {lang === 'uk' ? 'АРХІТЕКТУРА РІШЕННЯ' : 'SOLUTION ARCHITECTURE'}
        </div>
        <h2 className="text-text-prim text-2xl sm:text-4xl font-heading font-bold leading-tight tracking-tight uppercase">
          {lang === 'uk' 
            ? <><span className="text-gold">FEEL AGAIN</span> збирає ланцюг.</>
            : <><span className="text-gold">FEEL AGAIN</span> assembles the chain.</>}
        </h2>
      </div>
      
      <div className="relative h-[340px] sm:h-[400px] flex items-center justify-center mt-4">
        <div className="relative w-full max-w-lg translate-y-[120px]" style={{ perspective: '1200px' }}>
           <LayerCard index={3} label="LAYER 4: DEPLOYMENT PHASES" desc={lang === 'uk' ? 'Пілот, масштабування, національний рівень' : 'Pilot, scale, and national rollout'} color="border-red" delay={0.3} items={['08', '09', '10']} />
           <LayerCard index={2} label="LAYER 3: PARTNERSHIP MODELS" desc={lang === 'uk' ? 'Взаємодія з НГО та приватним сектором' : 'NGO and private sector collaboration'} color="border-teal" delay={0.2} items={['06', '07']} />
           <LayerCard index={1} label="LAYER 2: PROJECT PORTFOLIO" desc={lang === 'uk' ? 'Управління грантами та ініціативами' : 'Grants and initiatives management'} color="border-gold" delay={0.1} items={['03', '04', '05']} />
           <LayerCard index={0} label="LAYER 1: STRATEGIC DIRECTIONS" desc={lang === 'uk' ? 'Національна стратегія та політика' : 'National strategy and policy alignment'} color="border-teal-bright" delay={0} items={['01', '02']} />
        </div>
      </div>
      
      <div className="mt-auto space-y-6">
        <p className="text-text-sec text-[14px] sm:text-[15px] leading-relaxed font-sans">
          {lang === 'uk'
            ? 'Кожен долар відстежується від донора до 50-хвилинної клінічної сесії. Блокчейн-верифіковані розрахунки. Програма не замінює акторів — вона їх з\'єднує. Коли потрібно більше — програма об\'єднує зусилля та залучає джерела кращих практик.'
            : 'Every dollar traceable from donor to a 50-minute clinical session. Blockchain-verified settlement. The program does not replace actors — it connects them. When more is needed, the program unites efforts and attracts sources of best practices.'}
        </p>
        <div className="d-card border-l-4 border-l-teal-bright !p-4">
          <div className="text-teal-bright font-sans text-[11px] font-bold mb-2 uppercase tracking-widest">{lang === 'uk' ? 'КЛЮЧОВА МЕТРИКА' : 'KEY METRIC'}</div>
          <p className="text-text-light dark:text-text-dark text-[14px] leading-relaxed mb-0 font-sans">
            {lang === 'uk'
              ? '5-7% комісія замість 30%+ адміністративних накладних. Ресурси перенаправлені на пряму оплату послуг під цифровим контролем.'
              : '5-7% transaction fee replacing 30%+ administrative overhead. Resources redirected to direct service delivery under digital control.'}
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN: 10 Items List */}
    <div className="flex flex-col justify-center space-y-2 sm:space-y-3 h-full lg:pl-8 py-4">
      <SolutionItem num="01" text={lang === 'uk' ? 'Цифрова шина інтеграції з НСЗУ' : 'Digital bus for integration with NHSU'} />
      <SolutionItem num="02" text={lang === 'uk' ? 'Ланцюг доставки допомоги (Aid Chain)' : 'Aid delivery chain'} />
      <SolutionItem num="03" text={lang === 'uk' ? 'Деперсоналізований реєстр та Diia ID' : 'Depersonalized registry & Diia ID'} />
      <SolutionItem num="04" text={lang === 'uk' ? 'Авто-звітність та облік ресурсів' : 'Auto-reporting & resource accounting'} />
      <SolutionItem num="05" text={lang === 'uk' ? 'P2P фандрейзинг та співфінансування' : 'P2P fundraising & co-financing'} />
      <SolutionItem num="06" text={lang === 'uk' ? 'Онлайн-моніторинг та відкриті дані' : 'Online monitoring & open data'} />
      <SolutionItem num="07" text={lang === 'uk' ? 'Програми фінансування проектів' : 'Project funding programs'} />
      <SolutionItem num="08" text={lang === 'uk' ? 'Цифрова підтримка бенефіціарів' : 'Digital support for beneficiaries'} />
      <SolutionItem num="09" text={lang === 'uk' ? 'Розвиток практик та супервізія' : 'Practice development & supervision'} />
      <SolutionItem num="10" text={lang === 'uk' ? 'Трекінг кожної трансакції' : 'Transaction tracking'} />
    </div>
  </div>
);

interface SolutionItemProps {
  num: string;
  text: string;
}
const SolutionItem = ({ num, text }: SolutionItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
    transition={{ delay: parseInt(num) * 0.15 + 1.2, duration: 0.5, type: 'spring', bounce: 0.2 }}
    className="flex items-center gap-4 d-card !p-2 sm:!p-3 group hover:border-[var(--gold)]/50 transition-colors cursor-default"
  >
    <span className="text-gold font-heading text-[14px] sm:text-[16px] font-bold group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(232,201,122,0.8)]">{num}</span>
    <span className="text-text-sec text-[13px] sm:text-[14px] leading-tight font-sans uppercase tracking-tight">{text}</span>
  </motion.div>
);

interface LayerCardProps {
  index: number;
  label: string;
  desc: string;
  color: string;
  delay: number;
  items?: string[];
}
const LayerCard = ({ index, label, desc, color, delay, items }: LayerCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 150, rotateX: 55, rotateZ: -20 }}
    animate={{ opacity: 1, y: index * -100, rotateX: 55, rotateZ: -20 }}
    whileHover={{ scale: 0.85, y: (index * -100) + 15, opacity: 0.8 }}
    transition={{ delay, duration: 0.8, type: "spring" }}
    className={cn("absolute w-full h-[140px] d-card flex flex-col items-center justify-center !p-3 sm:!p-4 text-center cursor-pointer", color)}
    tabIndex={index}
    aria-label={`${label}: ${desc}`}
  >
    <div className="text-text-prim font-heading text-[14px] sm:text-[16px] font-bold tracking-widest text-center mb-1 drop-shadow-md">{label}</div>
    <div className="text-text-sec text-[11px] sm:text-[12px] font-sans leading-tight max-w-[80%] mb-4">{desc}</div>
    {items && (
      <div className="flex gap-2">
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: parseInt(item) * 0.15 + 1.2, duration: 0.5, type: 'spring', bounce: 0.2 }}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--gold)]/20 border border-gold flex items-center justify-center text-gold text-[10px] sm:text-[11px] font-bold font-heading drop-shadow-[0_0_8px_rgba(232,201,122,0.8)]"
            aria-hidden="true"
          >
            {item}
          </motion.div>
        ))}
      </div>
    )}
  </motion.div>
);

const LoopCell = ({ label, sub, color, arrow }: { label: string, sub: string, color: string, arrow?: boolean }) => (
  <div className={cn("flex-1 p-3 text-center rounded relative", color)}>
    <h5 className="font-sans text-[9px] font-bold tracking-wider mb-1 uppercase">{label}</h5>
    <p className="text-[10px] opacity-70 leading-tight">{sub}</p>
    {arrow && <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-text-sec/50 font-sans text-xs z-10">→</span>}
  </div>
);


export const ModelsSlide = ({ lang }: SlideProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full px-6 sm:px-10 py-8 sm:py-12 items-start overflow-y-auto">
    <div className="flex flex-col items-center justify-center">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
        {lang === 'uk' ? 'НА ПЕРЕХРЕСТІ' : 'AT THE INTERSECTION'}
      </div>
      <h2 className="text-text-prim text-2xl sm:text-4xl font-bold leading-tight tracking-tight text-center mb-8 sm:mb-12 uppercase">
        {lang === 'uk' ? 'Три моделі у балансі' : 'Three models in balance'}
      </h2>
      <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] mx-auto mt-4 mb-8">
        <VennCircle 
          label={lang === 'uk' ? 'Гуманітарне\nРеагування' : 'Humanitarian\nResponse'} 
          color="border-teal/50 bg-teal/10 text-teal" 
          className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] mt-[-60px] sm:mt-[-85px] pb-[60px] sm:pb-[80px]" 
          delay={0.2} 
        />
        <VennCircle 
          label={lang === 'uk' ? 'Фінансові\nТехнології' : 'Financial\nTechnology'} 
          color="border-gold/50 bg-gold/10 text-gold" 
          className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] mt-[30px] ml-[52px] sm:mt-[42px] sm:ml-[74px] pt-[40px] pl-[40px] sm:pt-[50px] sm:pl-[50px]" 
          delay={0.6} 
        />
        <VennCircle 
          label={lang === 'uk' ? 'Сервісний\nРинок' : 'Service\nMarket'} 
          color="border-teal-bright/50 bg-teal-bright/10 text-teal-bright" 
          className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] mt-[30px] ml-[-52px] sm:mt-[42px] sm:ml-[-74px] pt-[40px] pr-[40px] sm:pt-[50px] sm:pr-[50px]" 
          delay={1.0} 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1.1, x: "-50%", y: "-50%" }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute left-1/2 top-1/2 z-20 flex flex-col items-center pointer-events-none"
        >
          <Logo className="w-10 h-10 sm:w-14 sm:h-14 text-gold drop-shadow-[0_0_25px_rgba(245,158,11,1)]" />
          <div className="font-sans text-[10px] sm:text-[11px] font-bold text-gold italic text-center mt-2 tracking-widest drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] bg-surface-theme/50 px-2 py-0.5 rounded backdrop-blur-sm">
            FEEL AGAIN
          </div>
        </motion.div>
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
        {lang === 'uk' ? 'СТРАТЕГІЧНИЙ ВИСНОВОК' : 'STRATEGIC CONCLUSION'}
      </div>
      <p className="text-text-sec text-xs sm:text-[13px] leading-relaxed mb-6 font-sans">
        {lang === 'uk'
          ? 'Програма підтримує баланс між гуманітарною, фінансовою та сервісно-ринковою моделями — бо лише на їх перетині існують життєздатні рішення.'
          : 'The program maintains balance between humanitarian, financial, and service-market models — because only at this intersection do viable solutions exist.'}
      </p>
      <div className="space-y-3">
        <ModelCard icon={Users} label={lang === 'uk' ? 'ГУМАНІТАРНЕ' : 'HUMANITARIAN'} sub={lang === 'uk' ? 'Комплаєнс Grand Bargain. Локалізація. Спрямування ресурсів безпосередньо до бенефіціарів.' : 'Grand Bargain compliance. Localization. Directing resources directly to beneficiaries.'} color="text-teal" />
        <ModelCard icon={Database} label={lang === 'uk' ? 'ФІНТЕХ' : 'FINANCIAL TECHNOLOGY'} sub={lang === 'uk' ? 'Блокчейн-розрахунки. Звітність за трансакцією. Повна прозорість та відстежуваність коштів.' : 'Blockchain settlement. Per-transaction reporting. Full transparency and traceability of funds.'} color="text-gold" />
        <ModelCard icon={TrendingUp} label={lang === 'uk' ? 'СЕРВІСНИЙ РИНОК' : 'SERVICE MARKET'} sub={lang === 'uk' ? 'Маркетплейс фахівців. Стандарти якості. Конкурентне середовище для надання найкращих послуг.' : 'Clinician marketplace. Quality standards. Competitive environment for delivering the best services.'} color="text-teal-bright" />
      </div>
    </div>
  </div>
);

const VennCircle = ({ label, color, className, delay }: { label: string, color: string, className: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
    animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
    transition={{ delay, duration: 0.8, type: "spring" }}
    className={cn("absolute top-1/2 left-1/2 rounded-full border-[1.5px] flex flex-col items-center justify-center text-center font-sans text-[8px] sm:text-[10px] font-bold uppercase tracking-widest leading-tight z-10 backdrop-blur-md shadow-[inset_0_0_30px_rgba(0,0,0,0.15)]", color, className)}
  >
    {label.split('\n').map((line, i) => <div key={i} className="drop-shadow-md">{line}</div>)}
  </motion.div>
);

export const BridgeSlide = ({ lang }: SlideProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full px-6 sm:px-10 py-8 sm:py-12 items-start overflow-y-auto">
    <div className="space-y-6">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
        <span className="w-2 h-2 bg-gold rounded-sm" />
        {lang === 'uk' ? 'ЦИФРОВИЙ МІСТ' : 'DIGITAL BRIDGE'}
      </div>
      <h2 className="text-text-prim text-2xl sm:text-4xl font-bold leading-tight tracking-tight uppercase">
        {lang === 'uk' ? 'Між локальним і глобальним' : 'Between local and global'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        <ConceptCard title={lang === 'uk' ? 'ЗМІШАНЕ ФІНАНСУВАННЯ' : 'BLENDED FINANCE'} desc={lang === 'uk' ? 'Незалежне положення + прозорість для кожного учасника.' : 'Independent position + operational transparency for participants.'} />
        <ConceptCard title={lang === 'uk' ? 'ДПП РАМКА' : 'PPP FRAMEWORK'} desc={lang === 'uk' ? 'Рівень довіри для виходу з тіні до найвищої якості послуг.' : 'Trust level enabling exit from shadow into high-quality services.'} />
        <ConceptCard title={lang === 'uk' ? 'ГУМАНІТАРНЕ → СТАЛЕ' : 'HUMANITARIAN → SUSTAINABLE'} desc={lang === 'uk' ? 'Цифровий розподіл ресурсів з трансформацією у сталий розвиток.' : 'Digital distribution of resources with transformation into sustainability.'} />
        <ConceptCard title={lang === 'uk' ? 'ЦИКЛ ПРОЗОРОСТІ' : 'TRANSPARENCY LOOP'} desc={lang === 'uk' ? 'Зворотний зв\'язок. Блокчейн-верифікація за сесію.' : 'Feedback loop. Blockchain-verified per session.'} />
      </div>
    </div>
    <div className="flex flex-col justify-end h-full">
      <p className="text-text-sec text-[16px] leading-relaxed mb-6 font-sans">
        {lang === 'uk'
          ? 'FEEL AGAIN з\'єднує локальних акторів — фахівців, пацієнтів, український досвід — з глобальними: донорами, виконавцями.'
          : 'FEEL AGAIN connects local actors — clinicians, patients, expertise — with global actors: donors, implementers.'}
      </p>
      <div className="d-card border-l-4 border-l-[#F59E0B]">
        <p className="text-text-prim text-[16px] leading-relaxed mb-0">
          {lang === 'uk'
            ? 'Рівний доступ для бенефіціарів. Право обирати фахівця. Прозора оплата фахівцям за 48 годин.'
            : 'Equal access for beneficiaries. Right to choose a specialist. Transparent payment within 48 hours.'}
        </p>
      </div>
    </div>
  </div>
);

const ConceptCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="d-card !p-3 sm:!p-4 !mb-0">
    <div className="text-gold font-sans text-[9px] sm:text-[10px] font-bold uppercase mb-1">{title}</div>
    <p className="text-text-sec text-[10px] sm:text-[11px] font-sans">{desc}</p>
  </div>
);

export const PartnersSlide = ({ lang }: SlideProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full px-6 sm:px-10 py-8 sm:py-12 items-start overflow-y-auto">
    <div className="space-y-6">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
        <span className="w-2 h-2 bg-gold rounded-sm" />
        {lang === 'uk' ? 'КЛІНІЧНА ОСНОВА' : 'CLINICAL FOUNDATION'}
      </div>
      <h2 className="text-text-prim text-2xl sm:text-4xl font-bold leading-tight tracking-tight uppercase">
        {lang === 'uk' ? 'Методології' : 'Methodologies'}
      </h2>
      <div className="space-y-2">
        <PartnerMiniCard title="mhGAP (WHO)" desc={lang === 'uk' ? 'Скринінг та лікування на первинці' : 'Primary care screening and treatment'} />
        <PartnerMiniCard title={lang === 'uk' ? 'ПРОТОКОЛ ПТСР (МОЗ)' : 'UA PTSD PROTOCOL (MOH)'} desc={lang === 'uk' ? 'Національний стандарт лікування травми' : 'National trauma treatment standard'} />
        <PartnerMiniCard title="GEHA / CLALIT (ISRAEL)" desc={lang === 'uk' ? 'Доказова модель допомоги при травмі' : 'Evidence-based trauma care model'} />
        <PartnerMiniCard title="USC BRAVEMIND VR" desc={lang === 'uk' ? 'VR-терапія бойового ПТСР' : 'VR therapy for combat PTSD'} />
        <PartnerMiniCard title="QUOROOM / HIGHCASTLE" desc={lang === 'uk' ? 'Приватний блокчейн. UK Companies House.' : 'Permissioned blockchain settlement.'} />
        <PartnerMiniCard title="ENKIDU GLOBAL (SAP)" desc={lang === 'uk' ? 'Гуманітарна логістика. SAP партнерство.' : 'Humanitarian logistics. SAP partnership.'} />
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
        {lang === 'uk' ? 'КОНСОРЦІУМ' : 'CONSORTIUM'}
      </div>
      <div className="space-y-4 sm:space-y-6">
        <PartnerLogo label="FEEL AGAIN" sub="HUMANITARIAN FINTECH" />
        <PartnerLogo label="USC ICT · BRAVEMIND" sub="VR THERAPY" />
        <PartnerLogo label="QUOROOM" sub="HIGHCASTLE · UK" />
        <PartnerLogo label="ENKIDU" sub="GLOBAL · SAP" />
        <PartnerLogo label="Geha | CLALIT" sub="ISRAEL" />
        <PartnerLogo label={lang === 'uk' ? 'КНУ · Психологія' : 'KNU · Psychology'} sub="TARAS SHEVCHENKO" />
      </div>
      <div className="mt-8 pt-4 border-t border-border-theme">
        <div className="font-sans text-[9px] text-text-sec uppercase tracking-widest opacity-50">
          {lang === 'uk' ? 'Усі партнерства верифіковані. Без завищених тверджень.' : 'All partnerships verified. No inflated claims.'}
        </div>
      </div>
    </div>
  </div>
);

const PartnerMiniCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="d-card !p-3 sm:!p-4 !mb-0">
    <div className="text-gold font-sans text-[9px] sm:text-[10px] font-bold uppercase mb-1">{title}</div>
    <p className="text-text-sec text-[10px] sm:text-[11px] font-sans">{desc}</p>
  </div>
);

const PartnerLogo = ({ label, sub, logoUrl }: { label: string, sub: string, logoUrl?: string }) => (
  <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
    <div className="w-10 h-10 bg-text-prim/5 rounded flex items-center justify-center overflow-hidden border border-border-theme">
      {logoUrl ? (
        <img src={logoUrl} alt={label} className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
      ) : (
        <span className="font-bold text-[10px] text-text-prim/20">LOGO</span>
      )}
    </div>
    <div>
      <div className="text-text-prim font-sans text-sm font-bold uppercase tracking-wider">{label}</div>
      <div className="text-text-sec font-sans text-[10px] uppercase tracking-tight">{sub}</div>
    </div>
  </div>
);

export const RoadmapSlide = ({ lang }: SlideProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full px-6 sm:px-10 py-8 sm:py-12 items-start overflow-y-auto">
    <div className="space-y-6">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
        <span className="w-2 h-2 bg-gold rounded-sm" />
        {lang === 'uk' ? 'РОЗГОРТАННЯ' : 'DEPLOYMENT'}
      </div>
      <h2 className="text-text-prim text-2xl sm:text-4xl font-bold leading-tight tracking-tight uppercase">
        {lang === 'uk' ? 'Перерозподіл ресурсів після запуску' : 'Resource Redistribution after Launch'}
      </h2>
      <div className="relative pl-6 sm:pl-8 border-l-2 border-border-theme space-y-6 sm:space-y-8 mt-8">
        <RoadmapItem year="2025" title={lang === 'uk' ? 'Підтвердження механіки' : 'Proof of Mechanics'} desc={lang === 'uk' ? 'Рівень розрахунків на бюджетах USAID. 5-7% комісія замість 30%+.' : 'Settlement layer on USAID budgets. 5-7% fee replacing 30%+ overhead.'} active />
        <RoadmapItem year="2026" title={lang === 'uk' ? 'Регіональне масштабування' : 'Regional Scale'} desc={lang === 'uk' ? 'Змішане фінансування. VR-терапія (USC Bravemind).' : 'Blended financing. VR therapy (USC Bravemind).'} />
        <RoadmapItem year="2027+" title={lang === 'uk' ? 'Національна інфраструктура' : 'National Infrastructure'} desc={lang === 'uk' ? 'Синхронізація eHealth (ЕСОЗ). SaaS-ліцензія (OPEX).' : 'eHealth (ESOZ) sync. SaaS license (OPEX).'} />
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
        {lang === 'uk' ? 'СТРАТЕГІЧНИЙ ВИСНОВОК' : 'STRATEGIC CONCLUSION'}
      </div>
      <p className="text-text-sec text-xs sm:text-[13px] leading-relaxed mb-6 sm:mb-8 font-sans">
        {lang === 'uk'
          ? 'Додаткове фінансування не потрібне. Платформа перенаправляє існуючі потоки ресурсів.'
          : 'No additional allocation required. The platform redirects existing resource flows.'}
      </p>
      <div className="space-y-4">
        <StatBar label={lang === 'uk' ? 'Адміністративні витрати' : 'Administrative expenses'} value="~30%" percent={30} color="bg-red-bright" />
        <StatBar label={lang === 'uk' ? 'Комісія платформи' : 'Platform fee'} value="5-7%" percent={6} color="bg-teal" />
        <StatBar label={lang === 'uk' ? 'Ресурси → прямі послуги' : 'Resources → direct services'} value="+23-25%" percent={94} color="bg-gold" />
      </div>
    </div>
  </div>
);

const RoadmapItem = ({ year, title, desc, active }: { year: string, title: string, desc: string, active?: boolean }) => (
  <div className="relative">
    <div className={cn("absolute -left-[33px] sm:-left-[41px] top-1 w-4 h-4 rounded-full border-2 border-gold bg-surface-theme", active && "bg-gold shadow-[0_0_10px_rgba(245,158,11,0.4)]")} />
    <div className="text-gold font-heading text-lg drop-shadow-[0_0_8px_rgba(232,201,122,0.8)] font-bold mb-1">{year}</div>
    <h4 className="text-text-prim text-lg font-bold mb-1">{title}</h4>
    <p className="text-text-sec text-xs leading-relaxed font-sans">{desc}</p>
  </div>
);

export const AlignmentSlide = ({ lang }: SlideProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full px-6 sm:px-10 py-8 sm:py-12 items-start overflow-y-auto">
    <div className="space-y-6">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
        <span className="w-2 h-2 bg-gold rounded-sm" />
        {lang === 'uk' ? 'СТРАТЕГІЧНЕ УЗГОДЖЕННЯ' : 'STRATEGIC ALIGNMENT'}
      </div>
      <h2 className="text-text-prim text-2xl sm:text-4xl font-bold leading-tight tracking-tight uppercase">
        {lang === 'uk' 
          ? 'Програма вже є активом.'
          : 'The program is already an asset.'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        <ConceptCard title={lang === 'uk' ? 'УЗГОДЖЕННЯ З USAID' : 'USAID ALIGNMENT'} desc={lang === 'uk' ? 'FEEL AGAIN як пріоритетний інструмент підзвітності.' : 'FEEL AGAIN as priority accountability instrument.'} />
        <ConceptCard title={lang === 'uk' ? 'МОЗ ТА ДПП' : 'MOH & PPP'} desc={lang === 'uk' ? 'Регуляторна пісочниця для цифрового ліцензування.' : 'Regulatory sandbox for digital licensing.'} />
        <ConceptCard title={lang === 'uk' ? 'ХАРТІЯ ЄБРР' : 'EBRD CHARTER'} desc={lang === 'uk' ? 'MHPSS через платформу в Хартію стійкості банків.' : 'MHPSS via platform into Banking Resilience Charter.'} />
        <ConceptCard title={lang === 'uk' ? 'ДЕ-ТІНІЗАЦІЯ' : 'DE-SHADOWING'} desc={lang === 'uk' ? 'Економічний стимул: верифіковані фахівці → оплата за 48 год.' : 'Economic pull: verified clinicians → 48h payment.'} />
      </div>
    </div>
    <div className="flex flex-col justify-end h-full">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
        {lang === 'uk' ? 'КОНТАКТ' : 'CONTACT'}
      </div>
      <div className="d-card !mb-6 !p-5 sm:!p-6 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        <div className="text-gold font-sans text-xs sm:text-sm font-bold mb-2 tracking-[0.3em] uppercase">FEEL AGAIN</div>
        <div className="text-text-sec font-sans text-[9px] sm:text-[11px] mb-6 uppercase tracking-widest">
          {lang === 'uk' ? 'Перший у класі гуманітарний фінтех у MHPSS' : 'First-in-class humanitarian fintech in MHPSS'}
        </div>
        <div className="space-y-3 text-text-prim text-xs sm:text-[13px] font-sans">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-gold rounded-full" />
            Alex Zvolinskiy · alexezav@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-gold rounded-full" />
            Olga Kalga · olgakalga@gmail.com
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border-theme">
          <div className="font-sans text-[8px] sm:text-[9px] text-text-sec uppercase tracking-widest opacity-50">
            {lang === 'uk' ? 'Лише верифіковані дані. Джерела за кожним твердженням.' : 'Verified data only. Sources cited for every claim.'}
          </div>
        </div>
      </div>
      <p className="text-text-sec text-[16px] leading-relaxed font-sans">
        {lang === 'uk'
          ? 'Партнери з імплементації роблять її еталоном та новим стандартом реагування в MHPSS.'
          : 'Implementation partners are making it a benchmark and a new standard for response in MHPSS.'}
      </p>
    </div>
  </div>
);

const ModelCard = ({ label, sub, color, icon: Icon }: { label: string, sub: string, color: string, icon?: React.ElementType }) => (
  <div className="d-card !p-4 sm:!p-5 !mb-0 flex items-start gap-4 transition-all group hover:scale-[1.02]">
    {Icon && (
      <div className={cn("w-10 h-10 rounded-lg bg-text-prim/5 flex items-center justify-center shrink-0", color)}>
        <Icon size={20} />
      </div>
    )}
    <div className="flex flex-col justify-center">
      <div className={cn("font-sans text-xs sm:text-sm font-bold mb-1 uppercase tracking-widest", color)}>{label}</div>
      <p className="text-text-sec text-[10px] sm:text-xs leading-relaxed font-sans">{sub}</p>
    </div>
  </div>
);

const ChainRow = ({ left, leftSub, right, rightSub, color }: { left: string, leftSub: React.ReactNode, right: string, rightSub: React.ReactNode, color: string }) => (
  <div className="flex items-center py-2 sm:py-3 border-b border-border-theme last:border-none group">
    <div className="flex-1 text-right pr-3 sm:pr-4">
      <div className={cn("font-heading text-2xl sm:text-3xl font-bold transition-all group-hover:scale-105 drop-shadow-[0_0_12px_currentColor]", color)}>{left}</div>
      <div className="text-text-sec font-sans text-[9px] sm:text-[10px] uppercase tracking-tighter">{leftSub}</div>
    </div>
    <div className="w-12 sm:w-16 flex justify-center items-center gap-1">
      <motion.div 
        animate={{ opacity: [1, 0.2, 1], scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-2 h-2 rounded-full bg-red-bright shadow-[0_0_10px_#EF4444]"
      />
      <div className="text-red-bright font-sans text-lg sm:text-xl font-bold">✕</div>
      <motion.div 
        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-2 h-2 rounded-full bg-red-bright shadow-[0_0_10px_#EF4444]"
      />
    </div>
    <div className="flex-1 pl-3 sm:pl-4">
      <div className="font-heading text-2xl sm:text-3xl font-bold text-red-bright transition-all group-hover:scale-105 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]">{right}</div>
      <div className="text-text-sec font-sans text-[9px] sm:text-[10px] uppercase tracking-tighter">{rightSub}</div>
    </div>
  </div>
);

export const EvidenceView = ({ lang }: SlideProps) => (
  <div className="h-full flex flex-col px-6 sm:px-10 py-8 sm:py-12 overflow-y-auto">
    <div className="flex items-center justify-between mb-8">
      <div>
        <div className="text-gold font-sans text-[10px] sm:text-[12px] font-bold tracking-[0.3em] uppercase mb-1">
          {lang === 'uk' ? '01 БРИФІНГ: КРИЗА' : '01 BRIEFING: THE CRISIS'}
        </div>
        <h2 className="text-text-prim text-2xl sm:text-4xl font-bold uppercase tracking-tight">
          {lang === 'uk' ? 'Інфраструктура проти Хаосу' : 'Infrastructure vs Chaos'}
        </h2>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <div className="text-right">
          <div className="text-teal font-heading text-2xl font-bold leading-none" style={{ textShadow: '0 0 12px rgba(26,138,126,0.6)' }}>94.2%</div>
          <div className="text-text-sec font-sans text-[9px] uppercase tracking-tighter">{lang === 'uk' ? 'Точність протоколу' : 'Protocol Accuracy'}</div>
        </div>
        <div className="w-px h-8 bg-border-theme" />
        <div className="text-right">
          <div className="text-teal-bright font-heading text-2xl font-bold leading-none" style={{ textShadow: '0 0 12px rgba(46,196,182,0.6)' }}>12.4k</div>
          <div className="text-text-sec font-sans text-[9px] uppercase tracking-tighter">{lang === 'uk' ? 'Сесій верифіковано' : 'Sessions Verified'}</div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="d-card !mb-0 !p-5 space-y-4 hover:!border-gold/30 transition-all">
        <h3 className="text-gold font-sans text-xs font-bold uppercase tracking-widest border-b border-border-theme pb-2">
          {lang === 'uk' ? 'Поширеність розладів (%)' : 'Disorder Prevalence (%)'}
        </h3>
        <div className="h-48">
          <PrevalenceChart lang={lang} />
        </div>
        <p className="text-text-sec text-[9px] font-sans uppercase tracking-widest opacity-50">SOURCE: WHO / MOH UA · PERIOD: 2023-2024</p>
      </div>

      <div className="d-card !mb-0 !p-5 space-y-4 hover:!border-teal-bright/30 transition-all">
        <h3 className="text-gold font-sans text-xs font-bold uppercase tracking-widest border-b border-border-theme pb-2">
          {lang === 'uk' ? 'Кадровий дефіцит (на 100к)' : 'Workforce Gap (per 100k)'}
        </h3>
        <div className="h-48">
          <WorkforceChart lang={lang} />
        </div>
        <p className="text-text-sec text-[9px] font-sans uppercase tracking-widest opacity-50">SOURCE: EUROSTAT / WHO · PERIOD: 2024</p>
      </div>

      <div className="d-card !mb-0 !p-5 space-y-4 hover:!border-teal/30 transition-all">
        <h3 className="text-gold font-sans text-xs font-bold uppercase tracking-widest border-b border-border-theme pb-2">
          {lang === 'uk' ? 'Вартість відновлення ($ млрд)' : 'Reconstruction Cost ($B)'}
        </h3>
        <div className="h-48">
          <ReconChart lang={lang} />
        </div>
        <p className="text-text-sec text-[9px] font-sans uppercase tracking-widest opacity-50">SOURCE: WORLD BANK / RDNA3 · 2024-2033</p>
      </div>

      <div className="d-card !mb-0 !p-5 space-y-4 hover:!border-red-bright/30 transition-all">
        <h3 className="text-gold font-sans text-xs font-bold uppercase tracking-widest border-b border-border-theme pb-2">
          {lang === 'uk' ? 'Вплив війни на кадри' : 'War Impact on Staffing'}
        </h3>
        <div className="h-48">
          <WarImpactChart lang={lang} />
        </div>
        <p className="text-text-sec text-[9px] font-sans uppercase tracking-widest opacity-50">SOURCE: HeRAMS / WHO · 2022-2024</p>
      </div>
    </div>

    <div className="flex flex-col justify-end mt-auto">
      <p className="text-text-sec text-[16px] leading-relaxed font-sans">
        {lang === 'uk'
          ? "Проблема не у відсутності ресурсів, а у відсутності цифрової тканини, що з'єднує їх. FEEL AGAIN створює цю тканину."
          : "The problem is not a lack of resources, but the absence of a digital fabric connecting them. FEEL AGAIN creates that fabric."}
      </p>
    </div>
  </div>
);

export const DashboardView = ({ lang }: SlideProps) => (
  <div className="h-full flex flex-col px-6 sm:px-10 py-8 sm:py-12 overflow-y-auto">
    <div className="flex items-center justify-between mb-8">
      <div>
        <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase mb-1">{lang === 'uk' ? 'МОНІТОРИНГ СИСТЕМИ' : 'SYSTEM MONITORING'}</div>
        <h2 className="text-text-prim text-2xl sm:text-3xl font-bold uppercase tracking-tight">{lang === 'uk' ? 'Операційний Дашборд' : 'Operational Dashboard'}</h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-teal/10 border border-teal/30 rounded text-teal font-sans text-[10px] font-bold tracking-widest">
          {lang === 'uk' ? 'ОНЛАЙН' : 'LIVE'}
        </div>
        <div className="px-3 py-1 bg-teal-bright/10 border border-teal-bright/30 rounded text-teal-bright font-sans text-[10px] font-bold tracking-widest">
          {lang === 'uk' ? 'СИНХРОНІЗОВАНО' : 'SYNCED'}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="d-card !mb-0 !p-5 hover:!border-gold/30 transition-all group">
        <div className="flex items-center justify-between mb-3">
          <Users size={18} className="text-gold group-hover:scale-110 transition-transform" />
          <span className="text-teal text-[10px] font-sans font-bold drop-shadow-[0_0_8px_rgba(26,138,126,0.8)]">+12%</span>
        </div>
        <div className="text-teal-bright font-heading text-2xl font-bold tracking-tighter" style={{ textShadow: '0 0 12px rgba(46,196,182,0.5)' }}>4,430</div>
        <div className="text-text-sec font-sans text-[9px] uppercase tracking-widest mt-1">{lang === 'uk' ? 'Активні Кейси' : 'Active Cases'}</div>
      </div>
      <div className="d-card !mb-0 !p-5 hover:!border-teal/30 transition-all group">
        <div className="flex items-center justify-between mb-3">
          <ClipboardCheck size={18} className="text-teal group-hover:scale-110 transition-transform" />
          <span className="text-teal text-[10px] font-sans font-bold drop-shadow-[0_0_8px_rgba(26,138,126,0.8)]">91%</span>
        </div>
        <div className="text-teal font-heading text-2xl font-bold tracking-tighter" style={{ textShadow: '0 0 12px rgba(26,138,126,0.5)' }}>88.4%</div>
        <div className="text-text-sec font-sans text-[9px] uppercase tracking-widest mt-1">{lang === 'uk' ? 'Комплаєнс' : 'Compliance'}</div>
      </div>
      <div className="d-card !mb-0 !p-5 hover:!border-teal-bright/30 transition-all group">
        <div className="flex items-center justify-between mb-3">
          <DollarSign size={18} className="text-teal-bright group-hover:scale-110 transition-transform" />
          <span className="text-gold text-[10px] font-sans font-bold drop-shadow-[0_0_8px_rgba(232,201,122,0.8)]">82%</span>
        </div>
        <div className="text-gold font-heading text-2xl font-bold tracking-tighter" style={{ textShadow: '0 0 12px rgba(232,201,122,0.5)' }}>$1.2M</div>
        <div className="text-text-sec font-sans text-[9px] uppercase tracking-widest mt-1">{lang === 'uk' ? 'Використання' : 'Utilization'}</div>
      </div>
      <div className="d-card !mb-0 !p-5 hover:!border-red-bright/30 transition-all group">
        <div className="flex items-center justify-between mb-3">
          <AlertCircle size={18} className="text-red-bright group-hover:scale-110 transition-transform" />
          <span className="text-red-bright text-[10px] font-sans font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">HIGH</span>
        </div>
        <div className="text-red-bright font-heading text-2xl font-bold tracking-tighter" style={{ textShadow: '0 0 12px rgba(239,68,68,0.5)' }}>12</div>
        <div className="text-text-sec font-sans text-[9px] uppercase tracking-widest mt-1">{lang === 'uk' ? 'Критичні Ризики' : 'Critical Risks'}</div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 d-card !mb-0 !p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-border-theme pb-4">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-gold" />
            <h3 className="text-text-prim font-sans text-sm font-bold uppercase tracking-widest">{lang === 'uk' ? 'Координація MHPSS' : 'MHPSS Coordination'}</h3>
          </div>
          <ChevronRight size={18} className="text-text-sec" />
        </div>
        <div className="h-64">
          <CoordinationChart lang={lang === 'uk' ? 'uk' : 'en'} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="d-card !mb-0 !p-4 hover:!border-gold/30 transition-all">
            <div className="text-text-sec font-sans text-[9px] uppercase tracking-widest mb-1">{lang === 'uk' ? 'Мобільні бригади' : 'Mobile Teams'}</div>
            <div className="text-text-prim font-sans text-xl font-bold">24 / 30</div>
          </div>
          <div className="d-card !mb-0 !p-4 hover:!border-teal/30 transition-all">
            <div className="text-text-sec font-sans text-[9px] uppercase tracking-widest mb-1">{lang === 'uk' ? 'Охоплення' : 'Coverage'}</div>
            <div className="text-teal font-sans text-xl font-bold">82%</div>
          </div>
        </div>
      </div>

      <div className="d-card !mb-0 !p-6 space-y-6">
        <div className="flex items-center gap-2 border-b border-border-theme pb-4">
          <ClipboardCheck size={18} className="text-teal" />
          <h3 className="text-text-prim font-sans text-sm font-bold uppercase tracking-widest">{lang === 'uk' ? 'Клінічний Комплаєнс' : 'Clinical Compliance'}</h3>
        </div>
        <div className="h-64">
          <ComplianceChart lang={lang === 'uk' ? 'uk' : 'en'} />
        </div>
        <div className="space-y-4">
          {[
            { label: lang === 'uk' ? 'mhGAP Протоколи' : 'mhGAP Protocols', val: 94, color: 'bg-teal' },
            { label: lang === 'uk' ? 'Захист даних' : 'Data Protection', val: 100, color: 'bg-teal-bright' },
            { label: lang === 'uk' ? 'Клінічна супервізія' : 'Clinical Supervision', val: 78, color: 'bg-gold' },
          ].map((item, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex justify-between font-sans text-[10px] uppercase tracking-wider">
                <span className="text-text-sec">{item.label}</span>
                <span className="text-text-prim font-bold">{item.val}%</span>
              </div>
              <div className="h-1 bg-border-theme rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${item.val}%` }}
                  className={cn("h-full", item.color)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Vision2027Slide = ({ lang }: SlideProps) => (
  <div className="flex flex-col h-full px-6 sm:px-10 py-8 sm:py-12 overflow-y-auto">
    <div className="mb-8">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
        <span className="w-2 h-2 bg-gold rounded-sm" />
        {lang === 'uk' ? 'ВІЗІЯ 2027' : 'VISION 2027'}
      </div>
      <h2 className="text-text-prim text-2xl sm:text-4xl font-bold leading-tight tracking-tight uppercase mt-2">
        {lang === 'uk' ? 'Національна інфраструктура' : 'National Infrastructure'}
      </h2>
    </div>
    
    <div className="relative flex-1 flex items-center justify-center">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full max-w-5xl">
          <VisionCard label={lang === 'uk' ? 'МАСШТАБ' : 'SCALE'} value="50,000+" sub={lang === 'uk' ? 'бенефіціарів' : 'beneficiaries'} color="text-teal-bright" />
          <VisionCard label={lang === 'uk' ? 'МЕРЕЖА' : 'NETWORK'} value="5,000+" sub={lang === 'uk' ? 'інтегрованих психологів' : 'integrated psychologists'} color="text-gold" />
          <VisionCard label={lang === 'uk' ? 'ФІНАНСУВАННЯ' : 'FUNDING'} value="€5-10M" sub={lang === 'uk' ? 'річного бюджету' : 'annual budget'} color="text-teal" />
          <VisionCard label={lang === 'uk' ? 'ЕКОНОМІКА' : 'ECONOMY'} value="ВВП" sub={lang === 'uk' ? 'Оцінка впливу' : 'Impact assessment'} color="text-[#A855F7]" />
          <VisionCard label={lang === 'uk' ? 'ЕКСПОРТ' : 'EXPORT'} value="GLOBAL" sub={lang === 'uk' ? 'Українська експертиза травми' : 'Ukrainian trauma expertise'} color="text-text-prim" />
       </div>
    </div>
  </div>
);

const VisionCard = ({ label, value, sub, color }: { label: string, value: string, sub: string, color: string }) => (
  <div className="d-card group">
    <div className="text-text-sec font-sans text-[10px] uppercase tracking-widest mb-2">{label}</div>
    <div className={cn("font-sans text-3xl font-bold mb-1 group-hover:scale-105 transition-transform", color)}>{value}</div>
    <div className="text-text-prim text-[11px] font-sans uppercase opacity-70">{sub}</div>
  </div>
);

export const MiddleTierSlide = ({ lang }: SlideProps) => {
  const [activeBlock, setActiveBlock] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full px-6 sm:px-10 py-8 sm:py-12 overflow-y-auto">
      <div className="mb-8">
        <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
          <span className="w-2 h-2 bg-gold rounded-sm" />
          {lang === 'uk' ? 'СТРУКТУРНЕ ВУЗЬКЕ МІСЦЕ' : 'STRUCTURAL BOTTLENECK'}
        </div>
        <h2 className="text-text-prim text-2xl sm:text-4xl font-bold leading-tight tracking-tight uppercase mt-2">
          {lang === 'uk' ? 'ВІДСУТНЯ СЕРЕДНЯ ЛАНКА' : 'THE MISSING MIDDLE TIER'}
        </h2>
        <p className="text-text-sec text-sm sm:text-base leading-relaxed font-sans mt-4 max-w-3xl">
          {lang === 'uk' 
            ? 'Поточна система не має середньої ланки психологів для прийому пацієнтів від первинної ланки до того, як вони потребуватимуть психіатричної госпіталізації.'
            : 'The current system lacks a middle tier of psychologists to receive patients from primary care before they require psychiatric hospitalization.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mt-4 flex-1 pl-8 md:pl-0">
        {/* Connection Line with Energy Flow */}
        <div className="absolute top-0 bottom-0 left-2 md:left-0 md:right-0 md:top-1/2 md:-translate-y-1/2 w-0.5 md:w-auto md:h-0.5 bg-border-theme z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 md:w-1/3 md:h-full bg-gradient-to-b md:bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent md:animate-[flow-r_2.5s_linear_infinite] animate-[flow_2.5s_linear_infinite]" />
        </div>

        {/* Perpendicular Lines */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 w-[calc(100%-2rem)] md:w-0.5 md:h-full md:max-h-[200px] h-0.5 bg-border-theme z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full md:w-full md:h-1/2 md:top-1/2 bg-gradient-to-r md:bg-gradient-to-b from-[#F59E0B] to-transparent md:animate-[flow-out-b_2.5s_linear_infinite_1.25s] animate-[flow-out-r_2.5s_linear_infinite_1.25s]" />
          <div className="absolute top-0 right-1/2 w-1/2 h-full md:w-full md:h-1/2 md:bottom-1/2 bg-gradient-to-l md:bg-gradient-to-t from-[#F59E0B] to-transparent md:animate-[flow-out-t_2.5s_linear_infinite_1.25s] hidden md:block" />
          
          {/* Labels */}
          <div className="absolute -top-4 left-4 md:-left-16 md:top-0 text-text-sec text-[10px] font-bold uppercase tracking-wider">e-health</div>
          <div className="absolute -bottom-4 right-0 md:-right-20 md:bottom-0 text-text-sec text-[10px] font-bold uppercase tracking-wider">Activity info</div>
        </div>

        {/* Block 1: Primary Care */}
        <div className={cn(
          "d-card relative z-10 !p-6 flex flex-col items-center text-center transition-all duration-500 bg-surface-theme",
          activeBlock === 0 ? "!border-teal-bright shadow-[0_0_30px_rgba(0,245,255,0.15)] scale-105" : "opacity-60 scale-100"
        )}>
          <div className="w-12 h-12 rounded bg-teal-bright/10 flex items-center justify-center text-teal-bright mb-4">
            <Users className="w-6 h-6" />
          </div>
          <div className="text-text-prim font-bold text-lg uppercase tracking-wider mb-2">{lang === 'uk' ? 'Первинна ланка' : 'Primary Care'}</div>
          <div className="text-text-sec text-xs uppercase font-sans">{lang === 'uk' ? 'Сімейні лікарі · Перевантажені' : 'Family Doctors · Overwhelmed'}</div>
        </div>

        {/* Block 2: Middle Tier (Private Practice) */}
        <div className={cn(
          "d-card relative z-10 !p-6 flex flex-col items-center text-center transition-all duration-500 bg-surface-theme",
          activeBlock === 1 ? "!border-gold shadow-[0_0_30px_rgba(245,158,11,0.15)] scale-105" : "opacity-60 scale-100"
        )}>
          <div className="absolute -top-3 bg-gold text-black text-[9px] font-bold px-3 py-1 rounded uppercase tracking-widest">
            {lang === 'uk' ? 'СЕРЕДНЯ ЛАНКА' : 'MIDDLE TIER'}
          </div>
          <div className="text-gold font-bold text-lg uppercase tracking-wider mb-2 mt-2">{lang === 'uk' ? 'Приватна Практика' : 'Private Practice'}</div>
          <p className="text-text-prim text-xs font-sans mb-4">
            {lang === 'uk' 
              ? 'Цифрова інфраструктура зв\'язує ці шари з базами e-health та 7 гуманітарними кластерами.' 
              : 'Digital infrastructure connects these layers with e-health and 7 humanitarian databases.'}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-text-prim/5 rounded px-2 py-1 text-[10px] text-text-prim font-sans border border-border-theme">{lang === 'uk' ? 'Фахівці' : 'Practitioners'}</span>
            <span className="bg-text-prim/5 rounded px-2 py-1 text-[10px] text-text-prim font-sans border border-border-theme">{lang === 'uk' ? 'API-клініки' : 'API Clinics'}</span>
          </div>
        </div>

        {/* Block 3: Psychiatric Care */}
        <div className={cn(
          "d-card relative z-10 !p-6 flex flex-col items-center text-center transition-all duration-500 bg-surface-theme",
          activeBlock === 2 ? "!border-red-bright shadow-[0_0_30px_rgba(239,68,68,0.15)] scale-105" : "opacity-60 scale-100"
        )}>
          <div className="w-12 h-12 rounded bg-red-bright/10 flex items-center justify-center text-red-bright mb-4">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="text-text-prim font-bold text-lg uppercase tracking-wider mb-2">{lang === 'uk' ? 'Спеціалізована ланка' : 'Psychiatric Care'}</div>
          <div className="text-text-sec text-xs uppercase font-sans">{lang === 'uk' ? 'Госпіталізація · Останній рубіж' : 'Hospitalization · LAST RESORT'}</div>
        </div>
      </div>
      
      <div className="mt-8 bg-red-bright/10 border border-red-bright/30 rounded p-4 text-center max-w-3xl mx-auto">
        <p className="text-red-bright text-xs font-sans leading-relaxed">
          {lang === 'uk'
            ? 'Примус неформальних практиків до традиційного ліцензування витіснить їх далі в тінь через звітність та податковий тягар.'
            : 'Forcing informal practitioners into traditional licensing will drive them further into the shadows due to reporting and tax burdens.'}
        </p>
      </div>
    </div>
  );
};



export const DeRiskedCoFinancingSlide = ({ lang }: SlideProps) => (
  <div className="flex flex-col h-full px-6 sm:px-10 py-8 sm:py-12 overflow-y-auto">
    <div className="mb-8">
      <div className="text-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2">
        <span className="w-2 h-2 bg-gold rounded-sm" />
        {lang === 'uk' ? 'ФІНАНСОВА МОДЕЛЬ' : 'FINANCIAL MODEL'}
      </div>
      <h2 className="text-text-prim text-2xl sm:text-4xl font-bold leading-tight tracking-tight uppercase mt-2">
        {lang === 'uk' ? 'Деризиковане співфінансування' : 'De-risked Co-financing'}
      </h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
       <FinanceColumn 
         title={lang === 'uk' ? 'ЗМІШАНЕ ФІНАНСУВАННЯ' : 'BLENDED FINANCE'} 
         desc={lang === 'uk' ? 'Поєднання грантів USAID з приватним капіталом через смарт-контракти.' : 'Combining USAID grants with private capital via smart contracts.'}
         icon={<ShieldCheck className="text-teal" />}
         color="border-teal"
       />
       <FinanceColumn 
         title={lang === 'uk' ? 'ВЕРИФІКАЦІЯ БЛОКЧЕЙН' : 'BLOCKCHAIN VERIFICATION'} 
         desc={lang === 'uk' ? 'Кожна трансакція прив\'язана до клінічного звіту та ID пацієнта.' : 'Every transaction tied to clinical report and patient ID.'}
         icon={<Database className="text-gold" />}
         color="border-gold"
       />
       <FinanceColumn 
         title={lang === 'uk' ? 'ПРЯМА ДОПОМОГА' : 'DIRECT ASSISTANCE'} 
         desc={lang === 'uk' ? 'Виплата фахівцям протягом 48 годин після сесії.' : 'Payment to clinicians within 48 hours of session.'}
         icon={<Zap className="text-teal-bright" />}
         color="border-teal-bright"
       />
    </div>
  </div>
);

const FinanceColumn = ({ title, desc, icon, color }: { title: string, desc: string, icon: React.ReactNode, color: string }) => (
  <div className={cn("d-card flex flex-col gap-4 group", color)}>
    <div className="w-12 h-12 rounded-lg bg-text-prim/5 flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="text-text-prim font-bold text-lg uppercase tracking-wider">{title}</div>
    <p className="text-text-sec text-sm font-sans leading-relaxed">{desc}</p>
  </div>
);



