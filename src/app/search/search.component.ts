import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

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
  public searchContent = '实时事件';
  constructor() { }

  ngOnInit() {}

  public selectTabEvent( only: string ): void {
    this.selectTab = only;
  }

  public search(): void {
    console.log(this.searchContent);
  }

}
