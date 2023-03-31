package com.upe.editais.editaisupe.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upe.editais.editaisupe.models.GeneralUser;
import com.upe.editais.editaisupe.repositories.IGeneralUserRepository;

@RestController
@RequestMapping(path = "/users")
public class GeneralUserController {
	@Autowired
	private IGeneralUserRepository uRepository;

	@GetMapping
	public Iterable<GeneralUser> getUsers() {
		return uRepository.findAll();
	}

	@GetMapping("/{id}")
	public Optional<GeneralUser> getUserById(@PathVariable("id") Long id) {
		return uRepository.findById(id);
	}

	@PostMapping
	public void registerUser(@RequestBody GeneralUser user) {
		uRepository.save(user);
	}

	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable("id") Long id) {
		uRepository.deleteById(id);
	}

	@PutMapping("/{id}")
	public GeneralUser updateUserById(@PathVariable("id") Long id, @RequestBody GeneralUser newUser) {
		Optional<GeneralUser> optionalUser = uRepository.findById(id);

		if (optionalUser.isPresent()) {
			GeneralUser existingUser = optionalUser.get();

			existingUser.setName(newUser.getName());
			existingUser.setCpf(newUser.getCpf());
			existingUser.setEmail(newUser.getEmail());
			existingUser.setPassword(newUser.getPassword());
			existingUser.setPermission(newUser.getPermission());

			return uRepository.save(existingUser);
		} else {
			return null;
		}
	}
}
