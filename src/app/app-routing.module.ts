import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BmMatchComponent } from './bm-match/bm-match.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'matches', pathMatch: 'full' },
  { path: 'matches', component: BmMatchComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot( routes ) ],
})
export class AppRoutingModule { }
