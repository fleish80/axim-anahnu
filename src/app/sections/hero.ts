import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { BrothersIllustration } from '../components/brothers-illustration';
import { SourceLink } from '../components/source-link';
import { SOURCES } from '../content/sources';

@Component({
  selector: 'aa-hero',
  standalone: true,
  imports: [TranslocoDirective, BrothersIllustration, SourceLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" *transloco="let t; prefix: 'hero'" aria-labelledby="hero-verse">
      <div class="band" aria-hidden="true"></div>
      <div class="hero-content">
        <h1 id="hero-verse" class="verse">{{ t('verse') }}</h1>
        <p class="source"><aa-source-link [label]="t('source')" [link]="sources.genesis" /></p>
        <aa-brothers-illustration class="illustration" [label]="t('illustration')" />
        <p class="tagline">
          {{ t('tagline') }}
          <strong>{{ t('taglineStrong') }}</strong>
        </p>
        <a class="scroll-cue" href="#opening">{{ t('scroll') }}</a>
      </div>
      <div class="band" aria-hidden="true"></div>
    </section>
  `,
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly sources = SOURCES;
}
