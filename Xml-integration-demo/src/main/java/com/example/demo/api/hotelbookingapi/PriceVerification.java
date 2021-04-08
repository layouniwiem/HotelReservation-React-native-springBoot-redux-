
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour PriceVerification complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="PriceVerification">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="HotelRooms" type="{http://TekTravel/HotelBookingApi}ArrayOfHotel_Room" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="Status" use="required" type="{http://TekTravel/HotelBookingApi}PriceVerificationStatus" />
 *       &lt;attribute name="PriceChanged" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="AvailableOnNewPrice" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PriceVerification", propOrder = {
    "hotelRooms"
})
public class PriceVerification {

    @XmlElement(name = "HotelRooms")
    protected ArrayOfHotelRoom hotelRooms;
    @XmlAttribute(name = "Status", required = true)
    protected PriceVerificationStatus status;
    @XmlAttribute(name = "PriceChanged", required = true)
    protected boolean priceChanged;
    @XmlAttribute(name = "AvailableOnNewPrice", required = true)
    protected boolean availableOnNewPrice;

    /**
     * Obtient la valeur de la propri�t� hotelRooms.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfHotelRoom }
     *     
     */
    public ArrayOfHotelRoom getHotelRooms() {
        return hotelRooms;
    }

    /**
     * D�finit la valeur de la propri�t� hotelRooms.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfHotelRoom }
     *     
     */
    public void setHotelRooms(ArrayOfHotelRoom value) {
        this.hotelRooms = value;
    }

    /**
     * Obtient la valeur de la propri�t� status.
     * 
     * @return
     *     possible object is
     *     {@link PriceVerificationStatus }
     *     
     */
    public PriceVerificationStatus getStatus() {
        return status;
    }

    /**
     * D�finit la valeur de la propri�t� status.
     * 
     * @param value
     *     allowed object is
     *     {@link PriceVerificationStatus }
     *     
     */
    public void setStatus(PriceVerificationStatus value) {
        this.status = value;
    }

    /**
     * Obtient la valeur de la propri�t� priceChanged.
     * 
     */
    public boolean isPriceChanged() {
        return priceChanged;
    }

    /**
     * D�finit la valeur de la propri�t� priceChanged.
     * 
     */
    public void setPriceChanged(boolean value) {
        this.priceChanged = value;
    }

    /**
     * Obtient la valeur de la propri�t� availableOnNewPrice.
     * 
     */
    public boolean isAvailableOnNewPrice() {
        return availableOnNewPrice;
    }

    /**
     * D�finit la valeur de la propri�t� availableOnNewPrice.
     * 
     */
    public void setAvailableOnNewPrice(boolean value) {
        this.availableOnNewPrice = value;
    }

}
