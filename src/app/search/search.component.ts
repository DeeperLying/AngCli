import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { slideInDownAnimation } from '../animations';

import { Observable, fromEvent } from 'rxjs';
import { BmbService } from '../bmb.service';
import { templateJitUrl } from '@angular/compiler';
import { ajax } from 'rxjs/internal/observable/dom/ajax';
import {map, filter, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/internal/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [ slideInDownAnimation ]
})
export class SearchComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  public selectTab = 'all';
  public searchContent = '';
  public matchList: object[];
  public matchLive: object[];
  public unsubscribe;
  constructor(
    private service: BmbService
  ) { }

  ngOnInit() {}

  public selectTabEvent( only: string ): void {
    this.selectTab = only;
  }

  public search( ): void {
    const paramMatchList = {
      keyword: this.searchContent,
      status: 3,
      pageSize: 20,
      pageNum: 1
    };
    const paramMatchLive = {
      keyword: this.searchContent,
      pageSize: 20,
      pageNum: 1,
    };
    const paramTeamName = {
      keyword: this.searchContent,
      pageSize: 20,
      pageNum: 1,
    };
    this.service.getDatas( 'GetBMMatchListByKeyword', paramMatchList ).subscribe(
      data => {
          if ( data.error ) {
            console.log(' 您搜索关键字有误或者不合法,我这里到时候回封装一个方法专门针对错误提醒');
          }
          this.matchList = data.messages.data.otherMatchList.slice(0, 3 );
        },
      error => console.log('error'),
      ( ) => {}
    );
    this.unsubscribe = this.service.getDatas( 'GetBMLiveGames', paramMatchLive ).subscribe(
      data => {
        if ( data.error ) {
          console.log(' 您搜索关键字有误或者不合法,我这里到时候回封装一个方法专门针对错误提醒');
        }
        this.matchLive = data.messages.data.games.slice(0, 3 );
      },
      error => console.log('error'),
      ( ) => console.log( this.matchLive ),
    );
  }

}
