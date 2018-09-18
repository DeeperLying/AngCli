import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { slideInDownAnimation } from '../animations';

import { Observable, fromEvent } from 'rxjs';
import { BmbService } from '../bmb.service';
import { templateJitUrl } from '@angular/compiler';
import { ajax } from 'rxjs/internal/observable/dom/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/internal/operators';
import * as $ from 'jquery';
import * as Mescroll from 'mescroll.js';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [ slideInDownAnimation ]
})
export class SearchComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  public selectTab = 'all';
  public searchContent = '';
  public matchList: object[];
  public matchAllList: object[];
  public matchLive: object[];
  public matchTeam: object[];
  private loading = false;
  private mescroll;
  private pageSize = 20;
  private pageNum = 1;
  private status = 3;
  private winHeigth;
  constructor(
    private service: BmbService
  ) {
  }

  ngOnInit() {
    this.infiniteScroll();
  }

  public selectTabEvent(only: string): void {
    this.selectTab = only;
  }

  public search(): void {
    const paramMatchList = {
      keyword: this.searchContent,
      status: this.status,
      pageSize: this.pageSize,
      pageNum: this.pageNum
    };
    const paramMatchLive = {
      keyword: this.searchContent,
    };
    this.service.getDatas('GetBMMatchListByKeyword', paramMatchList).subscribe(
      data => {
        if (data.error) {
          console.log(' 您搜索关键字有误或者不合法,我这里到时候回封装一个方法专门针对错误提醒');
        }
        this.matchAllList = data.messages.data.otherMatchList;
        this.matchList = data.messages.data;
      },
      error => console.log('error'),
      () => {
      }
    );
    this.service.getDatas('GetBMLiveGames', paramMatchLive).subscribe(
      data => {
        if (data.error) {
          console.log(' 您搜索关键字有误或者不合法,我这里到时候回封装一个方法专门针对错误提醒');
        }
        this.matchLive = data.messages.data;
      },
      error => console.log('error'),
      () => {
      },
    );
    this.service.getDatas('SearchBMTeam', paramMatchLive).subscribe(
      data => {
        if (data.error) {
          console.log(' 您搜索关键字有误或者不合法,我这里到时候回封装一个方法专门针对错误提醒');
        }
        this.matchTeam = data.messages.data;
      },
      error => console.log('error'),
      () => {
      }
    );
  }

  private infiniteScroll(): void {
    this.mescroll = new Mescroll('mescroll', {
      down: {
        callback: () => {
          console.log('下啦');
          const time = setInterval( () => {
            clearInterval(time);
            this.mescroll.endSuccess();
          }, 3000 );
        }
      },
      up: {
        auto: true,
        isBounce: false,
        callback: () => {
          console.log('上啦');
          if ( !this.matchAllList ) {
            return;
          }
          const paramMatchList = {
            keyword: this.searchContent,
            status: this.status,
            pageSize: 20,
            pageNum: ++this.pageNum
          };
          this.service.getDatas('GetBMMatchListByKeyword', paramMatchList).subscribe(
            res => {
              const vm = this;
              const data = res.messages.data.otherMatchList;
              data.forEach(function ( arr ) {
                vm.matchAllList.push( arr );
              });
              console.log(res)
              this.mescroll.endBySize(this.matchAllList.length, res.messages.data.count);
            },
            error => console.log( error ),
            ( ) => {
              console.log( '成功' );
            }
          );
        }
      }
    });
  }
}
