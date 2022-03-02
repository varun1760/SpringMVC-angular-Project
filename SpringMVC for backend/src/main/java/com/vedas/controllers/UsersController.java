package com.vedas.controllers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vedas.entities.OurUsers;
import com.vedas.services.UserService;

@RestController
public class UsersController {
	@Autowired
	UserService serve;
	
	@GetMapping("/users-list")
	@CrossOrigin
	public Iterable<OurUsers> listUsers() {
		return serve.getAllUsers();
	}
	@PostMapping("/register")
	@Transactional
	@CrossOrigin
	public String register(@RequestBody OurUsers user) {
		serve.saveUsers(user);
		return "welcome " + user.getfName() + "! Registration Successfull";
	}
	@GetMapping("/remove/{username}")
	@Transactional
	@CrossOrigin
	public Iterable<OurUsers> remove(@PathVariable String username){
		return serve.deleteUser(username);
	}
	@GetMapping("/search/{username}")
	@CrossOrigin
	public OurUsers search(@PathVariable String username) {
		return serve.findUser(username);
	}
}