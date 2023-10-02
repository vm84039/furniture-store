package com.cognixia.jump.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.OrderForm;
import com.cognixia.jump.model.Orders;
import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.OrdersRepository;
import com.cognixia.jump.repository.UserRepository;
import com.cognixia.jump.service.OrdersService;

@RestController
@RequestMapping("/api/orders")
public class OrdersController {
	
	@Autowired 
	UserRepository userRepo;
	@Autowired 
	OrdersRepository orderRepo;
	@Autowired 
	OrdersService service;
	
	
	@GetMapping("/user/{id}")
	public List<Orders> getOrdersById(@PathVariable Integer id) {
		
		return orderRepo.findAllByUserId(id);
	}
	@PostMapping("/order")
	public ResponseEntity<?> newOrder(@RequestBody OrderForm orderForm) {
		

		Orders save = service.insertNewOrder( orderForm );

		if (save == null) {
			return ResponseEntity.status(404).body("Error creating order");

		}
		return ResponseEntity.status(201).body("OrderCreated");
	}	

	
	

}
