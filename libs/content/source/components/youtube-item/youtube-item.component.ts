import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeSourceModel } from '../../models/youtube-source.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'aa-youtube-item',
  standalone: true,
  imports: [YouTubePlayerModule, JsonPipe],
  template: `
  <youtube-player [videoId]="youtubeSource.youtubeId" (stateChange)="stateChange($event)"/>
  <span class="title mat-subtitle-2">{{youtubeSource.title}}</span>
  `,
  styleUrls: ['./youtube-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeItemComponent {

  @Input() youtubeSource: YoutubeSourceModel;

  stateChange(event: YT.OnStateChangeEvent) {
    console.log('event', event);
  }
}
