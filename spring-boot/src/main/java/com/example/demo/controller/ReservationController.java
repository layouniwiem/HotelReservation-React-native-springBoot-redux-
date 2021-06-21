package com.example.demo.controller;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.HotelEntity;
import com.example.demo.models.InviteeEntity;
import com.example.demo.models.ReservationEntity;
import com.example.demo.models.RoomEntity;
import com.example.demo.models.User;
import com.example.demo.service.ReservationService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/reserver")
public class ReservationController {
	@Autowired
	ReservationService reservationService;

	// HELLO Reservations
	@GetMapping("/Hi")
	public String sayHello() {
		return "Hi reservationService";
	}

	// get all Reservations
	@GetMapping("/All")
	public List<ReservationEntity> getAllReservations() {
		System.out.println("getAllReservations");
		return reservationService.getAllReservations();
	}

	@GetMapping("/invitees/{id}")
	public List<InviteeEntity> getAllInviteesByRooms(@PathVariable BigDecimal id) {
		System.out.println("getAllInvitesByRoom");
		return reservationService.getAllInvitesByRoom(id);
	}

	@GetMapping("/rooms/{id}")
	public List<RoomEntity> getRoomsByRservations(@PathVariable BigDecimal id) {
		System.out.println("getRoomsByRservations");

		return reservationService.getRoomsByRservations(id);
	}

	@GetMapping("/hotel/{id}")
	public Optional<HotelEntity> getHotelById(@PathVariable BigDecimal id) {
		System.out.println("getHotelById");

		return reservationService.getHotelById(id);
	}

	@PostMapping("/addReservation")
	public ReservationEntity addReservation(@RequestBody ReservationEntity reserv

	) {
		System.out.println("hello here");
		System.out.println("request" + reserv);

		try {
			System.out.println("added" + reserv);

			return reservationService.createReservation(reserv);

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}

	@PutMapping("/update/{id}")
	public ReservationEntity updateReservation(@RequestBody ReservationEntity reserv, @PathVariable BigDecimal id)

	{
		System.out.println("request" + reserv);

		try {
			System.out.println("added" + reserv);

			return reservationService.updateReservation(reserv, id);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@PostMapping("/addInvitee")
	public InviteeEntity addInvitee(@RequestBody InviteeEntity invitee

	) {
		try {
			System.out.println(" Room added" + invitee);

			return reservationService.createInvitee(invitee);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@PostMapping("/addRoom")
	public RoomEntity addRoom(@RequestBody RoomEntity reserv

	) {
		try {

			System.out.println("added" + reserv);

			return reservationService.createRoom(reserv);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@PostMapping("/addHotel")
	public HotelEntity addHotel(@RequestBody HotelEntity reserv

	) {
		try {

			System.out.println("added" + reserv);

			return reservationService.createHotel(reserv);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
