import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  constructor(private authService: AuthService) { }

  public isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  public async logout() {
    await this.authService.logout();
  }

}
