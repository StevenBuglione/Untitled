package com.example.untitled.coreuntitledservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class CoreUntitledServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoreUntitledServiceApplication.class, args);
	}

}
