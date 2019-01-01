package com.mengyunzhi.synthetical.service;

import com.mengyunzhi.synthetical.entity.Orders;
import com.mengyunzhi.synthetical.entity.User;

import javax.security.auth.message.AuthException;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

/**
 * @author zengsw
 * 订单Service
 */

public interface OrderService {

    /**
     * 新增订单
     */
    Orders makeNewOrder(Orders orders);

    /**
     * 查找用户正在执行的订单
     */
    List<Orders> findOrdersRunningByUser();

    /**
     * 查找用户已经完成的订单
     */
    List<Orders> findOrdersCompletedByUser();

    List<Orders> findAllOrdersCompletedByCurrentDriver();

    List<Orders> findAllOrdersRunningByCurrentDriver();

    void pay(Long id, User user);

    void in(Long id);

    void finish(Long id);

    void confirm(Long id);

    Orders findById(Long id);

    /**
     * 订单综合查询
     */
    List<Orders> query(BigDecimal minPrice,
                       Date startDate,
                       Date endDate,
                       Float minDistance,
                       Float maxDistance);

    /**
     * 抢单
     */
    void grub(Long id) throws AuthException;
}

