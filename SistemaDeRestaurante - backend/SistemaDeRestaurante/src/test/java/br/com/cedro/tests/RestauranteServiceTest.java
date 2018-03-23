package br.com.cedro.tests;

import static org.junit.Assert.*;

import java.util.Collection;

import org.junit.Before;
import org.junit.Test;

import br.com.cedro.ws.model.Restaurante;
import br.com.cedro.ws.service.RestauranteService;

public class RestauranteServiceTest {
	
	Restaurante restaurante, restaurante1, restaurante2;
	RestauranteService service;
	
	@Before
	public void setUp() throws Exception {
		restaurante = new Restaurante();
		service = new RestauranteService();
		
		restaurante1.setId(1);
		restaurante1.setNome("Restaurante Soul Sabor");
		
		restaurante2.setId(2);
		restaurante2.setNome("Minas Tchê");
	}
	
	
	@Test
	public void compararId() {
		
		assertNotEquals(restaurante1.getId(), restaurante2.getId());
	}
	
	@Test
	public void distinguirNomes() {
		
		assertNotEquals(restaurante1.getNome(), restaurante2.getNome());
	}

	@Test
	public void buscarPorIdTest() {
		
		restaurante.setId(1);
		restaurante.setNome("Restaurante Palumino");
		
		assertEquals(restaurante, service.buscarPorId(restaurante.getId()));
	}
	
	
	@Test
	public void buscarRestaurantesTest() {
		
		Collection<Restaurante> restaurante;
		restaurante = service.buscarRestaurantes();
		
		assertEquals(restaurante, service.buscarRestaurantes());
	}
	
	@Test
	public void selecionarRestaurantesTest() {
		
		String nome = "Restaurante Tropeiro";
		restaurante = service.selecionarRestaurante(nome);
		
		assertNotEquals(restaurante, service.selecionarRestaurante(nome));
	}
	
	@Test
	public void alterarTest() {
		
		restaurante.setId(8);
		restaurante.setNome("Restaurante Mais Sabor");
		
		service.alterar(restaurante);
		
		assertEquals(restaurante, service.buscarPorId(restaurante.getId()));
	}
	
	@Test
	public void cadastrarTest() {
		
		restaurante.setId(9);
		restaurante.setNome("Restaurante Mais Sabor");
		
		service.cadastrar(restaurante);
		
		assertEquals(restaurante, service.selecionarRestaurante(restaurante.getNome()));
	}
	
	
}
