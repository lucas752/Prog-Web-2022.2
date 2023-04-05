package com.upe.editais.editaisupe.controllers;

import org.apache.catalina.authenticator.SpnegoAuthenticator.AuthenticateAction;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.token.TokenService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upe.editais.editaisupe.models.GeneralUser;
import com.upe.editais.editaisupe.repositories.IGeneralUserRepository;

import dto.Login;

@RestController
@RequestMapping(path = "/auth")
public class AuthController {
	

    @Autowired()
    private AuthenticationManager authenticationManager;
    
    @Autowired()
    private service.TokenService tokenService;

    @Autowired()
    private IGeneralUserRepository uRepository;

    @Autowired()
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public GeneralUser registerUser(@RequestBody GeneralUser newUser) {

        // Verifica se o email ou CPF do usuário já existem no banco de dados
        GeneralUser existigUser = uRepository.findByEmail(newUser.getEmail());
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
            newUser.setPermission("COORDENADOR");
        } else {
            newUser.setPermission("USUÁRIO");
        }

        // Salva o novo usuário no banco de dados
        return uRepository.save(newUser);
    }
    
    
    //Parte de Login - DAVID EMMANOEL
    
    

    @PostMapping("/login")
    public String login(@RequestBody Login login) {
		
    	UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =	new UsernamePasswordAuthenticationToken(login.email(), login.password());
		org.springframework.security.core.Authentication authenticate= this.authenticationManager.authenticate(usernamePasswordAuthenticationToken);
		
		var user = (GeneralUser)authenticate.getPrincipal();
		return tokenService.generateToken(user);
    	
    }
    
   
    
    
}
