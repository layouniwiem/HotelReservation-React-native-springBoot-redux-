
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour HotelDetailsVerification complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="HotelDetailsVerification">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="Status" use="required" type="{http://TekTravel/HotelBookingApi}HotelDetailsVerificationStatus" />
 *       &lt;attribute name="Remarks" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "HotelDetailsVerification")
public class HotelDetailsVerification {

    @XmlAttribute(name = "Status", required = true)
    protected HotelDetailsVerificationStatus status;
    @XmlAttribute(name = "Remarks")
    protected String remarks;

    /**
     * Obtient la valeur de la propri�t� status.
     * 
     * @return
     *     possible object is
     *     {@link HotelDetailsVerificationStatus }
     *     
     */
    public HotelDetailsVerificationStatus getStatus() {
        return status;
    }

    /**
     * D�finit la valeur de la propri�t� status.
     * 
     * @param value
     *     allowed object is
     *     {@link HotelDetailsVerificationStatus }
     *     
     */
    public void setStatus(HotelDetailsVerificationStatus value) {
        this.status = value;
    }

    /**
     * Obtient la valeur de la propri�t� remarks.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * D�finit la valeur de la propri�t� remarks.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRemarks(String value) {
        this.remarks = value;
    }

}
