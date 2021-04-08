package com.example.demo.api.hotelbookingapi;



import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour ArrayOfDayRate complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfDayRate">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="DayRate" type="{http://TekTravel/HotelBookingApi}DayRate" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfDayRate", propOrder = {
    "dayRate"
})
public class ArrayOfDayRate {

    @XmlElement(name = "DayRate", nillable = true)
    protected List<DayRate> dayRate;

    /**
     * Gets the value of the dayRate property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the dayRate property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDayRate().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link DayRate }
     * 
     * 
     */
    public List<DayRate> getDayRate() {
        if (dayRate == null) {
            dayRate = new ArrayList<DayRate>();
        }
        return this.dayRate;
    }

}
