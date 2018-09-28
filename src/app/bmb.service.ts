import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, tap, debounceTime } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GetAppUtil } from './app.util';

@Injectable({
  providedIn: 'root'
})
export class BmbService {
  constructor(
    private http: HttpClient,
    private util: GetAppUtil,
  ) { }
  public getDatas( api: string, param: any, passport?: boolean): Observable<any> {
    const url = this.util.urlMontage( api, param, passport );
    return this.http.get( url ).pipe(
      debounceTime(900),
      catchError(err =>  err )
    );
  }
  public postDatas( api: string, param: any ): Observable<any> {
    // const url = this.util.urlPostMontage( api );
    const url = 'https://api.weixin.qq.com/cgi-bin/component/api_create_preauthcode?component_access_token=wx40213ea7f75a4207';
    return this.http.post( url, param);
  }
}
