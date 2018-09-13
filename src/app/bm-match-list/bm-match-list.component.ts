import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges, NgModule } from '@angular/core';

@Component({
  selector: 'app-bm-match-list',
  templateUrl: './bm-match-list.component.html',
  styleUrls: ['./bm-match-list.component.css']
})
export class BmMatchListComponent implements OnInit {
  private list: object;
  @Input() set item( obj ) {
    this.list = obj;
  }
  get item(): any {
    return this.list;
  }
  constructor() { }

  ngOnInit() {
  }
}
