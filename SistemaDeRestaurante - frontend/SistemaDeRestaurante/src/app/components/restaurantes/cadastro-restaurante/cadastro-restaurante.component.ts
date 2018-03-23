import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestaurantesService } from '../../../services/restaurantes.service';

import { Restaurante } from '../../../models/restaurante';


@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrls: ['./cadastro-restaurante.component.css']
})
export class CadastroRestauranteComponent implements OnInit {

  private msgErro: string;
  private restaurante: Restaurante;

  constructor(private restauranteService: RestaurantesService,private router: Router) {
      this.restaurante = new Restaurante();
   }

  ngOnInit() {
  }

  cadastrar() {
		this.restauranteService.cadastrar(this.restaurante)
			.subscribe(
                	restaurante => this.router.navigate(['/restaurantes']),
                	error => this.msgErro = error);
		
  }

  cancelar() {
    this.restaurante = {};
  }

}
