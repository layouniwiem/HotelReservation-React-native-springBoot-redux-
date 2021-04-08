
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour RoomGuest complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="RoomGuest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ChildAge" type="{http://TekTravel/HotelBookingApi}ArrayOfInt" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="AdultCount" use="required" type="{http://www.w3.org/2001/XMLSchema}int" />
 *       &lt;attribute name="ChildCount" use="required" type="{http://www.w3.org/2001/XMLSchema}int" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RoomGuest", propOrder = {
    "childAge"
})
public class RoomGuest {

    @XmlElement(name = "ChildAge")
    protected ArrayOfInt childAge;
    @XmlAttribute(name = "AdultCount", required = true)
    protected int adultCount;
    @XmlAttribute(name = "ChildCount", required = true)
    protected int childCount;

    /**
     * Obtient la valeur de la propri�t� childAge.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfInt }
     *     
     */
    public ArrayOfInt getChildAge() {
        return childAge;
    }

    /**
     * D�finit la valeur de la propri�t� childAge.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfInt }
     *     
     */
    public void setChildAge(ArrayOfInt value) {
        this.childAge = value;
    }

    /**
     * Obtient la valeur de la propri�t� adultCount.
     * 
     */
    public int getAdultCount() {
        return adultCount;
    }

    /**
     * D�finit la valeur de la propri�t� adultCount.
     * 
     */
    public void setAdultCount(int value) {
        this.adultCount = value;
    }

    /**
     * Obtient la valeur de la propri�t� childCount.
     * 
     */
    public int getChildCount() {
        return childCount;
    }

    /**
     * D�finit la valeur de la propri�t� childCount.
     * 
     */
    public void setChildCount(int value) {
        this.childCount = value;
    }

	@Override
	public String toString() {
		return "RoomGuest [childAge=" + childAge + ", adultCount=" + adultCount + ", childCount=" + childCount + "]";
	}

    
    
}
