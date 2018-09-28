import { NgModule, Pipe, PipeTransform } from '@angular/core';
import {variable} from '@angular/compiler/src/output/output_ast';

@NgModule({

})

export class GetAppUtil {
  private queryTextUrl = 'http://test.api.snsports.cn/api/content/phone/'; // GetBMMatchListByKeyword.json?pageNum=1&keyword=%E5%8D%A0&status=3&device=phone&appVersion=3.0.5
  private queryPassportUrl = 'http://test.api.snsports.cn/api_passport/';
  private appVersion = '3.0.5';
  private wxAppid = 'wx40213ea7f75a4207';
  private appsecret = 'c0a0c00ec1b2bbcbe4aa59e439820dbb';
  public paramJoin: string;

  constructor () {}

  public urlMontage (api: string, param: any, passport?: boolean): string {
    if ( passport ) {
      this.paramJoin = this.queryPassportUrl + api.toString() + '.json';
    } else {
      this.paramJoin = this.queryTextUrl + api.toString() + '.json';
    }
    if ( !param ) {
      return;
    }
    this.paramJoin += '?';
    for ( const key in param ) {
      this.paramJoin += key + '=' + param[key] + '&';
    }
    this.paramJoin = this.paramJoin + 'device=phone&appVersion=' + this.appVersion;
    return this.paramJoin;
  }

  public urlPostMontage ( api: string ) {
    this.paramJoin = this.queryPassportUrl + api + '.do';
    return this.paramJoin;
  }
}
