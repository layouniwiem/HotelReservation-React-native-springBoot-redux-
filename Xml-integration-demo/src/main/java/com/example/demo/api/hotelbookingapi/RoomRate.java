
package com.example.demo.api.hotelbookingapi;
import java.math.BigDecimal;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour RoomRate complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="RoomRate">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="DayRates" type="{http://TekTravel/HotelBookingApi}ArrayOfDayRate" minOccurs="0"/>
 *         &lt;element name="ExtraGuestCharges" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *         &lt;element name="ChildCharges" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *         &lt;element name="Discount" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *         &lt;element name="OtherCharges" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *         &lt;element name="ServiceTax" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *       &lt;/sequence>
 *       &lt;attribute name="IsPackageRate" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="IsInstantConfirmed" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="B2CRates" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="HeadGSAMarkUp" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="AgentMarkUp" use="required" type="{http://www.w3.org/2001/XMLSchema}decimal" />
 *       &lt;attribute name="Currency" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="RoomFare" use="required" type="{http://www.w3.org/2001/XMLSchema}decimal" />
 *       &lt;attribute name="RoomTax" use="required" type="{http://www.w3.org/2001/XMLSchema}decimal" />
 *       &lt;attribute name="TotalFare" use="required" type="{http://www.w3.org/2001/XMLSchema}decimal" />
 *       &lt;attribute name="PrefRoomFare" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="PrefRoomTax" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="PrefCurrency" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="PrefPrice" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RoomRate", propOrder = {
    "dayRates",
    "extraGuestCharges",
    "childCharges",
    "discount",
    "otherCharges",
    "serviceTax"
})
public class RoomRate {

    @XmlElement(name = "DayRates")
    protected ArrayOfDayRate dayRates;
    @XmlElement(name = "ExtraGuestCharges", required = true)
    protected BigDecimal extraGuestCharges;
    @XmlElement(name = "ChildCharges", required = true)
    protected BigDecimal childCharges;
    @XmlElement(name = "Discount", required = true)
    protected BigDecimal discount;
    @XmlElement(name = "OtherCharges", required = true)
    protected BigDecimal otherCharges;
    @XmlElement(name = "ServiceTax", required = true)
    protected BigDecimal serviceTax;
    @XmlAttribute(name = "IsPackageRate", required = true)
    protected boolean isPackageRate;
    @XmlAttribute(name = "IsInstantConfirmed", required = true)
    protected boolean isInstantConfirmed;
    @XmlAttribute(name = "B2CRates", required = true)
    protected boolean b2CRates;
    @XmlAttribute(name = "HeadGSAMarkUp")
    protected String headGSAMarkUp;
    @XmlAttribute(name = "AgentMarkUp", required = true)
    protected BigDecimal agentMarkUp;
    @XmlAttribute(name = "Currency")
    protected String currency;
    @XmlAttribute(name = "RoomFare", required = true)
    protected BigDecimal roomFare;
    @XmlAttribute(name = "RoomTax", required = true)
    protected BigDecimal roomTax;
    @XmlAttribute(name = "TotalFare", required = true)
    protected BigDecimal totalFare;
    @XmlAttribute(name = "PrefRoomFare")
    protected String prefRoomFare;
    @XmlAttribute(name = "PrefRoomTax")
    protected String prefRoomTax;
    @XmlAttribute(name = "PrefCurrency")
    protected String prefCurrency;
    @XmlAttribute(name = "PrefPrice")
    protected String prefPrice;

    /**
     * Obtient la valeur de la propri�t� dayRates.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfDayRate }
     *     
     */
    public ArrayOfDayRate getDayRates() {
        return dayRates;
    }

    /**
     * D�finit la valeur de la propri�t� dayRates.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfDayRate }
     *     
     */
    public void setDayRates(ArrayOfDayRate value) {
        this.dayRates = value;
    }

    /**
     * Obtient la valeur de la propri�t� extraGuestCharges.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getExtraGuestCharges() {
        return extraGuestCharges;
    }

    /**
     * D�finit la valeur de la propri�t� extraGuestCharges.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setExtraGuestCharges(BigDecimal value) {
        this.extraGuestCharges = value;
    }

    /**
     * Obtient la valeur de la propri�t� childCharges.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getChildCharges() {
        return childCharges;
    }

    /**
     * D�finit la valeur de la propri�t� childCharges.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setChildCharges(BigDecimal value) {
        this.childCharges = value;
    }

    /**
     * Obtient la valeur de la propri�t� discount.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getDiscount() {
        return discount;
    }

    /**
     * D�finit la valeur de la propri�t� discount.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setDiscount(BigDecimal value) {
        this.discount = value;
    }

    /**
     * Obtient la valeur de la propri�t� otherCharges.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getOtherCharges() {
        return otherCharges;
    }

    /**
     * D�finit la valeur de la propri�t� otherCharges.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setOtherCharges(BigDecimal value) {
        this.otherCharges = value;
    }

    /**
     * Obtient la valeur de la propri�t� serviceTax.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getServiceTax() {
        return serviceTax;
    }

    /**
     * D�finit la valeur de la propri�t� serviceTax.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setServiceTax(BigDecimal value) {
        this.serviceTax = value;
    }

    /**
     * Obtient la valeur de la propri�t� isPackageRate.
     * 
     */
    public boolean isIsPackageRate() {
        return isPackageRate;
    }

    /**
     * D�finit la valeur de la propri�t� isPackageRate.
     * 
     */
    public void setIsPackageRate(boolean value) {
        this.isPackageRate = value;
    }

    /**
     * Obtient la valeur de la propri�t� isInstantConfirmed.
     * 
     */
    public boolean isIsInstantConfirmed() {
        return isInstantConfirmed;
    }

    /**
     * D�finit la valeur de la propri�t� isInstantConfirmed.
     * 
     */
    public void setIsInstantConfirmed(boolean value) {
        this.isInstantConfirmed = value;
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
     * Obtient la valeur de la propri�t� headGSAMarkUp.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHeadGSAMarkUp() {
        return headGSAMarkUp;
    }

    /**
     * D�finit la valeur de la propri�t� headGSAMarkUp.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHeadGSAMarkUp(String value) {
        this.headGSAMarkUp = value;
    }

    /**
     * Obtient la valeur de la propri�t� agentMarkUp.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getAgentMarkUp() {
        return agentMarkUp;
    }

    /**
     * D�finit la valeur de la propri�t� agentMarkUp.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setAgentMarkUp(BigDecimal value) {
        this.agentMarkUp = value;
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
     * Obtient la valeur de la propri�t� roomFare.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getRoomFare() {
        return roomFare;
    }

    /**
     * D�finit la valeur de la propri�t� roomFare.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setRoomFare(BigDecimal value) {
        this.roomFare = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomTax.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getRoomTax() {
        return roomTax;
    }

    /**
     * D�finit la valeur de la propri�t� roomTax.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setRoomTax(BigDecimal value) {
        this.roomTax = value;
    }

    /**
     * Obtient la valeur de la propri�t� totalFare.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getTotalFare() {
        return totalFare;
    }

    /**
     * D�finit la valeur de la propri�t� totalFare.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setTotalFare(BigDecimal value) {
        this.totalFare = value;
    }

    /**
     * Obtient la valeur de la propri�t� prefRoomFare.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrefRoomFare() {
        return prefRoomFare;
    }

    /**
     * D�finit la valeur de la propri�t� prefRoomFare.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrefRoomFare(String value) {
        this.prefRoomFare = value;
    }

    /**
     * Obtient la valeur de la propri�t� prefRoomTax.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrefRoomTax() {
        return prefRoomTax;
    }

    /**
     * D�finit la valeur de la propri�t� prefRoomTax.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrefRoomTax(String value) {
        this.prefRoomTax = value;
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

}
