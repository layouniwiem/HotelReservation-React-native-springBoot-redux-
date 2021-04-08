package com.example.demo.pfe.dto.SearchHotel;

import java.util.List;



public class PricingAndAvailabilityRequest {
	
	    private int resultIndex;
	   
	    private String sessionId;
	   
	    private boolean fixedFormat;

	    private List<Integer> roomIndex;

		public PricingAndAvailabilityRequest(int resultIndex, String sessionId, boolean fixedFormat,
				List<Integer> roomIndex) {
			super();
			this.resultIndex = resultIndex;
			this.sessionId = sessionId;
			this.fixedFormat = fixedFormat;
			this.roomIndex = roomIndex;
		}

		public int getResultIndex() {
			return resultIndex;
		}

		public void setResultIndex(int resultIndex) {
			this.resultIndex = resultIndex;
		}

		public String getSessionId() {
			return sessionId;
		}

		public void setSessionId(String sessionId) {
			this.sessionId = sessionId;
		}

		public boolean isFixedFormat() {
			return fixedFormat;
		}

		public void setFixedFormat(boolean fixedFormat) {
			this.fixedFormat = fixedFormat;
		}

		public List<Integer> getRoomIndex() {
			return roomIndex;
		}

		public void setRoomIndex(List<Integer> roomIndex) {
			this.roomIndex = roomIndex;
		}
	    
	    
}
