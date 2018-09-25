import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, tap, debounceTime } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetAppUtil } from './app.util';


@Injectable({
  providedIn: 'root'
})
export class BmbService {
  constructor(
    private http: HttpClient,
    private util: GetAppUtil,
  ) { }
  getDatas( api: string, param: any, passport?: boolean): Observable<any> {
    const url = this.util.urlMontage( api, param, passport );
    return this.http.get( url ).pipe(
      debounceTime(900),
      catchError(err =>  err )
    );
  }
}
