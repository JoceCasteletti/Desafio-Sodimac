import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.sass']
})
export class SuperHeroComponent implements OnInit {

  heroesList;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  /**
   * Obtiene superhéroe.
   *
   * @param id Identificador del superhéroe
   */
  getSuperHero (id) {
    this.api.getSuperHero(id).subscribe(data => {
      console.log(data);
    });
  }

  /**
   * Busca superhéroe por su nombre y se asigna el resultado del
   * servicio en variable que se utiliza para listar los superhéroes
   * en la vista.
   *
   * @param name Nombre a buscar de superhéroe
   */
  searchSuperheroes (name) {
    this.api.searchSuperHeroes(name).subscribe((data: any) => {
      this.heroesList = data.results;
    });
  }
}
