import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GetAppUtil } from './app.util';


@Injectable({
  providedIn: 'root'
})
export class BmbService {
  constructor(
    private http: HttpClient,
    private util: GetAppUtil
  ) { }
  getDatas( api: string, param: any ): Observable<any> {
    const url = this.util.urlMontage( api, param );
    return this.http.get( url ).pipe(
      tap( rej => console.log( rej ) ),
      catchError(err =>  err )
    );
  }
}
