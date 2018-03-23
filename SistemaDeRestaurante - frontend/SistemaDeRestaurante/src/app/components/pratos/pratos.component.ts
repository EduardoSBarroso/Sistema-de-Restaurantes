import { Component, OnInit } from '@angular/core';

import { PratosService } from '../../services/pratos.service';
import { RestaurantesService } from '../../services/restaurantes.service';

import { Prato } from '../../models/prato';
import { Restaurante } from '../../models/restaurante';


@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {

  private pratos: Prato[];
  private msgErro: string;
  private restaurantes: Restaurante[];
  private idExcluir: number;
  private id: number;

  constructor(private pratoService: PratosService, private restauranteService: RestaurantesService) {}

  consultarPratos() {
		this.pratoService.selecionarPratos(this.id)
				.subscribe(
                	prato => this.pratos = prato,
                	error  => this.msgErro = error);
  }

  listarPratos() {
		this.pratoService.getPratos()
				.subscribe(
                	prato => this.pratos = prato,
                	error  => this.msgErro = error);
  }

  getRestaurantes(){
    this.restauranteService.getRestaurantes()
        .subscribe(
                  restaurante => this.restaurantes = restaurante,
                  error => this.msgErro = error);
  }


  ngOnInit() {
    this.getRestaurantes();
  }
  
  excluir(id: number) {
    this.idExcluir = id;
    this.onExcluir();
  }

  onExcluir() {
    this.pratoService.excluir(this.idExcluir)
      .subscribe(
                 data  => this.listarPratos(),
                 error => this.msgErro = error);
    this.idExcluir = -1;
  }

}
