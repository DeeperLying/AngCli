import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bm-match-team',
  templateUrl: './bm-match-team.component.html',
  styleUrls: ['./bm-match-team.component.css']
})
export class BmMatchTeamComponent implements OnInit {
  @Input( ) team;
  constructor() { }

  ngOnInit() {
  }

}
