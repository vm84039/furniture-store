package com.cognixia.jump.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.User;
import com.cognixia.jump.service.UserService;

@RestController
@RequestMapping("/api/furniture")
public class UserController {

	@Autowired
	UserService service;

	// http://localhost:8080/api/register
	@PostMapping("/register")
	public ResponseEntity<?> createUser(@RequestBody User user) {

		User save = service
				.insertNewUser(new User(user.getFirstName(), user.getLastName(), user.getEmail(),
						user.getPassword()));

		return ResponseEntity.status(201).body(save);
	}

	// http://localhost:8080/api/login
	@PostMapping("/login")
	public ResponseEntity<?> authenticate(@RequestBody User user) {

		List<User> save = service.checkLogin(user.getEmail(), user.getPassword());
		if (save.isEmpty()) {
			return ResponseEntity.status(404).body("Not Authenticated");
		} else {
			return ResponseEntity.status(201).body(save.get(0));
		}
	}

}
