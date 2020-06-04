import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ContentSection, Media } from '../models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data: ContentSection = new ContentSection();
  isLoadingResults = true;
  section: string;
  contentpath: string;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
    this.data.BackgroundImage = new Media();
    this.data.Banner = new Media();
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.section = data.section;
      this.contentpath = data.contentpath;
    });

    this.api.getContent(this.section, this.contentpath)
      .subscribe((res: any) => {
        this.data = res;
        this.isLoadingResults = false;
      }, err => {
        this.isLoadingResults = false;
      });
  }

}
