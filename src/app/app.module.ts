import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchSearchComponent } from './match-search/match-search.component';
import { AppRoutingModule } from './app-rouring.module';
import { MatchDropdownComponent } from './match-dropdown/match-dropdown.component';

/* UI */

@NgModule({
  declarations: [
    AppComponent,
    MatchSearchComponent,
    MatchDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
