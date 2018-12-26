package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * 定价规则仓库
 */
@RepositoryRestResource(path = "Price")
public interface PriceRepository extends JpaRepository<Price, Long> {
}
