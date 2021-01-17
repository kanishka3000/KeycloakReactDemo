package com.kanishkaw.query.config;

import com.kanishkaw.query.services.ProductService;
import com.kanishkaw.query.services.ProductServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean
    public ProductService productService(){
        return new ProductServiceImpl();
    }
}
