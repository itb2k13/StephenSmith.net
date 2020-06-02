import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MediaProviderService } from '../media-provider.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  constructor(private authService: AuthService, public mediaProvider: MediaProviderService) { }

  public isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  public async logout() {
    await this.authService.logout();
  }

}
