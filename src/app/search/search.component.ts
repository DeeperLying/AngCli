import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

import { Observable } from 'rxjs';
import { BmbService } from '../bmb.service';
import {templateJitUrl} from '@angular/compiler';


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
  constructor(
    private service: BmbService
  ) { }

  ngOnInit() {}

  public selectTabEvent( only: string ): void {
    this.selectTab = only;
  }

  public search( ): void {
    // debounceTime(5000);
    const param = {
      keyword: this.searchContent,
      status: 3,
      pageSize: 20,
      pageNum: 1
    };
    this.service.getDatas( 'GetBMMatchListByKeyword', param ).subscribe(
      data => console.log( data ),
      error => console.log('error'),
      () => console.log('成功')
    );
  }

}
