package com.example.demo.models;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rooms")
public class RoomEntity {
	@Id

	@Column(name = "ID", unique = true, nullable = false, precision = 22, scale = 0)
	private BigDecimal id;
	@Column(name = "prixTotal")
	private String prixTotal;
	@Column(name = "room_Type")
	private String room_Type ;
	@Column(name = "room_Name")
	private String room_Name ;
	@Column(name = "reservation_id")
	private long reservation_id;
	
	
	@Override
	public String toString() {
		return "RoomEntity [id=" + id + ", prixTotal=" + prixTotal + ", room_Type=" + room_Type + ", room_Name="
				+ room_Name + ", reservation_id=" + reservation_id + "]";
	}
	public RoomEntity( String prixTotal, String room_Type, String room_Name, long reservation_id) {
		super();
	
		this.prixTotal = prixTotal;
		this.room_Type = room_Type;
		this.room_Name = room_Name;
		this.reservation_id = reservation_id;
	}
	public RoomEntity() {
		// TODO Auto-generated constructor stub
	}
	public BigDecimal getId() {
		return id;
	}
	public void setId(BigDecimal id) {
		this.id = id;
	}
	public String getPrixTotal() {
		return prixTotal;
	}
	public void setPrixTotal(String prixTotal) {
		this.prixTotal = prixTotal;
	}
	public String getRoom_Type() {
		return room_Type;
	}
	public void setRoom_Type(String room_Type) {
		this.room_Type = room_Type;
	}
	public String getRoom_Name() {
		return room_Name;
	}
	public void setRoom_Name(String room_Name) {
		this.room_Name = room_Name;
	}
	public long getReservation_id() {
		return reservation_id;
	}
	public void setReservation_id(long reservation_id) {
		this.reservation_id = reservation_id;
	}
	
	

}
