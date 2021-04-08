
package com.example.demo.api.hotelbookingapi;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;


/**
 * <p>Classe Java pour ArrayOfSuppInfo complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfSuppInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="SuppInfo" type="{http://TekTravel/HotelBookingApi}SuppInfo" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfSuppInfo", propOrder = {
    "suppInfo"
})
public class ArrayOfSuppInfo {

    @XmlElement(name = "SuppInfo", nillable = true)
    protected List<SuppInfo> suppInfo;

    public ArrayOfSuppInfo(BookHotelRequest request) {
		// TODO Auto-generated constructor stub
    	List<SuppInfo> list= new ArrayList<>();
    	list.add(new SuppInfo(request) );
	}

	/**
     * Gets the value of the suppInfo property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the suppInfo property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getSuppInfo().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link SuppInfo }
     * 
     * 
     */
    public List<SuppInfo> getSuppInfo() {
        if (suppInfo == null) {
            suppInfo = new ArrayList<SuppInfo>();
        }
        return this.suppInfo;
    }

}
