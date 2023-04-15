package com.upe.editais.editaisupe.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.upe.editais.editaisupe.models.GeneralUser;

@Repository
public interface IGeneralUserRepository extends CrudRepository<GeneralUser, Long> {

	Optional<GeneralUser> findByEmail(String email);


    public GeneralUser findByCpf(String cpf);

}
