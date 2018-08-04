import { Component, OnInit } from '@angular/core';
import { FilteredList } from '../hero';

@Component({
  selector: 'app-match-dropdown',
  templateUrl: './match-dropdown.component.html',
  styleUrls: ['./match-dropdown.component.css']
})
export class MatchDropdownComponent implements OnInit {
  constructor() {
    const validStrings = new FilteredList<string>('true');
    console.log(validStrings);
  }
  private add: {
    name: string,
    age: number
  };
  ngOnInit() {}
}
