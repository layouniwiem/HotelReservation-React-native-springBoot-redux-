package com.example.demo.api.hotelbookingapi;




import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour AmendmentRequested complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="AmendmentRequested">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CheckIn" type="{http://TekTravel/HotelBookingApi}CheckInRes" minOccurs="0"/>
 *         &lt;element name="CheckOut" type="{http://TekTravel/HotelBookingApi}CheckOutRes" minOccurs="0"/>
 *         &lt;element name="Rooms" type="{http://TekTravel/HotelBookingApi}ArrayOfRoomRes" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AmendmentRequested", propOrder = {
    "checkIn",
    "checkOut",
    "rooms"
})
public class AmendmentRequested {

    @XmlElement(name = "CheckIn")
    protected CheckInRes checkIn;
    @XmlElement(name = "CheckOut")
    protected CheckOutRes checkOut;
    @XmlElement(name = "Rooms")
    protected ArrayOfRoomRes rooms;

    /**
     * Obtient la valeur de la propri�t� checkIn.
     * 
     * @return
     *     possible object is
     *     {@link CheckInRes }
     *     
     */
    public CheckInRes getCheckIn() {
        return checkIn;
    }

    /**
     * D�finit la valeur de la propri�t� checkIn.
     * 
     * @param value
     *     allowed object is
     *     {@link CheckInRes }
     *     
     */
    public void setCheckIn(CheckInRes value) {
        this.checkIn = value;
    }

    /**
     * Obtient la valeur de la propri�t� checkOut.
     * 
     * @return
     *     possible object is
     *     {@link CheckOutRes }
     *     
     */
    public CheckOutRes getCheckOut() {
        return checkOut;
    }

    /**
     * D�finit la valeur de la propri�t� checkOut.
     * 
     * @param value
     *     allowed object is
     *     {@link CheckOutRes }
     *     
     */
    public void setCheckOut(CheckOutRes value) {
        this.checkOut = value;
    }

    /**
     * Obtient la valeur de la propri�t� rooms.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfRoomRes }
     *     
     */
    public ArrayOfRoomRes getRooms() {
        return rooms;
    }

    /**
     * D�finit la valeur de la propri�t� rooms.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfRoomRes }
     *     
     */
    public void setRooms(ArrayOfRoomRes value) {
        this.rooms = value;
    }

}
