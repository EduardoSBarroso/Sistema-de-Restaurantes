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

import br.com.cedro.ws.model.Prato;
import br.com.cedro.ws.service.PratoService;

@RestController
@CrossOrigin
@RequestMapping("/prato")
public class PratoController {

	@Autowired
	private PratoService pratoService;
	
	
	
	@RequestMapping(method=RequestMethod.POST, value="/cadastrarPratos", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Prato> cadastrarPrato(@RequestBody Prato prato){
		
		Prato pratoCadastrado = pratoService.cadastrar(prato);
		return new ResponseEntity<Prato>(pratoCadastrado, HttpStatus.CREATED);
	}

	@RequestMapping(method=RequestMethod.GET, value="/consultarPratos/{restaurante_id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Prato>> consultarPratos(@PathVariable("restaurante_id") Integer restaurante_id) {
		
		Collection<Prato> pratosBuscados = pratoService.buscarPratos(restaurante_id);
		if(pratosBuscados == null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(pratosBuscados, HttpStatus.OK);
	}

	@RequestMapping(method=RequestMethod.GET, value="/listarPratos", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Prato>> listarPratos(){

		Collection<Prato> listaDePratos = pratoService.listarPratos();
		if(listaDePratos == null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(listaDePratos, HttpStatus.OK);
	}

	@RequestMapping(method=RequestMethod.GET, value="/buscarPrato/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Prato> buscarRestaurante(@PathVariable("id") Integer id) {
		
		Prato prato = pratoService.buscarPorId(id);
		if(prato == null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(prato, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/excluirPrato/{id}")
	public ResponseEntity<Prato> excluirPrato(@PathVariable("id") Integer id) {
		
		Prato pratoEncontrado;
		pratoEncontrado = pratoService.buscarPorId(id);

		if(pratoEncontrado == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		pratoService.excluir(pratoEncontrado);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/editarPrato", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Prato> alterarPrato(@RequestBody Prato prato) {
		
		Prato pratoAlterado = pratoService.alterar(prato);
		return new ResponseEntity<Prato>(pratoAlterado, HttpStatus.OK);
		
	}
	
	
}
