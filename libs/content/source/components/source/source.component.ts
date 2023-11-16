import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeSourceStoreService } from '../../service/youtube-source-store/youtube-source-store.service';

let apiLoaded = false;

@Component({
  selector: 'aa-source',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  template: `
  <!-- <youtube-player videoId="PRQCAL_RMVo"/>
  
  <youtube-player videoId="xWx3R7WaAQY"/> -->


{{youtubeSorces() | json}}
loading => {{loading()}}
loaded => {{loaded()}}

  `,
  styles: [],
})
export class SourceComponent implements OnInit {

  #youtubeSourceStoreService = inject(YoutubeSourceStoreService);
  youtubeSorces = this.#youtubeSourceStoreService.youtubeSorces;
  loading = this.#youtubeSourceStoreService.loading;
  loaded = this.#youtubeSourceStoreService.loaded;

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
