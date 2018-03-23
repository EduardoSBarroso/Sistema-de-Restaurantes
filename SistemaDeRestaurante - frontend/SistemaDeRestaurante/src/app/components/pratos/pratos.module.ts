import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { routing } from '../../app.routing';

import { PratosService } from '../../services/pratos.service';
import { HttpUtilService } from '../../services/http-util-service';

import { PratosComponent } from './pratos.component';
import { CadastroPratoComponent } from './cadastro-prato/cadastro-prato.component';
import { EditarPratoComponent } from './editar-prato/editar-prato.component';



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
    PratosService,
    HttpUtilService
  ],
  declarations: [
    PratosComponent,
    CadastroPratoComponent,
    EditarPratoComponent
  ],
  exports: [
    PratosComponent,
    CadastroPratoComponent,
    EditarPratoComponent
  ]
})
export class PratosModule { }
