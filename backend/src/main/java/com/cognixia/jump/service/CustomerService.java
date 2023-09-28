package com.cognixia.jump.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognixia.jump.model.Customer;
import com.cognixia.jump.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository repo;

	public Customer insertNewCustomer(Customer customer) {
		return repo.save(customer);
	}

	public List<Customer> checkLogin(String email, String password) {

		return repo.findByEmailContainingAndAndPasswordContaining(email, password);

	}

}
