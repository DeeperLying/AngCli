import {Component, HostBinding, OnInit} from '@angular/core';

import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-bm-match',
  templateUrl: './bm-match.component.html',
  styleUrls: ['./bm-match.component.css'],
  animations: [ slideInDownAnimation ]
})
export class BmMatchComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
