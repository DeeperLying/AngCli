import { Component, OnInit } from '@angular/core';
import { BmbService } from '../bmb.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-bm-match-login',
  templateUrl: './bm-match-login.component.html',
  styleUrls: ['./bm-match-login.component.css']
})
export class BmMatchLoginComponent implements OnInit {
  public modelShow = 'codeLogin';
  public phoneNumber: number;
  public winHeight: string;
  public countDown: any = '获取验证码';
  public smsCode: number;
  constructor(
    private server: BmbService
  ) { }
  ngOnInit() {
    this.winHeight = document.body.clientHeight + 'px';
  }

  public getIdentifyingCode () {
    const param = {
      loginType: 'mobile',
      action: 'sendFastBindCode',
      mobile: this.phoneNumber
    };
    this.server.getDatas('registerMobile', param, true).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      },
      () => {
        this.countDown = 60;
        const item = setInterval(() => {
          if ( this.countDown <= 1 ) {
            clearInterval( item );
            this.countDown = '获取验证码';
            return;
          }
           this.countDown = --this.countDown;
        }, 1000);
      }
    );
  }

  public regFast () {
    const param = {
      loginType: 'mobile',
      action   : 'fastBind',
      loginName: this.phoneNumber,
      sendCode : this.smsCode,
    };
    this.server.postDatas( 'registerMobile', param ).subscribe(
      res => console.log( res ),
      error => console.log( error ),
      () => {
        console.log( '成功' );
      }
    );
  }

}
