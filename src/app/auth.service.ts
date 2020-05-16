import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _isAuthenticated: boolean;
  private _accessToken: string;

  constructor(public oktaAuth: OktaAuthService) {

    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => {
        this._isAuthenticated = isAuthenticated;
        this._accessToken = !isAuthenticated ? null : this._accessToken;
      }
    );

    this.oktaAuth
      .isAuthenticated()
      .then(res => this._isAuthenticated = res);

    this.oktaAuth
      .getAccessToken()
      .then(res => { this._accessToken = res; });
  }

  isAuthenticated() {
    return this._isAuthenticated && this._accessToken;
  }

  accessToken() {
    return this._accessToken;
  }

  async logout() {
    await this.oktaAuth.logout();
  }

}
