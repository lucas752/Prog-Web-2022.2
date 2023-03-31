package com.upe.editais.editaisupe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.upe.editais.editaisupe.models.GeneralUser;
import com.upe.editais.editaisupe.repositories.IGeneralUserRepository;

@SpringBootApplication
public class EditaisUpeApplication {

	@Autowired
	IGeneralUserRepository uRepository;

	public static void main(String[] args) {
		SpringApplication.run(EditaisUpeApplication.class, args);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {
			GeneralUser user1 = new GeneralUser(
					"Henrique",
					"12345678",
					"henrique@email.com",
					"minhasenha123",
					"Coordenador");

			uRepository.save(user1);
		};
	}

}