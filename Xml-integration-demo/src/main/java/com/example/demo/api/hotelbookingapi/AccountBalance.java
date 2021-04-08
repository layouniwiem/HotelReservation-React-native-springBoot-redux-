package com.example.demo.api.hotelbookingapi;




import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour AccountBalance.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * <p>
 * <pre>
 * &lt;simpleType name="AccountBalance">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Sufficient"/>
 *     &lt;enumeration value="InSufficient"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "AccountBalance")
@XmlEnum
public enum AccountBalance {

    @XmlEnumValue("Sufficient")
    SUFFICIENT("Sufficient"),
    @XmlEnumValue("InSufficient")
    IN_SUFFICIENT("InSufficient");
    private final String value;

    AccountBalance(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static AccountBalance fromValue(String v) {
        for (AccountBalance c: AccountBalance.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
