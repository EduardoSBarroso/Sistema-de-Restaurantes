package br.com.cedro.ws.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.cedro.ws.model.Restaurante;
import br.com.cedro.ws.service.RestauranteService;

@RestController
@CrossOrigin
@RequestMapping("/restaurante")
public class RestauranteController{

	@Autowired
	RestauranteService restauranteService;
	

	
	@RequestMapping(method=RequestMethod.POST, value="/cadastrarRestaurantes", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Restaurante> cadastrarRestaurante(@RequestBody Restaurante restaurante) {
		
		Restaurante restauranteCadastrado = restauranteService.cadastrar(restaurante);
		return new ResponseEntity<Restaurante>(restauranteCadastrado, HttpStatus.CREATED);
		
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/consultarRestaurantes", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Restaurante>> buscarRestaurantes() {
		
		Collection<Restaurante> restaurantesBuscados = restauranteService.buscarRestaurantes();
		return new ResponseEntity<>(restaurantesBuscados, HttpStatus.OK);
		
	}

	@RequestMapping(method=RequestMethod.GET, value="/selecionarRestaurante/{restaurante}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Restaurante> selecionarRestaurante(@PathVariable("restaurante") String restaurante) {
		
		Restaurante restauranteSelecionado = restauranteService.selecionarRestaurante(restaurante);
		if(restauranteSelecionado == null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(restauranteSelecionado, HttpStatus.OK);
		
	}

	@RequestMapping(method=RequestMethod.GET, value="/buscarRestaurante/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Restaurante> buscarRestaurante(@PathVariable("id") Integer id) {
		
		Restaurante restaurante = restauranteService.buscarPorId(id);
		if(restaurante == null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(restaurante, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/excluirRestaurante/{id}")
	public ResponseEntity<Restaurante> excluirRestaurante(@PathVariable("id") Integer id) {
		
		Restaurante restauranteEncontrado;
		restauranteEncontrado = restauranteService.buscarPorId(id);

		if(restauranteEncontrado == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		restauranteService.excluir(restauranteEncontrado);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/editarRestaurante", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Restaurante> alterarRestaurante(@RequestBody Restaurante restaurante) {
		
		Restaurante restauranteAlterado = restauranteService.alterar(restaurante);
		return new ResponseEntity<Restaurante>(restauranteAlterado, HttpStatus.OK);
		
	}
	
}