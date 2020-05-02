import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Project } from '../models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description'];
  data: Project[] = [];
  isLoadingResults = true;
  projectType: string;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.projectType = data.projectType;
    });

    this.api.getProjects(this.projectType)
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
