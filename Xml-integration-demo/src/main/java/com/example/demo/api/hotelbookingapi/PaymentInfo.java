
package com.example.demo.api.hotelbookingapi;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;

import jdk.nashorn.internal.ir.RuntimeNode.Request;


/**
 * <p>Classe Java pour PaymentInfo complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="PaymentInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="VoucherBooking" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="PaymentModeType" use="required" type="{http://TekTravel/HotelBookingApi}PaymentModeType" />
 *       &lt;attribute name="CvvNumber" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PaymentInfo")
public class PaymentInfo {

    @XmlAttribute(name = "VoucherBooking", required = true)
    protected boolean voucherBooking;
    @XmlAttribute(name = "PaymentModeType", required = true)
    protected PaymentModeType paymentModeType;
    @XmlAttribute(name = "CvvNumber")
    protected String cvvNumber;

    public PaymentInfo(BookHotelRequest request) {
		// TODO Auto-generated constructor stub
    	this.cvvNumber=request.getCvvNumber();
    	this.voucherBooking=request.isVoucherBooking();
    	
	}

	/**
     * Obtient la valeur de la propri�t� voucherBooking.
     * 
     */
    public boolean isVoucherBooking() {
        return voucherBooking;
    }

    /**
     * D�finit la valeur de la propri�t� voucherBooking.
     * 
     */
    public void setVoucherBooking(boolean value) {
        this.voucherBooking = value;
    }

    /**
     * Obtient la valeur de la propri�t� paymentModeType.
     * 
     * @return
     *     possible object is
     *     {@link PaymentModeType }
     *     
     */
    public PaymentModeType getPaymentModeType() {
        return paymentModeType;
    }

    /**
     * D�finit la valeur de la propri�t� paymentModeType.
     * 
     * @param value
     *     allowed object is
     *     {@link PaymentModeType }
     *     
     */
    public void setPaymentModeType(PaymentModeType value) {
        this.paymentModeType = value;
    }

    /**
     * Obtient la valeur de la propri�t� cvvNumber.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCvvNumber() {
        return cvvNumber;
    }

    /**
     * D�finit la valeur de la propri�t� cvvNumber.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCvvNumber(String value) {
        this.cvvNumber = value;
    }

}
