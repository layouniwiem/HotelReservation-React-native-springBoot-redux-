package com.example.demo.models;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "invitees")
public class InviteeEntity implements Serializable {
	@Id
	@Column(name = "ID", unique = true, nullable = false, precision = 22, scale = 0)
	private BigDecimal id;
	@Column(name = "email")
	private String email;
	@Column(name = "firstName")
	private String firstName;
	@Column(name = "lastName")
	private String lastName;
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "id_Room",nullable = false)
	private long id_Room;
//	@Column(name = "ID", unique = true, nullable = false, precision = 22, scale = 0)

	public BigDecimal getId() {
		return id;
	}
	public void setId(BigDecimal id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public long getId_Room() {
		return id_Room;
	}
	public void setId_Room(long id_Room) {
		this.id_Room = id_Room;
	}
	public InviteeEntity( String email, String firstName, String lastName, String gender , long id_Room) {
		super();
		
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.id_Room= id_Room;
	}
	public InviteeEntity() {
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "InviteeEntity [id=" + id + ", email=" + email + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", gender=" + gender + ", idRoom=" +  id_Room+ "]";
	}
	
}
