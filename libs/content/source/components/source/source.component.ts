import { Component, inject } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeSourceStoreService } from '../../service/youtube-source-store/youtube-source-store.service';
import { YoutubeItemComponent } from '../youtube-item/youtube-item.component';

@Component({
  selector: 'aa-source',
  standalone: true,
  imports: [YouTubePlayerModule, YoutubeItemComponent],
  template: `
  @for (source of youtubeSorces(); track source.youtubeId) {
    <aa-youtube-item [youtubeSource]="source"/>
  }
  `,
  styles: [],
  providers: [YoutubeSourceStoreService]
})
export class SourceComponent {

  #youtubeSourceStoreService = inject(YoutubeSourceStoreService);
  youtubeSorces = this.#youtubeSourceStoreService.youtubeSorces;
  loading = this.#youtubeSourceStoreService.loading;
  loaded = this.#youtubeSourceStoreService.loaded;
}
