package com.example.demo.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;
@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	        
	     
	public User createUser(User user) {
		BigDecimal maxId= userRepository.getMaxIdUser();
		if (maxId==null) {
			user.setId(new BigDecimal(1));
		}else 
			user.setId(maxId.add(new BigDecimal(1)));
		System.out.print("user addded");
		return userRepository.save(user);
	}
	public void deleteUser(BigDecimal id) {
		userRepository.deleteById(id);
	System.out.print("deleted");
	}
	
	
	public User updateUser(User user) {
		return 	userRepository.save(user);

		
	}
	public List<User >getAllUsers(){
		//return users;
		List<User > users= new ArrayList<>();
		userRepository.findAll()
		.forEach(users::add);
		return users;
		
	}
	public Optional<User> getUserById(BigDecimal iduser) {
		return userRepository.findById(iduser);
		
		
	}



	

}
