package com.example.demo.repository;


import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.models.RoomEntity;

public interface RoomRepo extends JpaRepository<RoomEntity, Long > 
{
	@Query("SELECT max(a.id) from RoomEntity a")
	public BigDecimal getMaxIdRoom();
	
	@Query(value = "SELECT * FROM Rooms WHERE (reservation_id = ?1)" , nativeQuery = true)

	public List<RoomEntity> getRoomsByReservation(BigDecimal  reservation_id);
	

}