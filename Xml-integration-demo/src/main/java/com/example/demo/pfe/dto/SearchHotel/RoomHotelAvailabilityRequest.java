package com.example.demo.pfe.dto.SearchHotel;


public class RoomHotelAvailabilityRequest {
	 
	    protected int resultIndex;
	    protected String sessionId;
	    protected String hotelCode;
	    protected String responseTime;
		public RoomHotelAvailabilityRequest(String resultIndex, String sessionId, String hotelCode, String responseTime) {
			super();
			this.resultIndex =Integer.parseInt( resultIndex);
			this.sessionId = sessionId;
			this.hotelCode = hotelCode;
			this.responseTime = "21";
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
		public String getHotelCode() {
			return hotelCode;
		}
		public void setHotelCode(String hotelCode) {
			this.hotelCode = hotelCode;
		}
		public String getResponseTime() {
			return responseTime;
		}
		public void setResponseTime(String responseTime) {
			this.responseTime = responseTime;
		}
		@Override
		public String toString() {
			return "RoomHotelAvailabilityRequest [resultIndex=" + resultIndex + ", sessionId=" + sessionId
					+ ", hotelCode=" + hotelCode + ", responseTime=" + responseTime + "]";
		}
	    

}
