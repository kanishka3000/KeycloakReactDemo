package com.kanishkaw.query.entity;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Table(name = Product.TABLE)
@SequenceGenerator(name = "productseq", sequenceName = "productseq", initialValue = 1, allocationSize = 1)
public class Product {
    public static final String TABLE = "Product";
    public static final String FIELD_ID = "id";
    public static final String FIELD_NAME = "name";
    public static final String FIELD_DESCRIPTION = "description";
    public static final String FIELD_MANUFACTURER = "manufacturer";
    public static final String FIELD_AVAILABLE_SINCE = "available";
    public static final String FIELD_RATING = "rating";
    public static final String FIELD_PRICE = "price";
    public static final String FIELD_INSTOCK = "instock";

    @Id
    @GeneratedValue(generator = "productseq")
    @Column(name = FIELD_ID)
    long id;

    @Column(name = FIELD_NAME)
    String name;

    @Column(name = FIELD_DESCRIPTION)
    String description;

    @Column(name = FIELD_MANUFACTURER)
    String manufacturer;

    @Column(name = FIELD_AVAILABLE_SINCE)
    LocalDate availableSince;

    @Column(name = FIELD_RATING)
    int rating;

    @Column(name = FIELD_PRICE)
    double price;

    @Column(name = FIELD_INSTOCK)
    @Enumerated(EnumType.STRING)
    InStock inStock;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    List<Component> components;
}
