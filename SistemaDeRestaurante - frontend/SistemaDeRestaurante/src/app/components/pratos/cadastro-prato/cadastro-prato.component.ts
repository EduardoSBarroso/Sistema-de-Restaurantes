import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestaurantesService } from '../../../services/restaurantes.service';
import { PratosService } from '../../../services/pratos.service';

import { Restaurante } from '../../../models/restaurante';
import { Prato } from '../../../models/prato';




@Component({
  selector: 'app-cadastro-prato',
  templateUrl: './cadastro-prato.component.html',
  styleUrls: ['./cadastro-prato.component.css']
})
export class CadastroPratoComponent implements OnInit {

  private restaurantes: Restaurante[];
  private msgErro: string;
  private prato: Prato;

  constructor(
    private restauranteService: RestaurantesService, 
    private pratoService: PratosService,
    private router: Router) {
      this.prato = new Prato();
     }

  consultarRestaurantes() {
		this.restauranteService.getRestaurantes()
				.subscribe(
                	restaurante => this.restaurantes = restaurante,
                	error  => this.msgErro = error);
	}


  ngOnInit() {
    this.consultarRestaurantes();
  }

  cadastrar() {
		this.pratoService.cadastrar(this.prato)
			.subscribe(
                	prato => this.router.navigate(['/pratos']),
                	error => this.msgErro = error);
		
  }

  cancelar() {
    this.prato = {};
  }
  
}
