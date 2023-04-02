package com.upe.editais.editaisupe.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.upe.editais.editaisupe.models.GeneralUser;

public interface IGeneralUserRepository extends CrudRepository<GeneralUser, Long> {

    GeneralUser findByEmail (@Param("email") String email);

    GeneralUser findByCPF(@Param("cpf") String cpf);

}
