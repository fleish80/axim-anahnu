import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { YoutubeSourceService } from '../../service/youtube-source/youtube-source.service';

let apiLoaded = false;

@Component({
  selector: 'aa-source',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  template: `
  <youtube-player videoId="PRQCAL_RMVo"/>
  
  <youtube-player videoId="xWx3R7WaAQY"/>


{{item$ | async | json}}

  `,
  styles: [],
})
export class SourceComponent implements OnInit {

  #youtubeSourceService = inject(YoutubeSourceService);
  item$ = this.#youtubeSourceService.getYoutubeSources();

  ngOnInit() {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}
