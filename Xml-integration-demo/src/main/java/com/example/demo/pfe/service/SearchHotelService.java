package com.example.demo.pfe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.api.hotelbookingapi.AvailabilityAndPricingRequest;
import com.example.demo.api.hotelbookingapi.AvailabilityAndPricingResponse;
import com.example.demo.api.hotelbookingapi.DestinationCityListRequest;
import com.example.demo.api.hotelbookingapi.DestinationCityListResponse;
import com.example.demo.api.hotelbookingapi.HotelBookRequest;
import com.example.demo.api.hotelbookingapi.HotelBookResponse;
import com.example.demo.api.hotelbookingapi.HotelBookingDetailRequest;
import com.example.demo.api.hotelbookingapi.HotelBookingDetailResponse;
import com.example.demo.api.hotelbookingapi.HotelCancellationPolicies;
import com.example.demo.api.hotelbookingapi.HotelCancellationPolicyRequest;
import com.example.demo.api.hotelbookingapi.HotelCancellationPolicyResponse;
import com.example.demo.api.hotelbookingapi.HotelRoomAvailabilityRequest;
import com.example.demo.api.hotelbookingapi.HotelRoomAvailabilityResponse;
import com.example.demo.api.hotelbookingapi.HotelSearchRequest;
import com.example.demo.api.hotelbookingapi.HotelSearchResponse;
import com.example.demo.pfe.dto.GdsSessionModel;
import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;
import com.example.demo.pfe.dto.SearchHotel.BookingHotelDetailRequest;
import com.example.demo.pfe.dto.SearchHotel.CancellationHotelPolicyRequest;
import com.example.demo.pfe.dto.SearchHotel.PricingAndAvailabilityRequest;
import com.example.demo.pfe.dto.SearchHotel.RequestDestinationCityList;
import com.example.demo.pfe.dto.SearchHotel.RoomHotelAvailabilityRequest;
import com.example.demo.pfe.dto.SearchHotel.SearchHotelRequest;

@Service
public class SearchHotelService {
	@Autowired
	SendRequest sendRequest;

	GdsSessionModel gds = new GdsSessionModel("WESARA", "Sra@12896022",
			"https://api.tboholidays.com/HotelApi_V7/HotelService.svc");

	public HotelSearchResponse searchHotel(SearchHotelRequest request) {
		System.out.println(request);

		HotelSearchRequest hotelSearchRequest = new HotelSearchRequest(request);

		return sendRequest.send(hotelSearchRequest, new HotelSearchResponse(), gds, "HotelSearch");
	}

	public HotelRoomAvailabilityResponse searchHotelRoomAvailaibility(RoomHotelAvailabilityRequest request) {

		HotelRoomAvailabilityRequest hotelRoomAvailabilityRequest = new HotelRoomAvailabilityRequest(request);
		System.out.println("request is" + hotelRoomAvailabilityRequest.toString());
		return sendRequest.send(hotelRoomAvailabilityRequest, new HotelRoomAvailabilityResponse(), gds,
				"AvailableHotelRooms");

	}

	public HotelCancellationPolicyResponse cancelPolicies(CancellationHotelPolicyRequest request) {
		HotelCancellationPolicyRequest hotelCancellationPolicyRequest = new HotelCancellationPolicyRequest(request);
		System.out.println(hotelCancellationPolicyRequest.toString());
		return sendRequest.send(hotelCancellationPolicyRequest, new HotelCancellationPolicyResponse(), gds,
				"HotelCancellationPolicy");
	}

	public AvailabilityAndPricingResponse searchPricingAndAvailability(PricingAndAvailabilityRequest request) {
		AvailabilityAndPricingRequest availabilityAndPricingRequest = new AvailabilityAndPricingRequest(request);
		return sendRequest.send(availabilityAndPricingRequest, new AvailabilityAndPricingResponse(), gds,
				"AvailabilityAndPricing");
	}
	public HotelBookResponse bookHotel (BookHotelRequest request ) {
		HotelBookRequest bookHotelRequest=  new HotelBookRequest (request);
		return sendRequest.send(bookHotelRequest, new HotelBookResponse(), gds, 
				"HotelBook");
	}
	public DestinationCityListResponse citiesDestination (RequestDestinationCityList request ) {
		DestinationCityListRequest requestcitiesDestination =  new  DestinationCityListRequest (request);
		return sendRequest.send(requestcitiesDestination, new DestinationCityListResponse(), gds, 
				"DestinationCityList");
	}

public HotelBookingDetailResponse bookHotelDetail(BookingHotelDetailRequest request) {
	HotelBookingDetailRequest hotelBookingDetailRequest = new HotelBookingDetailRequest(request);
	return sendRequest.send(hotelBookingDetailRequest, new HotelBookingDetailResponse(), gds, 
			"HotelBookingDetail");
}
	public String sayhello() {
		System.out.println("hereeee from search Service ");
		return "hello";
	}
}