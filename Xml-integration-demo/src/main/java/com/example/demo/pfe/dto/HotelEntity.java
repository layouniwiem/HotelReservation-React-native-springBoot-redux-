//package com.example.demo.pfe.dto;
//
//import java.math.BigDecimal;
//import java.util.Date;
//import java.util.HashSet;
//import java.util.Set;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToMany;
//import javax.persistence.Table;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//@Entity
//@Table(name = "hotels")
//public class HotelEntity {
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	@Column(name = "hotel_id")
//	private long id;
//	@Column(name = "hotelCode")
//	private String hotelCode;
//	@Column(name = "hotelName")
//	private String hotelName;
//	@Column(name = "prixTotal")
//	private String prixTotal;
//	@Column(name = "adress")
//	private String adress ;
//	@Column(name = "rating")
//	private String rating ;
//	@ManyToOne
//	@JoinColumn (name="reservation_id")
//	@JsonBackReference
//	private ReservationEntity reservation;
//	@OneToMany(mappedBy = "Hotels")
//	private Set<RoomEntity> availablerooms = new HashSet<RoomEntity>();
//}
