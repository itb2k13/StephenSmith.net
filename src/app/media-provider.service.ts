import { Injectable } from '@angular/core';
import Config from './app.config';

@Injectable({
  providedIn: 'root'
})
export class MediaProviderService {

  constructor() { }

  public getUrl(url: string) {
    if (url?.startsWith('/'))
      return Config.mediaBase + url;
    else
      return url;
  }

}
