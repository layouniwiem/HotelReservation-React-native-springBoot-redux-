
package com.example.demo.api.hotelbookingapi;

import java.math.BigDecimal;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;


/**
 * <p>Classe Java pour SuppInfo complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="SuppInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="SuppID" use="required" type="{http://www.w3.org/2001/XMLSchema}int" />
 *       &lt;attribute name="SuppChargeType" use="required" type="{http://TekTravel/HotelBookingApi}SuppChargeType" />
 *       &lt;attribute name="Price" use="required" type="{http://www.w3.org/2001/XMLSchema}decimal" />
 *       &lt;attribute name="SuppIsSelected" use="required" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SuppInfo")
public class SuppInfo {

    @XmlAttribute(name = "SuppID", required = true)
    protected int suppID;
    @XmlAttribute(name = "SuppChargeType", required = true)
    protected SuppChargeType suppChargeType;
    @XmlAttribute(name = "Price", required = true)
    protected BigDecimal price;
    @XmlAttribute(name = "SuppIsSelected", required = true)
    protected boolean suppIsSelected;

    public SuppInfo(BookHotelRequest request) {
		// TODO Auto-generated constructor stub
//    	this.price= request.getP
	}

	/**
     * Obtient la valeur de la propri�t� suppID.
     * 
     */
    public int getSuppID() {
        return suppID;
    }

    /**
     * D�finit la valeur de la propri�t� suppID.
     * 
     */
    public void setSuppID(int value) {
        this.suppID = value;
    }

    /**
     * Obtient la valeur de la propri�t� suppChargeType.
     * 
     * @return
     *     possible object is
     *     {@link SuppChargeType }
     *     
     */
    public SuppChargeType getSuppChargeType() {
        return suppChargeType;
    }

    /**
     * D�finit la valeur de la propri�t� suppChargeType.
     * 
     * @param value
     *     allowed object is
     *     {@link SuppChargeType }
     *     
     */
    public void setSuppChargeType(SuppChargeType value) {
        this.suppChargeType = value;
    }

    /**
     * Obtient la valeur de la propri�t� price.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getPrice() {
        return price;
    }

    /**
     * D�finit la valeur de la propri�t� price.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setPrice(BigDecimal value) {
        this.price = value;
    }

    /**
     * Obtient la valeur de la propri�t� suppIsSelected.
     * 
     */
    public boolean isSuppIsSelected() {
        return suppIsSelected;
    }

    /**
     * D�finit la valeur de la propri�t� suppIsSelected.
     * 
     */
    public void setSuppIsSelected(boolean value) {
        this.suppIsSelected = value;
    }

}
