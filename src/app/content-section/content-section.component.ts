import { Component, Input, OnInit } from '@angular/core';
import { ContentSection } from '../models/project';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { BaseComponent } from '../base/base.component';
import { AuthService } from '../auth.service';
import { Reference } from '../models/project';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.less']
})
export class ContentSectionComponent extends BaseComponent implements OnInit {

  @Input() data: ContentSection;
  section: string;
  contentpath: string;

  constructor(private api: ApiService, authService: AuthService, private activatedRoute: ActivatedRoute) {
    super(authService);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  addToEnd(index: number, arr: Reference[]) {
    if (index == arr.length - 1) {
      arr.push(new Reference());
    }
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.section = data.section;
      this.contentpath = data.contentpath;
    });
  }

  saveContent() {
    this.api.setContent(this.section, this.contentpath, this.data)
      .subscribe((res: ContentSection) => {
        this.data = res;
      }, err => { });
  }

}
