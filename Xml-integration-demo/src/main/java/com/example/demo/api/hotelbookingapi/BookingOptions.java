
package com.example.demo.api.hotelbookingapi;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.CancellationHotelPolicyRequest;
import com.example.demo.pfe.dto.SearchHotel.PricingAndAvailabilityRequest;

/**
 * <p>
 * Classe Java pour BookingOptions complex type.
 * 
 * <p>
 * Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette
 * classe.
 * 
 * <pre>
 * &lt;complexType name="BookingOptions">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="FixedFormat" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="RoomCombination" type="{http://TekTravel/HotelBookingApi}RoomCombination" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "BookingOptions", propOrder = { "fixedFormat", "roomCombination" })
public class BookingOptions {

	@XmlElement(name = "FixedFormat")
	protected boolean fixedFormat;
	@XmlElement(name = "RoomCombination")
	protected List<RoomCombination> roomCombination;

	public BookingOptions(CancellationHotelPolicyRequest request) {
		// TODO Auto-generated constructor stub
		this.fixedFormat = true;
		RoomCombination room = new RoomCombination(request);
		this.roomCombination = new ArrayList<>();
		this.roomCombination.add(room);
	}

	public BookingOptions(PricingAndAvailabilityRequest request) {
		// TODO Auto-generated constructor stub
		this.fixedFormat = request.isFixedFormat();
//    	List<RoomCombination> room= new RoomCombination(request);
//		this.roomCombination = (List<RoomCombination>) new RoomCombination(request);
		RoomCombination room = new RoomCombination(request);
		this.roomCombination = new ArrayList<>();
		this.roomCombination.add(room);
	}

	public BookingOptions() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Obtient la valeur de la propri�t� fixedFormat.
	 * 
	 */
	public boolean isFixedFormat() {
		return fixedFormat;
	}

	/**
	 * D�finit la valeur de la propri�t� fixedFormat.
	 * 
	 */
	public void setFixedFormat(boolean value) {
		this.fixedFormat = value;
	}

	/**
	 * Gets the value of the roomCombination property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list, not a snapshot.
	 * Therefore any modification you make to the returned list will be present
	 * inside the JAXB object. This is why there is not a <CODE>set</CODE> method
	 * for the roomCombination property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * 
	 * <pre>
	 * getRoomCombination().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list
	 * {@link RoomCombination }
	 * 
	 * 
	 */
	public List<RoomCombination> getRoomCombination() {
		if (roomCombination == null) {
			roomCombination = new ArrayList<>();
		}
		return this.roomCombination;
	}

	@Override
	public String toString() {
		return "BookingOptions [fixedFormat=" + fixedFormat + ", roomCombination=" + roomCombination + "]";
	}

}
