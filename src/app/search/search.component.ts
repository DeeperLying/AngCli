import { Component, OnInit, HostBinding } from '@angular/core';
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
  public matchList: object;
  constructor(
    private service: BmbService
  ) { }

  ngOnInit() {}

  public selectTabEvent( only: string ): void {
    this.selectTab = only;
  }

  public search( ): void {
    const param = {
      keyword: this.searchContent,
      status: 3,
      pageSize: 20,
      pageNum: 1
    };
    this.service.getDatas( 'GetBMMatchListByKeyword', param ).subscribe(
      data => {
        if ( data.error ) {
          console.log(' 您搜索关键字有误或者不合法,我这里到时候回封装一个方法专门针对错误提醒');
        }
        this.matchList = data.messages.data.otherMatchList;
        },
      error => console.log('error'),
      ( ) => console.log( this.matchList )
    );
  }

}
