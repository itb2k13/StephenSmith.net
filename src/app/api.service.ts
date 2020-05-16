import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Project, ContentSection } from './models/project';
import { AuthService } from './auth.service';
import config from './app.config';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl: string;

  constructor(private http: HttpClient, public auth: AuthService) {
    this.apiUrl = config.resourceServer.api;
  }

  private accessToken() {
    return this.auth.accessToken();
  }

  private httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken()}`
    });
  }

  getContent(section: string, contentpath: string): Observable<ContentSection> {
    return this.http.get<ContentSection>(`${this.apiUrl}/${section}/${contentpath}`, { headers: this.httpHeaders() })
      .pipe(
        tap(cases => console.log('fetched content')),
        catchError(this.handleError('getContent', null))
      );
  }


  setContent(section: string, contentpath: string, content: ContentSection): Observable<ContentSection> {
    return this.http.post<ContentSection>(`${this.apiUrl}/${section}/${contentpath}`, content, { headers: this.httpHeaders() })
      .pipe(
        tap(cases => console.log('updated content')),
        catchError(this.handleError('setContent', null))
      );
  }

  getProjectDetail(section: string, contentpath: string, projectTitle: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${section}/${contentpath}/${projectTitle}`)
      .pipe(
        tap(cases => console.log('fetched project details')),
        catchError(this.handleError('getProjectDetail', null))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
