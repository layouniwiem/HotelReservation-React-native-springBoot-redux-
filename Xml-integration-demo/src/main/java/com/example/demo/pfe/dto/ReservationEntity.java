//package com.example.demo.pfe.dto;
//
//import java.math.BigDecimal;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.HashSet;
//import java.util.List;
//import java.util.Set;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "reservations")
//public class ReservationEntity {
//	@Id	
//private BigDecimal reservation_id;
//	@OneToOne
//    @JoinColumn(name="hotel")//the pattern is: "tablename_joined attribute"
//    private HotelEntity hotel;
//@Column(name = "dateCheckIn")
//private Date dateCheckIn;
//@Column(name = "dateCheckOut")
//private Date dateCheckOut;
//
//@Column(name = "prixTotal")
//private String prixTotal;
//
//@Column(name = "nbrRooms")
//private int nbrRooms;
//
//@Column(name = "typeReservation")
//private String typeReservation ;
//
//@OneToMany(mappedBy = "reservations")
//private Set<RoomEntity> rooms = new HashSet<RoomEntity>();
//
//@OneToMany(mappedBy = "reservations")
//private Set<InviteeEntity> invites = new HashSet<InviteeEntity>();
//
//
//public ReservationEntity(BigDecimal id, HotelEntity hotel, Date dateCheckIn, Date dateCheckOut, String prixTotal,
//		int nbrRooms, String typeReservation, Set<RoomEntity> rooms, Set<InviteeEntity> invites) {
//	super();
//	this.reservation_id = id;
//	this.hotel = hotel;
//	this.dateCheckIn = dateCheckIn;
//	this.dateCheckOut = dateCheckOut;
//	this.prixTotal = prixTotal;
//	this.nbrRooms = nbrRooms;
//	this.typeReservation = typeReservation;
//	this.rooms = rooms;
//	this.invites = invites;
//}
//public BigDecimal getId() {
//	return reservation_id;
//}
//public void setId(BigDecimal id) {
//	this.reservation_id = id;
//}
//public HotelEntity getHotel() {
//	return hotel;
//}
//public void setHotel(HotelEntity hotel) {
//	this.hotel = hotel;
//}
//public Date getDateCheckIn() {
//	return dateCheckIn;
//}
//public void setDateCheckIn(Date dateCheckIn) {
//	this.dateCheckIn = dateCheckIn;
//}
//public Date getDateCheckOut() {
//	return dateCheckOut;
//}
//public void setDateCheckOut(Date dateCheckOut) {
//	this.dateCheckOut = dateCheckOut;
//}
//public String getPrixTotal() {
//	return prixTotal;
//}
//public void setPrixTotal(String prixTotal) {
//	this.prixTotal = prixTotal;
//}
//public int getNbrRooms() {
//	return nbrRooms;
//}
//public void setNbrRooms(int nbrRooms) {
//	this.nbrRooms = nbrRooms;
//}
//public String getTypeReservation() {
//	return typeReservation;
//}
//public void setTypeReservation(String typeReservation) {
//	this.typeReservation = typeReservation;
//}
//public Set<RoomEntity> getRooms() {
//	return rooms;
//}
//public void setRooms(Set<RoomEntity> rooms) {
//	this.rooms = rooms;
//}
//public Set<InviteeEntity> getInvites() {
//	return invites;
//}
//public void setInvites(Set<InviteeEntity> invites) {
//	this.invites = invites;
//}
//@Override
//public String toString() {
//	return "ReservationEntity [id=" + reservation_id + ", hotel=" + hotel + ", dateCheckIn=" + dateCheckIn + ", dateCheckOut="
//			+ dateCheckOut + ", prixTotal=" + prixTotal + ", nbrRooms=" + nbrRooms + ", typeReservation="
//			+ typeReservation + ", rooms=" + rooms + ", invites=" + invites + "]";
//}
//
//
//
//
//
//
//
//}
