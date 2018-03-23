import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { RestaurantesService } from '../../services/restaurantes.service';

import { Restaurante } from '../../models/restaurante';



@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  private restaurantes: Restaurante[];
  private msgErro: string;
  private idExcluir: number;
  private restaurante: Restaurante
  private nome: string;
  private existsRestaurante = false;
  

  constructor(private restauranteService: RestaurantesService) { }

  consultarRestaurantes() {
		this.restauranteService.getRestaurantes()
				.subscribe(
                	restaurante => this.restaurantes = restaurante,
                	error  => this.msgErro = error);
	}

  ngOnInit() {
    this.consultarRestaurantes();
  }

  excluir(id: number) {
    this.idExcluir = id;
    this.onExcluir();
  }


  onExcluir() {
    this.restauranteService.excluir(this.idExcluir)
      .subscribe(
                 data  => this.consultarRestaurantes(),
                 error => this.msgErro = error);
    this.idExcluir = -1;
  }

  selecionar() {
		this.restauranteService.selecionarRestaurante(this.nome)
				.subscribe(
                	restaurante => this.restaurante = restaurante,
                  error  => this.msgErro = error);
    console.log(this.nome);
    this.existsRestaurante = true;
	}

}
