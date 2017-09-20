import { SearchTechComponent } from './search-tech/search-tech.component';
import { SearchComponent } from './search.component';
import { SavedLinksComponent } from './saved-links/saved-links.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes=[
  { path : '', redirectTo:'/main',pathMatch:'full'},  
  { path : 'main',component : SearchComponent},
  { path : 'search-results',component : SearchResultsComponent},
  { path : 'search-tech',component : SearchTechComponent},
  { path : 'saved',component : SavedLinksComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}