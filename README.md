# אחים אנחנו · We Are Brothers

A bilingual (Hebrew default, English) site about unity among the people of Israel and the lesson Jewish history keeps repeating. Live at https://axim-anahnu.web.app.

Built with Angular 22 (zoneless, signals), prerendered to static HTML and hosted on Firebase Hosting. Translations use Transloco; tests run on Vitest.

## Requirements

Node 24.15 or newer (see `.nvmrc`):

```bash
nvm use
npm ci
```

## Scripts

| Command                  | What it does                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `npm start`              | Dev server at http://localhost:4200                                                   |
| `npm test`               | Unit tests once (Vitest); `npm run test:watch` to keep watching                       |
| `npm run lint`           | ESLint (angular-eslint)                                                               |
| `npm run format`         | Prettier; `npm run format:check` in CI                                                |
| `npm run build`          | Production build, prerendering `/` (Hebrew) and `/en` into `dist/axim-anahnu/browser` |
| `npm run deploy:hosting` | Build and deploy the site to Firebase Hosting                                         |
| `npm run deploy:rules`   | Deploy the Firestore security rules                                                   |

## Content

- Texts live in `src/i18n/he.json` and `src/i18n/en.json`. Both must have the same keys; a test checks it.
- The content plan and editorial notes are in `docs/content/outline.md`.

## Languages and URLs

Hebrew is served at `/` (right to left) and English at `/en` (left to right). Each page sets `lang`, `dir`, its title, description, Open Graph tags, a canonical link and hreflang alternates.

## CI and deploys

`.github/workflows/ci.yml` lints, tests and builds every pull request and every push to `master`.

- Pull requests get a Firebase preview channel link (expires after 7 days).
- Pushes to `master` deploy the live site.

Both deploy jobs need the `FIREBASE_SERVICE_ACCOUNT_AXIM_ANAHNU` repository secret. Create it once with:

```bash
npx -y firebase-tools@latest init hosting:github
```
