import en from '../../i18n/en.json';
import he from '../../i18n/he.json';

interface Tree {
  [key: string]: string | Tree;
}

function flatten(tree: Tree, prefix = ''): Map<string, string> {
  const entries = new Map<string, string>();
  for (const [key, value] of Object.entries(tree)) {
    const path = prefix + key;
    if (typeof value === 'string') {
      entries.set(path, value);
    } else {
      flatten(value, `${path}.`).forEach((text, nested) => entries.set(nested, text));
    }
  }
  return entries;
}

describe('translations', () => {
  const hebrew = flatten(he);
  const english = flatten(en);

  it('should have the same keys in Hebrew and English', () => {
    expect([...english.keys()].sort()).toEqual([...hebrew.keys()].sort());
  });

  it('should have no empty texts', () => {
    const empty = [...hebrew, ...english].filter(([, text]) => !text.trim()).map(([key]) => key);
    expect(empty).toEqual([]);
  });
});
