package com.mengyunzhi.synthetical.controller;

import com.mengyunzhi.synthetical.entity.Orders;
import com.mengyunzhi.synthetical.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

/**
 * 订单控制器
 */
@RestController
@RequestMapping("Order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    /**
     * 查找用户正在运行的订单
     */
    @PostMapping("make")
    public Orders makeNewOrder(@RequestBody Orders orders){
        return orderService.makeNewOrder(orders);
    }

    /**
     * 查找用户正在运行的订单
     */
    @GetMapping("running")
    public List<Orders> findOrdersRunning(){
        return orderService.findOrdersRunningByUser();
    }

    /**
     * 查找货主已经完成的订单
     */
    @GetMapping("completed")
    public List<Orders> findOrdersCompleted(){
        return orderService.findOrdersCompletedByUser();
    }

    /**
     * 订单综合查询
     */
    @GetMapping("query")
    public List<Orders> query(@RequestParam(required = false) BigDecimal minPrice,
                              @RequestParam(required = false) Date startDate,
                              @RequestParam(required = false) Date endDate,
                              @RequestParam(required = false) Float minDistance,
                              @RequestParam(required = false) Float maxDistance) {
        return orderService
                .query(minPrice, startDate, endDate, minDistance, maxDistance);
    }
}
