import { Component, OnInit } from '@angular/core';
import { ContentSection, Media } from '../models/project';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: ContentSection = new ContentSection();

  constructor(private api: ApiService) {
    this.data.backgroundImage = new Media();
  }

  ngOnInit(): void {

    this.api.getContent('base', 'home')
      .subscribe((res: ContentSection) => {
        this.data = res;
      }, err => { });
  }

}
