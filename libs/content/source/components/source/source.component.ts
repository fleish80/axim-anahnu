import { Component, inject } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {
  YoutubeSourceStore,
} from '../../service/youtube-source-store/youtube-source-store.service';
import { YoutubeItemComponent } from '../youtube-item/youtube-item.component';

@Component({
  selector: 'aa-source',
  standalone: true,
  imports: [YouTubePlayerModule, YoutubeItemComponent],
  template: `
  @for (source of youtubeSources(); track source.youtubeId) {
    <aa-youtube-item [youtubeSource]="source"/>
  }
  `,
  styles: [`
    :host {
      margin: 20px;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-auto-rows: 1fr;
    }

  `],
  providers: [YoutubeSourceStore]
})
export class SourceComponent {

  #youtubeSourceStore = inject(YoutubeSourceStore);
  youtubeSources = this.#youtubeSourceStore.youtubeSources;
  loading = this.#youtubeSourceStore.loading;
  loaded = this.#youtubeSourceStore.loaded;
}
