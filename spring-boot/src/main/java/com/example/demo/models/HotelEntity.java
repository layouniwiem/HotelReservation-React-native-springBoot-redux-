package com.example.demo.models;


import java.math.BigDecimal;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
@Table(name = "hotels")
public class HotelEntity {
	@Id
	@Column(name = "ID", unique = true, nullable = false, precision = 22, scale = 0)
	private BigDecimal id;
	@Column(name = "hotelCode")
	private String hotelCode;
	@Column(name = "hotelName")
	private String hotelName;
	@Column(name = "prixTotal")
	private String prixTotal;
	@Column(name = "adress")
	private String adress ;
	@Column(name = "rating")
	private String rating ;
	@Column(name = "image")
	private String image ;
	
	public BigDecimal getId() {
		return id;
	}
	public void setId(BigDecimal id) {
		this.id = id;
	}
	public String getHotelCode() {
		return hotelCode;
	}
	public void setHotelCode(String hotelCode) {
		this.hotelCode = hotelCode;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public String getPrixTotal() {
		return prixTotal;
	}
	public void setPrixTotal(String prixTotal) {
		this.prixTotal = prixTotal;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}

//	}
	
	public HotelEntity() {
		// TODO Auto-generated constructor stub
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public HotelEntity( String hotelCode, String hotelName, String prixTotal, String adress, String rating,
			String image, Set<RoomEntity> availablerooms) {
		super();
		
		this.hotelCode = hotelCode;
		this.hotelName = hotelName;
		this.prixTotal = prixTotal;
		this.adress = adress;
		this.rating = rating;
		this.image = image;
	}
	@Override
	public String toString() {
		return "HotelEntity [id=" + id + ", hotelCode=" + hotelCode + ", hotelName=" + hotelName + ", prixTotal="
				+ prixTotal + ", adress=" + adress + ", rating=" + rating + ", image=" + image
//				
				+ "]";
	}

}
