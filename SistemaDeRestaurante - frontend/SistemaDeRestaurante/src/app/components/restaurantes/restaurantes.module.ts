import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { routing } from '../../app.routing';

import { RestaurantesService } from '../../services/restaurantes.service';
import { HttpUtilService } from '../../services/http-util-service';

import { RestaurantesComponent } from './restaurantes.component';
import { CadastroRestauranteComponent } from './cadastro-restaurante/cadastro-restaurante.component';
import { EditarRestauranteComponent } from './editar-restaurante/editar-restaurante.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    RestaurantesService,
    HttpUtilService
  ],
  declarations: [
    RestaurantesComponent,
    CadastroRestauranteComponent,
    EditarRestauranteComponent
  ],
  exports: [
    RestaurantesComponent,
    CadastroRestauranteComponent,
    EditarRestauranteComponent
  ]
})
export class RestaurantesModule { }
