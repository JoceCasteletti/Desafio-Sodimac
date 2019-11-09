import {Component, OnInit, TemplateRef} from '@angular/core';
import { ApiService } from "../api.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.sass']
})
export class SuperHeroComponent implements OnInit {

  heroesList;
  modalRef: BsModalRef;

  constructor(private api: ApiService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  /**
   * Abre modal con los detalles del superhéroe.
   *
   * @param id Identificador del superhéroe
   */
  openModal(template: TemplateRef<any>, id: number) {
    this.api.getSuperHero(id).subscribe(data => {
      this.modalRef = this.modalService.show(template);
      this.modalRef.content = data;
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
