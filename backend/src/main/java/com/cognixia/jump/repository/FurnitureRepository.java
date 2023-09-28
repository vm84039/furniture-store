package com.cognixia.jump.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognixia.jump.model.Furniture;

@Repository
public interface FurnitureRepository extends JpaRepository<Furniture, Integer> {
	

}
