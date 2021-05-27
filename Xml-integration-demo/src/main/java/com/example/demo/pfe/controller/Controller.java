package com.example.demo.pfe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.hotelbookingapi.CountryListRequest;
import com.example.demo.api.hotelbookingapi.CountryListResponse;
import com.example.demo.api.hotelbookingapi.DestinationCityListRequest;
import com.example.demo.api.hotelbookingapi.DestinationCityListResponse;
import com.example.demo.pfe.dto.GdsSessionModel;
import com.example.demo.pfe.dto.SearchHotel.RequestDestinationCityList;
import com.example.demo.pfe.service.SearchHotelService;
import com.example.demo.pfe.service.SendRequest;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class Controller {
	@Autowired
	SearchHotelService searchHotelService;
	@Autowired
	SendRequest sendRequest;

	GdsSessionModel gds = new GdsSessionModel("WESARA", "Sra@12896022",
			"https://api.tboholidays.com/HotelApi_V7/HotelService.svc");
	@GetMapping("/")
	public String hello() {
		return "hi";
	}
	@PostMapping("/Countries")
	public CountryListResponse  getListCountry(@RequestBody CountryListRequest request) {
		CountryListResponse res= sendRequest.send(request,new CountryListResponse(),gds,"CountryList");
		return res;
	}
	@PostMapping("/Destinations")
	public DestinationCityListResponse  getListDestinations(@RequestBody RequestDestinationCityList request) {
		 System.out.println("my Requestttt:   ");
		 System.out.println(request.toString());
		DestinationCityListResponse res= searchHotelService.citiesDestination(request);
		return res;
	}
		 
	}


