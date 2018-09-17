import { NgModule, Pipe, PipeTransform } from '@angular/core';
import {variable} from '@angular/compiler/src/output/output_ast';

@NgModule({

})

export class GetAppUtil {
  private queryTextUrl = 'http://test.api.snsports.cn/api/content/phone/'; // GetBMMatchListByKeyword.json?pageNum=1&keyword=%E5%8D%A0&status=3&device=phone&appVersion=3.0.5
  private appVersion = '3.0.5';
  public paramJoin: string;
  constructor () {}
  public urlMontage (api: string, param: any): string {
     this.paramJoin = this.queryTextUrl + api.toString() + '.json';
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
}
