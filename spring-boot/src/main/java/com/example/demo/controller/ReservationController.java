package com.example.demo.controller;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	//HELLO  Reservations
			@GetMapping("/Hi")
			public String  sayHello(){
				return "Hi reservationService";
			}
		//get all Reservations
		@GetMapping("/All")
		public List<ReservationEntity> getAllReservations(){
			System.out.println("getAllReservations");
			return reservationService.getAllReservations();
		}
		@PostMapping("/add")
		public ReservationEntity addReservation(@RequestParam("hotel") long hotel
				,@RequestParam("dateCheckIn") String dateCheckIn
				,@RequestParam("dateCheckOut") String dateCheckOut
				,@RequestParam("prixTotal") String prixTotal
				,@RequestParam("nbrRooms") int  nbrRooms
				,@RequestParam("typeReservation") String typeReservation

			
) {
			try {
				System.out.println("added");
				 ReservationEntity reserv = new ReservationEntity();
				 reserv.setDateCheckIn(dateCheckIn);
				 reserv.setDateCheckOut(dateCheckOut);
				 reserv.setHotel_id(hotel);
				 reserv.setNbrRooms(nbrRooms);
				 reserv.setPrixTotal(prixTotal);
				 
				return reservationService.createReservation(reserv);
			}catch(Exception e) {
				e.printStackTrace();
				return null;
			}
			}
}
