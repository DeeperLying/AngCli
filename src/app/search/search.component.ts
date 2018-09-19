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
  public matchAllLive: object[];
  public matchTeam: object[];
  public matchAllTeam: object[];
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
      pageNum: 1
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
        this.mescroll.triggerUpScroll();
      }
    );
    this.service.getDatas('GetBMLiveGames', paramMatchLive).subscribe(
      data => {
        if (data.error) {
          console.log(' 您搜索关键字有误或者不合法,我这里到时候回封装一个方法专门针对错误提醒');
        }
        this.matchAllLive = data.messages.data.games;
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
        this.matchAllTeam = data.messages.data.teams;
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
          const time = setInterval( () => {
            clearInterval(time);
            this.mescroll.endSuccess();
            this.search();
          }, 3000 );
        }
      },
      up: {
        auto: false,
        isBounce: false,
        callback: () => {
          let apis = 'GetBMMatchListByKeyword';
          const paramMatchList = {
            keyword: this.searchContent,
            status: this.status,
            pageSize: 20,
            pageNum: ++this.pageNum
          };
          if ( this.selectTab === 'live' ) {
            apis = 'GetBMLiveGames';
          } else if ( this.selectTab === 'team' ) {
            apis = 'SearchBMTeam';
          }
          this.service.getDatas(apis, paramMatchList).subscribe(
            res => {
              if ( this.selectTab === 'matches' ) {
                const vm = this;
                const data = res.messages.data.otherMatchList;
                if ( vm.matchAllList ) {
                  data.forEach(function ( arr ) {
                    vm.matchAllList.push( arr );
                  });
                } else {
                  vm.matchAllList = data;
                }
                this.mescroll.endBySize(this.matchAllList.length, res.messages.data.count);
              } else if ( this.selectTab === 'live' ) {
                const vm = this;
                const data = res.messages.data.games;
                if ( vm.matchAllLive ) {
                  data.forEach(function ( arr ) {
                    vm.matchAllLive.push( arr );
                  });
                } else {
                  vm.matchAllLive = data;
                }
                console.log(vm.matchAllLive);
                this.mescroll.endBySize(this.matchAllLive.length, res.messages.data.count);
              } else if ( this.selectTab === 'team' ) {
                const vm = this;
                const data = res.messages.data.teams;
                if ( vm.matchAllTeam ) {
                  data.forEach(function ( arr ) {
                    vm.matchAllTeam.push( arr );
                  });
                } else {
                  vm.matchAllTeam = data;
                }
                this.mescroll.endBySize(this.matchAllTeam.length, res.messages.data.count);
              }
            },
            error => console.log( error ),
            ( ) => {}
          );
        }
      }
    });
  }

  private dataList( res: any ) {
    console.log(res);
  }

}
