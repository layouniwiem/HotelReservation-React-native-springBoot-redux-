package com.example.demo.pfe.dto;

public class FiltersReq {
	 private String hotelName;

	    private String starRating;

	    private String orderBy;

	    private String hotelCodeList;

		public FiltersReq(String hotelName, String starRating, String orderBy, String hotelCodeList) {
			super();
			this.hotelName = hotelName;
			this.starRating = starRating;
			this.orderBy = orderBy;
			this.hotelCodeList = hotelCodeList;
		}

		public String getHotelName() {
			return hotelName;
		}

		public void setHotelName(String hotelName) {
			this.hotelName = hotelName;
		}

		public String getStarRating() {
			return starRating;
		}

		public void setStarRating(String starRating) {
			this.starRating = starRating;
		}

		public String getOrderBy() {
			return orderBy;
		}

		public void setOrderBy(String orderBy) {
			this.orderBy = orderBy;
		}

		public String getHotelCodeList() {
			return hotelCodeList;
		}

		public void setHotelCodeList(String hotelCodeList) {
			this.hotelCodeList = hotelCodeList;
		}
	    

}
