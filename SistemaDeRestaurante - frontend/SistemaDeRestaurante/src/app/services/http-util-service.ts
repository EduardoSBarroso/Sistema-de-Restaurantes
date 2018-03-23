import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class HttpUtilService {
 
    private PRATO_URL: string = 'http://localhost:8080/prato/';
    private RESTAURANTE_URL: string = 'http://localhost:8080/restaurante/';
 
	urlPrato(path: string) {
		return this.PRATO_URL + path;
    }
    
    urlRestaurante(path: string){
        return this.RESTAURANTE_URL + path;
    }
 
	headers() {
		let headersParams = { 'Content-Type': 'application/json' };
		if (localStorage['token']) {
			headersParams['Authorization'] = localStorage['token'];
		}
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
    	return options;
	}
 
	extrairDados(response: Response) {
    	let data = response.json();
    	return data || {};
  	}
 
  	processarErros(erro: any) {
	    return Observable.throw('Erro ao acessar servidor remoto.');
	}
}