package com.example.demo.pfe.dto.SearchHotel;

public class RoomGuestsDto {
	
	 private int[] childAge;

	    private int adultCount;  

	    private int childCount;
	    public RoomGuestsDto(int[] childAge, int adultCount, int childCount) {
			super();
			this.childAge = childAge;
			this.adultCount = adultCount;
			this.childCount = childCount;
		}
		public int[] getChildAge() {
			return childAge;
		}

		public void setChildAge(int[] childAge) {
			this.childAge = childAge;
		}

		public int getAdultCount() {
			return adultCount;
		}

		public void setAdultCount(int adultCount) {
			this.adultCount = adultCount;
		}

		public int getChildCount() {
			return childCount;
		}

		public void setChildCount(int childCount) {
			this.childCount = childCount;
		}

		
	    
}

