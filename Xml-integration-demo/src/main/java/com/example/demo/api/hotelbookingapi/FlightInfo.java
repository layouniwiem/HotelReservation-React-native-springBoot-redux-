
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;


/**
 * <p>Classe Java pour FlightInfo complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="FlightInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="ArrivingByFlight" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="flightName" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="flightNumber" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="Hour" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="Minutes" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="remarks" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "FlightInfo")
public class FlightInfo {

    @XmlAttribute(name = "ArrivingByFlight", required = true)
    protected boolean arrivingByFlight;
    @XmlAttribute(name = "flightName")
    protected String flightName;
    @XmlAttribute(name = "flightNumber")
    protected String flightNumber;
    @XmlAttribute(name = "Hour")
    protected String hour;
    @XmlAttribute(name = "Minutes")
    protected String minutes;
    @XmlAttribute(name = "remarks")
    protected String remarks;

    public FlightInfo(BookHotelRequest request) {
		// TODO Auto-generated constructor stub
    	this.arrivingByFlight=request.isArrivingByFlight();
    	this.flightName=request.getFlightName();
    	this.flightNumber=request.getFlightNumber();
    	this.hour=request.getHour();
    	this.minutes=request.getMinutes();
    	this.remarks=request.getRemarks();
    	
	}

	/**
     * Obtient la valeur de la propri�t� arrivingByFlight.
     * 
     */
    public boolean isArrivingByFlight() {
        return arrivingByFlight;
    }

    /**
     * D�finit la valeur de la propri�t� arrivingByFlight.
     * 
     */
    public void setArrivingByFlight(boolean value) {
        this.arrivingByFlight = value;
    }

    /**
     * Obtient la valeur de la propri�t� flightName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFlightName() {
        return flightName;
    }

    /**
     * D�finit la valeur de la propri�t� flightName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFlightName(String value) {
        this.flightName = value;
    }

    /**
     * Obtient la valeur de la propri�t� flightNumber.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFlightNumber() {
        return flightNumber;
    }

    /**
     * D�finit la valeur de la propri�t� flightNumber.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFlightNumber(String value) {
        this.flightNumber = value;
    }

    /**
     * Obtient la valeur de la propri�t� hour.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHour() {
        return hour;
    }

    /**
     * D�finit la valeur de la propri�t� hour.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHour(String value) {
        this.hour = value;
    }

    /**
     * Obtient la valeur de la propri�t� minutes.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMinutes() {
        return minutes;
    }

    /**
     * D�finit la valeur de la propri�t� minutes.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMinutes(String value) {
        this.minutes = value;
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
