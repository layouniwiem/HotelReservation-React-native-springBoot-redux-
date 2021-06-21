package com.example.demo.repository;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.models.HotelEntity;

public interface HotelRepository extends JpaRepository<HotelEntity, BigDecimal > 
{
	@Query("SELECT max(a.id) from HotelEntity a")

	public BigDecimal getMaxIdHotel();
}
