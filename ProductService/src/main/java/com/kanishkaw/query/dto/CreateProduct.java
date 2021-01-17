package com.kanishkaw.query.dto;

import com.kanishkaw.query.entity.InStock;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CreateProduct {
    String name;
    String description;
    String manufacturer;
    LocalDate availableSince;
    int rating;
    double price;
    InStock inStock;
}
