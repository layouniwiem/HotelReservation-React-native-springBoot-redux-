
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
 *         &lt;element name="HotelDetails" type="{http://TekTravel/HotelBookingApi}APIHotelDetails" minOccurs="0"/>
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
    "hotelDetails"
})
@XmlRootElement(name = "HotelDetailsResponse")
public class HotelDetailsResponse {

    @XmlElement(name = "Status")
    protected ResponseStatus status;
    @XmlElement(name = "HotelDetails")
    protected APIHotelDetails hotelDetails;

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
     * Obtient la valeur de la propri�t� hotelDetails.
     * 
     * @return
     *     possible object is
     *     {@link APIHotelDetails }
     *     
     */
    public APIHotelDetails getHotelDetails() {
        return hotelDetails;
    }

    /**
     * D�finit la valeur de la propri�t� hotelDetails.
     * 
     * @param value
     *     allowed object is
     *     {@link APIHotelDetails }
     *     
     */
    public void setHotelDetails(APIHotelDetails value) {
        this.hotelDetails = value;
    }

}
