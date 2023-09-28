package com.cognixia.jump.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.Customer;
import com.cognixia.jump.service.CustomerService;

@RestController
@RequestMapping("/api/furniture")
public class CustomerController {

	@Autowired
	CustomerService service;

	// http://localhost:8080/api/register
	@PostMapping("/register")
	public ResponseEntity<?> createUser(@RequestBody Customer customer) {

		Customer save = service
				.insertNewCustomer(new Customer(customer.getFirstName(), customer.getLastName(), customer.getEmail(),
						customer.getPassword()));

		return ResponseEntity.status(201).body(save);
	}

	// http://localhost:8080/api/login
	@PostMapping("/login")
	public ResponseEntity<?> authenticate(@RequestBody Customer customer) {

		List<Customer> save = service.checkLogin(customer.getEmail(), customer.getPassword());
		if (save.isEmpty()) {
			return ResponseEntity.status(404).body("Not Authenticated");
		} else {
			return ResponseEntity.status(201).body(save.get(0));
		}
	}

}
