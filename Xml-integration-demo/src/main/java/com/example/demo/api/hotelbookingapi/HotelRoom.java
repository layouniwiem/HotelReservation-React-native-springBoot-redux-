
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Hotel_Room complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Hotel_Room">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="RoomIndex" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="RoomTypeName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Inclusion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RoomTypeCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RatePlanCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RoomRate" type="{http://TekTravel/HotelBookingApi}RoomRate" minOccurs="0"/>
 *         &lt;element name="RoomPromtion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RoomInstructions" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Supplements" type="{http://TekTravel/HotelBookingApi}ArrayOfSupplement" minOccurs="0"/>
 *         &lt;element name="RoomEssentialInfo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RoomAdditionalInfo" type="{http://TekTravel/HotelBookingApi}RoomInformation" minOccurs="0"/>
 *         &lt;element name="CancelPolicies" type="{http://TekTravel/HotelBookingApi}CancelPolicies" minOccurs="0"/>
 *         &lt;element name="Amenities" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="MealType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Hotel_Room", propOrder = {
    "roomIndex",
    "roomTypeName",
    "inclusion",
    "roomTypeCode",
    "ratePlanCode",
    "roomRate",
    "roomPromtion",
    "roomInstructions",
    "supplements",
    "roomEssentialInfo",
    "roomAdditionalInfo",
    "cancelPolicies",
    "amenities",
    "mealType"
})
public class HotelRoom {

    @XmlElement(name = "RoomIndex")
    protected int roomIndex;
    @XmlElement(name = "RoomTypeName")
    protected String roomTypeName;
    @XmlElement(name = "Inclusion")
    protected String inclusion;
    @XmlElement(name = "RoomTypeCode")
    protected String roomTypeCode;
    @XmlElement(name = "RatePlanCode")
    protected String ratePlanCode;
    @XmlElement(name = "RoomRate")
    protected RoomRate roomRate;
    @XmlElement(name = "RoomPromtion")
    protected String roomPromtion;
    @XmlElement(name = "RoomInstructions")
    protected String roomInstructions;
    @XmlElement(name = "Supplements")
    protected ArrayOfSupplement supplements;
    @XmlElement(name = "RoomEssentialInfo")
    protected String roomEssentialInfo;
    @XmlElement(name = "RoomAdditionalInfo")
    protected RoomInformation roomAdditionalInfo;
    @XmlElement(name = "CancelPolicies")
    protected CancelPolicies cancelPolicies;
    @XmlElement(name = "Amenities")
    protected String amenities;
    @XmlElement(name = "MealType")
    protected String mealType;

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
     * Obtient la valeur de la propri�t� inclusion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInclusion() {
        return inclusion;
    }

    /**
     * D�finit la valeur de la propri�t� inclusion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInclusion(String value) {
        this.inclusion = value;
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
     *     {@link RoomRate }
     *     
     */
    public RoomRate getRoomRate() {
        return roomRate;
    }

    /**
     * D�finit la valeur de la propri�t� roomRate.
     * 
     * @param value
     *     allowed object is
     *     {@link RoomRate }
     *     
     */
    public void setRoomRate(RoomRate value) {
        this.roomRate = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomPromtion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRoomPromtion() {
        return roomPromtion;
    }

    /**
     * D�finit la valeur de la propri�t� roomPromtion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRoomPromtion(String value) {
        this.roomPromtion = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomInstructions.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRoomInstructions() {
        return roomInstructions;
    }

    /**
     * D�finit la valeur de la propri�t� roomInstructions.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRoomInstructions(String value) {
        this.roomInstructions = value;
    }

    /**
     * Obtient la valeur de la propri�t� supplements.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfSupplement }
     *     
     */
    public ArrayOfSupplement getSupplements() {
        return supplements;
    }

    /**
     * D�finit la valeur de la propri�t� supplements.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfSupplement }
     *     
     */
    public void setSupplements(ArrayOfSupplement value) {
        this.supplements = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomEssentialInfo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRoomEssentialInfo() {
        return roomEssentialInfo;
    }

    /**
     * D�finit la valeur de la propri�t� roomEssentialInfo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRoomEssentialInfo(String value) {
        this.roomEssentialInfo = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomAdditionalInfo.
     * 
     * @return
     *     possible object is
     *     {@link RoomInformation }
     *     
     */
    public RoomInformation getRoomAdditionalInfo() {
        return roomAdditionalInfo;
    }

    /**
     * D�finit la valeur de la propri�t� roomAdditionalInfo.
     * 
     * @param value
     *     allowed object is
     *     {@link RoomInformation }
     *     
     */
    public void setRoomAdditionalInfo(RoomInformation value) {
        this.roomAdditionalInfo = value;
    }

    /**
     * Obtient la valeur de la propri�t� cancelPolicies.
     * 
     * @return
     *     possible object is
     *     {@link CancelPolicies }
     *     
     */
    public CancelPolicies getCancelPolicies() {
        return cancelPolicies;
    }

    /**
     * D�finit la valeur de la propri�t� cancelPolicies.
     * 
     * @param value
     *     allowed object is
     *     {@link CancelPolicies }
     *     
     */
    public void setCancelPolicies(CancelPolicies value) {
        this.cancelPolicies = value;
    }

    /**
     * Obtient la valeur de la propri�t� amenities.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmenities() {
        return amenities;
    }

    /**
     * D�finit la valeur de la propri�t� amenities.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmenities(String value) {
        this.amenities = value;
    }

    /**
     * Obtient la valeur de la propri�t� mealType.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMealType() {
        return mealType;
    }

    /**
     * D�finit la valeur de la propri�t� mealType.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMealType(String value) {
        this.mealType = value;
    }

}
