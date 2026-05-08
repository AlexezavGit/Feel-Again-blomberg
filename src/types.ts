export type Language = 'en' | 'uk';

export interface Translation {
  en: string;
  uk: string;
}

export interface SlideData {
  id: string;
  label: Translation;
}

export const SLIDES: SlideData[] = [
  { id: 'hero', label: { en: 'Hero', uk: 'Герой' } },
  { id: 'hope', label: { en: 'Hope', uk: 'Надія' } },
  { id: 'honesty', label: { en: 'Honesty', uk: 'Чесність' } },
  { id: 'middle-tier', label: { en: 'Middle Tier', uk: 'Середня ланка' } },
  { id: 'solution', label: { en: 'Solution', uk: 'Рішення' } },
  { id: 'de-risked-finance', label: { en: 'De-risked Finance', uk: 'Деризиковане фінансування' } },
  { id: 'vision-2027', label: { en: 'Vision 2027', uk: 'Візія 2027' } },
  { id: 'models', label: { en: 'Three Models', uk: 'Три моделі' } },
  { id: 'bridge', label: { en: 'Bridge', uk: 'Міст' } },
  { id: 'partners', label: { en: 'Partners', uk: 'Партнери' } },
  { id: 'roadmap', label: { en: 'Roadmap', uk: 'Дорожня карта' } },
  { id: 'alignment', label: { en: 'Alignment', uk: 'Узгодження' } },
  { id: 'evidence', label: { en: 'Evidence', uk: 'Докази' } },
  { id: 'dashboard', label: { en: 'Dashboard', uk: 'Дашборд' } },
];
