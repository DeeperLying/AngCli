import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchSearchComponent } from './match-search/match-search.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/matches', pathMatch: 'full' },
  { path: 'search', component: MatchSearchComponent },
  { path: 'matches', component: AppComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes) ],
})


export class AppRoutingModule {}
