import { Component, Input, OnInit } from '@angular/core';
import { ContentSection } from '../models/project';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.less']
})
export class ContentSectionComponent implements OnInit {

  @Input() data: ContentSection;

  constructor() { }

  ngOnInit(): void {
  }

}
