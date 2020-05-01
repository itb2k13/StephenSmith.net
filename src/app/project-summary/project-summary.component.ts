import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.less']
})
export class ProjectSummaryComponent implements OnInit {

  @Input() data: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
