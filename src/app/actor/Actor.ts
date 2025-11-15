export class Actor {
  nombre: string;
  personaje: string;
  foto: string;
  peliculas_count: number;

  constructor(nombre: string, personaje: string, foto: string, peliculas_count: number) {
    this.nombre = nombre;
    this.personaje = personaje;
    this.foto = foto;
    this.peliculas_count = peliculas_count;
  }
}