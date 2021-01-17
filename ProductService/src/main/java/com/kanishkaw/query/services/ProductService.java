package com.kanishkaw.query.services;

import com.kanishkaw.query.dto.ComponentDetail;
import com.kanishkaw.query.dto.CreateComponent;
import com.kanishkaw.query.dto.CreateProduct;
import com.kanishkaw.query.dto.ProductDetail;
import com.kanishkaw.query.exceptions.ComponentNotFoundException;
import com.kanishkaw.query.exceptions.ProductNotFoundException;

import java.util.List;

public interface ProductService {
    List<ProductDetail> getAllProducts();
    ProductDetail get(long id) throws ProductNotFoundException;
    ProductDetail createProduct(CreateProduct createProduct);

    ComponentDetail createComponent(CreateComponent createComponent) throws ProductNotFoundException;
    List<ComponentDetail> getAllComponents(long product) throws ProductNotFoundException;
    ProductDetail getProduct(long component) throws ComponentNotFoundException;
}
