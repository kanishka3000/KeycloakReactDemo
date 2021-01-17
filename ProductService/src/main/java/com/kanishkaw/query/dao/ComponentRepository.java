package com.kanishkaw.query.dao;

import com.kanishkaw.query.entity.Component;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComponentRepository extends JpaRepository<Component, Long> {
}
