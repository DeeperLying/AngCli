import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BmMatchComponent } from './bm-match/bm-match.component';
import { SearchComponent } from './search/search.component';
import { BmMatchDetailComponent } from './bm-match-detail/bm-match-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'matches', pathMatch: 'full' },
  { path: 'matches', component: BmMatchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'matcheDetail/:id', component: BmMatchDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot( routes ) ],
})
export class AppRoutingModule { }
