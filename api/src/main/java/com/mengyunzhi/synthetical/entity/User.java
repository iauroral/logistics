package com.mengyunzhi.synthetical.entity;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * @author zhangxishuo on 2018/11/10
 * 用户实体
 */
@Entity
public class User {

    public static final String DRIVER = "DRIVER";
    public static final String OWNER = "OWNER";
    public static final String ADMIN = "ADMIN";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                       // 主键

    private String name;                   // 姓名

    @Column(unique = true, nullable = false)
    private String username;               // 用户名

    @Column(nullable = false)
    private String password;               // 密码

    @Column(nullable = false)
    private String type;                   // 类型

    private Integer status;                // 状态

    private BigDecimal balance;            // 余额

    private String tel;                    // 电话

    private String commonGoods;            // 常用货物

    private String address;                // 地址

    private String license;                // 车牌号

    private Float starLevel;               // 星级

    @ManyToOne
    private Vehicle vehicle;               // 车型

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getCommonGoods() {
        return commonGoods;
    }

    public void setCommonGoods(String commonGoods) {
        this.commonGoods = commonGoods;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Float getStarLevel() {
        return starLevel;
    }

    public void setStarLevel(Float starLevel) {
        this.starLevel = starLevel;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}
