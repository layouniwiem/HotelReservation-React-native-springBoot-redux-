package com.example.demo.pfe.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/apii")
public class Controller {
	
	@GetMapping("/")
	public String hello() {
		return "hi";
	}
	

}
