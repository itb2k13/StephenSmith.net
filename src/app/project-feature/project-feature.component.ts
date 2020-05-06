import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../models/project';

@Component({
  selector: 'app-project-feature',
  templateUrl: './project-feature.component.html',
  styleUrls: ['./project-feature.component.scss']
})
export class ProjectFeatureComponent implements OnInit {

  @Input() data: Feature;

  constructor() {

  }

  ngOnInit(): void {
  }

}
