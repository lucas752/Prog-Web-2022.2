package com.upe.editais.editaisupe.models;

import static jakarta.persistence.GenerationType.SEQUENCE;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Entity(name = "GeneralUser")
@Table(name = "general_user", uniqueConstraints = {
		@UniqueConstraint(name = "general_user_email_unique", columnNames = "email"),
		@UniqueConstraint(name = "general_user_cpf_constraint", columnNames = "cpf") })
public class GeneralUser implements UserDetails {
	@Id
	@SequenceGenerator(name = "general_user_sequence", sequenceName = "general_user_sequence", allocationSize = 1)
	@GeneratedValue(strategy = SEQUENCE, generator = "general_user_sequence")
	private Long id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "cpf", nullable = false, length = 11)
	private String cpf;

	@Column(name = "email", nullable = false)
	private String email;

	@Column(name = "password", nullable = false, columnDefinition = "TEXT")
	private String password;

	@Column(name = "permission", nullable = false)
	private String permission;

	@Column(name = "coordinator_type", nullable = true)
	private String coordinatorType;

	@Column(name = "is_coordinator", nullable = false)
	private boolean isCoordinator;

//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "generalUser")
//	@JsonIgnore
//	private List<Notices> notices;

	public GeneralUser() {
	}

	public GeneralUser(
			String name,
			String cpf,
			String email,
			String password,
			String permission,
			boolean isCoordinator
			) {
		this.name = name;
		this.cpf = cpf;
		this.email = email;
		this.password = password;
		this.permission = permission;
		this.isCoordinator = isCoordinator;
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

//	public List<Notices> getNotices() {
//		return notices;
//	}


	public String getPermission() {
		return permission;
	}

	public void setPermission(String permission) {
		this.permission = permission;
	}

	public String getCoordinatorType() {
		return coordinatorType;
	}

	public boolean isCoordinator() {
		return isCoordinator;
	}

	public void setCoordinatorType(String coordinatorType) {
		if (this.permission.equals("COORDENADOR")) {
			this.coordinatorType = coordinatorType;
		} else {
			throw new IllegalStateException("Only coordinators can have a coordinator type.");
		}
	}

	public void setIsCoordinator(boolean isCoordinator) {
		this.isCoordinator = isCoordinator;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}