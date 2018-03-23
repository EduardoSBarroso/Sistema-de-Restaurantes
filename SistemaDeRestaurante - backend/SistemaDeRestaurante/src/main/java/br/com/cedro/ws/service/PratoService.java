package br.com.cedro.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cedro.ws.model.Prato;
import br.com.cedro.ws.repository.PratoRepository;

@Service
public class PratoService {

	@Autowired
	private PratoRepository pratoRepository;
	
	public Prato cadastrar(Prato prato) {
		return pratoRepository.save(prato);
	}
	
	public Collection<Prato> buscarPratos(Integer id){
		return pratoRepository.pratos(id);
	}

	public Collection<Prato> listarPratos(){
		return pratoRepository.findAll();
	}
	
	public void excluir(Prato prato) {
		pratoRepository.delete(prato);
	}
	
	public Prato buscarPorId(Integer id) {
		return pratoRepository.pesquisarPrato(id);
	}
	
	public Prato alterar(Prato prato) {
		return pratoRepository.save(prato);
	}
	
}
