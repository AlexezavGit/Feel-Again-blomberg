import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Printer, Copy, Check } from 'lucide-react';
import { Language } from '../types';
import { cn } from '../lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const OnePagerModal = ({ isOpen, onClose, lang }: ModalProps) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const text = document.getElementById('onepager-content')?.innerText || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#222] border border-[#333] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-[#8a8a80] hover:text-red-500 transition-colors">
              <X size={20} />
            </button>

            <div id="onepager-content" className="space-y-6">
              <div className="text-center border-b border-[#333] pb-6">
                <div className="text-orange-500 font-mono text-[11px] font-bold tracking-[0.2em] mb-2 uppercase">
                  FIRST-IN-CLASS HUMANITARIAN FINTECH IN MHPSS
                </div>
                <h2 className="text-white text-2xl font-bold tracking-tight">FEEL AGAIN</h2>
              </div>

              <div className="space-y-4">
                <section>
                  <h3 className="text-orange-500 font-mono text-[10px] font-bold uppercase mb-2 tracking-wider">
                    {lang === 'uk' ? 'ЩО РОБИТЬ FEEL AGAIN' : 'WHAT FEEL AGAIN DOES'}
                  </h3>
                  <p className="text-[#d4d4c8] text-sm leading-relaxed">
                    {lang === 'uk'
                      ? 'Цифрова координація гуманітарних акторів та бенефіціарів у наданні послуг MHPSS. Розрахунок за кожну трансакцію з моніторингом комплаєнсу протоколів, підтриманням стандартів та діагностикою на основі доказів.'
                      : 'Digital coordination of humanitarian actors and beneficiaries in MHPSS service delivery. Per-transaction settlement with protocol compliance monitoring, standards maintenance, and evidence-based diagnostics.'}
                  </p>
                </section>

                <div className="grid grid-cols-3 gap-3 py-4">
                  <div className="bg-[#1a1a1a] border border-[#333] rounded p-3 text-center">
                    <div className="text-orange-500 font-mono text-lg font-bold">5-7%</div>
                    <div className="text-[#8a8a80] text-[9px] uppercase">{lang === 'uk' ? 'комісія' : 'fee'}</div>
                  </div>
                  <div className="bg-[#1a1a1a] border border-[#333] rounded p-3 text-center">
                    <div className="text-green-500 font-mono text-lg font-bold">24h</div>
                    <div className="text-[#8a8a80] text-[9px] uppercase">{lang === 'uk' ? 'підключення' : 'onboarding'}</div>
                  </div>
                  <div className="bg-[#1a1a1a] border border-[#333] rounded p-3 text-center">
                    <div className="text-blue-500 font-mono text-lg font-bold">48h</div>
                    <div className="text-[#8a8a80] text-[9px] uppercase">{lang === 'uk' ? 'оплата' : 'payment'}</div>
                  </div>
                </div>

                <section>
                  <h3 className="text-orange-500 font-mono text-[10px] font-bold uppercase mb-2 tracking-wider">
                    {lang === 'uk' ? 'ОПЕРАЦІЙНА МОДЕЛЬ' : 'OPERATIONAL MODEL'}
                  </h3>
                  <p className="text-[#8a8a80] text-[11px] leading-relaxed italic">
                    {lang === 'uk'
                      ? 'Донор → Марковане фінансування → Розрахунки платформи → Верифікований фахівець → Клінічна сесія (контроль протоколу) → Результат пацієнта (клінічні шкали) → Верифіковані дані → Звіт донору.'
                      : 'Donor → Tagged funding → Platform settlement → Verified clinician → Clinical session (protocol-monitored) → Patient outcome (clinical scales) → Verified data → Report to donor.'}
                  </p>
                </section>

                <section className="pt-4 border-t border-[#333]">
                  <h3 className="text-[#5a5a54] font-mono text-[10px] font-bold uppercase mb-2 tracking-wider">
                    {lang === 'uk' ? 'ПАРТНЕРИ' : 'PARTNERS'}
                  </h3>
                  <p className="text-[#8a8a80] text-[11px]">
                    HighCastle/Quoroom (UK) · Enkidu Global/SAP (CH) · GEHA/Clalit (Israel) · USC ICT Bravemind · Open Society · KNU Psychology
                  </p>
                </section>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 justify-center no-print">
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-black rounded text-[11px] font-bold hover:bg-orange-400 transition-colors">
                  <Mail size={14} />
                  {lang === 'uk' ? 'НАДІСЛАТИ EMAIL' : 'SHARE VIA EMAIL'}
                </button>
                <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 border border-[#333] text-[#d4d4c8] rounded text-[11px] font-bold hover:border-orange-500 hover:text-orange-500 transition-colors">
                  <Printer size={14} />
                  {lang === 'uk' ? 'ДРУК / PDF' : 'PRINT / PDF'}
                </button>
                <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 border border-[#333] text-[#d4d4c8] rounded text-[11px] font-bold hover:border-orange-500 hover:text-orange-500 transition-colors">
                  {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                  {lang === 'uk' ? (copied ? 'СКОПІЙОВАНО' : 'КОПІЮВАТИ') : (copied ? 'COPIED' : 'COPY TEXT')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
