package br.com.cedro.tests;

import static org.junit.Assert.*;

import java.util.Collection;

import org.junit.Before;
import org.junit.Test;

import br.com.cedro.ws.model.Prato;
import br.com.cedro.ws.service.PratoService;

public class PratoServiceTest {
	
	private Prato prato, prato1, prato2;
	private PratoService service;

	@Before
	public void setUp() throws Exception {
		prato = new Prato();
		prato1 = new Prato();
		prato2 = new Prato();
		
		prato1.setId(1);
		prato1.setNome("Pizza");
		prato1.setPreco(29.9);
		prato1.setRestaurante_id(1);
		
		prato2.setId(2);
		prato2.setNome("Lazanha");
		prato2.setPreco(31.9);
		prato2.setRestaurante_id(1);
		
	}
	
	@Test
	public void compararId() {
		
		assertNotEquals(prato1.getId(), prato2.getId());
		assertEquals(prato1.getRestaurante_id(), prato2.getRestaurante_id());
	}
	
	@Test
	public void distinguirNomes() {
		
		assertNotEquals(prato1.getNome(), prato2.getNome());
	}
	
	@Test
	public void buscarPorIdTest() {
		prato.setId(1);
		prato.setNome("Lasanha");
		prato.setPreco(25.50);
		prato.setRestaurante_id(3);
		
		service.cadastrar(prato);
		
		assertEquals(null, service.buscarPorId(prato.getId()));
	}
	
	@Test
	public void listarPratosTest() {
		
		Collection<Prato> prato;
		prato = service.listarPratos();
		
		assertEquals(prato, service.listarPratos());
	}
	
	@Test
	public void buscarPratosTest() {
		
		prato.setId(6);
		prato.setNome("Isca de Tilápia");
		prato.setPreco(34.9);
		prato.setRestaurante_id(5);
		
		assertNotEquals(prato, service.buscarPratos(prato.getId()));
	}
	
	@Test
	public void alterarTest() {
		
		prato.setId(13);
		prato.setNome("Picanha");
		prato.setPreco(39.9);
		prato.setRestaurante_id(7);
		
		service.alterar(prato);
		
		assertEquals(prato, service.buscarPorId(prato.getId()));
	}
	
	@Test
	public void cadastrarTest() {
		
		prato.setId(7);
		prato.setNome("Lasanha");
		prato.setPreco(29.9);
		prato.setRestaurante_id(2);
		
		service.cadastrar(prato);
		
		assertEquals(prato, service.buscarPorId(prato.getId()));
	}
	
	@Test
	public void validarCampoEntityPrato() {
		
		prato.setNome("Bolinho de Bacalhau");
		prato.setPreco(19.9);
		
		service.cadastrar(prato);
		
		assertEquals(prato, service.buscarPorId(18));
		
	}
	
}