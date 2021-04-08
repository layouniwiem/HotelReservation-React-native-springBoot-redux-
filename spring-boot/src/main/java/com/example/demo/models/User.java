package com.example.demo.models;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	@Id	
private BigDecimal id;
private String email;
private String userName;
private String password;
private boolean active;
private String roles;



public User() {
	super();
	// TODO Auto-generated constructor stub
}
public User(String email, String userName, String password,boolean active,String roles) {
	super();
	this.email = email;
	this.userName = userName;
	this.password = password;
	this.active= active;
	this.roles=roles;
}

@Column(name = "ID", unique = true, nullable = false, precision = 22, scale = 0)
public BigDecimal getId() {
	return id;
}
public void setId(BigDecimal id) {
	this.id = id;
}
@Column(name = "ACTIVE")

public boolean isActive() {
	return active;
}
public void setActive(boolean active) {
	this.active = active;
}
@Column(name = "ROLES")

public String getRoles() {
	return roles;
}
public void setRoles(String roles) {
	this.roles = roles;
}
@Column(name = "EMAIL")
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}

@Column(name = "USER_NAME")
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}

@Column(name = "PASSWORD")
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}


}
