package com.upe.editais.editaisupe.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upe.editais.editaisupe.models.Notices;
import com.upe.editais.editaisupe.repositories.INoticesRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(path = "/notices")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")

public class NoticesController {
	
	@Autowired
	private INoticesRepository nRepository;
	
	@GetMapping
	public Iterable<Notices> getNotices() {
		return nRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Notices> getNoticeById(@PathVariable("id") Long id) {
		return nRepository.findById(id);
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('COORDENADOR')")
	public void registerNotice(@RequestBody Notices notice) {
		nRepository.save(notice);
	}
	
	@DeleteMapping("/{id}")
	public void deleteNotice(@PathVariable("id") Long id) {
		nRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public Notices updateNoticeById(@PathVariable("id") Long id, @RequestBody Notices newNotice) {
		Optional<Notices> optionalNotice = nRepository.findById(id);
		
		if (optionalNotice.isPresent()) {
			Notices existingNotice = optionalNotice.get();
			
			existingNotice.setTitle(newNotice.getTitle());
			existingNotice.setDescription(newNotice.getDescription());
			existingNotice.setTerm(newNotice.getTerm());
			existingNotice.setDomain(newNotice.getDomain());
			existingNotice.setRequirements(newNotice.getRequirements());
			existingNotice.setCriteria(newNotice.getCriteria());

			return nRepository.save(existingNotice);
		} else {
			return null;
		}
	}

	// Filtragem de Editais pela sua área (Domain)
	@GetMapping("/domain/{domain}")
	public Iterable<Notices> getNoticesByDomain(@PathVariable("domain") String domain) {
		return nRepository.findByDomain(domain);
	}
	
	
}
