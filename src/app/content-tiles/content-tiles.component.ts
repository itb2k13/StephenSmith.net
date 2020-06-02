import { Component, Input, OnInit } from '@angular/core';
import { ContentSection } from '../models/project';
import { MediaProviderService } from '../media-provider.service';

@Component({
  selector: 'app-content-tiles',
  templateUrl: './content-tiles.component.html',
  styleUrls: ['./content-tiles.component.less']
})
export class ContentTilesComponent implements OnInit {

  public mediaProvider: MediaProviderService;

  @Input() data: ContentSection;

  constructor(mediaProvider: MediaProviderService) {
    this.mediaProvider = mediaProvider;
  }

  ngOnInit(): void {
  }


}
