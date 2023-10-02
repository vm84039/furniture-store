package com.cognixia.jump.model;

import java.time.LocalDate;
import java.util.List;

public class OrderForm {
	
	LocalDate date;
	Integer userId;
	List<Furniture> cart;
	double subtotal;
	double shippingCost;
	double tax;
	double grandTotal;
	public OrderForm() {
		
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public List<Furniture> getCart() {
		return cart;
	}
	public void setOrder(List<Furniture> cart) {
		this.cart = cart;
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

}
