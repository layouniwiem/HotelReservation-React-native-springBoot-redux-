package com.example.demo.pfe.controller;

import java.rmi.RemoteException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.hotelbookingapi.AvailabilityAndPricingResponse;
import com.example.demo.api.hotelbookingapi.CountryListRequest;
import com.example.demo.api.hotelbookingapi.CountryListResponse;
import com.example.demo.api.hotelbookingapi.HotelBookResponse;
import com.example.demo.api.hotelbookingapi.HotelBookingDetailResponse;
import com.example.demo.api.hotelbookingapi.HotelCancellationPolicyResponse;
import com.example.demo.api.hotelbookingapi.HotelRoomAvailabilityRequest;
import com.example.demo.api.hotelbookingapi.HotelRoomAvailabilityResponse;
import com.example.demo.api.hotelbookingapi.HotelSearchRequest;
import com.example.demo.api.hotelbookingapi.HotelSearchResponse;
import com.example.demo.api.org.tempuri.HotelService;
import com.example.demo.pfe.dto.SearchHotel.BookHotelRequest;
import com.example.demo.pfe.dto.SearchHotel.BookingHotelDetailRequest;
import com.example.demo.pfe.dto.SearchHotel.CancellationHotelPolicyRequest;
import com.example.demo.pfe.dto.SearchHotel.PricingAndAvailabilityRequest;
import com.example.demo.pfe.dto.SearchHotel.RoomHotelAvailabilityRequest;
import com.example.demo.pfe.dto.SearchHotel.SearchHotelRequest;
import com.example.demo.pfe.service.SearchHotelService;
import com.example.demo.pfe.service.SendRequest;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class SearchHotelController {

	@Autowired
	SearchHotelService searchHotelService;

	@CrossOrigin("*")

	@PostMapping("/hotel")

	public HotelSearchResponse searchHotel(@RequestBody SearchHotelRequest request) throws RemoteException {
		HotelSearchResponse res = searchHotelService.searchHotel(request) ;
		return res;
	}
	@PostMapping("/hotel/hotelRoomAvailability")
//don't forget to add pathvariables and make pass-parametre from screens  
	public HotelRoomAvailabilityResponse availableHotelRooms(@RequestBody RoomHotelAvailabilityRequest request) throws RemoteException {
		HotelRoomAvailabilityResponse res = searchHotelService.searchHotelRoomAvailaibility(request) ;
		return res;
	}
	@PostMapping("/hotel/cancelPolicies")
	public HotelCancellationPolicyResponse cancelPolicies(@RequestBody CancellationHotelPolicyRequest request) {
		System.out.println(request.toString());
		return searchHotelService.cancelPolicies(request);
	}
	@PostMapping("/hotel/availableAndPrice")
	public AvailabilityAndPricingResponse availableandprice(@RequestBody PricingAndAvailabilityRequest request ) {
		AvailabilityAndPricingResponse res= searchHotelService.searchPricingAndAvailability(request);
		return res;
	}
	@PostMapping("/hotel/bookHotel")
	public HotelBookResponse availableandprice(@RequestBody BookHotelRequest request ) {
		HotelBookResponse res= searchHotelService.bookHotel(request);
		return res;
	}
	@PostMapping("/hotel/bookHotelDetail")
	public HotelBookingDetailResponse bookHotelDetail(@RequestBody BookingHotelDetailRequest request ) {
		HotelBookingDetailResponse res= searchHotelService.bookHotelDetail(request);
		return res;
	}
	@GetMapping("/Hi")
	public String sayHello() {
//		return searchHotelService.sayhello();
		return "hiiiiii from searchHotelService";
	}

}