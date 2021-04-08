
package com.example.demo.api.hotelbookingapi;

import java.math.BigDecimal;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Supp_info complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Supp_info">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="Type" use="required" type="{http://TekTravel/HotelBookingApi}SupplementType" />
 *       &lt;attribute name="SuppName" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="SuppChargeType" use="required" type="{http://TekTravel/HotelBookingApi}SupmtChargeType" />
 *       &lt;attribute name="Price" use="required" type="{http://www.w3.org/2001/XMLSchema}decimal" />
 *       &lt;attribute name="Currency" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Supp_info")
public class SuppInfo2 {

    @XmlAttribute(name = "Type", required = true)
    protected SupplementType type;
    @XmlAttribute(name = "SuppName")
    protected String suppName;
    @XmlAttribute(name = "SuppChargeType", required = true)
    protected SupmtChargeType suppChargeType;
    @XmlAttribute(name = "Price", required = true)
    protected BigDecimal price;
    @XmlAttribute(name = "Currency")
    protected String currency;

    /**
     * Obtient la valeur de la propri�t� type.
     * 
     * @return
     *     possible object is
     *     {@link SupplementType }
     *     
     */
    public SupplementType getType() {
        return type;
    }

    /**
     * D�finit la valeur de la propri�t� type.
     * 
     * @param value
     *     allowed object is
     *     {@link SupplementType }
     *     
     */
    public void setType(SupplementType value) {
        this.type = value;
    }

    /**
     * Obtient la valeur de la propri�t� suppName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSuppName() {
        return suppName;
    }

    /**
     * D�finit la valeur de la propri�t� suppName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSuppName(String value) {
        this.suppName = value;
    }

    /**
     * Obtient la valeur de la propri�t� suppChargeType.
     * 
     * @return
     *     possible object is
     *     {@link SupmtChargeType }
     *     
     */
    public SupmtChargeType getSuppChargeType() {
        return suppChargeType;
    }

    /**
     * D�finit la valeur de la propri�t� suppChargeType.
     * 
     * @param value
     *     allowed object is
     *     {@link SupmtChargeType }
     *     
     */
    public void setSuppChargeType(SupmtChargeType value) {
        this.suppChargeType = value;
    }

    /**
     * Obtient la valeur de la propri�t� price.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getPrice() {
        return price;
    }

    /**
     * D�finit la valeur de la propri�t� price.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setPrice(BigDecimal value) {
        this.price = value;
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

}
