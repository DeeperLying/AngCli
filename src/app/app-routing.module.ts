import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'matches', component: AppComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot( routes ) ],
})
export class AppRoutingModule { }
