package br.com.cedro.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cedro.ws.model.Restaurante;
import br.com.cedro.ws.repository.RestauranteRepository;

@Service
public class RestauranteService{
	
	@Autowired
	private RestauranteRepository restauranteRepository;
	
	public Restaurante cadastrar(Restaurante restaurante) {
		return restauranteRepository.save(restaurante);
	}
	
	public Collection<Restaurante> buscarRestaurantes(){
		return restauranteRepository.findAll();
	}

	public Restaurante selecionarRestaurante(String restaurante){
		return restauranteRepository.selecionarRestaurantes(restaurante);
	}
	
	public void excluir(Restaurante restaurante) {
		restauranteRepository.delete(restaurante);
	}
	
	
	public Restaurante buscarPorId(Integer id) {
		return restauranteRepository.pesquisarRestaurante(id);
	}
	
	public Restaurante alterar(Restaurante restaurante) {
		return restauranteRepository.save(restaurante);
	}
	
}