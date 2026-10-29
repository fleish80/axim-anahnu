import { SourceLink } from './sources';

/** Order and shape of the story. The texts themselves live in src/i18n/{he,en}.json. */
export interface ChapterRef {
  /** Key under `chapters.` in the translation files. */
  readonly id: string;
  readonly hasQuote: boolean;
  /** Has a "moment of light" aside. */
  readonly hasLight?: boolean;
  /** Where the quote can be read in full. */
  readonly sourceLink?: SourceLink;
}

export const DIVIDED_CHAPTERS: readonly ChapterRef[] = [
  { id: 'joseph', hasQuote: true, sourceLink: { sefaria: 'Shabbat.10b' } },
  { id: 'ahaz', hasQuote: true, hasLight: true, sourceLink: { sefaria: 'II_Kings.16.7' } },
  {
    id: 'hasmoneans',
    hasQuote: true,
    sourceLink: { url: 'https://ccel.org/j/josephus/works/ant-14.htm' },
  },
  { id: 'temple', hasQuote: true, sourceLink: { sefaria: 'Yoma.9b' } },
  { id: 'altalena', hasQuote: false },
  { id: 'rabin', hasQuote: true, sourceLink: { sefaria: 'Proverbs.18.21' } },
  { id: 'year2023', hasQuote: false },
];

export const TOGETHER_CHAPTERS: readonly ChapterRef[] = [
  { id: 'purim', hasQuote: true, sourceLink: { sefaria: 'Esther.3.8' } },
  { id: 'independence', hasQuote: true, sourceLink: { sefaria: 'Ezekiel.36.24' } },
  { id: 'solomon', hasQuote: true, sourceLink: { sefaria: 'Shevuot.39a' } },
  { id: 'morningAfter', hasQuote: true, sourceLink: { sefaria: 'Psalms.133.1' } },
];

/** The cycle every divided chapter goes through. */
export const PATTERN_STEPS = ['dispute', 'hatred', 'ruin', 'forgetting'] as const;

export const BRIDGE_EVENTS = ['crusade', 'kishinev', 'holocaust', 'october'] as const;

export interface LessonRef {
  /** Key under `lessons.` in the translation files. */
  readonly id: string;
  /** A quote from a text, or a fact from a speech or a study. */
  readonly kind: 'quote' | 'fact';
  readonly sourceLink: SourceLink;
}

export interface LessonGroup {
  readonly id: 'tradition' | 'modern';
  readonly lessons: readonly LessonRef[];
}

/** The lesson told twice: from the tradition, and from the state and science, for religious and secular readers alike. */
export const LESSON_GROUPS: readonly LessonGroup[] = [
  {
    id: 'tradition',
    lessons: [
      { id: 'argue', kind: 'quote', sourceLink: { sefaria: 'Eruvin.13b' } },
      { id: 'responsible', kind: 'quote', sourceLink: { sefaria: 'Shevuot.39a' } },
      { id: 'love', kind: 'quote', sourceLink: { sefaria: 'Orot_HaKodesh.3.2.4.10' } },
    ],
  },
  {
    id: 'modern',
    lessons: [
      {
        id: 'rally',
        kind: 'quote',
        sourceLink: {
          url: {
            he: 'https://he.wikisource.org/wiki/%D7%9E%D7%92%D7%99%D7%9C%D7%AA_%D7%94%D7%A2%D7%A6%D7%9E%D7%90%D7%95%D7%AA',
            en: 'https://en.wikisource.org/wiki/Israeli_Declaration_of_Independence',
          },
        },
      },
      {
        id: 'tribes',
        kind: 'fact',
        sourceLink: {
          url: 'https://www.timesofisrael.com/israel-divided-along-tribal-lines-rivlin-warns/',
        },
      },
      {
        id: 'contact',
        kind: 'fact',
        sourceLink: { url: 'https://pubmed.ncbi.nlm.nih.gov/16737372/' },
      },
    ],
  },
];

export const ACTIONS = ['conversation', 'contempt', 'table', 'share'] as const;

/** "A tribe of brothers and sisters" (Galgalatz), shown at the end of "When we stood together". */
export const FEATURED_VIDEO_ID = 'xWx3R7WaAQY';
