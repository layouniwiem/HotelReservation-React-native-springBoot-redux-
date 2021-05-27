//package com.example.demo.pfe.dto;
//
//import java.math.BigDecimal;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//
//@Entity
//@Table(name = "invitees")
//public class InviteeEntity {
//	@Id
//	@Column(name = "invitee_id")
//	private BigDecimal id;
//	@Column(name = "email")
//	private String email;
//	@Column(name = "firstName")
//	private String firstName;
//	@Column(name = "lastName")
//	private String lastName;
//	@Column(name = "gender")
//	private String gender;
//	@ManyToOne
//	@JoinColumn(name = "reservation_id")
//	@JsonBackReference
//	private ReservationEntity reservation;
//}
