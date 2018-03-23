import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PratosService } from '../../../services/pratos.service';
import { RestaurantesService } from '../../../services/restaurantes.service';

import { Prato } from '../../../models/prato';
import { Restaurante } from '../../../models/restaurante';



@Component({
  selector: 'app-editar-prato',
  templateUrl: './editar-prato.component.html',
  styleUrls: ['./editar-prato.component.css']
})
export class EditarPratoComponent implements OnInit {

  private id: number;
  private prato: Prato;
  private msgErro: string;
  private restaurantes: Restaurante[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pratoService: PratosService,
    private restauranteService: RestaurantesService) { }

    consultarRestaurantes() {
      this.restauranteService.getRestaurantes()
          .subscribe(
                    restaurante => this.restaurantes = restaurante,
                    error  => this.msgErro = error);
    }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.prato = new Prato();
    this.pratoService.buscarPrato(this.id)
        .subscribe(
               prato => this.prato = prato,
               error => this.msgErro = error);
    this.consultarRestaurantes();
  }

  atualizar(){
    this.pratoService.atualizar(this.prato)
    .subscribe(
                prato => this.router.navigate(['/pratos']),
                error => this.msgErro = error);
  }

}
