package com.example.demo.api.hotelbookingapi;




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
 *         &lt;element name="RequestStatus" type="{http://TekTravel/HotelBookingApi}RequestStatus"/>
 *         &lt;element name="ApprovalInformation" type="{http://TekTravel/HotelBookingApi}ApprovalInformation" minOccurs="0"/>
 *         &lt;element name="BookingId" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="NewConfirmatioNo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="NewLastCancellationDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="AmendmentMessage" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="AmendmentRequested" type="{http://TekTravel/HotelBookingApi}AmendmentRequested" minOccurs="0"/>
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
    "requestStatus",
    "approvalInformation",
    "bookingId",
    "newConfirmatioNo",
    "newLastCancellationDate",
    "amendmentMessage",
    "amendmentRequested"
})
@XmlRootElement(name = "AmendmentResponse")
public class AmendmentResponse {

    @XmlElement(name = "Status")
    protected ResponseStatus status;
    @XmlElement(name = "RequestStatus", required = true)
    @XmlSchemaType(name = "string")
    protected RequestStatus requestStatus;
    @XmlElement(name = "ApprovalInformation")
    protected ApprovalInformation approvalInformation;
    @XmlElement(name = "BookingId")
    protected int bookingId;
    @XmlElement(name = "NewConfirmatioNo")
    protected String newConfirmatioNo;
    @XmlElement(name = "NewLastCancellationDate")
    protected String newLastCancellationDate;
    @XmlElement(name = "AmendmentMessage")
    protected String amendmentMessage;
    @XmlElement(name = "AmendmentRequested")
    protected AmendmentRequested amendmentRequested;

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
     * Obtient la valeur de la propri�t� requestStatus.
     * 
     * @return
     *     possible object is
     *     {@link RequestStatus }
     *     
     */
    public RequestStatus getRequestStatus() {
        return requestStatus;
    }

    /**
     * D�finit la valeur de la propri�t� requestStatus.
     * 
     * @param value
     *     allowed object is
     *     {@link RequestStatus }
     *     
     */
    public void setRequestStatus(RequestStatus value) {
        this.requestStatus = value;
    }

    /**
     * Obtient la valeur de la propri�t� approvalInformation.
     * 
     * @return
     *     possible object is
     *     {@link ApprovalInformation }
     *     
     */
    public ApprovalInformation getApprovalInformation() {
        return approvalInformation;
    }

    /**
     * D�finit la valeur de la propri�t� approvalInformation.
     * 
     * @param value
     *     allowed object is
     *     {@link ApprovalInformation }
     *     
     */
    public void setApprovalInformation(ApprovalInformation value) {
        this.approvalInformation = value;
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
     * Obtient la valeur de la propri�t� newConfirmatioNo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNewConfirmatioNo() {
        return newConfirmatioNo;
    }

    /**
     * D�finit la valeur de la propri�t� newConfirmatioNo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNewConfirmatioNo(String value) {
        this.newConfirmatioNo = value;
    }

    /**
     * Obtient la valeur de la propri�t� newLastCancellationDate.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNewLastCancellationDate() {
        return newLastCancellationDate;
    }

    /**
     * D�finit la valeur de la propri�t� newLastCancellationDate.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNewLastCancellationDate(String value) {
        this.newLastCancellationDate = value;
    }

    /**
     * Obtient la valeur de la propri�t� amendmentMessage.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmendmentMessage() {
        return amendmentMessage;
    }

    /**
     * D�finit la valeur de la propri�t� amendmentMessage.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmendmentMessage(String value) {
        this.amendmentMessage = value;
    }

    /**
     * Obtient la valeur de la propri�t� amendmentRequested.
     * 
     * @return
     *     possible object is
     *     {@link AmendmentRequested }
     *     
     */
    public AmendmentRequested getAmendmentRequested() {
        return amendmentRequested;
    }

    /**
     * D�finit la valeur de la propri�t� amendmentRequested.
     * 
     * @param value
     *     allowed object is
     *     {@link AmendmentRequested }
     *     
     */
    public void setAmendmentRequested(AmendmentRequested value) {
        this.amendmentRequested = value;
    }

}
