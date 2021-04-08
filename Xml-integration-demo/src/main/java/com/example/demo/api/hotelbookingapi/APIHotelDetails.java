package com.example.demo.api.hotelbookingapi;




import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour APIHotelDetails complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="APIHotelDetails">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Address" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="HotelLocation" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Attractions" type="{http://TekTravel/HotelBookingApi}ArrayOfString3" minOccurs="0"/>
 *         &lt;element name="CountryName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="CountryCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Description" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Email" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="FaxNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="HotelFacilities" type="{http://TekTravel/HotelBookingApi}ArrayOfString4" minOccurs="0"/>
 *         &lt;element name="HotelPolicy" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Image" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="ImageUrls" type="{http://TekTravel/HotelBookingApi}ArrayOfImageUrlDetails" minOccurs="0"/>
 *         &lt;element name="Map" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="PhoneNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="PinCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RoomInfo" type="{http://TekTravel/HotelBookingApi}ArrayOfRoomInfo" minOccurs="0"/>
 *         &lt;element name="RoomFacilities" type="{http://TekTravel/HotelBookingApi}ArrayOfString6" minOccurs="0"/>
 *         &lt;element name="Services" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="HotelWebsiteUrl" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TripAdvisorRating" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TripAdvisorReviewURL" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="CityName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="HotelCode" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="HotelName" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="HotelRating" use="required" type="{http://TekTravel/HotelBookingApi}HotelInfoHotelRating" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "APIHotelDetails", propOrder = {
    "address",
    "hotelLocation",
    "attractions",
    "countryName",
    "countryCode",
    "description",
    "email",
    "faxNumber",
    "hotelFacilities",
    "hotelPolicy",
    "image",
    "imageUrls",
    "map",
    "phoneNumber",
    "pinCode",
    "roomInfo",
    "roomFacilities",
    "services",
    "hotelWebsiteUrl",
    "tripAdvisorRating",
    "tripAdvisorReviewURL",
    "cityName"
})
public class APIHotelDetails {

    @XmlElement(name = "Address")
    protected String address;
    @XmlElement(name = "HotelLocation")
    protected String hotelLocation;
    @XmlElement(name = "Attractions")
    protected ArrayOfString3 attractions;
    @XmlElement(name = "CountryName")
    protected String countryName;
    @XmlElement(name = "CountryCode")
    protected String countryCode;
    @XmlElement(name = "Description")
    protected String description;
    @XmlElement(name = "Email")
    protected String email;
    @XmlElement(name = "FaxNumber")
    protected String faxNumber;
    @XmlElement(name = "HotelFacilities")
    protected ArrayOfString4 hotelFacilities;
    @XmlElement(name = "HotelPolicy")
    protected String hotelPolicy;
    @XmlElement(name = "Image")
    protected String image;
    @XmlElement(name = "ImageUrls")
    protected ArrayOfImageUrlDetails imageUrls;
    @XmlElement(name = "Map")
    protected String map;
    @XmlElement(name = "PhoneNumber")
    protected String phoneNumber;
    @XmlElement(name = "PinCode")
    protected String pinCode;
    @XmlElement(name = "RoomInfo")
    protected ArrayOfRoomInfo roomInfo;
    @XmlElement(name = "RoomFacilities")
    protected ArrayOfString6 roomFacilities;
    @XmlElement(name = "Services")
    protected String services;
    @XmlElement(name = "HotelWebsiteUrl")
    protected String hotelWebsiteUrl;
    @XmlElement(name = "TripAdvisorRating")
    protected String tripAdvisorRating;
    @XmlElement(name = "TripAdvisorReviewURL")
    protected String tripAdvisorReviewURL;
    @XmlElement(name = "CityName")
    protected String cityName;
    @XmlAttribute(name = "HotelCode")
    protected String hotelCode;
    @XmlAttribute(name = "HotelName")
    protected String hotelName;
    @XmlAttribute(name = "HotelRating", required = true)
    protected HotelInfoHotelRating hotelRating;

    /**
     * Obtient la valeur de la propri�t� address.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAddress() {
        return address;
    }

    /**
     * D�finit la valeur de la propri�t� address.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAddress(String value) {
        this.address = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelLocation.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelLocation() {
        return hotelLocation;
    }

    /**
     * D�finit la valeur de la propri�t� hotelLocation.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelLocation(String value) {
        this.hotelLocation = value;
    }

    /**
     * Obtient la valeur de la propri�t� attractions.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfString3 }
     *     
     */
    public ArrayOfString3 getAttractions() {
        return attractions;
    }

    /**
     * D�finit la valeur de la propri�t� attractions.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfString3 }
     *     
     */
    public void setAttractions(ArrayOfString3 value) {
        this.attractions = value;
    }

    /**
     * Obtient la valeur de la propri�t� countryName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCountryName() {
        return countryName;
    }

    /**
     * D�finit la valeur de la propri�t� countryName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCountryName(String value) {
        this.countryName = value;
    }

    /**
     * Obtient la valeur de la propri�t� countryCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCountryCode() {
        return countryCode;
    }

    /**
     * D�finit la valeur de la propri�t� countryCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCountryCode(String value) {
        this.countryCode = value;
    }

    /**
     * Obtient la valeur de la propri�t� description.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescription() {
        return description;
    }

    /**
     * D�finit la valeur de la propri�t� description.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescription(String value) {
        this.description = value;
    }

    /**
     * Obtient la valeur de la propri�t� email.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmail() {
        return email;
    }

    /**
     * D�finit la valeur de la propri�t� email.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmail(String value) {
        this.email = value;
    }

    /**
     * Obtient la valeur de la propri�t� faxNumber.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFaxNumber() {
        return faxNumber;
    }

    /**
     * D�finit la valeur de la propri�t� faxNumber.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFaxNumber(String value) {
        this.faxNumber = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelFacilities.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfString4 }
     *     
     */
    public ArrayOfString4 getHotelFacilities() {
        return hotelFacilities;
    }

    /**
     * D�finit la valeur de la propri�t� hotelFacilities.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfString4 }
     *     
     */
    public void setHotelFacilities(ArrayOfString4 value) {
        this.hotelFacilities = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelPolicy.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelPolicy() {
        return hotelPolicy;
    }

    /**
     * D�finit la valeur de la propri�t� hotelPolicy.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelPolicy(String value) {
        this.hotelPolicy = value;
    }

    /**
     * Obtient la valeur de la propri�t� image.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getImage() {
        return image;
    }

    /**
     * D�finit la valeur de la propri�t� image.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setImage(String value) {
        this.image = value;
    }

    /**
     * Obtient la valeur de la propri�t� imageUrls.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfImageUrlDetails }
     *     
     */
    public ArrayOfImageUrlDetails getImageUrls() {
        return imageUrls;
    }

    /**
     * D�finit la valeur de la propri�t� imageUrls.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfImageUrlDetails }
     *     
     */
    public void setImageUrls(ArrayOfImageUrlDetails value) {
        this.imageUrls = value;
    }

    /**
     * Obtient la valeur de la propri�t� map.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMap() {
        return map;
    }

    /**
     * D�finit la valeur de la propri�t� map.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMap(String value) {
        this.map = value;
    }

    /**
     * Obtient la valeur de la propri�t� phoneNumber.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * D�finit la valeur de la propri�t� phoneNumber.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPhoneNumber(String value) {
        this.phoneNumber = value;
    }

    /**
     * Obtient la valeur de la propri�t� pinCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPinCode() {
        return pinCode;
    }

    /**
     * D�finit la valeur de la propri�t� pinCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPinCode(String value) {
        this.pinCode = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomInfo.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfRoomInfo }
     *     
     */
    public ArrayOfRoomInfo getRoomInfo() {
        return roomInfo;
    }

    /**
     * D�finit la valeur de la propri�t� roomInfo.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfRoomInfo }
     *     
     */
    public void setRoomInfo(ArrayOfRoomInfo value) {
        this.roomInfo = value;
    }

    /**
     * Obtient la valeur de la propri�t� roomFacilities.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfString6 }
     *     
     */
    public ArrayOfString6 getRoomFacilities() {
        return roomFacilities;
    }

    /**
     * D�finit la valeur de la propri�t� roomFacilities.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfString6 }
     *     
     */
    public void setRoomFacilities(ArrayOfString6 value) {
        this.roomFacilities = value;
    }

    /**
     * Obtient la valeur de la propri�t� services.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServices() {
        return services;
    }

    /**
     * D�finit la valeur de la propri�t� services.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServices(String value) {
        this.services = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelWebsiteUrl.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelWebsiteUrl() {
        return hotelWebsiteUrl;
    }

    /**
     * D�finit la valeur de la propri�t� hotelWebsiteUrl.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelWebsiteUrl(String value) {
        this.hotelWebsiteUrl = value;
    }

    /**
     * Obtient la valeur de la propri�t� tripAdvisorRating.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTripAdvisorRating() {
        return tripAdvisorRating;
    }

    /**
     * D�finit la valeur de la propri�t� tripAdvisorRating.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTripAdvisorRating(String value) {
        this.tripAdvisorRating = value;
    }

    /**
     * Obtient la valeur de la propri�t� tripAdvisorReviewURL.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTripAdvisorReviewURL() {
        return tripAdvisorReviewURL;
    }

    /**
     * D�finit la valeur de la propri�t� tripAdvisorReviewURL.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTripAdvisorReviewURL(String value) {
        this.tripAdvisorReviewURL = value;
    }

    /**
     * Obtient la valeur de la propri�t� cityName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCityName() {
        return cityName;
    }

    /**
     * D�finit la valeur de la propri�t� cityName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCityName(String value) {
        this.cityName = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelCode.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelCode() {
        return hotelCode;
    }

    /**
     * D�finit la valeur de la propri�t� hotelCode.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelCode(String value) {
        this.hotelCode = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelName.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHotelName() {
        return hotelName;
    }

    /**
     * D�finit la valeur de la propri�t� hotelName.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHotelName(String value) {
        this.hotelName = value;
    }

    /**
     * Obtient la valeur de la propri�t� hotelRating.
     * 
     * @return
     *     possible object is
     *     {@link HotelInfoHotelRating }
     *     
     */
    public HotelInfoHotelRating getHotelRating() {
        return hotelRating;
    }

    /**
     * D�finit la valeur de la propri�t� hotelRating.
     * 
     * @param value
     *     allowed object is
     *     {@link HotelInfoHotelRating }
     *     
     */
    public void setHotelRating(HotelInfoHotelRating value) {
        this.hotelRating = value;
    }

}
