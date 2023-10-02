package com.cognixia.jump.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;


@Entity
public class User implements Serializable {
	
	public static enum Role {
		ROLE_CUSTOMER, ROLE_ADMIN	
	}
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank(message = "First name cannot be left blank")
	private String firstName;
	
	@NotBlank(message = "Last name cannot be left blank")
	private String lastName;
	
	@Pattern(regexp = "^.+@.+$", message="Not formatted like an email") // checking there's an @ in the email
	@Column( unique = true, nullable = false )  
	private String email;
	
	@Column(nullable = false)
	@NotBlank(message = "Password cannot be left blank")
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Role role=Role.ROLE_CUSTOMER;	
	
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore // Add this annotation to prevent infinite recursion
    private List<Orders> orderList = new ArrayList<>();

	public User() {
	}
	
	
	public User(@NotBlank(message = "First name cannot be left blank") String firstName,
			@NotBlank(message = "Last name cannot be left blank") String lastName,
			@Pattern(regexp = "^.+@.+$", message = "Not formatted like an email") String email,
			@NotBlank(message = "Password cannot be left blank") String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}	

	public User(Integer id, @NotBlank(message = "First name cannot be left blank") String firstName,
			@NotBlank(message = "Last name cannot be left blank") String lastName,
			@Pattern(regexp = "^.+@.+$", message = "Not formatted like an email") String email,
			@NotBlank(message = "Password cannot be left blank") String password) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}



	public Role getRole() {
		return role;
	}


	public void setRole(Role role) {
		this.role = role;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	

	public List<Orders> getOrderList() {
		return orderList;
	}


	public void setOrderList(List<Orders> orderList) {
		this.orderList = orderList;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + "]";
	}
	
	
}
	
	
	
	


		