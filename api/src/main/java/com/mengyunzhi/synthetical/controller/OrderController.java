package com.mengyunzhi.synthetical.controller;

import com.mengyunzhi.synthetical.entity.Orders;
import com.mengyunzhi.synthetical.entity.User;
import com.mengyunzhi.synthetical.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 订单控制器
 */
@RestController
@RequestMapping("Order")
public class OrderController {
    @Autowired
    private OrderService orderService;

//    @PostMapping("add")
//    public void login(@RequestBody User user, HttpServletResponse httpServletResponse) {
//        if (userService.login(user)) {
//            logger.info("登录成功");
//        } else {
//            logger.info("登录失败");
//            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
//        }
//    }

    /**
     * 查找用户正在运行的订单
     */
    @PostMapping("running")
    public List<Orders> findOrdersRunningByUser(@RequestBody User user){
        return orderService.findOrdersRunningByUser(user);
    }

    /**
     * 查找货主已经完成的订单
     */
    @PostMapping("completed")
    public List<Orders> findOrdersCompletedByUser(@RequestBody User user){
        return orderService.findOrdersCompletedByUser(user);
    }
}
