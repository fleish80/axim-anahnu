// Renders docs/design/og-image.html to public/og/{he,en}.jpg (1200x630) with headless Chrome.
// JPEG keeps each image near 100 kB; WhatsApp drops link previews whose image is too large.
import { execFileSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const chrome =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!existsSync(chrome)) {
  throw new Error(`Chrome not found at ${chrome}; set CHROME_PATH.`);
}

const template = pathToFileURL(resolve('docs/design/og-image.html')).href;
for (const lang of ['he', 'en']) {
  const png = resolve(`public/og/${lang}.png`);
  const jpg = resolve(`public/og/${lang}.jpg`);
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=8000',
    `--screenshot=${png}`,
    `${template}?lang=${lang}`,
  ]);
  // sips ships with macOS; elsewhere, convert the PNG with any image tool.
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '85', png, '--out', jpg]);
  rmSync(png);
  console.log(`wrote ${jpg}`);
}
