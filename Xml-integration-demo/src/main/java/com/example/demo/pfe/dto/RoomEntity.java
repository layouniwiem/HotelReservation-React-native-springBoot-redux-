//package com.example.demo.pfe.dto;
//
//import java.math.BigDecimal;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//@Entity
//@Table(name = "rooms")
//public class RoomEntity {
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	@Column(name = "room_id")
//	private long id;
//	@Column(name = "prixTotal")
//	private String prixTotal;
//	@Column(name = "room_Type")
//	private String room_Type ;
//	@Column(name = "room_Name")
//	private String room_Name ;
//	@ManyToOne
//	@JoinColumn (name="reservation_id")
//	@JsonBackReference
//	private ReservationEntity reservation;
//	@ManyToOne
//	@JoinColumn (name="hotel_id")
//	@JsonBackReference
//	private HotelEntity hotel;
//	
//
//}
