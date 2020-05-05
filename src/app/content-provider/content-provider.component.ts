import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ContentSection, Media } from '../models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-provider',
  templateUrl: './content-provider.component.html',
  styleUrls: ['./content-provider.component.scss']
})
export class ContentProviderComponent implements OnInit {

  data: ContentSection = new ContentSection();
  isLoadingResults = true;
  section: string;
  contentpath: string;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
    this.data.backgroundImage = new Media();
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
