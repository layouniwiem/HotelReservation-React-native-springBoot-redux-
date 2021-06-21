package com.example.demo.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.models.InviteeEntity;

public interface InviteeRepo extends JpaRepository<InviteeEntity, BigDecimal > 
{
	@Query("SELECT max(a.id) from InviteeEntity a")

	public BigDecimal getMaxIdInvitee();
	
	@Query(value = "SELECT * FROM Invitees WHERE (id_Room = ?1)" , nativeQuery = true)

	public List<InviteeEntity> getInviteeByRooms(BigDecimal  id_room);
	
}
