package com.example.demo.repository;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.models.User;




@Repository
public interface UserRepository extends JpaRepository<User, BigDecimal> {

	@Query("SELECT max(a.id) from User a")
	public BigDecimal getMaxIdUser();
	
 Optional < User> findByUserName(String userName);

}
