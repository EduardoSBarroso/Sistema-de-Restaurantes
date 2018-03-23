import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util-service';

import { Prato } from '../models/prato';

@Injectable()
export class PratosService {

  private path1 = 'listarPratos';
  private path2 = 'consultarPratos';
  private path3 = 'buscarPrato';
  private path4 = 'cadastrarPratos';
  private path5 = 'editarPrato';
  private path6 = 'excluirPrato';
  

  constructor(private http: Http, private httpUtil: HttpUtilService ) { }

	getPratos(): Observable<Prato[]>{
		return this.http.get(this.httpUtil.urlPrato(this.path1), this.httpUtil.headers())
                  .map(this.httpUtil.extrairDados)
                  .catch(this.httpUtil.processarErros);
	}
  
	selecionarPratos(id: number): Observable<Prato[]> {
 
		return this.http.get(this.httpUtil.urlPrato(this.path2 + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	buscarPrato(id: number): Observable<Prato> {
 
		return this.http.get(this.httpUtil.urlPrato(this.path3 + '/' + id), 
						this.httpUtil.headers())
					.map(this.httpUtil.extrairDados)
					.catch(this.httpUtil.processarErros);
	}
  
	cadastrar(prato: Prato): Observable<Prato> {
		let params = JSON.stringify(prato);
 
    	return this.http.post(this.httpUtil.urlPrato(this.path4), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}
 
	atualizar(prato: Prato) {
		let params = JSON.stringify(prato);
 
    	return this.http.put(this.httpUtil.urlPrato(this.path5), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}
 
	excluir(id: number) {
 
		return this.http.delete(this.httpUtil.urlPrato(this.path6 + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

}
