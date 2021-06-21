
package com.example.demo.api.hotelbookingapi;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.TimeZone;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import com.example.demo.pfe.dto.SearchHotel.SearchHotelRequest;



/**
 * <p>
 * Classe Java pour anonymous complex type.
 * 
 * <p>
 * Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette
 * classe.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CheckInDate" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="CheckOutDate" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="CountryName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="CityName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="CityId" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="IsNearBySearchAllowed" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="NoOfRooms" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="GuestNationality" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RoomGuests" type="{http://TekTravel/HotelBookingApi}ArrayOfRoomGuest" minOccurs="0"/>
 *         &lt;element name="PreferredCurrencyCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="ResultCount" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="Filters" type="{http://TekTravel/HotelBookingApi}Filters" minOccurs="0"/>
 *         &lt;element name="IsRoomInfoRequired" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="GeoCodes" type="{http://TekTravel/HotelBookingApi}GeoCodes" minOccurs="0"/>
 *         &lt;element name="ResponseTime" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = { "checkInDate", "checkOutDate", "countryName", "cityName", "cityId",
		"isNearBySearchAllowed", "noOfRooms", "guestNationality", "roomGuests", "preferredCurrencyCode", "resultCount",
		"filters", "isRoomInfoRequired", "geoCodes", "responseTime" })
@XmlRootElement(name = "HotelSearchRequest")
public class HotelSearchRequest {

	@XmlElement(name = "CheckInDate", required = true)
	@XmlSchemaType(name = "dateTime")
	protected XMLGregorianCalendar checkInDate;
	@XmlElement(name = "CheckOutDate", required = true)
	@XmlSchemaType(name = "dateTime")
	protected XMLGregorianCalendar checkOutDate;
	@XmlElement(name = "CountryName")
	protected String countryName;
	@XmlElement(name = "CityName")
	protected String cityName;
	@XmlElement(name = "CityId")
	protected int cityId;
	@XmlElement(name = "IsNearBySearchAllowed")
	protected boolean isNearBySearchAllowed;
	@XmlElement(name = "NoOfRooms")
	protected int noOfRooms;
	@XmlElement(name = "GuestNationality")
	protected String guestNationality;
	@XmlElement(name = "RoomGuests")
	protected ArrayOfRoomGuest roomGuests;
	@XmlElement(name = "PreferredCurrencyCode")
	protected String preferredCurrencyCode;
	@XmlElement(name = "ResultCount")
	protected int resultCount;
	@XmlElement(name = "Filters")
	protected Filters filters;
	@XmlElement(name = "IsRoomInfoRequired")
	protected String isRoomInfoRequired;
	@XmlElement(name = "GeoCodes")
	protected GeoCodes geoCodes;
	@XmlElement(name = "ResponseTime")
	protected int responseTime;

	public HotelSearchRequest() {
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
	public HotelSearchRequest(SearchHotelRequest requestHotel) {
    	// TODO Auto-generated constructor stub
    	XMLGregorianCalendar xmlGregCalCheckIn,xmlGregCalCheckOut;
    	try {
    		
    		xmlGregCalCheckIn = getXMLGregorianCalendar(requestHotel.getCheckIn());
    		xmlGregCalCheckOut = getXMLGregorianCalendar(requestHotel.getCheckOut());
    		this.checkInDate = xmlGregCalCheckIn;
    		this.checkOutDate = xmlGregCalCheckOut;
    		this.cityId =  Integer.parseInt(requestHotel.getCodeCityTBO());
    		this.noOfRooms = requestHotel.getRooms().size();
    		this.guestNationality = requestHotel.getNationality();
    		this.filters = new Filters(requestHotel);
    		this.resultCount = 0;
    		this.responseTime = 15;
    		this.roomGuests = new ArrayOfRoomGuest(requestHotel);
    	} catch (Exception e) {
    		// TODO Auto-generated catch block
    		e.printStackTrace();
    	}
    	
    }

	/**
	 * Obtient la valeur de la propri�t� checkInDate.
	 * 
	 * @return possible object is {@link XMLGregorianCalendar }
	 * 
	 */
	public XMLGregorianCalendar getCheckInDate() {
		return checkInDate;
	}

	/**
	 * D�finit la valeur de la propri�t� checkInDate.
	 * 
	 * @param value allowed object is {@link XMLGregorianCalendar }
	 * 
	 */
	public void setCheckInDate(XMLGregorianCalendar value) {
		this.checkInDate = value;
	}

	/**
	 * Obtient la valeur de la propri�t� checkOutDate.
	 * 
	 * @return possible object is {@link XMLGregorianCalendar }
	 * 
	 */
	public XMLGregorianCalendar getCheckOutDate() {
		return checkOutDate;
	}

	/**
	 * D�finit la valeur de la propri�t� checkOutDate.
	 * 
	 * @param value allowed object is {@link XMLGregorianCalendar }
	 * 
	 */
	public void setCheckOutDate(XMLGregorianCalendar value) {
		this.checkOutDate = value;
	}

	/**
	 * Obtient la valeur de la propri�t� countryName.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCountryName() {
		return countryName;
	}

	/**
	 * D�finit la valeur de la propri�t� countryName.
	 * 
	 * @param value allowed object is {@link String }
	 * 
	 */
	public void setCountryName(String value) {
		this.countryName = value;
	}

	/**
	 * Obtient la valeur de la propri�t� cityName.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCityName() {
		return cityName;
	}

	/**
	 * D�finit la valeur de la propri�t� cityName.
	 * 
	 * @param value allowed object is {@link String }
	 * 
	 */
	public void setCityName(String value) {
		this.cityName = value;
	}

	/**
	 * Obtient la valeur de la propri�t� cityId.
	 * 
	 */
	public int getCityId() {
		return cityId;
	}

	/**
	 * D�finit la valeur de la propri�t� cityId.
	 * 
	 */
	public void setCityId(int value) {
		this.cityId = value;
	}

	/**
	 * Obtient la valeur de la propri�t� isNearBySearchAllowed.
	 * 
	 */
	public boolean isIsNearBySearchAllowed() {
		return isNearBySearchAllowed;
	}

	/**
	 * D�finit la valeur de la propri�t� isNearBySearchAllowed.
	 * 
	 */
	public void setIsNearBySearchAllowed(boolean value) {
		this.isNearBySearchAllowed = value;
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
	 * Obtient la valeur de la propri�t� guestNationality.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getGuestNationality() {
		return guestNationality;
	}

	/**
	 * D�finit la valeur de la propri�t� guestNationality.
	 * 
	 * @param value allowed object is {@link String }
	 * 
	 */
	public void setGuestNationality(String value) {
		this.guestNationality = value;
	}

	/**
	 * Obtient la valeur de la propri�t� roomGuests.
	 * 
	 * @return possible object is {@link ArrayOfRoomGuest }
	 * 
	 */
	public ArrayOfRoomGuest getRoomGuests() {
		return roomGuests;
	}

	/**
	 * D�finit la valeur de la propri�t� roomGuests.
	 * 
	 * @param value allowed object is {@link ArrayOfRoomGuest }
	 * 
	 */
	public void setRoomGuests(ArrayOfRoomGuest value) {
		this.roomGuests = value;
	}

	/**
	 * Obtient la valeur de la propri�t� preferredCurrencyCode.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getPreferredCurrencyCode() {
		return preferredCurrencyCode;
	}

	/**
	 * D�finit la valeur de la propri�t� preferredCurrencyCode.
	 * 
	 * @param value allowed object is {@link String }
	 * 
	 */
	public void setPreferredCurrencyCode(String value) {
		this.preferredCurrencyCode = value;
	}

	/**
	 * Obtient la valeur de la propri�t� resultCount.
	 * 
	 */
	public int getResultCount() {
		return resultCount;
	}

	/**
	 * D�finit la valeur de la propri�t� resultCount.
	 * 
	 */
	public void setResultCount(int value) {
		this.resultCount = value;
	}

	/**
	 * Obtient la valeur de la propri�t� filters.
	 * 
	 * @return possible object is {@link Filters }
	 * 
	 */
	public Filters getFilters() {
		return filters;
	}

	/**
	 * D�finit la valeur de la propri�t� filters.
	 * 
	 * @param value allowed object is {@link Filters }
	 * 
	 */
	public void setFilters(Filters value) {
		this.filters = value;
	}

	/**
	 * Obtient la valeur de la propri�t� isRoomInfoRequired.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getIsRoomInfoRequired() {
		return isRoomInfoRequired;
	}

	/**
	 * D�finit la valeur de la propri�t� isRoomInfoRequired.
	 * 
	 * @param value allowed object is {@link String }
	 * 
	 */
	public void setIsRoomInfoRequired(String value) {
		this.isRoomInfoRequired = value;
	}

	/**
	 * Obtient la valeur de la propri�t� geoCodes.
	 * 
	 * @return possible object is {@link GeoCodes }
	 * 
	 */
	public GeoCodes getGeoCodes() {
		return geoCodes;
	}

	/**
	 * D�finit la valeur de la propri�t� geoCodes.
	 * 
	 * @param value allowed object is {@link GeoCodes }
	 * 
	 */
	public void setGeoCodes(GeoCodes value) {
		this.geoCodes = value;
	}

	/**
	 * Obtient la valeur de la propri�t� responseTime.
	 * 
	 */
	public int getResponseTime() {
		return responseTime;
	}

	/**
	 * D�finit la valeur de la propri�t� responseTime.
	 * 
	 */
	public void setResponseTime(int value) {
		this.responseTime = value;
	}

	@Override
	public String toString() {
		return "HotelSearchRequest [checkInDate=" + checkInDate + ", checkOutDate=" + checkOutDate + ", countryName="
				+ countryName + ", cityName=" + cityName + ", cityId=" + cityId + ", isNearBySearchAllowed="
				+ isNearBySearchAllowed + ", noOfRooms=" + noOfRooms + ", guestNationality=" + guestNationality
				+ ", roomGuests=" + roomGuests + ", preferredCurrencyCode=" + preferredCurrencyCode + ", resultCount="
				+ resultCount + ", filters=" + filters + ", isRoomInfoRequired=" + isRoomInfoRequired + ", geoCodes="
				+ geoCodes + ", responseTime=" + responseTime + "]";
	}

}
