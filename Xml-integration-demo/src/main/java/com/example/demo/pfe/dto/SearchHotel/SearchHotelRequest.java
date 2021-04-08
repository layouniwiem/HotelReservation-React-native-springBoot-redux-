package com.example.demo.pfe.dto.SearchHotel;

import java.util.List;

public class SearchHotelRequest {

	private String checkIn;
	private String checkOut;
	private String cityCode;
	private String hotelName;
	private String hotelCode;
	private Integer nbRooms;
	private int ratings;
	private List<RoomToSearch> rooms;
	private Integer nbNights;
	private String nationality;
	private String codeCityMR;
	private String codeCityGG;
	private String codeCityTBO;
	private String destinationText;

	public SearchHotelRequest() {
	}

	public SearchHotelRequest(String checkIn, String checkOut, String cityCode, String hotelName, String hotelCode,
			Integer nbRooms, int ratings, List<RoomToSearch> rooms, Integer nbNights, String nationality,
			String codeCityMR, String codeCityGG, String codeCityTBO) {
		super();
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.cityCode = cityCode;
		this.hotelName = hotelName;
		this.hotelCode = hotelCode;
		this.nbRooms = nbRooms;
		this.ratings = ratings;
		this.rooms = rooms;
		this.nbNights = nbNights;
		this.nationality = nationality;
	
	}

	public String getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}

	public String getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
	}

	public String getCityCode() {
		return cityCode;
	}

	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getHotelCode() {
		return hotelCode;
	}

	public void setHotelCode(String hotelCode) {
		this.hotelCode = hotelCode;
	}

	public Integer getNbRooms() {
		return nbRooms;
	}

	public void setNbRooms(Integer nbRooms) {
		this.nbRooms = nbRooms;
	}

	public int getRatings() {
		return ratings;
	}

	public void setRatings(int ratings) {
		this.ratings = ratings;
	}

	public List<RoomToSearch> getRooms() {
		return rooms;
	}

	public void setRooms(List<RoomToSearch> rooms) {
		this.rooms = rooms;
	}

	public Integer getNbNights() {
		return nbNights;
	}

	public void setNbNights(Integer nbNights) {
		this.nbNights = nbNights;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getCodeCityMR() {
		return codeCityMR;
	}

	public void setCodeCityMR(String codeCityMR) {
		this.codeCityMR = codeCityMR;
	}

	public String getCodeCityGG() {
		return codeCityGG;
	}

	public void setCodeCityGG(String codeCityGG) {
		this.codeCityGG = codeCityGG;
	}

	public String getCodeCityTBO() {
		return codeCityTBO;
	}

	public void setCodeCityTBO(String codeCityTBO) {
		this.codeCityTBO = codeCityTBO;
	}

	public String getDestinationText() {
		return destinationText;
	}

	public void setDestinationText(String destinationText) {
		this.destinationText = destinationText;
	}

	@Override
	public String toString() {
		return "SearchHotelRequest [checkIn=" + checkIn + ", checkOut=" + checkOut + ", cityCode=" + cityCode
				+ ", hotelName=" + hotelName + ", hotelCode=" + hotelCode + ", nbRooms=" + nbRooms + ", ratings="
				+ ratings + ", rooms=" + rooms + ", nbNights=" + nbNights + ", nationality=" + nationality
				+ ", codeCityMR=" + codeCityMR + ", codeCityGG=" + codeCityGG + ", codeCityTBO=" + codeCityTBO + "]";
	}

}