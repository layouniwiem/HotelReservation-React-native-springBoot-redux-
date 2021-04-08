
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;


/**
 * <p>Classe Java pour RequestedRooms complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="RequestedRooms">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="RoomIndex" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="RoomTypeName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RoomTypeCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RatePlanCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RoomRate" type="{http://TekTravel/HotelBookingApi}Rate" minOccurs="0"/>
 *         &lt;element name="Supplements" type="{http://TekTravel/HotelBookingApi}ArrayOfSuppInfo" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RequestedRooms", propOrder = {
    "roomIndex",
    "roomTypeName",
    "roomTypeCode",
    "ratePlanCode",
    "roomRate",
    "supplements"
})
public class RequestedRooms {

    @XmlElement(name = "RoomIndex")
    protected int roomIndex;
    @XmlElement(name = "RoomTypeName")
    protected String roomTypeName;
    @XmlElement(name = "RoomTypeCode")
    protected String roomTypeCode;
    @XmlElement(name = "RatePlanCode")
    protected String ratePlanCode;
    @XmlElement(name = "RoomRate")
    protected Rate roomRate;
    @XmlElement(name = "Supplements")
    protected ArrayOfSuppInfo supplements;

    public RequestedRooms(BookHotelRequest request) {
		// TODO Auto-generated constructor stub
    	this.ratePlanCode=request.getRatePlanCode();
    	this.roomIndex=request.getRoomIndex();
    	this.roomRate=new Rate(request);
    	this.roomTypeCode=request.getRoomTypeCode();
    	this.roomTypeName=request.getRoomTypeCode();
    	this.supplements= new ArrayOfSuppInfo(request);
    	
	}

	/**
     * Obtient la valeur de la propri�t� roomIndex.
     * 
     */
    public int getRoomIndex() {
        return roomIndex;
    }

    /**
     * D�finit la valeur de la propri�t� roomIndex.
     * 
     */
    public void setRoomIndex(int value) {
        this.roomIndex = value;
    }

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
     * Obtient la valeur de la propri�t� roomTypeCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRoomTypeCode() {
        return roomTypeCode;
    }

    /**
     * D�finit la valeur de la propri�t� roomTypeCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRoomTypeCode(String value) {
        this.roomTypeCode = value;
    }

    /**
     * Obtient la valeur de la propri�t� ratePlanCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRatePlanCode() {
        return ratePlanCode;
    }

    /**
     * D�finit la valeur de la propri�t� ratePlanCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRatePlanCode(String value) {
        this.ratePlanCode = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomRate.
     * 
     * @return
     *     possible object is
     *     {@link Rate }
     *     
     */
    public Rate getRoomRate() {
        return roomRate;
    }

    /**
     * D�finit la valeur de la propri�t� roomRate.
     * 
     * @param value
     *     allowed object is
     *     {@link Rate }
     *     
     */
    public void setRoomRate(Rate value) {
        this.roomRate = value;
    }

    /**
     * Obtient la valeur de la propri�t� supplements.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfSuppInfo }
     *     
     */
    public ArrayOfSuppInfo getSupplements() {
        return supplements;
    }

    /**
     * D�finit la valeur de la propri�t� supplements.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfSuppInfo }
     *     
     */
    public void setSupplements(ArrayOfSuppInfo value) {
        this.supplements = value;
    }

}
