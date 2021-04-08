package com.example.demo.controller;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.User;
//import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	private UserService userService;

	//HELLO  users
		@GetMapping("/Hi")
		public String  sayHello(){
			return "Hi users";
		}
	//get all users
	@GetMapping("/All")
	public List<User> getAllUsers(){
		System.out.println("getAllUsersgetAllUsers");
		return userService.getAllUsers();
	}
	@GetMapping("/{id}")
	public  Optional<User> getUserById(@PathVariable BigDecimal id){
		return userService.getUserById(id);
	}
	
	@PostMapping("/add")
	public User addUser(@RequestBody User user) {
		try {
			System.out.println("added");

			return userService.createUser(user);
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		}
	
	@PutMapping("/update")
	public void updateUser(@RequestBody User user) {
		userService.updateUser(user);
	}
	@DeleteMapping("/delete/{id}")
	public void deleteUser(@PathVariable BigDecimal id) {
		System.out.println("wllh deleted");
		userService.deleteUser(id);
	}

}
