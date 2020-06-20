import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta) {
    this.data.BackgroundImage = new Media();
    this.data.Banner = new Media();
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.section = data.section;
      this.contentpath = data.contentpath;
    });

    this.api.getContent(this.section, this.contentpath)
      .subscribe((res: ContentSection) => {
        this.data = res;
        this.data.Banner = this.data.Banner || new Media();
        this.title.setTitle(`${this.data.Title} - ${this.data.SubTitle}`);
        this.meta.updateTag({ name: 'description', content: this.data.Heading });
        this.isLoadingResults = false;
      }, err => {
        this.isLoadingResults = false;
      });
  }

}
