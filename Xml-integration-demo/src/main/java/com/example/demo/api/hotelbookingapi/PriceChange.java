
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour PriceChange.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * <p>
 * <pre>
 * &lt;simpleType name="PriceChange">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="InformationRequired"/>
 *     &lt;enumeration value="Approved"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "PriceChange")
@XmlEnum
public enum PriceChange {

    @XmlEnumValue("InformationRequired")
    INFORMATION_REQUIRED("InformationRequired"),
    @XmlEnumValue("Approved")
    APPROVED("Approved");
    private final String value;

    PriceChange(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static PriceChange fromValue(String v) {
        for (PriceChange c: PriceChange.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
