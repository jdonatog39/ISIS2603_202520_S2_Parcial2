import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { movieData } from '../movieData';
import {movieService} from "../movie.service"
@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie: Movie | null = null;

  constructor(private movieService:movieService) {}
  getmovie(): void {
    this.movieService.getmovie().subscribe((movies: Movie[]) => {
  this.movies = movies;
  });
  }

  ngOnInit() {
    this.getmovie();
  }
  
  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }
}
