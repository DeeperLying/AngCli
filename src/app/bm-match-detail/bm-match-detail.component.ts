import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bm-match-detail',
  templateUrl: './bm-match-detail.component.html',
  styleUrls: ['./bm-match-detail.component.css']
})
export class BmMatchDetailComponent implements OnInit {
  private localhost: Location;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      (param) => {
        console.log(param);
        return param;
      },
    );
  }

  back (): void {
    window.history.back();
  }

}
