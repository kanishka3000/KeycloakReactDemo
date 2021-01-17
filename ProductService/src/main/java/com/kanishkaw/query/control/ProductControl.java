package com.kanishkaw.query.control;

import com.kanishkaw.query.dto.CreateProduct;
import com.kanishkaw.query.dto.ProductDetail;
import com.kanishkaw.query.entity.Product;
import com.kanishkaw.query.exceptions.ProductNotFoundException;
import com.kanishkaw.query.services.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api")
public class ProductControl {

    @Autowired
    ProductService productService;

    @GetMapping("/product")
    public ResponseEntity<?> getAll(){

        List<ProductDetail> products = productService.getAllProducts();
        log.debug("product count = ", products.size());
        return ResponseEntity.ok(products);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<?> get(@PathVariable long id){
        try {
            ProductDetail product = productService.get(id);
            return ResponseEntity.ok(product);
        } catch (ProductNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/product")
    public ResponseEntity<?> add(@RequestBody  CreateProduct createProduct){

        ProductDetail product = productService.createProduct(createProduct);

        return ResponseEntity.ok(product);
    }
}
