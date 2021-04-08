
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;


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
 *         &lt;element name="Status" type="{http://TekTravel/HotelBookingApi}ResponseStatus" minOccurs="0"/>
 *         &lt;element name="BookingStatus" type="{http://TekTravel/HotelBookingApi}APIHotelBookingStatus"/>
 *         &lt;element name="BookingId" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="ConfirmationNo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TripId" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="SupplierReferenceNo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="PriceChange" type="{http://TekTravel/HotelBookingApi}PriceChangeStatus" minOccurs="0"/>
 *         &lt;element name="SupplierConfirmationNo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
    "status",
    "bookingStatus",
    "bookingId",
    "confirmationNo",
    "tripId",
    "supplierReferenceNo",
    "priceChange",
    "supplierConfirmationNo"
})
@XmlRootElement(name = "HotelBookResponse")
public class HotelBookResponse {

    @XmlElement(name = "Status")
    protected ResponseStatus status;
    @XmlElement(name = "BookingStatus", required = true)
    @XmlSchemaType(name = "string")
    protected APIHotelBookingStatus bookingStatus;
    @XmlElement(name = "BookingId")
    protected int bookingId;
    @XmlElement(name = "ConfirmationNo")
    protected String confirmationNo;
    @XmlElement(name = "TripId")
    protected int tripId;
    @XmlElement(name = "SupplierReferenceNo")
    protected String supplierReferenceNo;
    @XmlElement(name = "PriceChange")
    protected PriceChangeStatus priceChange;
    @XmlElement(name = "SupplierConfirmationNo")
    protected String supplierConfirmationNo;

    /**
     * Obtient la valeur de la propri�t� status.
     * 
     * @return
     *     possible object is
     *     {@link ResponseStatus }
     *     
     */
    public ResponseStatus getStatus() {
        return status;
    }

    /**
     * D�finit la valeur de la propri�t� status.
     * 
     * @param value
     *     allowed object is
     *     {@link ResponseStatus }
     *     
     */
    public void setStatus(ResponseStatus value) {
        this.status = value;
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
     * Obtient la valeur de la propri�t� tripId.
     * 
     */
    public int getTripId() {
        return tripId;
    }

    /**
     * D�finit la valeur de la propri�t� tripId.
     * 
     */
    public void setTripId(int value) {
        this.tripId = value;
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
     * Obtient la valeur de la propri�t� priceChange.
     * 
     * @return
     *     possible object is
     *     {@link PriceChangeStatus }
     *     
     */
    public PriceChangeStatus getPriceChange() {
        return priceChange;
    }

    /**
     * D�finit la valeur de la propri�t� priceChange.
     * 
     * @param value
     *     allowed object is
     *     {@link PriceChangeStatus }
     *     
     */
    public void setPriceChange(PriceChangeStatus value) {
        this.priceChange = value;
    }

    /**
     * Obtient la valeur de la propri�t� supplierConfirmationNo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupplierConfirmationNo() {
        return supplierConfirmationNo;
    }

    /**
     * D�finit la valeur de la propri�t� supplierConfirmationNo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupplierConfirmationNo(String value) {
        this.supplierConfirmationNo = value;
    }

}
