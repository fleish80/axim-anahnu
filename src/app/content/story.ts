/** Order and shape of the story. The texts themselves live in src/i18n/{he,en}.json. */
export interface ChapterRef {
  /** Key under `chapters.` in the translation files. */
  readonly id: string;
  readonly hasQuote: boolean;
  /** Has a "moment of light" aside. */
  readonly hasLight?: boolean;
}

export const DIVIDED_CHAPTERS: readonly ChapterRef[] = [
  { id: 'joseph', hasQuote: true },
  { id: 'ahaz', hasQuote: true, hasLight: true },
  { id: 'hasmoneans', hasQuote: true },
  { id: 'temple', hasQuote: true },
  { id: 'altalena', hasQuote: false },
  { id: 'rabin', hasQuote: true },
  { id: 'year2023', hasQuote: false },
];

export const TOGETHER_CHAPTERS: readonly ChapterRef[] = [
  { id: 'purim', hasQuote: true },
  { id: 'independence', hasQuote: true },
  { id: 'solomon', hasQuote: true },
  { id: 'morningAfter', hasQuote: true },
];

/** The cycle every divided chapter goes through. */
export const PATTERN_STEPS = ['dispute', 'hatred', 'ruin', 'forgetting'] as const;

export const BRIDGE_EVENTS = ['crusade', 'kishinev', 'holocaust', 'october'] as const;

export interface LessonRef {
  /** Key under `lessons.` in the translation files. */
  readonly id: string;
  /** A quote from a text, or a fact from a speech or a study. */
  readonly kind: 'quote' | 'fact';
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
      { id: 'argue', kind: 'quote' },
      { id: 'responsible', kind: 'quote' },
      { id: 'love', kind: 'quote' },
    ],
  },
  {
    id: 'modern',
    lessons: [
      { id: 'rally', kind: 'quote' },
      { id: 'tribes', kind: 'fact' },
      { id: 'contact', kind: 'fact' },
    ],
  },
];

export const ACTIONS = ['conversation', 'contempt', 'table', 'share'] as const;

/** "A tribe of brothers and sisters" (Galgalatz), shown at the end of "When we stood together". */
export const FEATURED_VIDEO_ID = 'xWx3R7WaAQY';
