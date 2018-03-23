import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpUtilService } from './http-util-service';
import { Observable } from 'rxjs/Observable';

import { Restaurante } from '../models/restaurante';

@Injectable()
export class RestaurantesService {

  private path1 = 'consultarRestaurantes';
  private path2 = 'buscarRestaurante';
  private path3 = 'cadastrarRestaurantes';
  private path4 = 'editarRestaurante';
  private path5 = 'excluirRestaurante';
  private path6 = 'selecionarRestaurante';

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  getRestaurantes(): Observable<Restaurante[]>{
		return this.http.get(this.httpUtil.urlRestaurante(this.path1), this.httpUtil.headers())
                  .map(this.httpUtil.extrairDados)
                  .catch(this.httpUtil.processarErros);
  }

  buscarRestaurante(id: number): Observable<Restaurante> {
 
	return this.http.get(this.httpUtil.urlRestaurante(this.path2 + '/' + id), 
					this.httpUtil.headers())
				.map(this.httpUtil.extrairDados)
				.catch(this.httpUtil.processarErros);
}
  
  cadastrar(restaurante: Restaurante): Observable<Restaurante> {
		let params = JSON.stringify(restaurante);
 
    	return this.http.post(this.httpUtil.urlRestaurante(this.path3), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}
 
	atualizar(restaurante: Restaurante) {
		let params = JSON.stringify(restaurante);
 
    	return this.http.put(this.httpUtil.urlRestaurante(this.path4), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}
 
	excluir(id: number) {
 
		return this.http.delete(this.httpUtil.urlRestaurante(this.path5 + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	selecionarRestaurante(nome: String): Observable<Restaurante> {
 
		return this.http.get(this.httpUtil.urlRestaurante(this.path6 + '/' + nome), 
						this.httpUtil.headers())
					.map(this.httpUtil.extrairDados)
					.catch(this.httpUtil.processarErros);
	
	}
}