const fs = require('fs');
const path = require('path');

const files = ['src/components/Slides.tsx', 'src/components/Charts.tsx'];

// Define colors and their neon shadows
const colors = {
  'gold': 'rgba(232, 201, 122, 0.6)',
  'teal': 'rgba(26, 138, 126, 0.6)',
  'teal-bright': 'rgba(46, 196, 182, 0.6)',
  'red-bright': 'rgba(239, 68, 68, 0.6)'
};

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Let's manually replace specific known numbers in EvidenceView & DashboardView

  // DashboardView 4,430 (make it teal)
  content = content.replace(
    /<div className="text-text-prim font-sans text-2xl font-bold tracking-tighter">4,430<\/div>/g,
    `<div className="text-teal-bright font-heading text-2xl font-bold tracking-tighter" style={{ textShadow: '0 0 12px rgba(46,196,182,0.5)' }}>4,430</div>`
  );

  // DashboardView 88.4% (make it teal)
  content = content.replace(
    /<div className="text-text-prim font-sans text-2xl font-bold tracking-tighter">88.4%<\/div>/g,
    `<div className="text-teal font-heading text-2xl font-bold tracking-tighter" style={{ textShadow: '0 0 12px rgba(26,138,126,0.5)' }}>88.4%</div>`
  );

  // DashboardView $1.2M (make it gold)
  content = content.replace(
    /<div className="text-text-prim font-sans text-2xl font-bold tracking-tighter">\$1\.2M<\/div>/g,
    `<div className="text-gold font-heading text-2xl font-bold tracking-tighter" style={{ textShadow: '0 0 12px rgba(232,201,122,0.5)' }}>$1.2M</div>`
  );

  // DashboardView 12 (make it red)
  content = content.replace(
    /<div className="text-text-prim font-sans text-2xl font-bold tracking-tighter">12<\/div>/g,
    `<div className="text-red-bright font-heading text-2xl font-bold tracking-tighter" style={{ textShadow: '0 0 12px rgba(239,68,68,0.5)' }}>12</div>`
  );

  // EvidenceView top metrics
  content = content.replace(
    /<div className="text-teal font-sans text-xl font-bold leading-none">94\.2%<\/div>/g,
    `<div className="text-teal font-heading text-2xl font-bold leading-none" style={{ textShadow: '0 0 12px rgba(26,138,126,0.6)' }}>94.2%</div>`
  );
  content = content.replace(
    /<div className="text-teal-bright font-sans text-xl font-bold leading-none">12\.4k<\/div>/g,
    `<div className="text-teal-bright font-heading text-2xl font-bold leading-none" style={{ textShadow: '0 0 12px rgba(46,196,182,0.6)' }}>12.4k</div>`
  );

  // Honesty Slide chain rows left/right text - need to parse
  const chainRowPattern = /<div className=\{cn\("font-sans text-lg sm:text-xl font-bold transition-all group-hover:scale-105", color\)\}>(\{left\}|left)<\/div>/g;
  content = content.replace(
    /<div className=\{cn\("font-sans text-lg sm:text-xl font-bold transition-all group-hover:scale-105", color\)\}>\{left\}<\/div>/g,
    `<div className={cn("font-heading text-2xl sm:text-3xl font-bold transition-all group-hover:scale-105 drop-shadow-[0_0_12px_currentColor]", color)}>{left}</div>`
  );

  content = content.replace(
    /<div className="font-sans text-lg sm:text-xl font-bold text-red-bright transition-all group-hover:scale-105">\{right\}<\/div>/g,
    `<div className="font-heading text-2xl sm:text-3xl font-bold text-red-bright transition-all group-hover:scale-105 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]">{right}</div>`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated numbers in ${file}`);
});
