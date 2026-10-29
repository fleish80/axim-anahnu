import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslocoService } from '@jsverse/transloco';
import { DIRECTIONS, Language, LANGUAGE_PATHS, LANGUAGES, LOCALES, SITE_URL } from './languages';

/** Keeps <html lang/dir>, the title and the SEO / social tags in sync with the active language. */
@Injectable({ providedIn: 'root' })
export class DocumentHead {
  readonly #document = inject(DOCUMENT);
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);
  readonly #transloco = inject(TranslocoService);

  update(lang: Language): void {
    const html = this.#document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', DIRECTIONS[lang]);

    const title = this.#translate('meta.title', lang);
    const description = this.#translate('meta.description', lang);
    const url = this.#absoluteUrl(lang);

    this.#title.setTitle(title);
    this.#meta.updateTag({ name: 'description', content: description });
    this.#meta.updateTag({ property: 'og:type', content: 'website' });
    this.#meta.updateTag({ property: 'og:site_name', content: this.#translate('site.name', lang) });
    this.#meta.updateTag({ property: 'og:title', content: title });
    this.#meta.updateTag({ property: 'og:description', content: description });
    this.#meta.updateTag({ property: 'og:url', content: url });
    this.#meta.updateTag({ property: 'og:locale', content: LOCALES[lang] });
    this.#meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    this.#setLink('canonical', url);
    for (const language of LANGUAGES) {
      this.#setLink('alternate', this.#absoluteUrl(language), language);
    }
    this.#setLink('alternate', this.#absoluteUrl('he'), 'x-default');
  }

  #translate(key: string, lang: Language): string {
    return this.#transloco.translate<string>(key, {}, lang);
  }

  #absoluteUrl(lang: Language): string {
    return SITE_URL + LANGUAGE_PATHS[lang];
  }

  #setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
    let link = this.#document.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.#document.createElement('link');
      link.setAttribute('rel', rel);
      if (hreflang) {
        link.setAttribute('hreflang', hreflang);
      }
      this.#document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
