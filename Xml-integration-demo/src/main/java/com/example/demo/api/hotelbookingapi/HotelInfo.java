
package com.example.demo.api.hotelbookingapi;

import java.math.BigDecimal;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour HotelInfo complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="HotelInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="HotelCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="HotelName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="HotelPicture" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="HotelDescription" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Latitude" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *         &lt;element name="Longitude" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *         &lt;element name="HotelAddress" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="HotelContactNo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Rating" type="{http://TekTravel/HotelBookingApi}HotelInfoHotelRating"/>
 *         &lt;element name="HotelPromotion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TripAdvisorRating" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TripAdvisorReviewURL" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TagIds" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "HotelInfo", propOrder = {
    "hotelCode",
    "hotelName",
    "hotelPicture",
    "hotelDescription",
    "latitude",
    "longitude",
    "hotelAddress",
    "hotelContactNo",
    "rating",
    "hotelPromotion",
    "tripAdvisorRating",
    "tripAdvisorReviewURL",
    "tagIds"
})
public class HotelInfo {

    @XmlElement(name = "HotelCode")
    protected String hotelCode;
    @XmlElement(name = "HotelName")
    protected String hotelName;
    @XmlElement(name = "HotelPicture")
    protected String hotelPicture;
    @XmlElement(name = "HotelDescription")
    protected String hotelDescription;
    @XmlElement(name = "Latitude", required = true, nillable = true)
    protected BigDecimal latitude;
    @XmlElement(name = "Longitude", required = true, nillable = true)
    protected BigDecimal longitude;
    @XmlElement(name = "HotelAddress")
    protected String hotelAddress;
    @XmlElement(name = "HotelContactNo")
    protected String hotelContactNo;
    @XmlElement(name = "Rating", required = true)
    @XmlSchemaType(name = "string")
    protected HotelInfoHotelRating rating;
    @XmlElement(name = "HotelPromotion")
    protected String hotelPromotion;
    @XmlElement(name = "TripAdvisorRating")
    protected String tripAdvisorRating;
    @XmlElement(name = "TripAdvisorReviewURL")
    protected String tripAdvisorReviewURL;
    @XmlElement(name = "TagIds")
    protected String tagIds;

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
     * Obtient la valeur de la propri�t� hotelName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelName() {
        return hotelName;
    }

    /**
     * D�finit la valeur de la propri�t� hotelName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelName(String value) {
        this.hotelName = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelPicture.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelPicture() {
        return hotelPicture;
    }

    /**
     * D�finit la valeur de la propri�t� hotelPicture.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelPicture(String value) {
        this.hotelPicture = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelDescription.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelDescription() {
        return hotelDescription;
    }

    /**
     * D�finit la valeur de la propri�t� hotelDescription.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelDescription(String value) {
        this.hotelDescription = value;
    }

    /**
     * Obtient la valeur de la propri�t� latitude.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getLatitude() {
        return latitude;
    }

    /**
     * D�finit la valeur de la propri�t� latitude.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setLatitude(BigDecimal value) {
        this.latitude = value;
    }

    /**
     * Obtient la valeur de la propri�t� longitude.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getLongitude() {
        return longitude;
    }

    /**
     * D�finit la valeur de la propri�t� longitude.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setLongitude(BigDecimal value) {
        this.longitude = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelAddress.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelAddress() {
        return hotelAddress;
    }

    /**
     * D�finit la valeur de la propri�t� hotelAddress.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelAddress(String value) {
        this.hotelAddress = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelContactNo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelContactNo() {
        return hotelContactNo;
    }

    /**
     * D�finit la valeur de la propri�t� hotelContactNo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelContactNo(String value) {
        this.hotelContactNo = value;
    }

    /**
     * Obtient la valeur de la propri�t� rating.
     * 
     * @return
     *     possible object is
     *     {@link HotelInfoHotelRating }
     *     
     */
    public HotelInfoHotelRating getRating() {
        return rating;
    }

    /**
     * D�finit la valeur de la propri�t� rating.
     * 
     * @param value
     *     allowed object is
     *     {@link HotelInfoHotelRating }
     *     
     */
    public void setRating(HotelInfoHotelRating value) {
        this.rating = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelPromotion.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelPromotion() {
        return hotelPromotion;
    }

    /**
     * D�finit la valeur de la propri�t� hotelPromotion.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelPromotion(String value) {
        this.hotelPromotion = value;
    }

    /**
     * Obtient la valeur de la propri�t� tripAdvisorRating.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTripAdvisorRating() {
        return tripAdvisorRating;
    }

    /**
     * D�finit la valeur de la propri�t� tripAdvisorRating.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTripAdvisorRating(String value) {
        this.tripAdvisorRating = value;
    }

    /**
     * Obtient la valeur de la propri�t� tripAdvisorReviewURL.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTripAdvisorReviewURL() {
        return tripAdvisorReviewURL;
    }

    /**
     * D�finit la valeur de la propri�t� tripAdvisorReviewURL.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTripAdvisorReviewURL(String value) {
        this.tripAdvisorReviewURL = value;
    }

    /**
     * Obtient la valeur de la propri�t� tagIds.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTagIds() {
        return tagIds;
    }

    /**
     * D�finit la valeur de la propri�t� tagIds.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTagIds(String value) {
        this.tagIds = value;
    }

}
