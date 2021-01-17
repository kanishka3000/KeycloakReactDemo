package com.kanishkaw.query.mappers;

import com.kanishkaw.query.dto.ProductDetail;
import com.kanishkaw.query.entity.Product;
import org.springframework.beans.BeanUtils;

public class ProductDetailMapper {

    public static ProductDetail map(Product product){
        ProductDetail productDetail = new ProductDetail();
        BeanUtils.copyProperties(product, productDetail);

        return productDetail;
    }
}
