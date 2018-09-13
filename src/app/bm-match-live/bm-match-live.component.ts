import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bm-match-live',
  templateUrl: './bm-match-live.component.html',
  styleUrls: ['./bm-match-live.component.css']
})
export class BmMatchLiveComponent implements OnInit {
  private matchLive;
  @Input() set item ( item ) {
    this.matchLive = item;
  }
  get item ( ) {
    return this.matchLive;
  }
  constructor() { }

  ngOnInit() {
  }

}
