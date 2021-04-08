
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.RoomHotelAvailabilityRequest;


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
 *         &lt;element name="SessionId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="ResultIndex" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="HotelCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="ResponseTime" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="IsCancellationPolicyRequired" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
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
    "sessionId",
    "resultIndex",
    "hotelCode",
    "responseTime",
    "isCancellationPolicyRequired"
})
@XmlRootElement(name = "HotelRoomAvailabilityRequest")
public class HotelRoomAvailabilityRequest {

    @XmlElement(name = "SessionId")
    protected String sessionId;
    @XmlElement(name = "ResultIndex")
    protected int resultIndex;
    @XmlElement(name = "HotelCode")
    protected String hotelCode;
    @XmlElement(name = "ResponseTime")
    protected int responseTime;
    @XmlElement(name = "IsCancellationPolicyRequired")
    protected boolean isCancellationPolicyRequired;

    public HotelRoomAvailabilityRequest(String hotelCode, String sessionId, String resultIndex) {
    	this.sessionId = sessionId;
    	this.hotelCode = hotelCode;
    	this.resultIndex = Integer.parseInt(resultIndex);
    	this.responseTime = 17;
    	this.isCancellationPolicyRequired = true;
	}
    public HotelRoomAvailabilityRequest() {

    }

    public HotelRoomAvailabilityRequest(RoomHotelAvailabilityRequest request) {
    	
		// TODO Auto-generated constructor stub
    	
    	this.sessionId = request.getSessionId();
    	this.hotelCode = request.getHotelCode();
    	this.resultIndex = request.getResultIndex();
    	this.isCancellationPolicyRequired = false;
    	this.responseTime = 17;
    	
	}
	/**
     * Obtient la valeur de la propri�t� sessionId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSessionId() {
        return sessionId;
    }

    /**
     * D�finit la valeur de la propri�t� sessionId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSessionId(String value) {
        this.sessionId = value;
    }

    /**
     * Obtient la valeur de la propri�t� resultIndex.
     * 
     */
    public int getResultIndex() {
        return resultIndex;
    }

    /**
     * D�finit la valeur de la propri�t� resultIndex.
     * 
     */
    public void setResultIndex(int value) {
        this.resultIndex = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelCode() {
        return hotelCode;
    }

    /**
     * D�finit la valeur de la propri�t� hotelCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelCode(String value) {
        this.hotelCode = value;
    }

    /**
     * Obtient la valeur de la propri�t� responseTime.
     * 
     */
    public int getResponseTime() {
        return responseTime;
    }

    /**
     * D�finit la valeur de la propri�t� responseTime.
     * 
     */
    public void setResponseTime(int value) {
        this.responseTime = value;
    }

    /**
     * Obtient la valeur de la propri�t� isCancellationPolicyRequired.
     * 
     */
    public boolean isIsCancellationPolicyRequired() {
        return isCancellationPolicyRequired;
    }

    /**
     * D�finit la valeur de la propri�t� isCancellationPolicyRequired.
     * 
     */
    public void setIsCancellationPolicyRequired(boolean value) {
        this.isCancellationPolicyRequired = value;
    }

}