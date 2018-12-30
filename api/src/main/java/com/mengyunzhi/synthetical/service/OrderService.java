package com.mengyunzhi.synthetical.service;

import com.mengyunzhi.synthetical.entity.Orders;
import com.mengyunzhi.synthetical.entity.User;

import javax.security.auth.message.AuthException;
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
    List<Orders>  findOrdersRunningByUser();

    /**
     * 查找用户已经完成的订单
     */
    List<Orders>  findOrdersCompletedByUser();
}

