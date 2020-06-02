import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { AuthService } from '../auth.service';
import { MediaProviderService } from '../media-provider.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent extends BaseComponent implements OnInit {

  constructor(authService: AuthService, mediaProviderService: MediaProviderService) {
    super(authService, mediaProviderService);
  }

  async ngOnInit() {

  }


}
