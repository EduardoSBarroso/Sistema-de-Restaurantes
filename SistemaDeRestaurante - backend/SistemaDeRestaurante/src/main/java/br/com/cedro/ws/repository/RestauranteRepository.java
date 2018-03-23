package br.com.cedro.ws.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.cedro.ws.model.Restaurante;

@Repository
public interface RestauranteRepository extends JpaRepository<Restaurante, Integer>{

	@Query(value="SELECT * FROM restaurante WHERE id=?1", nativeQuery=true)
	Restaurante pesquisarRestaurante(Integer id);

	@Query(value="SELECT * FROM restaurante WHERE nome=?1", nativeQuery=true)
	Restaurante selecionarRestaurantes(String nome);
	
}
