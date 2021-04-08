
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


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
 *         &lt;element name="Filters" type="{http://TekTravel/HotelBookingApi}HotelSearchWithRoomsFilters" minOccurs="0"/>
 *         &lt;element name="ResponseTime" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="IsCancellationPolicyRequired" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
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
    "checkInDate",
    "checkOutDate",
    "countryName",
    "cityName",
    "cityId",
    "isNearBySearchAllowed",
    "noOfRooms",
    "guestNationality",
    "roomGuests",
    "preferredCurrencyCode",
    "resultCount",
    "filters",
    "responseTime",
    "isCancellationPolicyRequired"
})
@XmlRootElement(name = "HotelSearchWithRoomsRequest")
public class HotelSearchWithRoomsRequest {

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
    protected HotelSearchWithRoomsFilters filters;
    @XmlElement(name = "ResponseTime")
    protected int responseTime;
    @XmlElement(name = "IsCancellationPolicyRequired")
    protected boolean isCancellationPolicyRequired;

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

    /**
     * Obtient la valeur de la propri�t� countryName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCountryName() {
        return countryName;
    }

    /**
     * D�finit la valeur de la propri�t� countryName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCountryName(String value) {
        this.countryName = value;
    }

    /**
     * Obtient la valeur de la propri�t� cityName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCityName() {
        return cityName;
    }

    /**
     * D�finit la valeur de la propri�t� cityName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
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
     * Obtient la valeur de la propri�t� roomGuests.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfRoomGuest }
     *     
     */
    public ArrayOfRoomGuest getRoomGuests() {
        return roomGuests;
    }

    /**
     * D�finit la valeur de la propri�t� roomGuests.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfRoomGuest }
     *     
     */
    public void setRoomGuests(ArrayOfRoomGuest value) {
        this.roomGuests = value;
    }

    /**
     * Obtient la valeur de la propri�t� preferredCurrencyCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPreferredCurrencyCode() {
        return preferredCurrencyCode;
    }

    /**
     * D�finit la valeur de la propri�t� preferredCurrencyCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
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
     * @return
     *     possible object is
     *     {@link HotelSearchWithRoomsFilters }
     *     
     */
    public HotelSearchWithRoomsFilters getFilters() {
        return filters;
    }

    /**
     * D�finit la valeur de la propri�t� filters.
     * 
     * @param value
     *     allowed object is
     *     {@link HotelSearchWithRoomsFilters }
     *     
     */
    public void setFilters(HotelSearchWithRoomsFilters value) {
        this.filters = value;
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

    /**
     * Obtient la valeur de la propri�t� isCancellationPolicyRequired.
     * 
     */
    public boolean isIsCancellationPolicyRequired() {
        return isCancellationPolicyRequired;
    }

    /**
     * D�finit la valeur de la propri�t� isCancellationPolicyRequired.
     * 
     */
    public void setIsCancellationPolicyRequired(boolean value) {
        this.isCancellationPolicyRequired = value;
    }

}
