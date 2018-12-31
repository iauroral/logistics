package com.mengyunzhi.synthetical.service;

import com.mengyunzhi.core.service.CommonService;
import com.mengyunzhi.core.service.YunzhiService;
import com.mengyunzhi.synthetical.entity.OrderDetail;
import com.mengyunzhi.synthetical.entity.Orders;
import com.mengyunzhi.synthetical.entity.User;
import com.mengyunzhi.synthetical.repository.OrderDetailRepository;
import com.mengyunzhi.synthetical.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.security.auth.message.AuthException;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private UserService userService;
    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private YunzhiService yunzhiService;
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Override
    public Orders makeNewOrder(Orders orders){
        // order属性补全 存入order表
        orders.setLogisticsStatus(0);
        orders.setOrderStatus(0);
        orders.setStarLevel((float) 5);
        orders.setTotalPrice(BigDecimal.valueOf(0));
        try {
            orders.setOwner(userService.getCurrentLoginUser());
        } catch (AuthException e) {
            e.printStackTrace();
        }
        ordersRepository.save(orders);
        
        // 订单明细存入orderDetail表
        List<OrderDetail> orderDetailsList = orders.getOrderDetailList();
        for (OrderDetail orderDetails : orderDetailsList)
            orderDetails.setOrders(orders);
        orderDetailRepository.save(orderDetailsList);

        return orders;
    }

    @Override
    public List<Orders> findOrdersRunningByUser(){
        User user = null;
        try {
            user = userService.getCurrentLoginUser();
        } catch (AuthException e) {
            e.printStackTrace();
        }
        List<Orders> runningOrders = ordersRepository.findOrdersByOwnerAndOrderStatus(user,0);
        if(runningOrders.isEmpty())
            return ordersRepository.findOrdersByDriverAndOrderStatus(user,0);
        return runningOrders;
    }

    @Override
    public List<Orders> findOrdersCompletedByUser(){
        User user = null;
        try {
            user = userService.getCurrentLoginUser();
        } catch (AuthException e) {
            e.printStackTrace();
        }
        List<Orders> completedOrders = ordersRepository.findOrdersByOwnerAndOrderStatus(user,1);
        if(completedOrders.isEmpty())
            return ordersRepository.findOrdersByDriverAndOrderStatus(user,1);
        return completedOrders;
    }

    @Override
    public Orders findById(Long id) {
        return ordersRepository.findOne(id);
    }

    @Override
    public List<Orders> query(BigDecimal minPrice, Date startDate, Date endDate, Float minDistance, Float maxDistance) {
        Orders orders = (Orders) CommonService.getNullFieldsObject(Orders.class);
        orders.setMinPrice(minPrice);
        orders.setStartDate(startDate);
        orders.setEndDate(endDate);
        orders.setMinDistance(minDistance);
        orders.setMaxDistance(maxDistance);
        return (List<Orders>) yunzhiService.findAll(ordersRepository, orders);
    }
}
