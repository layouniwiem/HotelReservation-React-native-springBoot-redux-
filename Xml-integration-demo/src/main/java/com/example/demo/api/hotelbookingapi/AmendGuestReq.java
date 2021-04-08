package com.example.demo.api.hotelbookingapi;




import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour AmendGuestReq complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="AmendGuestReq">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="Action" use="required" type="{http://TekTravel/HotelBookingApi}AmendActionReq" />
 *       &lt;attribute name="ExistingName" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="GuestType" use="required" type="{http://TekTravel/HotelBookingApi}GuestType" />
 *       &lt;attribute name="Title" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="FirstName" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="LastName" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="Age" use="required" type="{http://www.w3.org/2001/XMLSchema}int" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AmendGuestReq")
public class AmendGuestReq {

    @XmlAttribute(name = "Action", required = true)
    protected AmendActionReq action;
    @XmlAttribute(name = "ExistingName")
    protected String existingName;
    @XmlAttribute(name = "GuestType", required = true)
    protected GuestType guestType;
    @XmlAttribute(name = "Title")
    protected String title;
    @XmlAttribute(name = "FirstName")
    protected String firstName;
    @XmlAttribute(name = "LastName")
    protected String lastName;
    @XmlAttribute(name = "Age", required = true)
    protected int age;

    /**
     * Obtient la valeur de la propri�t� action.
     * 
     * @return
     *     possible object is
     *     {@link AmendActionReq }
     *     
     */
    public AmendActionReq getAction() {
        return action;
    }

    /**
     * D�finit la valeur de la propri�t� action.
     * 
     * @param value
     *     allowed object is
     *     {@link AmendActionReq }
     *     
     */
    public void setAction(AmendActionReq value) {
        this.action = value;
    }

    /**
     * Obtient la valeur de la propri�t� existingName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExistingName() {
        return existingName;
    }

    /**
     * D�finit la valeur de la propri�t� existingName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExistingName(String value) {
        this.existingName = value;
    }

    /**
     * Obtient la valeur de la propri�t� guestType.
     * 
     * @return
     *     possible object is
     *     {@link GuestType }
     *     
     */
    public GuestType getGuestType() {
        return guestType;
    }

    /**
     * D�finit la valeur de la propri�t� guestType.
     * 
     * @param value
     *     allowed object is
     *     {@link GuestType }
     *     
     */
    public void setGuestType(GuestType value) {
        this.guestType = value;
    }

    /**
     * Obtient la valeur de la propri�t� title.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTitle() {
        return title;
    }

    /**
     * D�finit la valeur de la propri�t� title.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTitle(String value) {
        this.title = value;
    }

    /**
     * Obtient la valeur de la propri�t� firstName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * D�finit la valeur de la propri�t� firstName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFirstName(String value) {
        this.firstName = value;
    }

    /**
     * Obtient la valeur de la propri�t� lastName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * D�finit la valeur de la propri�t� lastName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLastName(String value) {
        this.lastName = value;
    }

    /**
     * Obtient la valeur de la propri�t� age.
     * 
     */
    public int getAge() {
        return age;
    }

    /**
     * D�finit la valeur de la propri�t� age.
     * 
     */
    public void setAge(int value) {
        this.age = value;
    }

}
