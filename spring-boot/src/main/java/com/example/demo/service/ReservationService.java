package com.example.demo.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.HotelEntity;
import com.example.demo.models.InviteeEntity;
import com.example.demo.models.ReservationEntity;
import com.example.demo.models.RoomEntity;
import com.example.demo.repository.HotelRepository;
import com.example.demo.repository.InviteeRepo;
import com.example.demo.repository.ReservationRespository;
import com.example.demo.repository.RoomRepo;

@Service
public class ReservationService {
	@Autowired
	private ReservationRespository reservationRepo;
//	@Autowired
//	private HotelRepository hotelRepo;
	@Autowired
	private RoomRepo roomRepo;
	@Autowired
	private InviteeRepo InviteeRepo;
	public ReservationEntity createReservation(ReservationEntity reservation) {
		BigDecimal maxId= reservationRepo.getMaxIdReservation();
		if (maxId==null) {
			reservation.setReservation_id(new BigDecimal(1));
		}else 
			reservation.setReservation_id(maxId.add(new BigDecimal(1)));
		System.out.print("ReservationEntity addded");
		return reservationRepo.save(reservation);
	}
	
	public void deleteReservation(BigDecimal id) {
		reservationRepo.deleteById(id);
	System.out.print("deleted");
	}
	
	
	public ReservationEntity updateReservation(ReservationEntity reservation) {
		return 	reservationRepo.save(reservation);

		
	}
	public List<ReservationEntity >getAllReservations(){
		//return users;
		List<ReservationEntity > reservations= new ArrayList<>();
		reservationRepo.findAll()
		.forEach(reservations::add);
		return reservations;
		
	}
	public Optional<ReservationEntity> getReservationById(BigDecimal idRes) {
		return reservationRepo.findById(idRes);
		
		
	}
	public HotelEntity createHotel(HotelEntity hotel) {
		
		System.out.print("HotelEntity addded");
//		return hotelRepo.save(hotel);
		return null;
	}
public RoomEntity createRoom(RoomEntity room) {
		
		System.out.print("HotelEntity addded");
		return roomRepo.save(room);
	}
	
	public InviteeEntity createReservation(InviteeEntity inv) {
		BigDecimal maxId= InviteeRepo.getMaxIdInvitee();
		if (maxId==null) {
			inv.setId(new BigDecimal(1));
		}else 
			inv.setId(maxId.add(new BigDecimal(1)));
		System.out.print("InviteeEntity addded");
		return InviteeRepo.save(inv);
	}

public List<HotelEntity > getAllHotels(){
	//return users;
	List<HotelEntity > hotels= new ArrayList<>();
//	hotelRepo.findAll()
//	.forEach(hotels::add);
	return hotels;
	
}
public List<RoomEntity > getAllRooms(){
	//return users;
	List<RoomEntity > rooms= new ArrayList<>();
	roomRepo.findAll()
	.forEach(rooms::add);
	return rooms;
	
}
public List<InviteeEntity > getAllInvites(){
	//return users;
	List<InviteeEntity > invites= new ArrayList<>();
	InviteeRepo.findAll()
	.forEach(invites::add);
	return invites;
	
}
//public List<Long> addAllRooms(List<Long >  rooms){
//	//return users;
//
//	 return roomRepo.save(rooms);
//	
//}
public List<BigDecimal> addAllInvites(List<InviteeEntity> invites){
	//return users;
	List<BigDecimal> invite= new ArrayList<>();
	for (int i = 0;i<invites.size();i++) {
		InviteeEntity a =InviteeRepo.save(invites.get(i));
		invite.add(a.getId()	);
	}
	return invite;

	
}

public List<Long> addAllRooms(List<RoomEntity> rooms) {
	// TODO Auto-generated method stub
//	return roomRepo.saveAll(rooms);
	List<Long> room= new ArrayList<>();
	for (int i = 0;i<rooms.size();i++) {
		RoomEntity a =roomRepo.save(rooms.get(i));
		room.add(a.getId()	);
	}
	return room;
}

}