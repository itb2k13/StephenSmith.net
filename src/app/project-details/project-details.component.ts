import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Project, Feature, Media } from '../models/project';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { MediaProviderService } from '../media-provider.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  data: Project;
  isLoadingResults = true;
  section: string;
  contentpath: string;
  projectTitle: string;

  constructor(private api: ApiService,
    private activatedRoute: ActivatedRoute,
    public mediaProviderService: MediaProviderService,
    private title: Title,
    private meta: Meta) {
    this.data = new Project();
  }

  getImages(): string[] {
    var featureImages = this.data.Features?.map(x => this.mediaProviderService.getUrl(x.Image.Url)) || [];
    var mediaImages = this.data.Media?.map(x => this.mediaProviderService.getUrl(x.Url)) || [];
    return featureImages.concat(mediaImages);
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.section = data.section;
      this.contentpath = data.contentpath;
    });

    this.activatedRoute.params.subscribe(data => {
      this.projectTitle = data.id;
    });

    this.api.getProjectDetail(this.section, this.contentpath, this.projectTitle)
      .subscribe((res: Project) => {
        this.data = res;
        this.title.setTitle(`${this.data.Title} - ${this.data.SubTitle}`);
        this.meta.updateTag({ name: 'description', content: this.data.Description });
        this.isLoadingResults = false;
      }, err => {
        this.isLoadingResults = false;
      });

  }

}
