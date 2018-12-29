package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.Orders;
import com.mengyunzhi.synthetical.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * 订单仓库
 */
@RepositoryRestResource(path = "Orders")
public interface OrdersRepository extends JpaRepository<Orders, Long> {

    List<Orders> findOrdersByOwnerAndOrderStatus(User owner,Integer orderStatus);
    List<Orders> findOrdersByDriverAndOrderStatus(User driver,Integer orderStatus);
}
