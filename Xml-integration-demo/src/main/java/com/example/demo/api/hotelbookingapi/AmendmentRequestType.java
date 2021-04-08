package com.example.demo.api.hotelbookingapi;




import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour AmendmentRequestType complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="AmendmentRequestType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="Type" use="required" type="{http://TekTravel/HotelBookingApi}AmendmentType" />
 *       &lt;attribute name="PriceChange" use="required" type="{http://TekTravel/HotelBookingApi}PriceChange" />
 *       &lt;attribute name="Remarks" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AmendmentRequestType")
public class AmendmentRequestType {

    @XmlAttribute(name = "Type", required = true)
    protected AmendmentType type;
    @XmlAttribute(name = "PriceChange", required = true)
    protected PriceChange priceChange;
    @XmlAttribute(name = "Remarks")
    protected String remarks;

    /**
     * Obtient la valeur de la propri�t� type.
     * 
     * @return
     *     possible object is
     *     {@link AmendmentType }
     *     
     */
    public AmendmentType getType() {
        return type;
    }

    /**
     * D�finit la valeur de la propri�t� type.
     * 
     * @param value
     *     allowed object is
     *     {@link AmendmentType }
     *     
     */
    public void setType(AmendmentType value) {
        this.type = value;
    }

    /**
     * Obtient la valeur de la propri�t� priceChange.
     * 
     * @return
     *     possible object is
     *     {@link PriceChange }
     *     
     */
    public PriceChange getPriceChange() {
        return priceChange;
    }

    /**
     * D�finit la valeur de la propri�t� priceChange.
     * 
     * @param value
     *     allowed object is
     *     {@link PriceChange }
     *     
     */
    public void setPriceChange(PriceChange value) {
        this.priceChange = value;
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
