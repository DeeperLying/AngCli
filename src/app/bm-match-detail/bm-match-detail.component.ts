import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; // 路由监控
import { Location } from '@angular/common';
import { BmbService } from '../bmb.service';


@Component({
  selector: 'app-bm-match-detail',
  templateUrl: './bm-match-detail.component.html',
  styleUrls: ['./bm-match-detail.component.css']
})
export class BmMatchDetailComponent implements OnInit {
  private localhost: Location;
  private matchId: string;
  public matchs: object[];
  public winWidth: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private server: BmbService
  ) { }

  ngOnInit() {
    this.matchId = this.route.snapshot.paramMap.get('id');
    this.winWidth = document.body.clientWidth;
    this.getBMMatchDetail();
  }

  back (): void {
    window.history.back();
  }

  private getBMMatchDetail () {
    const param = {
      matchId: this.matchId,
    };
    this.server.getDatas('GetBMMatchDetail', param ).subscribe(
      ( res ) => {
        this.matchs = res.messages.data;
        console.log(this.matchs);
      },
      error => {
        console.log(error);
      },
      () => {}
    );
  }

}
