package com.example.demo.repository;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.models.HotelEntity;
import com.example.demo.models.InviteeEntity;

public interface InviteeRepo extends JpaRepository<InviteeEntity, Long > 
{
	@Query("SELECT max(a.id) from InviteeEntity a")

	public BigDecimal getMaxIdInvitee();
}