package com.example.demo.pfe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;

public class SoapConfig {
	   @Bean
	    public Jaxb2Marshaller marshaller(){
	        Jaxb2Marshaller jaxb2Marshaller = new Jaxb2Marshaller();
	        jaxb2Marshaller.setPackagesToScan("com.onlinetutorialspoint.soap.bindings");
	        return jaxb2Marshaller;
	    }
}


