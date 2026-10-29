import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { injectLanguage } from './i18n/language';
import { Language, LANGUAGE_PATHS } from './i18n/languages';

@Component({
  selector: 'aa-root',
  imports: [RouterOutlet, RouterLink, TranslocoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *transloco="let t">
      <a class="skip-link" href="#content">{{ t('site.skipToContent') }}</a>
      <header class="site-header" id="top">
        <a class="brand" [routerLink]="homePath()">{{ t('site.name') }}</a>
        <a
          class="language-switch"
          [routerLink]="otherLanguagePath()"
          [attr.hreflang]="otherLanguage()"
          [attr.lang]="otherLanguage()"
          >{{ t('site.switchLanguage') }}</a
        >
      </header>
      <router-outlet />
      <footer class="site-footer">
        <p>{{ t('footer.sources') }}</p>
        <nav>
          <a href="#top">{{ t('footer.top') }}</a>
          <a
            [routerLink]="otherLanguagePath()"
            [attr.hreflang]="otherLanguage()"
            [attr.lang]="otherLanguage()"
            >{{ t('site.switchLanguage') }}</a
          >
        </nav>
      </footer>
    </ng-container>
  `,
  styleUrl: './app.scss',
})
export class App {
  protected readonly language = injectLanguage();
  protected readonly otherLanguage = computed<Language>(() =>
    this.language() === 'he' ? 'en' : 'he',
  );
  protected readonly homePath = computed(() => LANGUAGE_PATHS[this.language()]);
  protected readonly otherLanguagePath = computed(() => LANGUAGE_PATHS[this.otherLanguage()]);
}
