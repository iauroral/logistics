package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * 订单仓库
 */
@RepositoryRestResource(path = "Orders")
public interface OrdersRepository extends JpaRepository<Orders, Long> {
}
