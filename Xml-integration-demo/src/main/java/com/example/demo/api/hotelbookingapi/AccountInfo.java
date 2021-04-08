package com.example.demo.api.hotelbookingapi;




import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour AccountInfo complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="AccountInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="AgencyBalance" use="required" type="{http://TekTravel/HotelBookingApi}AccountBalance" />
 *       &lt;attribute name="AgencyBlocked" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AccountInfo")
public class AccountInfo {

    @XmlAttribute(name = "AgencyBalance", required = true)
    protected AccountBalance agencyBalance;
    @XmlAttribute(name = "AgencyBlocked", required = true)
    protected boolean agencyBlocked;

    /**
     * Obtient la valeur de la propri�t� agencyBalance.
     * 
     * @return
     *     possible object is
     *     {@link AccountBalance }
     *     
     */
    public AccountBalance getAgencyBalance() {
        return agencyBalance;
    }

    /**
     * D�finit la valeur de la propri�t� agencyBalance.
     * 
     * @param value
     *     allowed object is
     *     {@link AccountBalance }
     *     
     */
    public void setAgencyBalance(AccountBalance value) {
        this.agencyBalance = value;
    }

    /**
     * Obtient la valeur de la propri�t� agencyBlocked.
     * 
     */
    public boolean isAgencyBlocked() {
        return agencyBlocked;
    }

    /**
     * D�finit la valeur de la propri�t� agencyBlocked.
     * 
     */
    public void setAgencyBlocked(boolean value) {
        this.agencyBlocked = value;
    }

}
