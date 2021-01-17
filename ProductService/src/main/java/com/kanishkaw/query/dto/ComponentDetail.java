package com.kanishkaw.query.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class ComponentDetail {
    long id;
    String name;
    String description;
    ProductDetail product;
}
