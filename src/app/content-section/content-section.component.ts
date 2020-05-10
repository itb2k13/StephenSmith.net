import { Component, Input, OnInit } from '@angular/core';
import { ContentSection } from '../models/project';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.less']
})
export class ContentSectionComponent implements OnInit {

  @Input() data: ContentSection;
  section: string;
  contentpath: string;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.section = data.section;
      this.contentpath = data.contentpath;
    });
  }

  saveContent() {
    this.api.getContent(this.section, this.contentpath)
      .subscribe((res: ContentSection) => {
        this.data = res;
      }, err => { });
  }

}
