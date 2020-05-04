import { Component, Input, OnInit } from '@angular/core';
import { ContentSection } from '../models/project';


@Component({
  selector: 'app-content-tiles',
  templateUrl: './content-tiles.component.html',
  styleUrls: ['./content-tiles.component.less']
})
export class ContentTilesComponent implements OnInit {

  @Input() data: ContentSection;

  constructor() { }

  ngOnInit(): void {
  }

}
