import { DOCUMENT } from '@angular/common';
import { Injectable, Injector, RendererFactory2, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@ngneat/transloco';
import { DIRECTION_MAP } from '../../injection-tokens/direction-map.token';

@Injectable({
  providedIn: 'root'
})
export class TranslocoAttributesService {

  #directionMap = inject(DIRECTION_MAP);
  #translocoService = inject(TranslocoService);
  #renderer = inject(RendererFactory2).createRenderer(null, null);
  #document = inject(DOCUMENT);
  #langChanges = toSignal(this.#translocoService.langChanges$, {requireSync: true});
  #injector = inject(Injector);

  init() {
    effect(() => {
      this.#renderer.setAttribute(this.#document.querySelector('html'), 'lang', this.#langChanges());
      this.#renderer.setAttribute(this.#document.querySelector('html'), 'dir', this.#directionMap[this.#langChanges()]);
    }, {injector: this.#injector});
  }

}
