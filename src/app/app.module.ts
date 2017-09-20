import { AppRoutingModule } from './app-routing.module';
import { GitService } from './git.service';
import { FooterComponent } from './footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SavedLinksComponent } from './saved-links/saved-links.component';
import { SearchTechComponent } from './search-tech/search-tech.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FooterComponent,
    SearchResultsComponent,
    SavedLinksComponent,
    SearchTechComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
