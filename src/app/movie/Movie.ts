import { Actor } from '../actor/Actor';

export class Movie {
  id: number;
  titulo: string;
  año: number;
  duracion_minutos: number;
  generos: string[];
  sinopsis: string;
  director: string;
  poster: string;
  trailer_url: string;
  calificacion: number;
  actores: Actor[];

  constructor(
    id: number,
    titulo: string,
    año: number,
    duracion_minutos: number,
    generos: string[],
    sinopsis: string,
    director: string,
    poster: string,
    trailer_url: string,
    calificacion: number,
    actores: Actor[]
  ) {
    this.id = id;
    this.titulo = titulo;
    this.año = año;
    this.duracion_minutos = duracion_minutos;
    this.generos = generos;
    this.sinopsis = sinopsis;
    this.director = director;
    this.poster = poster;
    this.trailer_url = trailer_url;
    this.calificacion = calificacion;
    this.actores = actores;
  }
}