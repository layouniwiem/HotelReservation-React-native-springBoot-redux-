
package com.example.demo.api.hotelbookingapi;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;


/**
 * <p>Classe Java pour ArrayOfRequestedRooms complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfRequestedRooms">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="HotelRoom" type="{http://TekTravel/HotelBookingApi}RequestedRooms" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfRequestedRooms", propOrder = {
    "hotelRoom"
})
public class ArrayOfRequestedRooms {

    @XmlElement(name = "HotelRoom", nillable = true)
    protected List<RequestedRooms> hotelRoom;

    public ArrayOfRequestedRooms(BookHotelRequest request) {
		// TODO Auto-generated constructor stub
    	List<RequestedRooms> list= new ArrayList<>();
    	list.add(new RequestedRooms(request));
	}

	/**
     * Gets the value of the hotelRoom property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the hotelRoom property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getHotelRoom().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link RequestedRooms }
     * 
     * 
     */
    public List<RequestedRooms> getHotelRoom() {
        if (hotelRoom == null) {
            hotelRoom = new ArrayList<RequestedRooms>();
        }
        return this.hotelRoom;
    }

}
