import { Component, OnInit } from '@angular/core';
import { Project, Feature, Media } from '../models/project';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

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

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
    this.data = new Project();
  }

  getImages(): string[] {
    var featureImages = this.data.Features?.map(x => x.Image.Url) || [];
    var mediaImages = this.data.Media?.map(x => x.Url) || [];
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
        this.isLoadingResults = false;
      }, err => {
        this.isLoadingResults = false;
      });

  }

}
