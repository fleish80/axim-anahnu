import en from '../../i18n/en.json';
import he from '../../i18n/he.json';
import { DIVIDED_CHAPTERS, TOGETHER_CHAPTERS } from './story';

type Chapters = Record<string, Record<string, string>>;

const languages = { he: he.chapters as Chapters, en: en.chapters as Chapters };
const story = [...DIVIDED_CHAPTERS, ...TOGETHER_CHAPTERS];

describe('story', () => {
  for (const [lang, chapters] of Object.entries(languages)) {
    describe(lang, () => {
      it.each(story)('should have every text that chapter "$id" shows', (chapter) => {
        const expected = ['title', 'date', 'hook', 'story', 'lesson'];
        if (chapter.hasQuote) {
          expected.push('quote', 'source');
        }
        if (chapter.hasLight) {
          expected.push('light');
        }
        expect(Object.keys(chapters[chapter.id] ?? {}).sort()).toEqual(expected.sort());
      });

      it('should not have texts for chapters the story does not show', () => {
        expect(Object.keys(chapters).sort()).toEqual(story.map((chapter) => chapter.id).sort());
      });
    });
  }
});
