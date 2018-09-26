import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, tap, debounceTime } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GetAppUtil } from './app.util';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

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
  public postDatas( api: string, param: any, passport?: boolean ): Observable<any> {
    // const url = this.util.urlMontage(api, param, passport);
    const url = 'http://test.api.snsports.cn/api_passport/registerMobile.do';
    const params = new HttpParams().append('loginType', 'mobile').append('action', 'fastBind').append('loginName', '12312314').append('sendCode', '1234');
    return this.http.post( url, params);
  }
}
