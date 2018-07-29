import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchSearchComponent } from './match-search/match-search.component';

/* UI */

@NgModule({
  declarations: [
    AppComponent,
    MatchSearchComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
