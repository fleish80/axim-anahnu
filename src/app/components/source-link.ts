import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { SourceLink as Link, sourceUrl } from '../content/sources';
import { injectLanguage } from '../i18n/language';

/** A source name that opens the original text, in the reader's language where possible. */
@Component({
  selector: 'aa-source-link',
  standalone: true,
  imports: [TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (href(); as url) {
      <a [href]="url" target="_blank" rel="noopener"
        >{{ label() }}<span class="visually-hidden"> ({{ 'site.opensInNewTab' | transloco }})</span
        ><span class="arrow" aria-hidden="true">↗</span></a
      >
    } @else {
      {{ label() }}
    }
  `,
  styles: `
    a {
      color: inherit;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.2em;
      text-decoration-color: color-mix(in srgb, currentColor 45%, transparent);
    }
    a:hover {
      text-decoration-color: currentColor;
    }
    .arrow {
      display: inline-block;
      margin-inline-start: 0.25em;
      font-size: 0.85em;
    }
  `,
})
export class SourceLink {
  readonly label = input.required<string>();
  readonly link = input<Link>();

  readonly #language = injectLanguage();

  protected readonly href = computed(() => {
    const link = this.link();
    return link ? sourceUrl(link, this.#language()) : null;
  });
}
