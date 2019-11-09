import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl: string = 'https://www.superheroapi.com/api.php/10220273184120368';

  constructor(private http: HttpClient) { }

  /**
   * Obtener detalle del superhéroe.
   *
   * @param id  Id del super heroe.
   * @return    Observable con el cuerpo de la respuesta del detalle del superhéroe.
   */
  getSuperHero(id: number) {
    return this.http.get(`${this.apiBaseUrl}/${id}`);
  }

  /**
   * Obtiene la lista de los superhéroes.
   *
   * @param name  Nombre a buscar.
   * @return      Observable con el cuerpo de la respuesta con la lista de los superhéroes.
   */
  searchSuperHeroes(name) {
    return this.http.get(`${this.apiBaseUrl}/search/${name}`);
  }
}
