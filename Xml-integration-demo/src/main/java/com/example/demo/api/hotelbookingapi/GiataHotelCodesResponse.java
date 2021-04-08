
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
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
 *         &lt;element name="Hotels" type="{http://TekTravel/HotelBookingApi}ArrayOfGiataHotels" minOccurs="0"/>
 *         &lt;element name="HotelDetails" type="{http://TekTravel/HotelBookingApi}ArrayOfAPIHotelDetails" minOccurs="0"/>
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
    "hotels",
    "hotelDetails"
})
@XmlRootElement(name = "GiataHotelCodesResponse")
public class GiataHotelCodesResponse {

    @XmlElement(name = "Status")
    protected ResponseStatus status;
    @XmlElement(name = "Hotels")
    protected ArrayOfGiataHotels hotels;
    @XmlElement(name = "HotelDetails")
    protected ArrayOfAPIHotelDetails hotelDetails;

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
     * Obtient la valeur de la propri�t� hotels.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfGiataHotels }
     *     
     */
    public ArrayOfGiataHotels getHotels() {
        return hotels;
    }

    /**
     * D�finit la valeur de la propri�t� hotels.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfGiataHotels }
     *     
     */
    public void setHotels(ArrayOfGiataHotels value) {
        this.hotels = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelDetails.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfAPIHotelDetails }
     *     
     */
    public ArrayOfAPIHotelDetails getHotelDetails() {
        return hotelDetails;
    }

    /**
     * D�finit la valeur de la propri�t� hotelDetails.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfAPIHotelDetails }
     *     
     */
    public void setHotelDetails(ArrayOfAPIHotelDetails value) {
        this.hotelDetails = value;
    }

}
