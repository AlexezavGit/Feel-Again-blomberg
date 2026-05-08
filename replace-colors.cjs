const fs = require('fs');
const path = require('path');

const files = ['src/components/Slides.tsx', 'src/components/Charts.tsx'];

const replacements = [
  { from: /text-\[\#F59E0B\]/g, to: 'text-gold' },
  { from: /bg-\[\#F59E0B\]/g, to: 'bg-gold' },
  { from: /border-\[\#F59E0B\]/g, to: 'border-gold' },
  { from: /text-\[\#00F5FF\]/g, to: 'text-teal-bright' },
  { from: /bg-\[\#00F5FF\]/g, to: 'bg-teal-bright' },
  { from: /border-\[\#00F5FF\]/g, to: 'border-teal-bright' },
  { from: /text-\[\#00FF66\]/g, to: 'text-teal' },
  { from: /bg-\[\#00FF66\]/g, to: 'bg-teal' },
  { from: /border-\[\#00FF66\]/g, to: 'border-teal' },
  { from: /text-\[\#EF4444\]/g, to: 'text-red-bright' },
  { from: /bg-\[\#EF4444\]/g, to: 'bg-red-bright' },
  { from: /border-\[\#EF4444\]/g, to: 'border-red-bright' },
  { from: /text-\[\#E2E8F0\]/g, to: 'text-text-prim' },
  { from: /text-\[\#94A3B8\]/g, to: 'text-text-sec' },
  { from: /bg-\[\#1E293B\]/g, to: 'bg-border-theme' },
  { from: /border-\[\#1E293B\]/g, to: 'border-border-theme' },
  { from: /font-mono/g, to: 'font-sans' }
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
