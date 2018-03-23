import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

import { RestaurantesService } from '../../../services/restaurantes.service';

import { Restaurante } from '../../../models/restaurante';

@Component({
  selector: 'app-editar-restaurante',
  templateUrl: './editar-restaurante.component.html',
  styleUrls: ['./editar-restaurante.component.css']
})
export class EditarRestauranteComponent implements OnInit {

  private id: number;
  private restaurante: Restaurante;
  private msgErro: string;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private restauranteService: RestaurantesService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.restaurante = new Restaurante();
    this.restauranteService.buscarRestaurante(this.id)
        .subscribe(
               restaurante => this.restaurante = restaurante,
               error => this.msgErro = error);
  }

  atualizar(){
    this.restauranteService.atualizar(this.restaurante)
    .subscribe(
                restaurante => this.router.navigate(['/restaurantes']),
                error => this.msgErro = error);
  }

}
