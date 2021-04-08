
package com.example.demo.api.hotelbookingapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour HotelRating.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * <p>
 * <pre>
 * &lt;simpleType name="HotelRating">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="All"/>
 *     &lt;enumeration value="OneStar"/>
 *     &lt;enumeration value="TwoStar"/>
 *     &lt;enumeration value="ThreeStar"/>
 *     &lt;enumeration value="FourStar"/>
 *     &lt;enumeration value="FiveStar"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "HotelRating")
@XmlEnum
public enum HotelRating {

    @XmlEnumValue("All")
    ALL("All"),
    @XmlEnumValue("OneStar")
    ONE_STAR("OneStar"),
    @XmlEnumValue("TwoStar")
    TWO_STAR("TwoStar"),
    @XmlEnumValue("ThreeStar")
    THREE_STAR("ThreeStar"),
    @XmlEnumValue("FourStar")
    FOUR_STAR("FourStar"),
    @XmlEnumValue("FiveStar")
    FIVE_STAR("FiveStar");
    private final String value;

    HotelRating(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static HotelRating fromValue(String v) {
        for (HotelRating c: HotelRating.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
