
package com.example.demo.api.hotelbookingapi;

import java.math.BigDecimal;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour MinHotelPrice complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="MinHotelPrice">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="PrefPrice" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="PrefCurrency" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="TotalPrice" use="required" type="{http://www.w3.org/2001/XMLSchema}decimal" />
 *       &lt;attribute name="Currency" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="B2CRates" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="OriginalPrice" use="required" type="{http://www.w3.org/2001/XMLSchema}decimal" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "MinHotelPrice")
public class MinHotelPrice {

    @XmlAttribute(name = "PrefPrice")
    protected String prefPrice;
    @XmlAttribute(name = "PrefCurrency")
    protected String prefCurrency;
    @XmlAttribute(name = "TotalPrice", required = true)
    protected BigDecimal totalPrice;
    @XmlAttribute(name = "Currency")
    protected String currency;
    @XmlAttribute(name = "B2CRates", required = true)
    protected boolean b2CRates;
    @XmlAttribute(name = "OriginalPrice", required = true)
    protected BigDecimal originalPrice;

    /**
     * Obtient la valeur de la propri�t� prefPrice.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrefPrice() {
        return prefPrice;
    }

    /**
     * D�finit la valeur de la propri�t� prefPrice.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrefPrice(String value) {
        this.prefPrice = value;
    }

    /**
     * Obtient la valeur de la propri�t� prefCurrency.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrefCurrency() {
        return prefCurrency;
    }

    /**
     * D�finit la valeur de la propri�t� prefCurrency.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrefCurrency(String value) {
        this.prefCurrency = value;
    }

    /**
     * Obtient la valeur de la propri�t� totalPrice.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    /**
     * D�finit la valeur de la propri�t� totalPrice.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setTotalPrice(BigDecimal value) {
        this.totalPrice = value;
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
     * Obtient la valeur de la propri�t� b2CRates.
     * 
     */
    public boolean isB2CRates() {
        return b2CRates;
    }

    /**
     * D�finit la valeur de la propri�t� b2CRates.
     * 
     */
    public void setB2CRates(boolean value) {
        this.b2CRates = value;
    }

    /**
     * Obtient la valeur de la propri�t� originalPrice.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getOriginalPrice() {
        return originalPrice;
    }

    /**
     * D�finit la valeur de la propri�t� originalPrice.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setOriginalPrice(BigDecimal value) {
        this.originalPrice = value;
    }

}
