import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchSearchComponent } from './match-search/match-search.component';
import { AppRoutingModule } from './app-rouring.module';

/* UI */

@NgModule({
  declarations: [
    AppComponent,
    MatchSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
