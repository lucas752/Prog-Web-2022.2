package com.upe.editais.editaisupe.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import static jakarta.persistence.GenerationType.SEQUENCE;

@AllArgsConstructor
@Entity(name = "GeneralUser")
@Table(name = "general_user", uniqueConstraints = {
		@UniqueConstraint(name = "general_user_email_unique", columnNames = "email"),
		@UniqueConstraint(name = "general_user_cpf_constraint", columnNames = "cpf") })
public class GeneralUser {
	@Id
	@SequenceGenerator(name = "general_user_sequence", sequenceName = "general_user_sequence", allocationSize = 1)
	@GeneratedValue(strategy = SEQUENCE, generator = "general_user_sequence")
	private Long id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "cpf", nullable = false)
	private String cpf;

	@Column(name = "email", nullable = false)
	private String email;

	@Column(name = "password", nullable = false, columnDefinition = "TEXT")
	private String password;

	@Column(name = "permission", nullable = false)
	private String permission;

	public GeneralUser() {
	}

	public GeneralUser(String name, String cpf, String email, String password, String permission) {
		this.name = name;
		this.cpf = cpf;
		this.email = email;
		this.password = password;
		this.permission = permission;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPermission() {
		return permission;
	}

	public void setPermission(String permission) {
		this.permission = permission;
	}

}