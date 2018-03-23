package br.com.cedro.ws.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.cedro.ws.model.Prato;

@Repository
public interface PratoRepository extends JpaRepository<Prato, Integer>{

	@Query(value="SELECT * FROM prato WHERE id=?1", nativeQuery=true)
	Prato pesquisarPrato(Integer id);

	@Query(value="SELECT * FROM prato WHERE restaurante_id=?1", nativeQuery=true)
	List<Prato> pratos(Integer id);
}
