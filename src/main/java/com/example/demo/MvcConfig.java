package com.example.demo;

import java.util.concurrent.TimeUnit;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class MvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
        	.addResourceHandler("/**")
          	.addResourceLocations("/"); 
        
        registry.addResourceHandler("/static/**")
        	.addResourceLocations("classpath:static/")
        	.setCacheControl(CacheControl.maxAge(1, TimeUnit.HOURS).cachePublic()); 
    }
}
