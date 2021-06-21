package com.example.demo.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.models.InviteeEntity;
import com.example.demo.models.ReservationEntity;

@Repository
public interface ReservationRespository extends JpaRepository<ReservationEntity, BigDecimal> {

	@Query("SELECT max(a.id) from ReservationEntity a")
	public BigDecimal getMaxIdReservation();
	
// Optional < User> findByUserName(String userName);
	


}
