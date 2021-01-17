package com.kanishkaw.query.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = Component.TABLE)
@SequenceGenerator(name = "componentSeq", sequenceName = "componentSeq", initialValue = 1, allocationSize = 1)
public class Component {
    public static final String TABLE = "Component";
    public static final String FIELD_ID = "id";
    public static final String FIELD_NAME = "name";
    public static final String FIELD_DESCRIPTION = "description";
    public static final String FIELD_PRODUCT = "product";
    @Id
    @GeneratedValue(generator = "componentSeq")
    @Column(name = FIELD_ID)
    long id;

    @Column(name = FIELD_NAME)
    String name;

    @Column(name = FIELD_DESCRIPTION)
    String description;

    @ManyToOne(cascade = CascadeType.ALL)
    Product product;
}
