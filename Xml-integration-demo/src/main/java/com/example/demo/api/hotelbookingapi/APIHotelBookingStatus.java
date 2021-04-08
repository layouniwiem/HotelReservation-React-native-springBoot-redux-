package com.example.demo.api.hotelbookingapi;



import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour APIHotelBookingStatus.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * <p>
 * <pre>
 * &lt;simpleType name="APIHotelBookingStatus">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Failed"/>
 *     &lt;enumeration value="Confirmed"/>
 *     &lt;enumeration value="Cancelled"/>
 *     &lt;enumeration value="Pending"/>
 *     &lt;enumeration value="Rejected"/>
 *     &lt;enumeration value="Vouchered"/>
 *     &lt;enumeration value="CancellationInProgress"/>
 *     &lt;enumeration value="CxlRequestSentToHotel"/>
 *     &lt;enumeration value="WaitingForPayment"/>
 *     &lt;enumeration value="CancelledAndRefundAwaited"/>
 *     &lt;enumeration value="Requested"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "APIHotelBookingStatus")
@XmlEnum
public enum APIHotelBookingStatus {

    @XmlEnumValue("Failed")
    FAILED("Failed"),
    @XmlEnumValue("Confirmed")
    CONFIRMED("Confirmed"),
    @XmlEnumValue("Cancelled")
    CANCELLED("Cancelled"),
    @XmlEnumValue("Pending")
    PENDING("Pending"),
    @XmlEnumValue("Rejected")
    REJECTED("Rejected"),
    @XmlEnumValue("Vouchered")
    VOUCHERED("Vouchered"),
    @XmlEnumValue("CancellationInProgress")
    CANCELLATION_IN_PROGRESS("CancellationInProgress"),
    @XmlEnumValue("CxlRequestSentToHotel")
    CXL_REQUEST_SENT_TO_HOTEL("CxlRequestSentToHotel"),
    @XmlEnumValue("WaitingForPayment")
    WAITING_FOR_PAYMENT("WaitingForPayment"),
    @XmlEnumValue("CancelledAndRefundAwaited")
    CANCELLED_AND_REFUND_AWAITED("CancelledAndRefundAwaited"),
    @XmlEnumValue("Requested")
    REQUESTED("Requested");
    
    private final String value;

    
    APIHotelBookingStatus(String value) {
        this.value = value;
    }

    public String value() {
        return value;
    }

    
    public static APIHotelBookingStatus fromValue(String v) {
        for (APIHotelBookingStatus c: APIHotelBookingStatus.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }


    
}
