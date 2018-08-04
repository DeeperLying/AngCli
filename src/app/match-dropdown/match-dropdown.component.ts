import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-dropdown',
  templateUrl: './match-dropdown.component.html',
  styleUrls: ['./match-dropdown.component.css']
})
export class MatchDropdownComponent implements OnInit {

  constructor() {}
  private add: string;
  ngOnInit() {
     const num = this.getListType();
     this.add = num;
     console.log(typeof this.add);
  }

  public getListType(): string {
    return 'yyyid';
  }

}
