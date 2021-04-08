
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;


/**
 * <p>Classe Java pour SpecialRequest complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="SpecialRequest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="RequestId" use="required" type="{http://www.w3.org/2001/XMLSchema}int" />
 *       &lt;attribute name="RequestType" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="Remarks" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SpecialRequest")
public class SpecialRequest {

    @XmlAttribute(name = "RequestId", required = true)
    protected int requestId;
    @XmlAttribute(name = "RequestType")
    protected String requestType;
    @XmlAttribute(name = "Remarks")
    protected String remarks;

    public SpecialRequest(BookHotelRequest request) {
		// TODO Auto-generated constructor stub
    	this.requestId=request.getRequestId();
    	this.requestType=request.getRequestType();
    	this.remarks=request.getRemarkks();
	}

	/**
     * Obtient la valeur de la propri�t� requestId.
     * 
     */
    public int getRequestId() {
        return requestId;
    }

    /**
     * D�finit la valeur de la propri�t� requestId.
     * 
     */
    public void setRequestId(int value) {
        this.requestId = value;
    }

    /**
     * Obtient la valeur de la propri�t� requestType.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRequestType() {
        return requestType;
    }

    /**
     * D�finit la valeur de la propri�t� requestType.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRequestType(String value) {
        this.requestType = value;
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
