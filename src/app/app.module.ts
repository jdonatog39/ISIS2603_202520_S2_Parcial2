import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';
import { movieRoutingModule } from './movie/movie-routing-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MovieModule,movieRoutingModule],
  providers: [MovieModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
