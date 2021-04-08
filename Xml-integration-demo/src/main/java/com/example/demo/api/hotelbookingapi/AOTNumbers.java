package com.example.demo.api.hotelbookingapi;




import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour AOTNumbers complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="AOTNumbers">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Country" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Contact" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="IntlCall" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="DomesticCall" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="LocalCall" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="OfficeHours" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Emergency" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Language" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AOTNumbers", propOrder = {
    "country",
    "contact",
    "intlCall",
    "domesticCall",
    "localCall",
    "officeHours",
    "emergency",
    "language"
})
public class AOTNumbers {

    @XmlElement(name = "Country")
    protected String country;
    @XmlElement(name = "Contact")
    protected String contact;
    @XmlElement(name = "IntlCall")
    protected String intlCall;
    @XmlElement(name = "DomesticCall")
    protected String domesticCall;
    @XmlElement(name = "LocalCall")
    protected String localCall;
    @XmlElement(name = "OfficeHours")
    protected String officeHours;
    @XmlElement(name = "Emergency")
    protected String emergency;
    @XmlElement(name = "Language")
    protected String language;

    /**
     * Obtient la valeur de la propri�t� country.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCountry() {
        return country;
    }

    /**
     * D�finit la valeur de la propri�t� country.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCountry(String value) {
        this.country = value;
    }

    /**
     * Obtient la valeur de la propri�t� contact.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getContact() {
        return contact;
    }

    /**
     * D�finit la valeur de la propri�t� contact.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setContact(String value) {
        this.contact = value;
    }

    /**
     * Obtient la valeur de la propri�t� intlCall.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIntlCall() {
        return intlCall;
    }

    /**
     * D�finit la valeur de la propri�t� intlCall.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIntlCall(String value) {
        this.intlCall = value;
    }

    /**
     * Obtient la valeur de la propri�t� domesticCall.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomesticCall() {
        return domesticCall;
    }

    /**
     * D�finit la valeur de la propri�t� domesticCall.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomesticCall(String value) {
        this.domesticCall = value;
    }

    /**
     * Obtient la valeur de la propri�t� localCall.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLocalCall() {
        return localCall;
    }

    /**
     * D�finit la valeur de la propri�t� localCall.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLocalCall(String value) {
        this.localCall = value;
    }

    /**
     * Obtient la valeur de la propri�t� officeHours.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOfficeHours() {
        return officeHours;
    }

    /**
     * D�finit la valeur de la propri�t� officeHours.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOfficeHours(String value) {
        this.officeHours = value;
    }

    /**
     * Obtient la valeur de la propri�t� emergency.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmergency() {
        return emergency;
    }

    /**
     * D�finit la valeur de la propri�t� emergency.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmergency(String value) {
        this.emergency = value;
    }

    /**
     * Obtient la valeur de la propri�t� language.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLanguage() {
        return language;
    }

    /**
     * D�finit la valeur de la propri�t� language.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLanguage(String value) {
        this.language = value;
    }

}
