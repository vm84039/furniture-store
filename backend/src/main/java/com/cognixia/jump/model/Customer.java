package com.cognixia.jump.model;

import java.io.Serializable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;


@Entity
public class Customer implements Serializable {

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

	public Customer() {
	}
	
	

	public Customer(@NotBlank(message = "First name cannot be left blank") String firstName,
			@NotBlank(message = "Last name cannot be left blank") String lastName,
			@Pattern(regexp = "^.+@.+$", message = "Not formatted like an email") String email,
			@NotBlank(message = "Password cannot be left blank") String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}	

	public Customer(Integer id, @NotBlank(message = "First name cannot be left blank") String firstName,
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

	@Override
	public String toString() {
		return "Customer [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + "]";
	}
	
	
}
	
	
	
	


		