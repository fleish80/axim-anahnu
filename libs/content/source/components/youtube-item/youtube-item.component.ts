import { ChangeDetectionStrategy, Component, effect, inject, input, Signal, viewChild } from '@angular/core';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeSourceModel } from '../../models/youtube-source.model';
import { JsonPipe } from '@angular/common';
import { YoutubeSourceStore } from '../../service/youtube-source-store/youtube-source-store.service';

@Component({
  selector: 'aa-youtube-item',
  standalone: true,
  imports: [YouTubePlayerModule, JsonPipe],
  template: `
    <youtube-player [videoId]="youtubeSource().youtubeId" (stateChange)="stateChange($event)" #player />
    <span class="title mat-subtitle-2">{{ youtubeSource().title }}</span>
  `,
  styleUrls: ['./youtube-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeItemComponent {

  #youtubeSourceStore = inject(YoutubeSourceStore);
  #currentPlayerId = this.#youtubeSourceStore.currentPlayerId;

  youtubeSource = input.required<YoutubeSourceModel>();

  player: Signal<YouTubePlayer> = viewChild.required('player');

  constructor() {
    effect(() => {
      if (this.#currentPlayerId() !== this.youtubeSource().youtubeId) {
        this.player().stopVideo();
      }
    });
  }

  stateChange(event: YT.OnStateChangeEvent) {
    if (event.data === YT.PlayerState.PLAYING) {
      this.#youtubeSourceStore.setPlayer(this.youtubeSource().youtubeId);
    }
  }
}
