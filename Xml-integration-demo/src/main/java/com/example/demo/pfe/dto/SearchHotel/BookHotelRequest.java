package com.example.demo.pfe.dto.SearchHotel;

import java.math.BigDecimal;
import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;

import com.example.demo.api.hotelbookingapi.GuestType;
import com.example.demo.api.hotelbookingapi.PaymentModeType;
import com.example.demo.api.hotelbookingapi.SuppChargeType;


public class BookHotelRequest {
	private String clientReferenceNumber;
	private String guestNationality;
	private String addressLine1;
	private String addressLine2;
	private String countryCode;
	private String areaCode;
	private String phoneNo;
	private String email;
	private String city;
	private String state;
	private String country;
	private String zipCode;
	private boolean voucherBooking;
	private String cvvNumber;
	private boolean arrivingByFlight;
	private String flightName;
	private String flightNumber;
	private String hour;
	private String minutes;
	private String remarks;
	private String sessionId;
	private int noOfRooms;
	private int resultIndex;
	private String hotelCode;
	private String hotelName;
	private int roomIndex;
	private String roomTypeName;
	private String roomTypeCode;
	private String ratePlanCode;
	private BigDecimal roomFare;
	private BigDecimal roomTax;
	private BigDecimal totalFare;	
	private int requestId;
	private String requestType;
	private String remarkks;
	private String agencyReferenceNumber;
	private boolean restrictDuplicateBooking;
	private String checkInDate;
	private String checkOutDate;
	private String title;
	private String firstName;
	private String lastName;
	private int age;
	private boolean leadGuest;
	private GuestType guestType;
	private int guestInRoom;
	private PaymentModeType paymentModeType;
//	private int suppID;
//	private SuppChargeType suppChargeType;
//	private BigDecimal price;
//	private boolean suppIsSelected;

	public BookHotelRequest(String clientReferenceNumber, String guestNationality, String addressLine1,
			String addressLine2, String countryCode, String areaCode, String phoneNo, String email, String city,
			String state, String country, String zipCode, boolean voucherBooking, String cvvNumber,
			boolean arrivingByFlight, String flightName, String flightNumber, String hour, String minutes,
			String remarks, String sessionId, int noOfRooms, int resultIndex, String hotelCode, String hotelName,
			int roomIndex, String roomTypeName, String roomTypeCode, String ratePlanCode, BigDecimal roomFare,
			BigDecimal roomTax, BigDecimal totalFare, int requestId, String requestType, String remarkks,
			String agencyReferenceNumber, boolean restrictDuplicateBooking, String checkInDate, String checkOutDate,
			String title, String firstName, String lastName, int age, boolean leadGuest, GuestType guestType,
			int guestInRoom, PaymentModeType paymentModeType) {
		super();
		this.clientReferenceNumber = clientReferenceNumber;
		this.guestNationality = guestNationality;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.countryCode = countryCode;
		this.areaCode = areaCode;
		this.phoneNo = phoneNo;
		this.email = email;
		this.city = city;
		this.state = state;
		this.country = country;
		this.zipCode = zipCode;
		this.voucherBooking = voucherBooking;
		this.cvvNumber = cvvNumber;
		this.arrivingByFlight = arrivingByFlight;
		this.flightName = flightName;
		this.flightNumber = flightNumber;
		this.hour = hour;
		this.minutes = minutes;
		this.remarks = remarks;
		this.sessionId = sessionId;
		this.noOfRooms = noOfRooms;
		this.resultIndex = resultIndex;
		this.hotelCode = hotelCode;
		this.hotelName = hotelName;
		this.roomIndex = roomIndex;
		this.roomTypeName = roomTypeName;
		this.roomTypeCode = roomTypeCode;
		this.ratePlanCode = ratePlanCode;
		this.roomFare = roomFare;
		this.roomTax = roomTax;
		this.totalFare = totalFare;
		this.requestId = requestId;
		this.requestType = requestType;
		this.remarkks = remarkks;
		this.agencyReferenceNumber = agencyReferenceNumber;
		this.restrictDuplicateBooking = restrictDuplicateBooking;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.title = title;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.leadGuest = leadGuest;
		this.guestType = guestType;
		this.guestInRoom = guestInRoom;
		this.paymentModeType = paymentModeType;
	}
	public PaymentModeType getPaymentModeType() {
		return paymentModeType;
	}
	public void setPaymentModeType(PaymentModeType paymentModeType) {
		this.paymentModeType = paymentModeType;
	}
	public String getClientReferenceNumber() {
		return clientReferenceNumber;
	}
	public void setClientReferenceNumber(String clientReferenceNumber) {
		this.clientReferenceNumber = clientReferenceNumber;
	}
	public String getGuestNationality() {
		return guestNationality;
	}
	public void setGuestNationality(String guestNationality) {
		this.guestNationality = guestNationality;
	}
	public String getAddressLine1() {
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	public String getAddressLine2() {
		return addressLine2;
	}
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}
	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	public String getAreaCode() {
		return areaCode;
	}
	public void setAreaCode(String areaCode) {
		this.areaCode = areaCode;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public boolean isVoucherBooking() {
		return voucherBooking;
	}
	public void setVoucherBooking(boolean voucherBooking) {
		this.voucherBooking = voucherBooking;
	}
	public String getCvvNumber() {
		return cvvNumber;
	}
	public void setCvvNumber(String cvvNumber) {
		this.cvvNumber = cvvNumber;
	}
	public boolean isArrivingByFlight() {
		return arrivingByFlight;
	}
	public void setArrivingByFlight(boolean arrivingByFlight) {
		this.arrivingByFlight = arrivingByFlight;
	}
	public String getFlightName() {
		return flightName;
	}
	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}
	public String getFlightNumber() {
		return flightNumber;
	}
	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}
	public String getHour() {
		return hour;
	}
	public void setHour(String hour) {
		this.hour = hour;
	}
	public String getMinutes() {
		return minutes;
	}
	public void setMinutes(String minutes) {
		this.minutes = minutes;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	public int getNoOfRooms() {
		return noOfRooms;
	}
	public void setNoOfRooms(int noOfRooms) {
		this.noOfRooms = noOfRooms;
	}
	public int getResultIndex() {
		return resultIndex;
	}
	public void setResultIndex(int resultIndex) {
		this.resultIndex = resultIndex;
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
	public int getRoomIndex() {
		return roomIndex;
	}
	public void setRoomIndex(int roomIndex) {
		this.roomIndex = roomIndex;
	}
	public String getRoomTypeName() {
		return roomTypeName;
	}
	public void setRoomTypeName(String roomTypeName) {
		this.roomTypeName = roomTypeName;
	}
	public String getRoomTypeCode() {
		return roomTypeCode;
	}
	public void setRoomTypeCode(String roomTypeCode) {
		this.roomTypeCode = roomTypeCode;
	}
	public String getRatePlanCode() {
		return ratePlanCode;
	}
	public void setRatePlanCode(String ratePlanCode) {
		this.ratePlanCode = ratePlanCode;
	}
	public BigDecimal getRoomFare() {
		return roomFare;
	}
	public void setRoomFare(BigDecimal roomFare) {
		this.roomFare = roomFare;
	}
	public BigDecimal getRoomTax() {
		return roomTax;
	}
	public void setRoomTax(BigDecimal roomTax) {
		this.roomTax = roomTax;
	}
	public BigDecimal getTotalFare() {
		return totalFare;
	}
	public void setTotalFare(BigDecimal totalFare) {
		this.totalFare = totalFare;
	}
	public int getRequestId() {
		return requestId;
	}
	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}
	public String getRequestType() {
		return requestType;
	}
	public void setRequestType(String requestType) {
		this.requestType = requestType;
	}
	public String getRemarkks() {
		return remarkks;
	}
	public void setRemarkks(String remarkks) {
		this.remarkks = remarkks;
	}
	public String getAgencyReferenceNumber() {
		return agencyReferenceNumber;
	}
	public void setAgencyReferenceNumber(String agencyReferenceNumber) {
		this.agencyReferenceNumber = agencyReferenceNumber;
	}
	public boolean isRestrictDuplicateBooking() {
		return restrictDuplicateBooking;
	}
	public void setRestrictDuplicateBooking(boolean restrictDuplicateBooking) {
		this.restrictDuplicateBooking = restrictDuplicateBooking;
	}
	public String getCheckInDate() {
		return checkInDate;
	}
	public void setCheckInDate(String checkInDate) {
		this.checkInDate = checkInDate;
	}
	public String getCheckOutDate() {
		return checkOutDate;
	}
	public void setCheckOutDate(String checkOutDate) {
		this.checkOutDate = checkOutDate;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public boolean isLeadGuest() {
		return leadGuest;
	}
	public void setLeadGuest(boolean leadGuest) {
		this.leadGuest = leadGuest;
	}
	public GuestType getGuestType() {
		return guestType;
	}
	public void setGuestType(GuestType guestType) {
		this.guestType = guestType;
	}
	public int getGuestInRoom() {
		return guestInRoom;
	}
	public void setGuestInRoom(int guestInRoom) {
		this.guestInRoom = guestInRoom;
	}
	@Override
	public String toString() {
		return "BookHotelRequest [clientReferenceNumber=" + clientReferenceNumber + ", guestNationality="
				+ guestNationality + ", addressLine1=" + addressLine1 + ", addressLine2=" + addressLine2
				+ ", countryCode=" + countryCode + ", areaCode=" + areaCode + ", phoneNo=" + phoneNo + ", email="
				+ email + ", city=" + city + ", state=" + state + ", country=" + country + ", zipCode=" + zipCode
				+ ", voucherBooking=" + voucherBooking + ", cvvNumber=" + cvvNumber + ", arrivingByFlight="
				+ arrivingByFlight + ", flightName=" + flightName + ", flightNumber=" + flightNumber + ", hour=" + hour
				+ ", minutes=" + minutes + ", remarks=" + remarks + ", sessionId=" + sessionId + ", noOfRooms="
				+ noOfRooms + ", resultIndex=" + resultIndex + ", hotelCode=" + hotelCode + ", hotelName=" + hotelName
				+ ", roomIndex=" + roomIndex + ", roomTypeName=" + roomTypeName + ", roomTypeCode=" + roomTypeCode
				+ ", ratePlanCode=" + ratePlanCode + ", roomFare=" + roomFare + ", roomTax=" + roomTax + ", totalFare="
				+ totalFare + ", requestId=" + requestId + ", requestType=" + requestType + ", remarkks=" + remarkks
				+ ", agencyReferenceNumber=" + agencyReferenceNumber + ", restrictDuplicateBooking="
				+ restrictDuplicateBooking + ", checkInDate=" + checkInDate + ", checkOutDate=" + checkOutDate
				+ ", title=" + title + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", leadGuest=" + leadGuest + ", guestType=" + guestType + ", guestInRoom=" + guestInRoom
				+ ", paymentModeType=" + paymentModeType + "]";
	}

	
}
