import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchSearchComponent } from './match-search/match-search.component';
import { AppRoutingModule } from './app-rouring.module';
import { MatchDropdownComponent } from './match-dropdown/match-dropdown.component';
import { MatchListTypeComponent } from './match-list-type/match-list-type.component';

/* UI */

@NgModule({
  declarations: [
    AppComponent,
    MatchSearchComponent,
    MatchDropdownComponent,
    MatchListTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
