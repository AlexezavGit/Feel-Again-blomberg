import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  PieChart,
  Pie,
  Legend,
} from 'recharts';

const COLORS = {
  cyan: '#00F5FF',
  amber: '#F59E0B',
  success: '#00FF66',
  accent: '#00E5FF',
  purple: '#A855F7',
  slate: '#1E293B',
  text: '#E2E8F0',
  dim: '#94A3B8',
};

const CustomTooltip = ({ active, payload, label, lang }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0A1428] border border-border-theme p-3 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl bg-opacity-95">
        <p className="text-text-sec font-sans text-[10px] mb-2 uppercase tracking-widest border-b border-border-theme pb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <div key={i} className="flex items-center justify-between gap-4 mt-1.5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" style={{ color: p.color || p.fill, backgroundColor: p.color || p.fill }} />
              <p className="text-text-prim text-[11px] font-medium">{p.name}</p>
            </div>
            <p className="font-sans font-bold text-[12px]" style={{ color: p.color || p.fill }}>
              {p.value}{p.unit || ''}
            </p>
          </div>
        ))}
        {payload[0]?.payload?.desc && (
          <p className="mt-3 text-[9px] text-text-sec leading-tight font-sans italic opacity-70">
            {payload[0].payload.desc}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export const PrevalenceChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const data = [
    { name: lang === 'uk' ? 'Депресія' : 'Depression', value: 44.2, color: COLORS.cyan, desc: lang === 'uk' ? 'Переважно жінки 25-45 років' : 'Mostly women 25-45' },
    { name: lang === 'uk' ? 'ПТСР (ризик)' : 'PTSD (at risk)', value: 25, color: COLORS.amber, desc: lang === 'uk' ? 'Зони активних бойових дій' : 'Active combat zones' },
    { name: lang === 'uk' ? 'Тривожність' : 'Anxiety', value: 23.1, color: COLORS.purple, desc: lang === 'uk' ? 'Пов’язано з невизначеністю' : 'Linked to uncertainty' },
    { name: lang === 'uk' ? 'Складний ПТСР' : 'Complex PTSD', value: 8.9, color: COLORS.accent, desc: lang === 'uk' ? 'Потребує тривалої терапії' : 'Requires long-term therapy' },
    { name: lang === 'uk' ? 'Будь-який з 7' : 'Any of 7', value: 36.3, color: COLORS.slate, desc: lang === 'uk' ? 'Загальний показник ризику' : 'Overall risk indicator' },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" width={130} stroke={COLORS.dim} fontSize={10} tick={{ fill: COLORS.dim }} />
        <Tooltip content={<CustomTooltip lang={lang} />} cursor={{ fill: 'transparent' }} />
        <Bar dataKey="value" radius={[0, 2, 2, 0]} barSize={16} unit="%">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export const FunnelChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const data = [
    { name: lang === 'uk' ? 'Сертифікати' : 'Certificates', value: 96000, color: COLORS.slate, desc: 'mhGAP Online' },
    { name: lang === 'uk' ? 'Первинні лікарі' : 'Primary docs', value: 19000, color: COLORS.cyan, desc: 'Practicing' },
    { name: lang === 'uk' ? 'Очно + супервізія' : 'In-person + sup', value: 700, color: COLORS.accent, desc: 'Advanced training' },
    { name: lang === 'uk' ? 'Заклади НСЗУ' : 'NHSU facilities', value: 1000, color: COLORS.amber, desc: 'Contracted' },
    { name: lang === 'uk' ? 'Практикуючі' : 'Practicing', value: 42, color: COLORS.success, desc: 'Full compliance' },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
        <XAxis type="number" scale="log" domain={[10, 100000]} hide />
        <YAxis dataKey="name" type="category" width={130} stroke={COLORS.dim} fontSize={10} tick={{ fill: COLORS.dim }} />
        <Tooltip content={<CustomTooltip lang={lang} />} cursor={{ fill: 'transparent' }} />
        <Bar dataKey="value" radius={[0, 2, 2, 0]} barSize={16}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export const BudgetSplitChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const outerData = [
    { name: lang === 'uk' ? 'Стаціонар' : 'Inpatient', value: 89, color: COLORS.amber },
    { name: lang === 'uk' ? 'Амбулаторно' : 'Outpatient', value: 11, color: COLORS.success },
  ];
  const innerData = [
    { name: lang === 'uk' ? 'Стаціонар (попит)' : 'Inpatient (demand)', value: 33, color: 'rgba(245,158,11,0.3)' },
    { name: lang === 'uk' ? 'Амбулаторно (попит)' : 'Outpatient (demand)', value: 67, color: 'rgba(0,255,102,0.3)' },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={outerData} dataKey="value" cx="50%" cy="50%" outerRadius={80} innerRadius={65} stroke="none">
          {outerData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Pie data={innerData} dataKey="value" cx="50%" cy="50%" outerRadius={60} innerRadius={45} stroke="none">
          {innerData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip lang={lang} />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const WorkforceChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const data = [
    { name: lang === 'uk' ? 'Психіатри' : 'Psychiatrists', ua: 11.6, eu: 12.9, target: 12.9 },
    { name: lang === 'uk' ? 'Психологи' : 'Psychologists', ua: 1.3, eu: 2.7, target: 6.5 },
    { name: lang === 'uk' ? 'Психотерапевти' : 'Psychotherapists', ua: 0.56, eu: 1.5, target: 3.0 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.slate} vertical={false} />
        <XAxis dataKey="name" stroke={COLORS.dim} fontSize={9} tick={{ fill: COLORS.dim }} interval={0} angle={-35} textAnchor="end" dy={15} />
        <YAxis stroke={COLORS.dim} fontSize={10} tick={{ fill: COLORS.dim }} />
        <Tooltip content={<CustomTooltip lang={lang} />} cursor={{ fill: 'transparent' }} />
        <Legend verticalAlign="bottom" height={36} iconType="circle" />
        <Bar name={lang === 'uk' ? 'Україна' : 'Ukraine'} dataKey="ua" fill={COLORS.cyan} radius={[2, 2, 0, 0]} />
        <Bar name={lang === 'uk' ? 'Сер. ЄС' : 'EU avg'} dataKey="eu" fill={COLORS.slate} radius={[2, 2, 0, 0]} />
        <Bar name={lang === 'uk' ? 'Ціль ВООЗ' : 'WHO Target'} dataKey="target" fill={COLORS.amber} radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const ReconChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const data = [
    { name: lang === 'uk' ? 'Прямі збитки' : 'Direct damage', value: 1.4, color: COLORS.amber },
    { name: lang === 'uk' ? 'З непрямими' : 'With indirect', value: 6.0, color: COLORS.accent },
    { name: lang === 'uk' ? '+ Розширення' : '+ Expansion', value: 15.1, color: COLORS.purple },
    { name: lang === 'uk' ? 'Загальні збитки' : 'Total health', value: 26, color: COLORS.slate },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.slate} vertical={false} />
        <XAxis dataKey="name" stroke={COLORS.dim} fontSize={9} tick={{ fill: COLORS.dim }} interval={0} angle={-35} textAnchor="end" dy={15} />
        <YAxis stroke={COLORS.dim} fontSize={10} tickFormatter={(v) => `$${v}B`} tick={{ fill: COLORS.dim }} />
        <Tooltip content={<CustomTooltip lang={lang} />} cursor={{ fill: 'transparent' }} />
        <Bar dataKey="value" radius={[2, 2, 0, 0]} barSize={32}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export const WarImpactChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const data = [
    { name: lang === 'uk' ? 'До війни' : 'Pre-war', psychiatrists: 40.0, social: 17.78 },
    { name: lang === 'uk' ? 'Липень 2022' : 'July 2022', psychiatrists: 33.4, social: 16.5 },
    { name: lang === 'uk' ? 'Квітень 2024' : 'April 2024', psychiatrists: 30.9, social: 14.82 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.slate} vertical={false} />
        <XAxis dataKey="name" stroke={COLORS.dim} fontSize={9} tick={{ fill: COLORS.dim }} interval={0} angle={-35} textAnchor="end" dy={15} />
        <YAxis stroke={COLORS.dim} fontSize={10} tick={{ fill: COLORS.dim }} />
        <Tooltip content={<CustomTooltip lang={lang} />} cursor={false} />
        <Legend verticalAlign="bottom" height={36} iconType="circle" />
        <Line
          name={lang === 'uk' ? 'Психіатри на заклад' : 'Psychiatrists per facility'}
          type="monotone"
          dataKey="psychiatrists"
          stroke={COLORS.amber}
          strokeWidth={3}
          dot={{ r: 4, fill: COLORS.amber, strokeWidth: 0 }}
          activeDot={{ r: 6, stroke: COLORS.amber, strokeWidth: 2, fill: '#050A15' }}
        />
        <Line
          name={lang === 'uk' ? 'Соцпрацівники (x0.1)' : 'Social workers (x0.1)'}
          type="monotone"
          dataKey="social"
          stroke={COLORS.cyan}
          strokeWidth={3}
          dot={{ r: 4, fill: COLORS.cyan, strokeWidth: 0 }}
          activeDot={{ r: 6, stroke: COLORS.cyan, strokeWidth: 2, fill: '#050A15' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const CoordinationChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const data = [
    { name: lang === 'uk' ? 'Київ' : 'Kyiv', active: 1240, capacity: 1500, desc: 'High demand' },
    { name: lang === 'uk' ? 'Харків' : 'Kharkiv', active: 980, capacity: 1100, desc: 'Near frontline' },
    { name: lang === 'uk' ? 'Львів' : 'Lviv', active: 850, capacity: 1200, desc: 'IDP hub' },
    { name: lang === 'uk' ? 'Одеса' : 'Odesa', active: 620, capacity: 800, desc: 'Regional center' },
    { name: lang === 'uk' ? 'Дніпро' : 'Dnipro', active: 740, capacity: 900, desc: 'Logistics hub' },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.slate} vertical={false} />
        <XAxis dataKey="name" stroke={COLORS.dim} fontSize={9} tick={{ fill: COLORS.dim }} interval={0} angle={-35} textAnchor="end" dy={15} />
        <YAxis stroke={COLORS.dim} fontSize={10} tick={{ fill: COLORS.dim }} />
        <Tooltip content={<CustomTooltip lang={lang} />} cursor={{ fill: 'transparent' }} />
        <Bar name={lang === 'uk' ? 'Активні кейси' : 'Active Cases'} dataKey="active" fill={COLORS.cyan} radius={[2, 2, 0, 0]} />
        <Bar name={lang === 'uk' ? 'Потужність' : 'Capacity'} dataKey="capacity" fill={COLORS.slate} radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const ComplianceChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const data = [
    { month: 'Jan', rate: 68, desc: 'Initial rollout' },
    { month: 'Feb', rate: 72, desc: 'Training phase' },
    { month: 'Mar', rate: 75, desc: 'System update' },
    { month: 'Apr', rate: 82, desc: 'Audit completed' },
    { month: 'May', rate: 88, desc: 'Optimized workflow' },
    { month: 'Jun', rate: 91, desc: 'Target reached' },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.slate} vertical={false} />
        <XAxis dataKey="month" stroke={COLORS.dim} fontSize={10} tick={{ fill: COLORS.dim }} />
        <YAxis stroke={COLORS.dim} fontSize={10} domain={[0, 100]} tick={{ fill: COLORS.dim }} />
        <Tooltip content={<CustomTooltip lang={lang} />} cursor={false} />
        <Line name={lang === 'uk' ? 'Відповідність' : 'Compliance'} type="monotone" dataKey="rate" stroke={COLORS.success} strokeWidth={3} dot={{ r: 4, fill: COLORS.success }} unit="%" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const FinancialChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const data = [
    { name: lang === 'uk' ? 'Персонал' : 'Staff', budget: 450, actual: 420, desc: 'Under budget' },
    { name: lang === 'uk' ? 'Логістика' : 'Logistics', budget: 200, actual: 230, desc: 'Fuel costs' },
    { name: lang === 'uk' ? 'Медикаменти' : 'Meds', budget: 150, actual: 140, desc: 'Stock optimized' },
    { name: lang === 'uk' ? 'Навчання' : 'Training', budget: 100, actual: 95, desc: 'Q2 sessions' },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.slate} vertical={false} />
        <XAxis dataKey="name" stroke={COLORS.dim} fontSize={10} tick={{ fill: COLORS.dim }} interval={0} angle={-35} textAnchor="end" dy={15} />
        <YAxis stroke={COLORS.dim} fontSize={10} tickFormatter={(v) => `$${v}k`} tick={{ fill: COLORS.dim }} />
        <Tooltip content={<CustomTooltip lang={lang} />} cursor={{ fill: 'transparent' }} />
        <Bar name={lang === 'uk' ? 'Бюджет' : 'Budget'} dataKey="budget" fill={COLORS.slate} radius={[2, 2, 0, 0]} unit="k" />
        <Bar name={lang === 'uk' ? 'Витрати' : 'Actual'} dataKey="actual" fill={COLORS.cyan} radius={[2, 2, 0, 0]} unit="k" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const SectorPieChart = ({ lang }: { lang: 'en' | 'uk' }) => {
  const data = [
    { name: lang === 'uk' ? 'Державний сектор' : 'Public Sector', value: 45, color: COLORS.cyan },
    { name: lang === 'uk' ? 'Приватна практика' : 'Private Practice', value: 35, color: COLORS.amber },
    { name: lang === 'uk' ? 'НГО / Міжнар.' : 'NGO / Intl', value: 20, color: COLORS.success },
  ];

  return (
    <ResponsiveContainer width="100%" height={120}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={25}
          outerRadius={45}
          paddingAngle={5}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip lang={lang} />} />
      </PieChart>
    </ResponsiveContainer>
  );
};


