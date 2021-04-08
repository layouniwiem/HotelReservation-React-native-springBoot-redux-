
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.SearchHotelRequest;




/**
 * <p>Classe Java pour Filters complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Filters">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="HotelName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="StarRating" type="{http://TekTravel/HotelBookingApi}HotelRatingInput"/>
 *         &lt;element name="OrderBy" type="{http://TekTravel/HotelBookingApi}OrderByFilter"/>
 *         &lt;element name="HotelCodeList" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Filters", propOrder = {
    "hotelName",
    "starRating",
    "orderBy",
    "hotelCodeList"
})
public class Filters {

    @XmlElement(name = "HotelName")
    protected String hotelName;
    @XmlElement(name = "StarRating", required = true)
    @XmlSchemaType(name = "string")
    protected HotelRatingInput starRating;
    @XmlElement(name = "OrderBy", required = true)
    @XmlSchemaType(name = "string")
    protected OrderByFilter orderBy;
    @XmlElement(name = "HotelCodeList")
    protected String hotelCodeList;

    public Filters() {}
   
    public Filters(SearchHotelRequest requestHotel) {
        	String rating = "";
        	
        	if (requestHotel.getRatings() == 0)
        		rating = "All";
        	else if (requestHotel.getRatings() == 1)
        		rating = "OneStarOrLess";
        	else if (requestHotel.getRatings() == 2)
        		rating = "TwoStarOrLess";
        	else if (requestHotel.getRatings() == 3)
        		rating = "ThreeStarOrLess";
        	else if (requestHotel.getRatings() == 4)
        		rating = "FourStarOrLess";
        	else if (requestHotel.getRatings() == 5)
        		rating = "FiveStarOrLess";
        	
        	this.starRating =  HotelRatingInput.fromValue(rating);
        	this.orderBy = OrderByFilter.fromValue("PriceAsc");
        	if (requestHotel.getHotelCode() != null) {
        		this.hotelCodeList = requestHotel.getHotelCode();
        	}
        	
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
     * Obtient la valeur de la propri�t� starRating.
     * 
     * @return
     *     possible object is
     *     {@link HotelRatingInput }
     *     
     */
    public HotelRatingInput getStarRating() {
        return starRating;
    }

    /**
     * D�finit la valeur de la propri�t� starRating.
     * 
     * @param value
     *     allowed object is
     *     {@link HotelRatingInput }
     *     
     */
    public void setStarRating(HotelRatingInput value) {
        this.starRating = value;
    }

    /**
     * Obtient la valeur de la propri�t� orderBy.
     * 
     * @return
     *     possible object is
     *     {@link OrderByFilter }
     *     
     */
    public OrderByFilter getOrderBy() {
        return orderBy;
    }

    /**
     * D�finit la valeur de la propri�t� orderBy.
     * 
     * @param value
     *     allowed object is
     *     {@link OrderByFilter }
     *     
     */
    public void setOrderBy(OrderByFilter value) {
        this.orderBy = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelCodeList.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelCodeList() {
        return hotelCodeList;
    }

    /**
     * D�finit la valeur de la propri�t� hotelCodeList.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelCodeList(String value) {
        this.hotelCodeList = value;
    }

	@Override
	public String toString() {
		return "Filters [hotelName=" + hotelName + ", starRating=" + starRating + ", orderBy=" + orderBy
				+ ", hotelCodeList=" + hotelCodeList + "]";
	}

    
    
    
}
