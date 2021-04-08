package com.example.demo.pfe.dto.SearchHotel;

import javax.xml.bind.annotation.XmlElement;

public class BookingHotelDetailRequest {
    private int bookingId;
    private String confirmationNo;
    private String clientReferenceNumber;
	public BookingHotelDetailRequest(int bookingId, String confirmationNo, String clientReferenceNumber) {
		super();
		this.bookingId = bookingId;
		this.confirmationNo = confirmationNo;
		this.clientReferenceNumber = clientReferenceNumber;
	}
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public String getConfirmationNo() {
		return confirmationNo;
	}
	public void setConfirmationNo(String confirmationNo) {
		this.confirmationNo = confirmationNo;
	}
	public String getClientReferenceNumber() {
		return clientReferenceNumber;
	}
	public void setClientReferenceNumber(String clientReferenceNumber) {
		this.clientReferenceNumber = clientReferenceNumber;
	}
	@Override
	public String toString() {
		return "BookingHotelDetailRequest [bookingId=" + bookingId + ", confirmationNo=" + confirmationNo
				+ ", clientReferenceNumber=" + clientReferenceNumber + "]";
	}


}
