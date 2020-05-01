import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Project } from '../models/project';
import { ProjectSummaryComponent } from '../project-summary/project-summary.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description'];
  data: Project[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProjects()
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
