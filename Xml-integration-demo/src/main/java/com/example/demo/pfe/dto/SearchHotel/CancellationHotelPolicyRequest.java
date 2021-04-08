package com.example.demo.pfe.dto.SearchHotel;

import java.util.List;

public class CancellationHotelPolicyRequest {
	private int resultIndex;
	private String sessionId;
	private List<Integer> roomIndex;

	public CancellationHotelPolicyRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CancellationHotelPolicyRequest(int resultIndex, String sessionId, List<Integer> roomIndex) {
		super();
		this.resultIndex = resultIndex;
		this.sessionId = sessionId;
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

	public List<Integer> getRoomIndex() {
		return roomIndex;
	}

	public void setRoomIndex(List<Integer> roomIndex) {
		this.roomIndex = roomIndex;
	}

	@Override
	public String toString() {
		return "CancellationHotelPolicyRequest [resultIndex=" + resultIndex + ", sessionId=" + sessionId
				+ ", roomIndex=" + roomIndex + "]";
	}

}
