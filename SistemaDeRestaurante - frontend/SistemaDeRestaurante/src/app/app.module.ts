import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HttpUtilService } from './services/http-util-service';

import { RestaurantesModule } from './components/restaurantes/restaurantes.module';
import { PratosModule } from './components/pratos/pratos.module';

import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RestaurantesModule,
    PratosModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HttpUtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
