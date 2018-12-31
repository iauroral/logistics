package com.mengyunzhi.synthetical.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.mengyunzhi.synthetical.entity.Orders;
import com.mengyunzhi.synthetical.jsonView.OrderJsonView;
import com.mengyunzhi.synthetical.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.message.AuthException;
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
    @JsonView(OrderJsonView.common.class)
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

    @GetMapping("{id}")
    @JsonView(OrderJsonView.common.class)
    public Orders findOne(@PathVariable Long id) {
        return orderService.findById(id);
    }

    /**
     * 订单综合查询
     */
    @GetMapping("query")
    @JsonView(OrderJsonView.common.class)
    public List<Orders> query(@RequestParam(required = false) BigDecimal minPrice,
                              @RequestParam(required = false) Date startDate,
                              @RequestParam(required = false) Date endDate,
                              @RequestParam(required = false) Float minDistance,
                              @RequestParam(required = false) Float maxDistance) {
        return orderService
                .query(minPrice, startDate, endDate, minDistance, maxDistance);
    }

    /**
     * 抢单
     */
    @PutMapping("grub/{id}")
    public void grub(@PathVariable Long id) throws AuthException {
        orderService.grub(id);
    }
}
