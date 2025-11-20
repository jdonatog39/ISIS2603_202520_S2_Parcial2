import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie-routing-module').then((m) => m.movieRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
