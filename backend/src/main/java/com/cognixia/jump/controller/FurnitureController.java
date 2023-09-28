package com.cognixia.jump.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognixia.jump.model.Furniture;
import com.cognixia.jump.repository.FurnitureRepository;

@RestController
@RequestMapping("/api/furniture")
public class FurnitureController {

	@Autowired
	FurnitureRepository repo;

	@GetMapping("/inventory")
	public List<Furniture> getFurniture() {
		return repo.findAll();
	}

}
