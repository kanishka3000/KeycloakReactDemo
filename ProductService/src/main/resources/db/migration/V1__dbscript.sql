DROP TABLE IF EXISTS productseq;
CREATE TABLE productseq (
  next_val bigint DEFAULT NULL
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
  id bigint NOT NULL,
  available date DEFAULT NULL,
  description varchar(255) DEFAULT NULL,
  instock varchar(255) DEFAULT NULL,
  manufacturer varchar(255) DEFAULT NULL,
  name varchar(255) DEFAULT NULL,
  price double DEFAULT NULL,
  rating int DEFAULT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS component_seq;

CREATE TABLE component_seq (
  next_val bigint DEFAULT NULL
);

DROP TABLE IF EXISTS component;
CREATE TABLE component (
  id bigint NOT NULL,
  description varchar(255) DEFAULT NULL,
  name varchar(255) DEFAULT NULL,
  product_id bigint DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO product VALUES (1,'2020-03-21','A purity promise that will last you a lifetime','AVAILABLE','Uniliver','Pureit Ultima 418',44500,3);
INSERT INTO product VALUES (2,'2020-03-21','Advanced RO technology','AVAILABLE','Uniliver','Pureit Classic',20000,4);