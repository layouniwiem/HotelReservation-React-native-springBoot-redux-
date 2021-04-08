package com.example.demo.pfe.dto.SearchHotel;


public class HotelSearchRes {
	
	private int id;
	private String ResponseTime;
	private String SessionId;
	private String NoOfRoomsRequested;
	private String CityId;
	private String CheckInDate;
	private String CheckOutDate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getResponseTime() {
		return ResponseTime;
	}
	public void setResponseTime(String responseTime) {
		ResponseTime = responseTime;
	}
	public String getSessionId() {
		return SessionId;
	}
	public void setSessionId(String sessionId) {
		SessionId = sessionId;
	}
	public String getNoOfRoomsRequested() {
		return NoOfRoomsRequested;
	}
	public void setNoOfRoomsRequested(String noOfRoomsRequested) {
		NoOfRoomsRequested = noOfRoomsRequested;
	}
	public String getCityId() {
		return CityId;
	}
	public void setCityId(String cityId) {
		CityId = cityId;
	}
	public String getCheckInDate() {
		return CheckInDate;
	}
	public void setCheckInDate(String checkInDate) {
		CheckInDate = checkInDate;
	}
	public String getCheckOutDate() {
		return CheckOutDate;
	}
	public void setCheckOutDate(String checkOutDate) {
		CheckOutDate = checkOutDate;
	}

}
