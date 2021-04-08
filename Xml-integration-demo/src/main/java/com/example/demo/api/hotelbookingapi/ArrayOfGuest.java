package com.example.demo.api.hotelbookingapi;




import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;
import com.sun.org.apache.bcel.internal.generic.NEWARRAY;


/**
 * <p>Classe Java pour ArrayOfGuest complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfGuest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Guest" type="{http://TekTravel/HotelBookingApi}Guest" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfGuest", propOrder = {
    "guest"
})
public class ArrayOfGuest {

    @XmlElement(name = "Guest", nillable = true)
    protected List<Guest> guest;

    public ArrayOfGuest(BookHotelRequest request) {
    	List<Guest> list= new ArrayList<>();
    	list.add(new Guest(request));
    	this.guest=list;
		// TODO Auto-generated constructor stub
	}

	/**
     * Gets the value of the guest property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the guest property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getGuest().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Guest }
     * 
     * 
     */
    public List<Guest> getGuest() {
        if (guest == null) {
            guest = new ArrayList<Guest>();
        }
        return this.guest;
    }

}
