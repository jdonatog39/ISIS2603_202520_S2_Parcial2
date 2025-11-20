import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class movieService {

  private baseUrl = 'https://raw.githubusercontent.com/Uniandes-isis2603/ISIS2603_202520_S2_Parcial2_json/refs/heads/main/movies/movie.json';
  private detailUrl = 'https://raw.githubusercontent.com/Uniandes-isis2603/ISIS2603_202520_S2_Parcial2_json/refs/heads/main/movies/1/movie.json';

  constructor(private http: HttpClient) {}

  getmovie(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getmovieById(id: number): Observable<any> {
    return this.http.get<any>(this.detailUrl + '/' + id);
  }
}
