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

private String hotel_id;
@Column(name = "hotel_Name")

private String hotel_Name;
@Column(name = "reservationDate")

private String reservationDate;
@Column(name = "hotel_Rating")

private String hotel_Rating;
@Column(name = "hotel_Adress")

private String hotel_Adress;
@Column(name = "hotelImage")
private String hotelImage;
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
@Column(name = "status")
private String status ;




public ReservationEntity() {
	// TODO Auto-generated constructor stub
}









public ReservationEntity(BigDecimal reservation_id, String hotel_id, String hotel_Name, String reservationDate,
		String hotel_Rating, String hotel_Adress, String hotelImage, String dateCheckIn, String dateCheckOut,
		String prixTotal, int nbrRooms, String typeReservation, String status) {
	super();
	this.reservation_id = reservation_id;
	this.hotel_id = hotel_id;
	this.hotel_Name = hotel_Name;
	this.reservationDate = reservationDate;
	this.hotel_Rating = hotel_Rating;
	this.hotel_Adress = hotel_Adress;
	this.hotelImage = hotelImage;
	this.dateCheckIn = dateCheckIn;
	this.dateCheckOut = dateCheckOut;
	this.prixTotal = prixTotal;
	this.nbrRooms = nbrRooms;
	this.typeReservation = typeReservation;
	this.status = status;
}









public BigDecimal getReservation_id() {
	return reservation_id;
}
public void setReservation_id(BigDecimal reservation_id) {
	this.reservation_id = reservation_id;
}
public String getHotel_id() {
	return hotel_id;    
}
public void setHotel_id(String hotel_id) {
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

public String getHotel_Name() {
	return hotel_Name;
}

public void setHotel_Name(String hotel_Name) {
	this.hotel_Name = hotel_Name;
}

public void setTypeReservation(String typeReservation) {
	this.typeReservation = typeReservation;
}





public String getReservationDate() {
	return reservationDate;
}





public void setReservationDate(String reservationDate) {
	this.reservationDate = reservationDate;
}





public String getHotel_Rating() {
	return hotel_Rating;
}





public void setHotel_Rating(String hotel_Rating) {
	this.hotel_Rating = hotel_Rating;
}


public String getHotel_Adress() {
	return hotel_Adress;
}


public void setHotel_Adress(String hotel_Adress) {
	this.hotel_Adress = hotel_Adress;
}


public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}





public String getHotelImage() {
	return hotelImage;
}





public void setHotelImage(String hotelImage) {
	this.hotelImage = hotelImage;
}





@Override
public String toString() {
	return "ReservationEntity [reservation_id=" + reservation_id + ", hotel_id=" + hotel_id + ", hotel_Name="
			+ hotel_Name + ", reservationDate=" + reservationDate + ", hotel_Rating=" + hotel_Rating + ", hotel_Adress="
			+ hotel_Adress + ", hotelImage=" + hotelImage + ", dateCheckIn=" + dateCheckIn + ", dateCheckOut="
			+ dateCheckOut + ", prixTotal=" + prixTotal + ", nbrRooms=" + nbrRooms + ", typeReservation="
			+ typeReservation + ", status=" + status + "]";
}





















}
