package com.mengyunzhi.synthetical.service;

import com.mengyunzhi.core.service.CommonService;
import com.mengyunzhi.core.service.YunzhiService;
import com.mengyunzhi.synthetical.entity.OrderDetail;
import com.mengyunzhi.synthetical.entity.Orders;
import com.mengyunzhi.synthetical.entity.Payment;
import com.mengyunzhi.synthetical.entity.User;
import com.mengyunzhi.synthetical.repository.OrderDetailRepository;
import com.mengyunzhi.synthetical.repository.OrdersRepository;
import com.mengyunzhi.synthetical.repository.PaymentRepository;
import com.mengyunzhi.synthetical.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.security.auth.message.AuthException;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
@SuppressWarnings("unchecked")
public class OrderServiceImpl implements OrderService {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private PaymentRepository paymentRepository;
    @Autowired
    private YunzhiService yunzhiService;
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Override
    public Orders makeNewOrder(Orders orders){
        // order属性补全 存入order表
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
    public List<Orders> findOrdersRunningByUser() {
        List<Integer> orderStatusList = new ArrayList<>();
        orderStatusList.add(Orders.NEW);
        orderStatusList.add(Orders.ACCEPT);
        orderStatusList.add(Orders.RUN);
        orderStatusList.add(Orders.CONFIRM);

        Orders orders = (Orders) CommonService.getNullFieldsObject(Orders.class);
        orders.setOwner(this.getCurrentLoginUser());
        orders.setOrderStatusList(orderStatusList);
        return (List<Orders>) yunzhiService.findAll(ordersRepository, orders);
    }

    @Override
    public List<Orders> findOrdersCompletedByUser(){
        Orders orders = (Orders) CommonService.getNullFieldsObject(Orders.class);
        orders.setOwner(this.getCurrentLoginUser());
        orders.setOrderStatus(Orders.FINISH);
        return (List<Orders>) yunzhiService.findAll(ordersRepository, orders);
    }

    @Override
    public List<Orders> findAllOrdersCompletedByCurrentDriver() {
        Orders orders = (Orders) CommonService.getNullFieldsObject(Orders.class);
        orders.setDriver(this.getCurrentLoginUser());
        orders.setOrderStatus(Orders.FINISH);
        return (List<Orders>) yunzhiService.findAll(ordersRepository, orders);
    }

    @Override
    public List<Orders> findAllOrdersRunningByCurrentDriver() {
        List<Integer> orderStatusList = new ArrayList<>();
        orderStatusList.add(Orders.RUN);
        orderStatusList.add(Orders.CONFIRM);

        Orders orders = (Orders) CommonService.getNullFieldsObject(Orders.class);
        orders.setDriver(this.getCurrentLoginUser());
        orders.setOrderStatusList(orderStatusList);
        return (List<Orders>) yunzhiService.findAll(ordersRepository, orders);
    }

    @Override
    public void pay(Long id, User user) {
        Orders orders = ordersRepository.findOne(id);

        Payment payment = new Payment();
        payment.setPaid(orders.getTotalPrice());
        payment.setOrders(orders);
        payment.setDoneOrNot(true);
        paymentRepository.save(payment);

        User currentLoginUser = this.getCurrentLoginUser();
        currentLoginUser.setBalance(currentLoginUser.getBalance().subtract(orders.getTotalPrice()));
        userRepository.save(currentLoginUser);

        orders.setOrderStatus(Orders.RUN);
        orders.setDriver(user);
        ordersRepository.save(orders);
    }

    @Override
    public void in(Long id) {
        Orders orders = ordersRepository.findOne(id);
        orders.setLogisticsStatus(Orders.IN_TRANSIT);
        ordersRepository.save(orders);
    }

    @Override
    public void finish(Long id) {
        Orders orders = ordersRepository.findOne(id);
        orders.setLogisticsStatus(Orders.ARRIVE_TRANSIT);
        orders.setOrderStatus(Orders.CONFIRM);
        ordersRepository.save(orders);
    }

    @Override
    public void confirm(Long id) {
        Orders orders = ordersRepository.findOne(id);

        User user = orders.getDriver();
        user.setBalance(user.getBalance().add(orders.getTotalPrice()));
        userRepository.save(user);

        orders.setOrderStatus(Orders.FINISH);
        ordersRepository.save(orders);
    }

    private User getCurrentLoginUser() {
        User user = null;
        try {
            user = userService.getCurrentLoginUser();
        } catch (AuthException e) {
            e.printStackTrace();
        }
        return user;
    }

    @Override
    public Orders findById(Long id) {
        return ordersRepository.findOne(id);
    }

    @Override
    public List<Orders> query(BigDecimal minPrice, Date startDate, Date endDate, Float minDistance, Float maxDistance) {
        Orders orders = (Orders) CommonService.getNullFieldsObject(Orders.class);
        List<Integer> orderStatusList = new ArrayList<>();
        orderStatusList.add(Orders.NEW);
        orderStatusList.add(Orders.ACCEPT);
        orders.setMinPrice(minPrice);
        orders.setStartDate(startDate);
        orders.setEndDate(endDate);
        orders.setMinDistance(minDistance);
        orders.setMaxDistance(maxDistance);
        orders.setOrderStatusList(orderStatusList);
        return (List<Orders>) yunzhiService.findAll(ordersRepository, orders);
    }

    @Override
    public void grub(Long id) throws AuthException {
        Orders orders = ordersRepository.findOne(id);
        Set<User> drivers = orders.getGrabDrivers();
        drivers.add(userService.getCurrentLoginUser());
        orders.setOrderStatus(Orders.ACCEPT);
        orders.setGrabDrivers(drivers);
        ordersRepository.save(orders);
    }
}
