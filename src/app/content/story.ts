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

export const BRIDGE_EVENTS = ['crusade', 'kishinev', 'holocaust', 'october'] as const;

export const LESSONS = ['argue', 'responsible', 'love'] as const;

export const ACTIONS = ['conversation', 'contempt', 'table', 'share'] as const;
