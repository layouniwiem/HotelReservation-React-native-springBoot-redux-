package com.example.demo.repository;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.HotelEntity;

public interface HotelRepository extends JpaRepository<HotelEntity, Long > 
{
	List<HotelEntity> findAll();
}
