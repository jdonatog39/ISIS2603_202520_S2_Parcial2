import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit, OnChanges {
  @Input() movieDetail: any;
  safeTrailerUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer,private route: ActivatedRoute,private movieService: movieService) { }
  
  getMovie() {
    this.movieService.getmovieById(this.movieDetail).subscribe((movie) => {
      this.movieDetail = movie;
    });
  }

  ngOnInit(): void {
    this.updateTrailerUrl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie']) {
      this.updateTrailerUrl();
    }
    
  }

  private updateTrailerUrl(): void {
    if (this.movieDetail?.trailer_url) {
      // Convertir URL de YouTube watch a embed si es necesario
      let embedUrl = this.movieDetail.trailer_url;
      if (embedUrl.includes('watch?v=')) {
        embedUrl = embedUrl.replace('watch?v=', 'embed/');
      }
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else {
      this.safeTrailerUrl = null;
    }
  }
}