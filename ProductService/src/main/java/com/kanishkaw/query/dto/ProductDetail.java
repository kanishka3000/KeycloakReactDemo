package com.kanishkaw.query.dto;


import com.kanishkaw.query.entity.InStock;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class ProductDetail {
    long id;
    String name;
    String description;
    String manufacturer;
    LocalDate availableSince;
    int rating;
    double price;
    InStock inStock;

    List<ComponentDetail> components;
}
