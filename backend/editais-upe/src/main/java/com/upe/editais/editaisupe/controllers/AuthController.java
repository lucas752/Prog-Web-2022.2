package com.upe.editais.editaisupe.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upe.editais.editaisupe.models.GeneralUser;
import com.upe.editais.editaisupe.repositories.IGeneralUserRepository;

@RestController
@RequestMapping(path = "/auth")
public class AuthController {

    @Autowired
    private IGeneralUserRepository uRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public GeneralUser registerUser(@RequestBody GeneralUser newUser) {

        // Verifica se o email ou CPF do usuário já existem no banco de dados
        GeneralUser existigUser = uRepository.findByEmail(newUser.getEmail());
        if (existigUser != null) {
            throw new RuntimeException("Email já cadastrado");
        }
        existigUser = uRepository.findByCPF(newUser.getCpf());
        if(existigUser != null) {
            throw new RuntimeException("CPF já cadastrado");
        }

        // Faz hash da senha do usuário antes de salvar no banco de dados
        String encodedPassword = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(encodedPassword);

        // Verifica se o usuário é um coordenador e define suas permissões de acordo
        if(newUser.getPermission().equals("COORDENADOR")) {
            newUser.setPermission("COORDENADOR");
        } else {
            newUser.setPermission("USUÁRIO");
        }

        // Salva o novo usuário no banco de dados
        return uRepository.save(newUser);
    }
    
    
}
