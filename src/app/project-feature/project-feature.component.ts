import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../models/project';
import { MediaProviderService } from '../media-provider.service';

@Component({
  selector: 'app-project-feature',
  templateUrl: './project-feature.component.html',
  styleUrls: ['./project-feature.component.scss']
})
export class ProjectFeatureComponent implements OnInit {

  @Input() data: Feature;

  constructor(public mediaProviderService: MediaProviderService) {

  }

  ngOnInit(): void {
  }

}
