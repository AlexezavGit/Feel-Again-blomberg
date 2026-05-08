import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { cn } from '../lib/utils';
import { 
  PrevalenceChart, 
  FunnelChart, 
  BudgetSplitChart, 
  WorkforceChart, 
  ReconChart, 
  WarImpactChart 
} from './Charts';
import { 
  Activity, 
  Users, 
  TrendingUp, 
  Shield, 
  ArrowRight, 
  Search,
  Filter,
  Download,
  Maximize2
} from 'lucide-react';

interface DashboardProps {
  lang: Language;
  onBack: () => void;
}

export const DashboardView = ({ lang, onBack }: DashboardProps) => {
  const t = (en: string, uk: string) => (lang === 'uk' ? uk : en);

  return (
    <div className="fixed inset-0 z-[200] bg-[#050505] overflow-y-auto selection:bg-orange-500 selection:text-black custom-scrollbar">
      {/* ═══ DASHBOARD TOP BAR ═══ */}
      <div className="fixed top-0 w-full h-14 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 flex items-center px-8 z-[210]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
          <span className="font-mono text-[11px] font-bold text-orange-500 tracking-[0.3em] uppercase">
            FEEL AGAIN — MONITORING
          </span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={onBack}
            className="group relative px-6 py-2 bg-white/5 border border-white/10 rounded-full text-orange-500 font-mono text-[10px] font-bold tracking-widest uppercase transition-all hover:border-orange-500/50 hover:bg-orange-500/5"
          >
            <span className="relative flex items-center gap-2">
              <ArrowRight className="rotate-180" size={12} />
              {t('BACK TO PITCH', 'НАЗАД ДО ПРЕЗЕНТАЦІЇ')}
            </span>
          </button>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/2 px-4 py-1.5 rounded-full border border-white/5">
            <Search size={12} className="text-white/40" />
            <input 
              type="text" 
              placeholder={t('Search...', 'Пошук...')} 
              className="bg-transparent border-none outline-none text-[10px] text-white/60 w-32 font-mono"
            />
          </div>
          <div className="flex items-center gap-1">
            <IconButton icon={<Filter size={14} />} />
            <IconButton icon={<Download size={14} />} />
          </div>
        </div>
      </div>

      {/* ═══ DASHBOARD CONTENT ═══ */}
      <div className="pt-24 pb-20 px-10 max-w-[1800px] mx-auto space-y-8">
        {/* TOP STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon={<Users className="text-blue-500" size={20} />}
            label={t('Total Population in Need', 'Загальна потреба')}
            value="15.0M"
            trend="+12%"
            sub={t('MOH Estimate 2024', 'Оцінка МОЗ 2024')}
          />
          <StatCard 
            icon={<Activity className="text-red-500" size={20} />}
            label={t('Treatment Gap', 'Дефіцит лікування')}
            value="74%"
            trend="-2%"
            sub={t('PMC 2024 Survey', 'Опитування PMC 2024')}
          />
          <StatCard 
            icon={<TrendingUp className="text-green-500" size={20} />}
            label={t('Health Cluster Funding', 'Фінансування Health Cluster')}
            value="$177M"
            trend="122%"
            sub={t('of requested amount', 'від запиту')}
          />
          <StatCard 
            icon={<Shield className="text-orange-500" size={20} />}
            label={t('Verified Specialists', 'Верифіковані фахівці')}
            value="8,201"
            trend="+540"
            sub={t('HeRAMS Oct 2024', 'HeRAMS жовтень 2024')}
          />
        </div>

        {/* MAIN CHARTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ChartBox title={t('Disorder Prevalence', 'Поширеність розладів')} sub="Lancet / PMC 2024">
            <PrevalenceChart lang={lang} />
          </ChartBox>
          <ChartBox title={t('Workforce Gap Analysis', 'Аналіз дефіциту кадрів')} sub="CSIS / WHO / EU Avg">
            <WorkforceChart lang={lang} />
          </ChartBox>
          <ChartBox title={t('Implementation Funnel', 'Воронка впровадження')} sub="Certificates vs Practice">
            <FunnelChart lang={lang} />
          </ChartBox>
          
          <ChartBox title={t('Budget Allocation', 'Розподіл бюджету')} sub="WHO Atlas 2020">
            <BudgetSplitChart lang={lang} />
          </ChartBox>
          <ChartBox title={t('War Impact', 'Вплив війни')} sub="Personnel per facility">
            <WarImpactChart lang={lang} />
          </ChartBox>
          <ChartBox title={t('Reconstruction Costs', 'Вартість відновлення')} sub="World Bank / WHO ($B)">
            <ReconChart lang={lang} />
          </ChartBox>
        </div>

        {/* DATA TABLE SECTION */}
        <div className="d-card !p-0 overflow-hidden">
          <div className="px-10 py-6 border-b border-[#1E293B] flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-white font-bold text-lg tracking-tight">
                {t('Regional MHPSS Indicators', 'Регіональні показники МЗПСП')}
              </h3>
              <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest">Live monitoring across 24 oblasts</p>
            </div>
            <button className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] text-orange-500 font-mono font-bold hover:bg-orange-500/10 transition-colors uppercase tracking-widest">
              {t('Export Full Report', 'Експортувати повний звіт')}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px]">
              <thead className="bg-[#1E293B]/30 text-[#94A3B8] uppercase tracking-[0.2em] font-bold">
                <tr>
                  <th className="px-10 py-4">{t('Region', 'Регіон')}</th>
                  <th className="px-10 py-4">{t('Population', 'Населення')}</th>
                  <th className="px-10 py-4">{t('Need Index', 'Індекс потреби')}</th>
                  <th className="px-10 py-4">{t('Facilities', 'Заклади')}</th>
                  <th className="px-10 py-4">{t('Specialists', 'Фахівці')}</th>
                  <th className="px-10 py-4 text-right">{t('Gap', 'Дефіцит')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                <TableRow region="Kyiv" pop="3.5M" need="High" facilities="142" specs="840" gap="12%" color="text-yellow-500" />
                <TableRow region="Kharkiv" pop="2.6M" need="Critical" facilities="89" specs="420" gap="45%" color="text-red-500" />
                <TableRow region="Lviv" pop="2.5M" need="Medium" facilities="112" specs="610" gap="8%" color="text-green-500" />
                <TableRow region="Odesa" pop="2.3M" need="High" facilities="76" specs="380" gap="22%" color="text-orange-500" />
                <TableRow region="Dnipro" pop="3.1M" need="High" facilities="94" specs="510" gap="18%" color="text-orange-500" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const IconButton = ({ icon }: any) => (
  <button className="p-2 bg-white/5 rounded-full border border-white/5 text-white/40 hover:text-white/80 hover:bg-white/10 transition-all">
    {icon}
  </button>
);

const StatCard = ({ icon, label, value, trend, sub }: any) => (
  <div className="d-card !p-5 !mb-0 group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <div className={cn(
        "text-[10px] font-bold px-1.5 py-0.5 rounded",
        trend.startsWith('+') || trend.includes('$') ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
      )}>
        {trend}
      </div>
    </div>
    <div className="space-y-1">
      <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider">{label}</div>
      <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
      <div className="text-[10px] text-white/20 font-mono">{sub}</div>
    </div>
  </div>
);

const ChartBox = ({ title, sub, children }: any) => (
  <div className="d-card !p-6 !mb-0 relative group">
    <div className="flex justify-between items-start mb-6">
      <div className="space-y-1">
        <h3 className="text-white font-bold text-sm tracking-tight">{title}</h3>
        <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest">{sub}</p>
      </div>
      <button className="text-white/20 hover:text-white/60 transition-colors">
        <Maximize2 size={14} />
      </button>
    </div>
    <div className="h-[300px] w-full">
      {children}
    </div>
  </div>
);

const TableRow = ({ region, pop, need, facilities, specs, gap, color }: any) => (
  <tr className="hover:bg-[#1E293B]/30 transition-colors group">
    <td className="px-6 py-4 font-bold text-white/90">{region}</td>
    <td className="px-6 py-4 text-white/60">{pop}</td>
    <td className="px-6 py-4">
      <span className={cn("px-2 py-0.5 rounded text-[9px] font-bold uppercase", 
        need === 'Critical' ? "bg-red-500/20 text-red-500" : 
        need === 'High' ? "bg-orange-500/20 text-orange-500" : 
        "bg-green-500/20 text-green-500"
      )}>
        {need}
      </span>
    </td>
    <td className="px-6 py-4 text-white/60">{facilities}</td>
    <td className="px-6 py-4 text-white/60">{specs}</td>
    <td className={cn("px-6 py-4 text-right font-bold font-mono", color)}>{gap}</td>
  </tr>
);
