package com.example.demo.api.hotelbookingapi;




import java.math.BigDecimal;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Classe Java pour APIBookingDetail complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="APIBookingDetail">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="HotelName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Rating" type="{http://TekTravel/HotelBookingApi}HotelInfoHotelRating"/>
 *         &lt;element name="AddressLine1" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="AddressLine2" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Map" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="City" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="CheckInDate" type="{http://www.w3.org/2001/XMLSchema}date"/>
 *         &lt;element name="CheckOutDate" type="{http://www.w3.org/2001/XMLSchema}date"/>
 *         &lt;element name="BookingDate" type="{http://www.w3.org/2001/XMLSchema}date"/>
 *         &lt;element name="HotelCancelPolicies" type="{http://TekTravel/HotelBookingApi}CancelPolicies" minOccurs="0"/>
 *         &lt;element name="HotelPolicyDetails" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="FlightInfo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="SpecialRequest" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Roomtype" type="{http://TekTravel/HotelBookingApi}ArrayOfRoomDetails" minOccurs="0"/>
 *         &lt;element name="AmendmentDetails" type="{http://TekTravel/HotelBookingApi}AmendmentDetails" minOccurs="0"/>
 *         &lt;element name="Currency" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="NoOfRooms" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="AgencyDetails" type="{http://TekTravel/HotelBookingApi}AgencyDetails" minOccurs="0"/>
 *         &lt;element name="AOTNumbers" type="{http://TekTravel/HotelBookingApi}AOTNumbers" minOccurs="0"/>
 *         &lt;element name="CityId" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="TripName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TBOHotelCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="CurrentCancellationCharges" type="{http://www.w3.org/2001/XMLSchema}decimal" minOccurs="0"/>
 *         &lt;element name="AppliedCancellationCharges" type="{http://www.w3.org/2001/XMLSchema}decimal" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="BookingId" use="required" type="{http://www.w3.org/2001/XMLSchema}int" />
 *       &lt;attribute name="AmendmentStatus" use="required" type="{http://TekTravel/HotelBookingApi}RequestStatus" />
 *       &lt;attribute name="BookingStatus" use="required" type="{http://TekTravel/HotelBookingApi}APIHotelBookingStatus" />
 *       &lt;attribute name="VoucherStatus" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="InvoiceNumber" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="SupplierReferenceNo" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="ConfirmationNo" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="HotelConfirmationNo" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "APIBookingDetail", propOrder = {
    "hotelName",
    "rating",
    "addressLine1",
    "addressLine2",
    "map",
    "city",
    "checkInDate",
    "checkOutDate",
    "bookingDate",
    "hotelCancelPolicies",
    "hotelPolicyDetails",
    "flightInfo",
    "specialRequest",
    "roomtype",
    "amendmentDetails",
    "currency",
    "noOfRooms",
    "agencyDetails",
    "aotNumbers",
    "cityId",
    "tripName",
    "tboHotelCode",
    "currentCancellationCharges",
    "appliedCancellationCharges"
})
public class APIBookingDetail {

    @XmlElement(name = "HotelName")
    protected String hotelName;
    @XmlElement(name = "Rating", required = true)
    @XmlSchemaType(name = "string")
    protected HotelInfoHotelRating rating;
    @XmlElement(name = "AddressLine1")
    protected String addressLine1;
    @XmlElement(name = "AddressLine2")
    protected String addressLine2;
    @XmlElement(name = "Map")
    protected String map;
    @XmlElement(name = "City")
    protected String city;
    @XmlElement(name = "CheckInDate", required = true)
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar checkInDate;
    @XmlElement(name = "CheckOutDate", required = true)
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar checkOutDate;
    @XmlElement(name = "BookingDate", required = true)
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar bookingDate;
    @XmlElement(name = "HotelCancelPolicies")
    protected CancelPolicies hotelCancelPolicies;
    @XmlElement(name = "HotelPolicyDetails")
    protected String hotelPolicyDetails;
    @XmlElement(name = "FlightInfo")
    protected String flightInfo;
    @XmlElement(name = "SpecialRequest")
    protected String specialRequest;
    @XmlElement(name = "Roomtype")
    protected ArrayOfRoomDetails roomtype;
    @XmlElement(name = "AmendmentDetails")
    protected AmendmentDetails amendmentDetails;
    @XmlElement(name = "Currency")
    protected String currency;
    @XmlElement(name = "NoOfRooms")
    protected int noOfRooms;
    @XmlElement(name = "AgencyDetails")
    protected AgencyDetails agencyDetails;
    @XmlElement(name = "AOTNumbers")
    protected AOTNumbers aotNumbers;
    @XmlElement(name = "CityId")
    protected int cityId;
    @XmlElement(name = "TripName")
    protected String tripName;
    @XmlElement(name = "TBOHotelCode")
    protected String tboHotelCode;
    @XmlElement(name = "CurrentCancellationCharges")
    protected BigDecimal currentCancellationCharges;
    @XmlElement(name = "AppliedCancellationCharges")
    protected BigDecimal appliedCancellationCharges;
    @XmlAttribute(name = "BookingId", required = true)
    protected int bookingId;
    @XmlAttribute(name = "AmendmentStatus", required = true)
    protected RequestStatus amendmentStatus;
    @XmlAttribute(name = "BookingStatus", required = true)
    protected APIHotelBookingStatus bookingStatus;
    @XmlAttribute(name = "VoucherStatus", required = true)
    protected boolean voucherStatus;
    @XmlAttribute(name = "InvoiceNumber")
    protected String invoiceNumber;
    @XmlAttribute(name = "SupplierReferenceNo")
    protected String supplierReferenceNo;
    @XmlAttribute(name = "ConfirmationNo")
    protected String confirmationNo;
    @XmlAttribute(name = "HotelConfirmationNo")
    protected String hotelConfirmationNo;

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
     * Obtient la valeur de la propri�t� rating.
     * 
     * @return
     *     possible object is
     *     {@link HotelInfoHotelRating }
     *     
     */
    public HotelInfoHotelRating getRating() {
        return rating;
    }

    /**
     * D�finit la valeur de la propri�t� rating.
     * 
     * @param value
     *     allowed object is
     *     {@link HotelInfoHotelRating }
     *     
     */
    public void setRating(HotelInfoHotelRating value) {
        this.rating = value;
    }

    /**
     * Obtient la valeur de la propri�t� addressLine1.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAddressLine1() {
        return addressLine1;
    }

    /**
     * D�finit la valeur de la propri�t� addressLine1.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAddressLine1(String value) {
        this.addressLine1 = value;
    }

    /**
     * Obtient la valeur de la propri�t� addressLine2.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAddressLine2() {
        return addressLine2;
    }

    /**
     * D�finit la valeur de la propri�t� addressLine2.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAddressLine2(String value) {
        this.addressLine2 = value;
    }

    /**
     * Obtient la valeur de la propri�t� map.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMap() {
        return map;
    }

    /**
     * D�finit la valeur de la propri�t� map.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMap(String value) {
        this.map = value;
    }

    /**
     * Obtient la valeur de la propri�t� city.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCity() {
        return city;
    }

    /**
     * D�finit la valeur de la propri�t� city.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCity(String value) {
        this.city = value;
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

    /**
     * Obtient la valeur de la propri�t� bookingDate.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getBookingDate() {
        return bookingDate;
    }

    /**
     * D�finit la valeur de la propri�t� bookingDate.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setBookingDate(XMLGregorianCalendar value) {
        this.bookingDate = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelCancelPolicies.
     * 
     * @return
     *     possible object is
     *     {@link CancelPolicies }
     *     
     */
    public CancelPolicies getHotelCancelPolicies() {
        return hotelCancelPolicies;
    }

    /**
     * D�finit la valeur de la propri�t� hotelCancelPolicies.
     * 
     * @param value
     *     allowed object is
     *     {@link CancelPolicies }
     *     
     */
    public void setHotelCancelPolicies(CancelPolicies value) {
        this.hotelCancelPolicies = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelPolicyDetails.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelPolicyDetails() {
        return hotelPolicyDetails;
    }

    /**
     * D�finit la valeur de la propri�t� hotelPolicyDetails.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelPolicyDetails(String value) {
        this.hotelPolicyDetails = value;
    }

    /**
     * Obtient la valeur de la propri�t� flightInfo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFlightInfo() {
        return flightInfo;
    }

    /**
     * D�finit la valeur de la propri�t� flightInfo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFlightInfo(String value) {
        this.flightInfo = value;
    }

    /**
     * Obtient la valeur de la propri�t� specialRequest.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSpecialRequest() {
        return specialRequest;
    }

    /**
     * D�finit la valeur de la propri�t� specialRequest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSpecialRequest(String value) {
        this.specialRequest = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomtype.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfRoomDetails }
     *     
     */
    public ArrayOfRoomDetails getRoomtype() {
        return roomtype;
    }

    /**
     * D�finit la valeur de la propri�t� roomtype.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfRoomDetails }
     *     
     */
    public void setRoomtype(ArrayOfRoomDetails value) {
        this.roomtype = value;
    }

    /**
     * Obtient la valeur de la propri�t� amendmentDetails.
     * 
     * @return
     *     possible object is
     *     {@link AmendmentDetails }
     *     
     */
    public AmendmentDetails getAmendmentDetails() {
        return amendmentDetails;
    }

    /**
     * D�finit la valeur de la propri�t� amendmentDetails.
     * 
     * @param value
     *     allowed object is
     *     {@link AmendmentDetails }
     *     
     */
    public void setAmendmentDetails(AmendmentDetails value) {
        this.amendmentDetails = value;
    }

    /**
     * Obtient la valeur de la propri�t� currency.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrency() {
        return currency;
    }

    /**
     * D�finit la valeur de la propri�t� currency.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrency(String value) {
        this.currency = value;
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
     * Obtient la valeur de la propri�t� agencyDetails.
     * 
     * @return
     *     possible object is
     *     {@link AgencyDetails }
     *     
     */
    public AgencyDetails getAgencyDetails() {
        return agencyDetails;
    }

    /**
     * D�finit la valeur de la propri�t� agencyDetails.
     * 
     * @param value
     *     allowed object is
     *     {@link AgencyDetails }
     *     
     */
    public void setAgencyDetails(AgencyDetails value) {
        this.agencyDetails = value;
    }

    /**
     * Obtient la valeur de la propri�t� aotNumbers.
     * 
     * @return
     *     possible object is
     *     {@link AOTNumbers }
     *     
     */
    public AOTNumbers getAOTNumbers() {
        return aotNumbers;
    }

    /**
     * D�finit la valeur de la propri�t� aotNumbers.
     * 
     * @param value
     *     allowed object is
     *     {@link AOTNumbers }
     *     
     */
    public void setAOTNumbers(AOTNumbers value) {
        this.aotNumbers = value;
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
     * Obtient la valeur de la propri�t� tripName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTripName() {
        return tripName;
    }

    /**
     * D�finit la valeur de la propri�t� tripName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTripName(String value) {
        this.tripName = value;
    }

    /**
     * Obtient la valeur de la propri�t� tboHotelCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTBOHotelCode() {
        return tboHotelCode;
    }

    /**
     * D�finit la valeur de la propri�t� tboHotelCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTBOHotelCode(String value) {
        this.tboHotelCode = value;
    }

    /**
     * Obtient la valeur de la propri�t� currentCancellationCharges.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getCurrentCancellationCharges() {
        return currentCancellationCharges;
    }

    /**
     * D�finit la valeur de la propri�t� currentCancellationCharges.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setCurrentCancellationCharges(BigDecimal value) {
        this.currentCancellationCharges = value;
    }

    /**
     * Obtient la valeur de la propri�t� appliedCancellationCharges.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getAppliedCancellationCharges() {
        return appliedCancellationCharges;
    }

    /**
     * D�finit la valeur de la propri�t� appliedCancellationCharges.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setAppliedCancellationCharges(BigDecimal value) {
        this.appliedCancellationCharges = value;
    }

    /**
     * Obtient la valeur de la propri�t� bookingId.
     * 
     */
    public int getBookingId() {
        return bookingId;
    }

    /**
     * D�finit la valeur de la propri�t� bookingId.
     * 
     */
    public void setBookingId(int value) {
        this.bookingId = value;
    }

    /**
     * Obtient la valeur de la propri�t� amendmentStatus.
     * 
     * @return
     *     possible object is
     *     {@link RequestStatus }
     *     
     */
    public RequestStatus getAmendmentStatus() {
        return amendmentStatus;
    }

    /**
     * D�finit la valeur de la propri�t� amendmentStatus.
     * 
     * @param value
     *     allowed object is
     *     {@link RequestStatus }
     *     
     */
    public void setAmendmentStatus(RequestStatus value) {
        this.amendmentStatus = value;
    }

    /**
     * Obtient la valeur de la propri�t� bookingStatus.
     * 
     * @return
     *     possible object is
     *     {@link APIHotelBookingStatus }
     *     
     */
    public APIHotelBookingStatus getBookingStatus() {
        return bookingStatus;
    }

    /**
     * D�finit la valeur de la propri�t� bookingStatus.
     * 
     * @param value
     *     allowed object is
     *     {@link APIHotelBookingStatus }
     *     
     */
    public void setBookingStatus(APIHotelBookingStatus value) {
        this.bookingStatus = value;
    }

    /**
     * Obtient la valeur de la propri�t� voucherStatus.
     * 
     */
    public boolean isVoucherStatus() {
        return voucherStatus;
    }

    /**
     * D�finit la valeur de la propri�t� voucherStatus.
     * 
     */
    public void setVoucherStatus(boolean value) {
        this.voucherStatus = value;
    }

    /**
     * Obtient la valeur de la propri�t� invoiceNumber.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    /**
     * D�finit la valeur de la propri�t� invoiceNumber.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvoiceNumber(String value) {
        this.invoiceNumber = value;
    }

    /**
     * Obtient la valeur de la propri�t� supplierReferenceNo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupplierReferenceNo() {
        return supplierReferenceNo;
    }

    /**
     * D�finit la valeur de la propri�t� supplierReferenceNo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupplierReferenceNo(String value) {
        this.supplierReferenceNo = value;
    }

    /**
     * Obtient la valeur de la propri�t� confirmationNo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getConfirmationNo() {
        return confirmationNo;
    }

    /**
     * D�finit la valeur de la propri�t� confirmationNo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setConfirmationNo(String value) {
        this.confirmationNo = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelConfirmationNo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelConfirmationNo() {
        return hotelConfirmationNo;
    }

    /**
     * D�finit la valeur de la propri�t� hotelConfirmationNo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelConfirmationNo(String value) {
        this.hotelConfirmationNo = value;
    }

}
