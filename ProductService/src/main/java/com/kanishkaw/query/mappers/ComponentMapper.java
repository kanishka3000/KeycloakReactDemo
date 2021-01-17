package com.kanishkaw.query.mappers;

import com.kanishkaw.query.dto.CreateComponent;
import com.kanishkaw.query.entity.Component;
import com.kanishkaw.query.entity.Product;

public class ComponentMapper {
    public static Component map(CreateComponent createComponent, Product product){
        Component component = new Component();
        component.setName(createComponent.getName());
        component.setDescription(createComponent.getDescription());
        component.setProduct(product);
        return component;
    }
}
