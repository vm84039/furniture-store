package com.cognixia.jump.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Orders implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	LocalDate date;

	@ManyToOne
	@JoinColumn(name = "customer_id")
	@JsonBackReference // Use this annotation to prevent serialization loop
	private User user;

	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	@JsonManagedReference // Use this annotation to prevent serialization loop
	private List<Furniture> furniture = new ArrayList<>();

	double subtotal;
	double shippingCost;
	double tax;
	double grandTotal;

	public Orders() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public List<Furniture> getFurniture() {
		return furniture;
	}

	public void setFurniture(List<Furniture> furniture) {
		this.furniture = furniture;
	}

	public double getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}

	public double getShippingCost() {
		return shippingCost;
	}

	public void setShippingCost(double shippingCost) {
		this.shippingCost = shippingCost;
	}

	public double getTax() {
		return tax;
	}

	public void setTax(double tax) {
		this.tax = tax;
	}

	public double getGrandTotal() {
		return grandTotal;
	}

	public void setGrandTotal(double grandTotal) {
		this.grandTotal = grandTotal;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Orders [id=" + id + ", date=" + date + ", user=" + user + ", furniture=" + furniture + ", subtotal="
				+ subtotal + ", shippingCost=" + shippingCost + ", tax=" + tax + ", grandTotal=" + grandTotal + "]";
	}

}
