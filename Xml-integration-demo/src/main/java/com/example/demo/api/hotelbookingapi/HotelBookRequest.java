
package com.example.demo.api.hotelbookingapi;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.TimeZone;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;


/**
 * <p>Classe Java pour anonymous complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ClientReferenceNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="GuestNationality" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Guests" type="{http://TekTravel/HotelBookingApi}ArrayOfGuest" minOccurs="0"/>
 *         &lt;element name="AddressInfo" type="{http://TekTravel/HotelBookingApi}AddressInfo" minOccurs="0"/>
 *         &lt;element name="PaymentInfo" type="{http://TekTravel/HotelBookingApi}PaymentInfo" minOccurs="0"/>
 *         &lt;element name="SessionId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="FlightInfo" type="{http://TekTravel/HotelBookingApi}FlightInfo" minOccurs="0"/>
 *         &lt;element name="NoOfRooms" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="ResultIndex" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="HotelCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="HotelName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="HotelRooms" type="{http://TekTravel/HotelBookingApi}ArrayOfRequestedRooms" minOccurs="0"/>
 *         &lt;element name="SpecialRequests" type="{http://TekTravel/HotelBookingApi}ArrayOfSpecialRequest" minOccurs="0"/>
 *         &lt;element name="AgencyReferenceNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RestrictDuplicateBooking" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="CheckInDate" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="CheckOutDate" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "clientReferenceNumber",
    "guestNationality",
    "guests",
    "addressInfo",
    "paymentInfo",
    "sessionId",
    "flightInfo",
    "noOfRooms",
    "resultIndex",
    "hotelCode",
    "hotelName",
    "hotelRooms",
    "specialRequests",
    "agencyReferenceNumber",
    "restrictDuplicateBooking",
    "checkInDate",
    "checkOutDate"
})
@XmlRootElement(name = "HotelBookRequest")
public class HotelBookRequest {

    @XmlElement(name = "ClientReferenceNumber")
    protected String clientReferenceNumber;
    @XmlElement(name = "GuestNationality")
    protected String guestNationality;
    @XmlElement(name = "Guests")
    protected ArrayOfGuest guests;
    @XmlElement(name = "AddressInfo")
    protected AddressInfo addressInfo;
    @XmlElement(name = "PaymentInfo")
    protected PaymentInfo paymentInfo;
    @XmlElement(name = "SessionId")
    protected String sessionId;
    @XmlElement(name = "FlightInfo")
    protected FlightInfo flightInfo;
    @XmlElement(name = "NoOfRooms")
    protected int noOfRooms;
    @XmlElement(name = "ResultIndex")
    protected int resultIndex;
    @XmlElement(name = "HotelCode")
    protected String hotelCode;
    @XmlElement(name = "HotelName")
    protected String hotelName;
    @XmlElement(name = "HotelRooms")
    protected ArrayOfRequestedRooms hotelRooms;
    @XmlElement(name = "SpecialRequests")
    protected ArrayOfSpecialRequest specialRequests;
    @XmlElement(name = "AgencyReferenceNumber")
    protected String agencyReferenceNumber;
    @XmlElement(name = "RestrictDuplicateBooking")
    protected boolean restrictDuplicateBooking;
    @XmlElement(name = "CheckInDate", required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar checkInDate;
    @XmlElement(name = "CheckOutDate", required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar checkOutDate;
    public HotelBookRequest(BookHotelRequest request) {
    	XMLGregorianCalendar xmlGregCalCheckIn,xmlGregCalCheckOut;
    	try {
    	this.clientReferenceNumber = request.getClientReferenceNumber();
		this.guestNationality = request.getGuestNationality();
		this.guests =new ArrayOfGuest(request) ;
		this.addressInfo = new AddressInfo(request);
		this.paymentInfo = new PaymentInfo(request);
		this.sessionId = request.getSessionId();
		this.flightInfo = new FlightInfo(request);
		this.noOfRooms = request.getNoOfRooms();
		this.resultIndex = request.getResultIndex();
		this.hotelCode = request.getHotelCode();
		this.hotelName = request.getHotelName();
		this.hotelRooms = new ArrayOfRequestedRooms(request);
		this.specialRequests = new ArrayOfSpecialRequest(request);
		this.agencyReferenceNumber = request.getAgencyReferenceNumber();
		this.restrictDuplicateBooking = request.isRestrictDuplicateBooking();
		xmlGregCalCheckIn = getXMLGregorianCalendar(request.getCheckInDate());
		xmlGregCalCheckOut = getXMLGregorianCalendar(request.getCheckOutDate());

		this.checkInDate = xmlGregCalCheckIn;
		this.checkOutDate = xmlGregCalCheckOut;
	}	 catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}}
    public HotelBookRequest() {
		// TODO Auto-generated constructor stub
	}
	public static XMLGregorianCalendar getXMLGregorianCalendar(String date) throws Exception {
		XMLGregorianCalendar xmlCalender = null;
		GregorianCalendar calender = new GregorianCalendar();
		calender.setTime(stringToJavaDate(date));
		xmlCalender = DatatypeFactory.newInstance().newXMLGregorianCalendar(calender);
		return xmlCalender.normalize();
	}

	public static Date stringToJavaDate(String sDate) throws Exception {
		SimpleDateFormat timeZone = new SimpleDateFormat("yyyy-MM-dd");
		timeZone.setTimeZone(TimeZone.getTimeZone("UTC"));
		return timeZone.parse(sDate);
	}

    /**
     * Obtient la valeur de la propri�t� clientReferenceNumber.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getClientReferenceNumber() {
        return clientReferenceNumber;
    }

    /**
     * D�finit la valeur de la propri�t� clientReferenceNumber.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setClientReferenceNumber(String value) {
        this.clientReferenceNumber = value;
    }

    /**
     * Obtient la valeur de la propri�t� guestNationality.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getGuestNationality() {
        return guestNationality;
    }

    /**
     * D�finit la valeur de la propri�t� guestNationality.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setGuestNationality(String value) {
        this.guestNationality = value;
    }

    /**
     * Obtient la valeur de la propri�t� guests.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfGuest }
     *     
     */
    public ArrayOfGuest getGuests() {
        return guests;
    }

    /**
     * D�finit la valeur de la propri�t� guests.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfGuest }
     *     
     */
    public void setGuests(ArrayOfGuest value) {
        this.guests = value;
    }

    /**
     * Obtient la valeur de la propri�t� addressInfo.
     * 
     * @return
     *     possible object is
     *     {@link AddressInfo }
     *     
     */
    public AddressInfo getAddressInfo() {
        return addressInfo;
    }

    /**
     * D�finit la valeur de la propri�t� addressInfo.
     * 
     * @param value
     *     allowed object is
     *     {@link AddressInfo }
     *     
     */
    public void setAddressInfo(AddressInfo value) {
        this.addressInfo = value;
    }

    /**
     * Obtient la valeur de la propri�t� paymentInfo.
     * 
     * @return
     *     possible object is
     *     {@link PaymentInfo }
     *     
     */
    public PaymentInfo getPaymentInfo() {
        return paymentInfo;
    }

    /**
     * D�finit la valeur de la propri�t� paymentInfo.
     * 
     * @param value
     *     allowed object is
     *     {@link PaymentInfo }
     *     
     */
    public void setPaymentInfo(PaymentInfo value) {
        this.paymentInfo = value;
    }

    /**
     * Obtient la valeur de la propri�t� sessionId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSessionId() {
        return sessionId;
    }

    /**
     * D�finit la valeur de la propri�t� sessionId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSessionId(String value) {
        this.sessionId = value;
    }

    /**
     * Obtient la valeur de la propri�t� flightInfo.
     * 
     * @return
     *     possible object is
     *     {@link FlightInfo }
     *     
     */
    public FlightInfo getFlightInfo() {
        return flightInfo;
    }

    /**
     * D�finit la valeur de la propri�t� flightInfo.
     * 
     * @param value
     *     allowed object is
     *     {@link FlightInfo }
     *     
     */
    public void setFlightInfo(FlightInfo value) {
        this.flightInfo = value;
    }

    /**
     * Obtient la valeur de la propri�t� noOfRooms.
     * 
     */
    public int getNoOfRooms() {
        return noOfRooms;
    }

    /**
     * D�finit la valeur de la propri�t� noOfRooms.
     * 
     */
    public void setNoOfRooms(int value) {
        this.noOfRooms = value;
    }

    /**
     * Obtient la valeur de la propri�t� resultIndex.
     * 
     */
    public int getResultIndex() {
        return resultIndex;
    }

    /**
     * D�finit la valeur de la propri�t� resultIndex.
     * 
     */
    public void setResultIndex(int value) {
        this.resultIndex = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelCode() {
        return hotelCode;
    }

    /**
     * D�finit la valeur de la propri�t� hotelCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelCode(String value) {
        this.hotelCode = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelName() {
        return hotelName;
    }

    /**
     * D�finit la valeur de la propri�t� hotelName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelName(String value) {
        this.hotelName = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelRooms.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfRequestedRooms }
     *     
     */
    public ArrayOfRequestedRooms getHotelRooms() {
        return hotelRooms;
    }

    /**
     * D�finit la valeur de la propri�t� hotelRooms.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfRequestedRooms }
     *     
     */
    public void setHotelRooms(ArrayOfRequestedRooms value) {
        this.hotelRooms = value;
    }

    /**
     * Obtient la valeur de la propri�t� specialRequests.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfSpecialRequest }
     *     
     */
    public ArrayOfSpecialRequest getSpecialRequests() {
        return specialRequests;
    }

    /**
     * D�finit la valeur de la propri�t� specialRequests.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfSpecialRequest }
     *     
     */
    public void setSpecialRequests(ArrayOfSpecialRequest value) {
        this.specialRequests = value;
    }

    /**
     * Obtient la valeur de la propri�t� agencyReferenceNumber.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAgencyReferenceNumber() {
        return agencyReferenceNumber;
    }

    /**
     * D�finit la valeur de la propri�t� agencyReferenceNumber.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAgencyReferenceNumber(String value) {
        this.agencyReferenceNumber = value;
    }

    /**
     * Obtient la valeur de la propri�t� restrictDuplicateBooking.
     * 
     */
    public boolean isRestrictDuplicateBooking() {
        return restrictDuplicateBooking;
    }

    /**
     * D�finit la valeur de la propri�t� restrictDuplicateBooking.
     * 
     */
    public void setRestrictDuplicateBooking(boolean value) {
        this.restrictDuplicateBooking = value;
    }

    /**
     * Obtient la valeur de la propri�t� checkInDate.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getCheckInDate() {
        return checkInDate;
    }

    /**
     * D�finit la valeur de la propri�t� checkInDate.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setCheckInDate(XMLGregorianCalendar value) {
        this.checkInDate = value;
    }

    /**
     * Obtient la valeur de la propri�t� checkOutDate.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getCheckOutDate() {
        return checkOutDate;
    }

    /**
     * D�finit la valeur de la propri�t� checkOutDate.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setCheckOutDate(XMLGregorianCalendar value) {
        this.checkOutDate = value;
    }

}
