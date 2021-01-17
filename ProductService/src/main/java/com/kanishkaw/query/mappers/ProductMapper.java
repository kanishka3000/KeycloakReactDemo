package com.kanishkaw.query.mappers;

import com.kanishkaw.query.dto.CreateProduct;
import com.kanishkaw.query.entity.Product;
import org.springframework.beans.BeanUtils;

public class ProductMapper {
    public static Product map(CreateProduct createProduct){
        Product product = new Product();
        BeanUtils.copyProperties(createProduct, product);
        return product;
    }
}
