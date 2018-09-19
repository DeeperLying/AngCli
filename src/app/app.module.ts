import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetAppUtil } from './app.util';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ImgFile } from './bm-pipe';
import { LiveStateStyle } from './bm-pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { BmMatchComponent } from './bm-match/bm-match.component';
import { BmMatchListComponent } from './bm-match-list/bm-match-list.component';
import { BmMatchLiveComponent } from './bm-match-live/bm-match-live.component';
import { BmMatchTeamComponent } from './bm-match-team/bm-match-team.component';
import { BmMatchDetailComponent } from './bm-match-detail/bm-match-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BmMatchComponent,
    BmMatchListComponent,
    BmMatchLiveComponent,
    ImgFile,
    LiveStateStyle,
    BmMatchTeamComponent,
    BmMatchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GetAppUtil,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
