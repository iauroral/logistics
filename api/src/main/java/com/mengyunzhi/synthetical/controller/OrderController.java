package com.mengyunzhi.synthetical.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.mengyunzhi.synthetical.entity.Orders;
import com.mengyunzhi.synthetical.entity.User;
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
    @JsonView(OrderJsonView.common.class)
    public List<Orders> findOrdersRunning(){
        return orderService.findOrdersRunningByUser();
    }

    /**
     * 查找货主已经完成的订单
     */
    @GetMapping("completed")
    @JsonView(OrderJsonView.common.class)
    public List<Orders> findOrdersCompleted(){
        return orderService.findOrdersCompletedByUser();
    }

    @GetMapping("driver/completed")
    @JsonView(OrderJsonView.common.class)
    public List<Orders> findAllOrdersCompletedByCurrentDriver() {
        return orderService.findAllOrdersCompletedByCurrentDriver();
    }

    @GetMapping("driver/running")
    @JsonView(OrderJsonView.common.class)
    public List<Orders> findAllOrdersRunningByCurrentDriver() {
        return orderService.findAllOrdersRunningByCurrentDriver();
    }

    /**
     * 选择司机并付款
     */
    @PutMapping("pay/{id}")
    public void payOrders(@PathVariable Long id, @RequestBody User user) {
        orderService.pay(id, user);
    }

    /**
     * 运输中
     */
    @PutMapping("in/{id}")
    public void in(@PathVariable Long id) {
        orderService.in(id);
    }

    /**
     * 运输完成
     */
    @PutMapping("finish/{id}")
    public void finish(@PathVariable Long id) {
        orderService.finish(id);
    }

    /**
     * 确认订单
     */
    @PutMapping("confirm/{id}")
    public void confirm(@PathVariable Long id) {
        orderService.confirm(id);
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
