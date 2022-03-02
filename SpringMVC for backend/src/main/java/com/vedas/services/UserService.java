package com.vedas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vedas.entities.OurUsers;
import com.vedas.repositories.UsersRepository;

@Service
public class UserService {
	@Autowired
	UsersRepository repo;
	
	public Iterable<OurUsers> getAllUsers() {
		return repo.findAll();
	}
	public void saveUsers(OurUsers user) {
		repo.save(user);
	}
	public Iterable<OurUsers> deleteUser(String username){
		repo.deleteByUsername(username);
		return repo.findAll();
	}
	public OurUsers findUser(String username) {
		return repo.findByUsername(username);
	}
}