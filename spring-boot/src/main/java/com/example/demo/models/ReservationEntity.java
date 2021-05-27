package com.example.demo.models;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reservations")
public class ReservationEntity {
	@Id	
	@Column(name = "ID", unique = true, nullable = false, precision = 22, scale = 0)

private BigDecimal reservation_id;
	@Column(name = "hotel_id")

private long hotel_id;
@Column(name = "dateCheckIn")
private String dateCheckIn;
@Column(name = "dateCheckOut")
private String dateCheckOut;

@Column(name = "prixTotal")
private String prixTotal;

@Column(name = "nbrRooms")
private int nbrRooms;

@Column(name = "typeReservation")
private String typeReservation ;






public BigDecimal getReservation_id() {
	return reservation_id;
}
public void setReservation_id(BigDecimal reservation_id) {
	this.reservation_id = reservation_id;
}
public long getHotel_id() {
	return hotel_id;    
}
public void setHotel_id(long hotel_id) {
	this.hotel_id = hotel_id;
}
public String getDateCheckIn() {
	return dateCheckIn;
}
public void setDateCheckIn(String dateCheckIn) {
	this.dateCheckIn = dateCheckIn;
}
public String getDateCheckOut() {
	return dateCheckOut;
}
public void setDateCheckOut(String dateCheckOut) {
	this.dateCheckOut = dateCheckOut;
}
public String getPrixTotal() {
	return prixTotal;
}
public void setPrixTotal(String prixTotal) {
	this.prixTotal = prixTotal;
}
public int getNbrRooms() {
	return nbrRooms;
}
public void setNbrRooms(int nbrRooms) {
	this.nbrRooms = nbrRooms;
}
public String getTypeReservation() {
	return typeReservation;
}
public void setTypeReservation(String typeReservation) {
	this.typeReservation = typeReservation;
}




@Override
public String toString() {
	return "ReservationEntity [reservation_id=" + reservation_id + ", hotel_id=" + hotel_id + ", dateCheckIn="
			+ dateCheckIn + ", dateCheckOut=" + dateCheckOut + ", prixTotal=" + prixTotal + ", nbrRooms=" + nbrRooms
			+ ", typeReservation=" + typeReservation + "]";
}








}
