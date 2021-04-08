
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
 *         &lt;element name="CityCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="IsDetailedResponse" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
    "cityCode",
    "isDetailedResponse"
})
@XmlRootElement(name = "GiataHotelCodesRequest")
public class GiataHotelCodesRequest {

    @XmlElement(name = "CityCode")
    protected String cityCode;
    @XmlElement(name = "IsDetailedResponse")
    protected String isDetailedResponse;

    /**
     * Obtient la valeur de la propri�t� cityCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCityCode() {
        return cityCode;
    }

    /**
     * D�finit la valeur de la propri�t� cityCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCityCode(String value) {
        this.cityCode = value;
    }

    /**
     * Obtient la valeur de la propri�t� isDetailedResponse.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIsDetailedResponse() {
        return isDetailedResponse;
    }

    /**
     * D�finit la valeur de la propri�t� isDetailedResponse.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIsDetailedResponse(String value) {
        this.isDetailedResponse = value;
    }

}
