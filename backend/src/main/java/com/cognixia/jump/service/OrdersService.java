package com.cognixia.jump.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cognixia.jump.model.OrderForm;
import com.cognixia.jump.model.Orders;
import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.FurnitureRepository;
import com.cognixia.jump.repository.OrdersRepository;
import com.cognixia.jump.repository.UserRepository;
import com.cognixia.jump.model.Furniture;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

@Service
public class OrdersService {
	
	@Autowired
	OrdersRepository repo;
	@Autowired 
	UserRepository userRepo;
	@Autowired 
	FurnitureRepository furnitureRepo;
	@Autowired
	EntityManager entityManager;
	
    @Transactional
    public Orders insertNewOrder(OrderForm orderForm) {
        Optional<User> user = userRepo.findById(orderForm.getUserId());
        List<Furniture> furnitureList = new ArrayList<>();
        // Merge detached furniture entities
        for (Furniture furniture : orderForm.getCart()) {
        	furnitureList.add(furnitureRepo.findById(furniture.getId()).get() );
        }
        
    	Orders order = new Orders();
        order.setDate(orderForm.getDate());
        order.setUser(user.get());
        order.setFurniture(furnitureList);
        order.setSubtotal(orderForm.getSubtotal());
        order.setShippingCost(orderForm.getShippingCost());
        order.setTax(orderForm.getTax());
        order.setGrandTotal(orderForm.getGrandTotal());
        System.out.println("Furniture List" + furnitureList.toString());
    	System.out.println("Before Save" + order.toString());


        // Save the order to the database using repository
        Orders savedOrder = repo.save(order);
        
    	System.out.println("After Save" + order.toString());

        
        return savedOrder;
    }		
}
