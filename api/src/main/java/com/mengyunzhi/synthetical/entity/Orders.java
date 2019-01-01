package com.mengyunzhi.synthetical.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.mengyunzhi.core.annotation.query.GreaterThanOrEqualToQuery;
import com.mengyunzhi.core.annotation.query.InQueryParam;
import com.mengyunzhi.core.annotation.query.LessThanOrEqualTo;
import com.mengyunzhi.synthetical.jsonView.NoneJsonView;
import com.mengyunzhi.synthetical.jsonView.OrderJsonView;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * 订单
 */
@Entity
public class Orders {

    public static final Integer NEW = 0;      // 新下单
    public static final Integer ACCEPT = 1;   // 已接单
    public static final Integer RUN = 2;      // 进行中
    public static final Integer CONFIRM = 3;  // 等待确认
    public static final Integer FINISH = 4;   // 订单完成

    public static final Integer WAIT_TRANSIT = 0;      // 等待运输
    public static final Integer IN_TRANSIT = 1;        // 运输中
    public static final Integer ARRIVE_TRANSIT = 2;    // 已经到达

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                          // 主键

    private String startPlace;                // 起点

    private String endPlace;                  // 终点

    private Float startLongitude;             // 起点经度

    private Float startLatitude;              // 起点纬度

    private Float endLongitude;               // 终点经度

    private Float endLatitude;                // 终点纬度

    private Float distance;                   // 运输距离

    private Integer logisticsStatus = WAIT_TRANSIT;          // 物流状态

    private Integer orderStatus = NEW;                       // 订单状态

    private Float starLevel;                  // 评价星级

    private BigDecimal totalPrice;            // 总价

    private Date date;                        // 发车日期

    @ManyToMany
    private Set<User> grabDrivers;            // 抢单司机

    @ManyToOne
    private User driver;                      // 司机

    @ManyToOne
    private User owner;                       // 货主

    @ManyToOne
    private Vehicle vehicle;                  // 货型

    @OneToMany(mappedBy = "orders")
    @JsonView({NoneJsonView.class,
            OrderJsonView.common.class})
    private List<OrderDetail> orderDetailList = new ArrayList<>();     // 订单明细

    @Transient
    @JsonIgnore
    @GreaterThanOrEqualToQuery(name = "totalPrice")
    private BigDecimal minPrice;

    @Transient
    @JsonIgnore
    @GreaterThanOrEqualToQuery(name = "date")
    private Date startDate;

    @Transient
    @JsonIgnore
    @LessThanOrEqualTo(name = "date")
    private Date endDate;

    @Transient
    @JsonIgnore
    @GreaterThanOrEqualToQuery(name = "distance")
    private Float minDistance;

    @Transient
    @JsonIgnore
    @LessThanOrEqualTo(name = "distance")
    private Float maxDistance;

    @Transient
    @JsonIgnore
    @InQueryParam(name = "orderStatus")
    private List<Integer> orderStatusList;

    public Orders() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStartPlace() {
        return startPlace;
    }

    public void setStartPlace(String startPlace) {
        this.startPlace = startPlace;
    }

    public String getEndPlace() {
        return endPlace;
    }

    public void setEndPlace(String endPlace) {
        this.endPlace = endPlace;
    }

    public Float getStartLongitude() {
        return startLongitude;
    }

    public void setStartLongitude(Float startLongitude) {
        this.startLongitude = startLongitude;
    }

    public Float getStartLatitude() {
        return startLatitude;
    }

    public void setStartLatitude(Float startLatitude) {
        this.startLatitude = startLatitude;
    }

    public Float getEndLongitude() {
        return endLongitude;
    }

    public void setEndLongitude(Float endLongitude) {
        this.endLongitude = endLongitude;
    }

    public Float getEndLatitude() {
        return endLatitude;
    }

    public void setEndLatitude(Float endLatitude) {
        this.endLatitude = endLatitude;
    }

    public Float getDistance() {
        return distance;
    }

    public void setDistance(Float distance) {
        this.distance = distance;
    }

    public Integer getLogisticsStatus() {
        return logisticsStatus;
    }

    public void setLogisticsStatus(Integer logisticsStatus) {
        this.logisticsStatus = logisticsStatus;
    }

    public Integer getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Integer orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Float getStarLevel() {
        return starLevel;
    }

    public void setStarLevel(Float starLevel) {
        this.starLevel = starLevel;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Set<User> getGrabDrivers() {
        return grabDrivers;
    }

    public void setGrabDrivers(Set<User> grabDrivers) {
        this.grabDrivers = grabDrivers;
    }

    public User getDriver() {
        return driver;
    }

    public void setDriver(User driver) {
        this.driver = driver;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public List<OrderDetail> getOrderDetailList() {
        return orderDetailList;
    }

    public void setOrderDetailList(List<OrderDetail> orderDetailList) {
        this.orderDetailList = orderDetailList;
    }

    public BigDecimal getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(BigDecimal minPrice) {
        this.minPrice = minPrice;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Float getMinDistance() {
        return minDistance;
    }

    public void setMinDistance(Float minDistance) {
        this.minDistance = minDistance;
    }

    public Float getMaxDistance() {
        return maxDistance;
    }

    public void setMaxDistance(Float maxDistance) {
        this.maxDistance = maxDistance;
    }

    public List<Integer> getOrderStatusList() {
        return orderStatusList;
    }

    public void setOrderStatusList(List<Integer> orderStatusList) {
        this.orderStatusList = orderStatusList;
    }
}
