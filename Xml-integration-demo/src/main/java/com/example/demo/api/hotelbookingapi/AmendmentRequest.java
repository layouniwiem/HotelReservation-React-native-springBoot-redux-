package com.example.demo.api.hotelbookingapi;




import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
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
 *         &lt;element name="Request" type="{http://TekTravel/HotelBookingApi}AmendmentRequestType" minOccurs="0"/>
 *         &lt;element name="BookingId" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="AmendInformation" type="{http://TekTravel/HotelBookingApi}AmendInformation" minOccurs="0"/>
 *         &lt;element name="ConfirmationNo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
    "request",
    "bookingId",
    "amendInformation",
    "confirmationNo"
})
@XmlRootElement(name = "AmendmentRequest")
public class AmendmentRequest {

    @XmlElement(name = "Request")
    protected AmendmentRequestType request;
    @XmlElement(name = "BookingId")
    protected int bookingId;
    @XmlElement(name = "AmendInformation")
    protected AmendInformation amendInformation;
    @XmlElement(name = "ConfirmationNo")
    protected String confirmationNo;

    /**
     * Obtient la valeur de la propri�t� request.
     * 
     * @return
     *     possible object is
     *     {@link AmendmentRequestType }
     *     
     */
    public AmendmentRequestType getRequest() {
        return request;
    }

    /**
     * D�finit la valeur de la propri�t� request.
     * 
     * @param value
     *     allowed object is
     *     {@link AmendmentRequestType }
     *     
     */
    public void setRequest(AmendmentRequestType value) {
        this.request = value;
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
     * Obtient la valeur de la propri�t� amendInformation.
     * 
     * @return
     *     possible object is
     *     {@link AmendInformation }
     *     
     */
    public AmendInformation getAmendInformation() {
        return amendInformation;
    }

    /**
     * D�finit la valeur de la propri�t� amendInformation.
     * 
     * @param value
     *     allowed object is
     *     {@link AmendInformation }
     *     
     */
    public void setAmendInformation(AmendInformation value) {
        this.amendInformation = value;
    }

    /**
     * Obtient la valeur de la propri�t� confirmationNo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getConfirmationNo() {
        return confirmationNo;
    }

    /**
     * D�finit la valeur de la propri�t� confirmationNo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setConfirmationNo(String value) {
        this.confirmationNo = value;
    }

}
