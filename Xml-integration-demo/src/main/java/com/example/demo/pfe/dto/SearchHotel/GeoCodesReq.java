package com.example.demo.pfe.dto.SearchHotel;

public class GeoCodesReq {
	 private String latitude;

	    private String longitude;

	    private int searchRadius;

	    private String countryCode;

		public GeoCodesReq(String latitude, String longitude, int searchRadius, String countryCode) {
			super();
			this.latitude = latitude;
			this.longitude = longitude;
			this.searchRadius = searchRadius;
			this.countryCode = countryCode;
		}

		public String getLatitude() {
			return latitude;
		}

		public void setLatitude(String latitude) {
			this.latitude = latitude;
		}

		public String getLongitude() {
			return longitude;
		}

		public void setLongitude(String longitude) {
			this.longitude = longitude;
		}

		public int getSearchRadius() {
			return searchRadius;
		}

		public void setSearchRadius(int searchRadius) {
			this.searchRadius = searchRadius;
		}

		public String getCountryCode() {
			return countryCode;
		}

		public void setCountryCode(String countryCode) {
			this.countryCode = countryCode;
		}
		
	    
}
