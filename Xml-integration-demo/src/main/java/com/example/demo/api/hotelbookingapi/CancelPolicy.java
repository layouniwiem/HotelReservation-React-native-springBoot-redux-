
package com.example.demo.api.hotelbookingapi;

import java.math.BigDecimal;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour CancelPolicy complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="CancelPolicy">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="RoomTypeName" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="RoomIndex" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="FromDate" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="ToDate" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="ChargeType" use="required" type="{http://TekTravel/HotelBookingApi}CancellationChargeTypeForHotel" />
 *       &lt;attribute name="CancellationCharge" use="required" type="{http://www.w3.org/2001/XMLSchema}decimal" />
 *       &lt;attribute name="Currency" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="PrefCurrency" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="PrefCancellationCharge" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CancelPolicy")
public class CancelPolicy {

    @XmlAttribute(name = "RoomTypeName")
    protected String roomTypeName;
    @XmlAttribute(name = "RoomIndex")
    protected String roomIndex;
    @XmlAttribute(name = "FromDate")
    protected String fromDate;
    @XmlAttribute(name = "ToDate")
    protected String toDate;
    @XmlAttribute(name = "ChargeType", required = true)
    protected CancellationChargeTypeForHotel chargeType;
    @XmlAttribute(name = "CancellationCharge", required = true)
    protected BigDecimal cancellationCharge;
    @XmlAttribute(name = "Currency")
    protected String currency;
    @XmlAttribute(name = "PrefCurrency")
    protected String prefCurrency;
    @XmlAttribute(name = "PrefCancellationCharge")
    protected String prefCancellationCharge;

    /**
     * Obtient la valeur de la propri�t� roomTypeName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRoomTypeName() {
        return roomTypeName;
    }

    /**
     * D�finit la valeur de la propri�t� roomTypeName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRoomTypeName(String value) {
        this.roomTypeName = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomIndex.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRoomIndex() {
        return roomIndex;
    }

    /**
     * D�finit la valeur de la propri�t� roomIndex.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRoomIndex(String value) {
        this.roomIndex = value;
    }

    /**
     * Obtient la valeur de la propri�t� fromDate.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFromDate() {
        return fromDate;
    }

    /**
     * D�finit la valeur de la propri�t� fromDate.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFromDate(String value) {
        this.fromDate = value;
    }

    /**
     * Obtient la valeur de la propri�t� toDate.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getToDate() {
        return toDate;
    }

    /**
     * D�finit la valeur de la propri�t� toDate.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setToDate(String value) {
        this.toDate = value;
    }

    /**
     * Obtient la valeur de la propri�t� chargeType.
     * 
     * @return
     *     possible object is
     *     {@link CancellationChargeTypeForHotel }
     *     
     */
    public CancellationChargeTypeForHotel getChargeType() {
        return chargeType;
    }

    /**
     * D�finit la valeur de la propri�t� chargeType.
     * 
     * @param value
     *     allowed object is
     *     {@link CancellationChargeTypeForHotel }
     *     
     */
    public void setChargeType(CancellationChargeTypeForHotel value) {
        this.chargeType = value;
    }

    /**
     * Obtient la valeur de la propri�t� cancellationCharge.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getCancellationCharge() {
        return cancellationCharge;
    }

    /**
     * D�finit la valeur de la propri�t� cancellationCharge.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setCancellationCharge(BigDecimal value) {
        this.cancellationCharge = value;
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
     * Obtient la valeur de la propri�t� prefCancellationCharge.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrefCancellationCharge() {
        return prefCancellationCharge;
    }

    /**
     * D�finit la valeur de la propri�t� prefCancellationCharge.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrefCancellationCharge(String value) {
        this.prefCancellationCharge = value;
    }

}
