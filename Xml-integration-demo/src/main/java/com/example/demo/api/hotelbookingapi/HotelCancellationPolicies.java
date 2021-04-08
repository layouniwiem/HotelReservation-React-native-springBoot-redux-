
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour HotelCancellationPolicies complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="HotelCancellationPolicies">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="HotelNorms" type="{http://TekTravel/HotelBookingApi}ArrayOfString2" minOccurs="0"/>
 *         &lt;element name="CancelPolicies" type="{http://TekTravel/HotelBookingApi}CancelPolicies" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "HotelCancellationPolicies", propOrder = {
    "hotelNorms",
    "cancelPolicies"
})
public class HotelCancellationPolicies {

    @XmlElement(name = "HotelNorms")
    protected ArrayOfString2 hotelNorms;
    @XmlElement(name = "CancelPolicies")
    protected CancelPolicies cancelPolicies;

    /**
     * Obtient la valeur de la propri�t� hotelNorms.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfString2 }
     *     
     */
    public ArrayOfString2 getHotelNorms() {
        return hotelNorms;
    }

    /**
     * D�finit la valeur de la propri�t� hotelNorms.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfString2 }
     *     
     */
    public void setHotelNorms(ArrayOfString2 value) {
        this.hotelNorms = value;
    }

    /**
     * Obtient la valeur de la propri�t� cancelPolicies.
     * 
     * @return
     *     possible object is
     *     {@link CancelPolicies }
     *     
     */
    public CancelPolicies getCancelPolicies() {
        return cancelPolicies;
    }

    /**
     * D�finit la valeur de la propri�t� cancelPolicies.
     * 
     * @param value
     *     allowed object is
     *     {@link CancelPolicies }
     *     
     */
    public void setCancelPolicies(CancelPolicies value) {
        this.cancelPolicies = value;
    }

}