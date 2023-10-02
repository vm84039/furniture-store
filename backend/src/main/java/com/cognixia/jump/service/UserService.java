package com.cognixia.jump.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository repo;

	public User insertNewUser(User user) {
		return repo.save(user);
	}

	public List<User> checkLogin(String email, String password) {

		return repo.findByEmailContainingAndAndPasswordContaining(email, password);

	}

}
