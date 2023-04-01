package com.upe.editais.editaisupe.models;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notices {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private String title;
	
	@Column(nullable = false, columnDefinition = "TEXT")
	private String description;
	
	@Column(nullable = false, columnDefinition = "DATE")
	private LocalDate term;
	
	@Column(nullable = false)
	private String domain;
	
	@Column(nullable = false, columnDefinition = "TEXT")
	private String requirements;
	
	@Column(nullable = false, columnDefinition = "TEXT")
	private String criteria;
	
	public Notices(String title, String description, LocalDate term, String domain, String requirements, String criteria) {
		this.title = title;
		this.description = description;
		this.term = term;
		this.domain = domain;
		this.requirements = requirements;
		this.criteria = criteria;
	}
	
	public Long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getTerm() {
		return term;
	}

	public void setTerm(LocalDate term) {
		this.term = term;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String area) {
		this.domain = area;
	}

	public String getRequirements() {
		return requirements;
	}

	public void setRequirements(String requirements) {
		this.requirements = requirements;
	}

	public String getCriteria() {
		return criteria;
	}

	public void setCriteria(String criteria) {
		this.criteria = criteria;
	}
}
