import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Two brothers seen from behind, one with a kippah, holding each other under one flag. */
@Component({
  selector: 'aa-brothers-illustration',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'img', '[attr.aria-label]': 'label()' },
  template: `
    <svg viewBox="0 0 600 540" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="brothers-cape">
          <path
            d="M112 300 C 112 252 140 224 192 216 C 236 210 268 220 300 228 C 334 216 366 202 414 206 C 462 212 488 246 490 300 L 496 440 C 452 456 420 430 380 446 C 340 462 304 436 262 452 C 220 466 180 440 140 454 C 126 458 114 456 106 450 Z"
          />
        </clipPath>
      </defs>
      <path
        class="person"
        d="M118 540 L 122 300 C 124 250 150 222 196 214 L 258 210 C 296 214 314 240 318 290 L 322 540 Z"
      />
      <path
        class="person other"
        d="M284 540 L 288 290 C 292 238 316 208 362 204 L 410 206 C 456 212 480 244 482 300 L 486 540 Z"
      />
      <rect class="person" x="208" y="150" width="36" height="70" rx="14" />
      <rect class="person other" x="364" y="140" width="38" height="72" rx="14" />
      <circle class="person" cx="226" cy="128" r="44" />
      <circle class="person other" cx="383" cy="118" r="46" />
      <path class="flag-blue" d="M357 88 C 360 70 406 70 409 88 C 392 82 374 82 357 88 Z" />
      <g clip-path="url(#brothers-cape)">
        <rect class="flag-white" x="90" y="190" width="420" height="290" />
        <path
          class="flag-blue"
          d="M90 252 C 180 238 230 262 300 256 C 370 250 430 236 510 248 L 510 274 C 430 262 370 276 300 282 C 230 288 180 266 90 278 Z"
        />
        <path
          class="flag-blue"
          d="M90 398 C 180 386 230 408 300 402 C 370 396 430 384 510 396 L 510 422 C 430 410 370 422 300 428 C 230 434 180 412 90 424 Z"
        />
        <g class="star" transform="translate(300 336)">
          <path d="M0 -44 L 38 22 L -38 22 Z" />
          <path d="M0 44 L 38 -22 L -38 -22 Z" />
        </g>
        <path class="fold" d="M300 228 C 296 300 306 380 298 460" stroke-width="12" />
        <path class="fold light" d="M200 216 C 186 300 190 380 176 460" stroke-width="9" />
        <path class="fold light" d="M408 206 C 426 300 420 380 432 460" stroke-width="9" />
      </g>
      <path
        class="person"
        d="M128 252 C 124 236 136 224 152 226 L 180 230 C 190 232 190 244 180 246 L 154 252 C 144 256 132 260 128 252 Z"
      />
      <path
        class="person other"
        d="M472 244 C 476 228 464 216 448 218 L 420 222 C 410 224 410 236 420 238 L 446 244 C 456 248 468 252 472 244 Z"
      />
    </svg>
  `,
  styles: `
    :host {
      display: block;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
      filter: drop-shadow(0 24px 30px rgb(20 33 61 / 0.18));
    }
    .person {
      fill: var(--ink);
    }
    .other {
      fill: #26355a;
    }
    .flag-white {
      fill: var(--white);
    }
    .flag-blue {
      fill: var(--blue);
    }
    .star path {
      fill: none;
      stroke: var(--blue);
      stroke-width: 7.5;
      stroke-linejoin: round;
    }
    .fold {
      fill: none;
      stroke: rgb(0 0 0 / 0.09);
    }
    .fold.light {
      stroke: rgb(0 0 0 / 0.06);
    }
  `,
})
export class BrothersIllustration {
  readonly label = input.required<string>();
}
