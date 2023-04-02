package com.upe.editais.editaisupe.repositories;

import org.springframework.data.repository.CrudRepository;

import com.upe.editais.editaisupe.models.GeneralUser;

public interface IGeneralUserRepository extends CrudRepository<GeneralUser, Long> {

    public GeneralUser findByEmail(String email);

    public GeneralUser findByCpf(String cpf);

}
