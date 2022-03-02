package com.vedas.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vedas.entities.OurUsers;
@Repository
public interface UsersRepository extends CrudRepository<OurUsers, Integer>{
	public Iterable<OurUsers> deleteByUsername(String username);
	public OurUsers findByUsername(String username);
}
