package br.com.cedro.ws.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotEmpty;


@Entity
@Table(name="prato")
public class Prato {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	@Column(name="nome")
	@NotEmpty(message = "Digite um nome válido")
	private String nome;
	
	
	@Column(name="preco")
	@NotNull(message = "Digite um preço válido")
	private double preco;
	
	@Column(name="restaurante_id")
	@NotNull(message = "Digite um Id válido")
	private Integer restaurante_id;
	

	public Integer getId() {

		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public double getPreco() {
		return preco;
	}
	
	public void setPreco(double preco) {
		this.preco = preco;
	}

	public Integer getRestaurante_id() {
		return restaurante_id;
	}

	public void setRestaurante_id(Integer restaurante_id) {
		this.restaurante_id = restaurante_id;
	}

	
}
