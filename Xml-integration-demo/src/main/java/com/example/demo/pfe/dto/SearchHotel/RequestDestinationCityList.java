package com.example.demo.pfe.dto.SearchHotel;

public class RequestDestinationCityList {
	private String countryCode;
	
	public String getCountryCode() {
		return countryCode;
	}

	
	public RequestDestinationCityList() {
	
	}


	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	@Override
	public String toString() {
		return "RequestDestinationCityList [CountryCode=" + countryCode + "]";
	}

	public RequestDestinationCityList(String countryCode) {
		super();
		this.countryCode = countryCode;
	}
	

}
