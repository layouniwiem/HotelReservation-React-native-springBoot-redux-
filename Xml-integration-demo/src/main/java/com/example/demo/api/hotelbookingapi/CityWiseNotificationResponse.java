
package com.example.demo.api.hotelbookingapi;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour anonymous complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Status" type="{http://TekTravel/HotelBookingApi}ResponseStatus" minOccurs="0"/>
 *         &lt;element name="CityWiseNotifications" type="{http://TekTravel/HotelBookingApi}ArrayOfCityWiseNotification" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "status",
    "cityWiseNotifications"
})
@XmlRootElement(name = "CityWiseNotificationResponse")
public class CityWiseNotificationResponse {

    @XmlElement(name = "Status")
    protected ResponseStatus status;
    @XmlElement(name = "CityWiseNotifications")
    protected ArrayOfCityWiseNotification cityWiseNotifications;

    /**
     * Obtient la valeur de la propri�t� status.
     * 
     * @return
     *     possible object is
     *     {@link ResponseStatus }
     *     
     */
    public ResponseStatus getStatus() {
        return status;
    }

    /**
     * D�finit la valeur de la propri�t� status.
     * 
     * @param value
     *     allowed object is
     *     {@link ResponseStatus }
     *     
     */
    public void setStatus(ResponseStatus value) {
        this.status = value;
    }

    /**
     * Obtient la valeur de la propri�t� cityWiseNotifications.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfCityWiseNotification }
     *     
     */
    public ArrayOfCityWiseNotification getCityWiseNotifications() {
        return cityWiseNotifications;
    }

    /**
     * D�finit la valeur de la propri�t� cityWiseNotifications.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfCityWiseNotification }
     *     
     */
    public void setCityWiseNotifications(ArrayOfCityWiseNotification value) {
        this.cityWiseNotifications = value;
    }

}
