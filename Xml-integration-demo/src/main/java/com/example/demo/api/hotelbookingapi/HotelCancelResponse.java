
package com.example.demo.api.hotelbookingapi;
import java.math.BigDecimal;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
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
 *         &lt;element name="BookingId" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="CancellationCharge" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *         &lt;element name="RefundAmount" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *         &lt;element name="RequestStatus" type="{http://TekTravel/HotelBookingApi}HotelCancelStatus"/>
 *         &lt;element name="Currency" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
    "bookingId",
    "cancellationCharge",
    "refundAmount",
    "requestStatus",
    "currency"
})
@XmlRootElement(name = "HotelCancelResponse")
public class HotelCancelResponse {

    @XmlElement(name = "Status")
    protected ResponseStatus status;
    @XmlElement(name = "BookingId")
    protected int bookingId;
    @XmlElement(name = "CancellationCharge", required = true)
    protected BigDecimal cancellationCharge;
    @XmlElement(name = "RefundAmount", required = true)
    protected BigDecimal refundAmount;
    @XmlElement(name = "RequestStatus", required = true)
    @XmlSchemaType(name = "string")
    protected HotelCancelStatus requestStatus;
    @XmlElement(name = "Currency")
    protected String currency;

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
     * Obtient la valeur de la propri�t� bookingId.
     * 
     */
    public int getBookingId() {
        return bookingId;
    }

    /**
     * D�finit la valeur de la propri�t� bookingId.
     * 
     */
    public void setBookingId(int value) {
        this.bookingId = value;
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
     * Obtient la valeur de la propri�t� refundAmount.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getRefundAmount() {
        return refundAmount;
    }

    /**
     * D�finit la valeur de la propri�t� refundAmount.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setRefundAmount(BigDecimal value) {
        this.refundAmount = value;
    }

    /**
     * Obtient la valeur de la propri�t� requestStatus.
     * 
     * @return
     *     possible object is
     *     {@link HotelCancelStatus }
     *     
     */
    public HotelCancelStatus getRequestStatus() {
        return requestStatus;
    }

    /**
     * D�finit la valeur de la propri�t� requestStatus.
     * 
     * @param value
     *     allowed object is
     *     {@link HotelCancelStatus }
     *     
     */
    public void setRequestStatus(HotelCancelStatus value) {
        this.requestStatus = value;
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
