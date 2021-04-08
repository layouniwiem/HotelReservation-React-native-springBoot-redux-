package com.example.demo.api.hotelbookingapi;



import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour ApprovalInformation complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="ApprovalInformation">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Rooms" type="{http://TekTravel/HotelBookingApi}ArrayOfRoomPriceRes" minOccurs="0"/>
 *         &lt;element name="TotalPrice" type="{http://TekTravel/HotelBookingApi}TotalPrice" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ApprovalInformation", propOrder = {
    "rooms",
    "totalPrice"
})
public class ApprovalInformation {

    @XmlElement(name = "Rooms")
    protected ArrayOfRoomPriceRes rooms;
    @XmlElement(name = "TotalPrice")
    protected TotalPrice totalPrice;

    /**
     * Obtient la valeur de la propri�t� rooms.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfRoomPriceRes }
     *     
     */
    public ArrayOfRoomPriceRes getRooms() {
        return rooms;
    }

    /**
     * D�finit la valeur de la propri�t� rooms.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfRoomPriceRes }
     *     
     */
    public void setRooms(ArrayOfRoomPriceRes value) {
        this.rooms = value;
    }

    /**
     * Obtient la valeur de la propri�t� totalPrice.
     * 
     * @return
     *     possible object is
     *     {@link TotalPrice }
     *     
     */
    public TotalPrice getTotalPrice() {
        return totalPrice;
    }

    /**
     * D�finit la valeur de la propri�t� totalPrice.
     * 
     * @param value
     *     allowed object is
     *     {@link TotalPrice }
     *     
     */
    public void setTotalPrice(TotalPrice value) {
        this.totalPrice = value;
    }

}
