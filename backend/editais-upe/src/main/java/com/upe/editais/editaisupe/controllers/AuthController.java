package com.upe.editais.editaisupe.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upe.editais.editaisupe.models.GeneralUser;
import com.upe.editais.editaisupe.repositories.IGeneralUserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(path = "/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")

public class AuthController {

    @Autowired
    private IGeneralUserRepository uRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    private final AuthenticationService service;


    @PostMapping("/register")
    public GeneralUser registerUser(@RequestBody GeneralUser newUser) {

        // Verifica se o email ou CPF do usuário já existem no banco de dados
        GeneralUser existigUser = uRepository.findByEmail(newUser.getEmail()).orElse(null);
        if (existigUser != null) {
            throw new RuntimeException("Email já cadastrado");
        }
        existigUser = uRepository.findByCpf(newUser.getCpf());
        if(existigUser != null) {
            throw new RuntimeException("CPF já cadastrado");
        }

        // Faz hash da senha do usuário antes de salvar no banco de dados
        String encodedPassword = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(encodedPassword);

        // Verifica se o usuário é um coordenador e define suas permissões de acordo
        if(newUser.getPermission().equals("COORDENADOR")) {
            if(newUser.getCoordinatorType().equals("Pesquisa")) {
                newUser.setPermission("COORDENADOR_Pesquisa");
            } else if(newUser.getCoordinatorType().equals("Extensão")) {
                newUser.setPermission("COORDENADOR_Extensão ");
            } else if(newUser.getCoordinatorType().equals("Inovação")) {
                newUser.setPermission("COORDENADOR_Inovação");
            }
        } else {
            newUser.setPermission("USUÁRIO");
        }

        // Salva o novo usuário no banco de dados
        return uRepository.save(newUser);
    }
    
    @PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate( @RequestBody AuthenticationRequest request){
		return ResponseEntity.ok(service.authentication(request));
	}
 
}
