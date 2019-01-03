package com.mengyunzhi.synthetical.init;

import com.mengyunzhi.synthetical.entity.*;
import com.mengyunzhi.synthetical.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * @author zhangxishuo on 2018/11/20
 */
@Component
public class DataInit implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VehicleRepository vehicleRepository;
    @Autowired
    private GoodCategoryRepository goodCategoryRepository;
    @Autowired
    private PriceRepository priceRepository;
    @Autowired
    private TaxRepository taxRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        List<Vehicle> vehicleList = vehicleRepository.findAll();
        if (vehicleList.isEmpty()) {
            initVehicle();
        }

        List<User> userList = userRepository.findAll();
        if (userList.isEmpty()) {
            initUser();
        }

        List<GoodCategory> goodCategoryList = goodCategoryRepository.findAll();
        if (goodCategoryList.isEmpty()) {
            initGoodsCategory();
        }

        List<Price> priceList = priceRepository.findAll();
        if (priceList.isEmpty()) {
            initPriceRule();
        }

        List<Tax> taxList = taxRepository.findAll();
        if (taxList.isEmpty()) {
            initTaxRule();
        }
    }

    /**
     * 车辆种类初始化
     */
    private void initVehicle() {
        List<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(new Vehicle("轻型(4吨以下)", 0.9F, new BigDecimal("5000")));
        vehicles.add(new Vehicle("中型(4-8吨以下)", 1.2F, new BigDecimal("10000")));
        vehicles.add(new Vehicle("重型(8吨以上)", 1.5F, new BigDecimal("20000")));
        vehicles.add(new Vehicle("保温箱货车", 1.8F, new BigDecimal("50000")));
        vehicles.add(new Vehicle("自动卸货车", 1.8F, new BigDecimal("50000")));
        vehicleRepository.save(vehicles);
    }

    /**
     * 用户初始化
     */
    private void initUser() {
        List<User> users = new ArrayList<>();

        User admin = new User();
        admin.setName("系统管理员");
        admin.setUsername("admin");
        admin.setPassword("admin");
        admin.setType(User.ADMIN);
        users.add(admin);

        User owner1 = new User();
        owner1.setName("货主1");
        owner1.setUsername("owner1");
        owner1.setPassword("owner1");
        owner1.setType(User.OWNER);
        owner1.setBalance(new BigDecimal("100000"));
        owner1.setTel("17695552766");
        owner1.setCommonGoods("蔬菜");
        owner1.setAddress("天津市北辰区");
        users.add(owner1);

        User owner2 = new User();
        owner2.setName("货主2");
        owner2.setUsername("owner2");
        owner2.setPassword("owner2");
        owner2.setType(User.OWNER);
        owner2.setBalance(new BigDecimal("100000"));
        owner2.setTel("17695552766");
        owner2.setCommonGoods("蔬菜");
        owner2.setAddress("天津市北辰区");
        users.add(owner2);

        User owner3 = new User();
        owner3.setName("货主3");
        owner3.setUsername("owner3");
        owner3.setPassword("owner3");
        owner3.setType(User.OWNER);
        owner3.setBalance(new BigDecimal("100000"));
        owner3.setTel("17695552766");
        owner3.setCommonGoods("蔬菜");
        owner3.setAddress("天津市北辰区");
        users.add(owner3);

        User driver1 = new User();
        driver1.setName("司机1");
        driver1.setUsername("driver1");
        driver1.setPassword("driver1");
        driver1.setType(User.DRIVER);
        driver1.setBalance(new BigDecimal("100000"));
        driver1.setTel("17695552766");
        driver1.setLicense("津A 123456");
        driver1.setVehicle(vehicleRepository.getOne(1L));
        users.add(driver1);

        User driver2 = new User();
        driver2.setName("司机2");
        driver2.setUsername("driver2");
        driver2.setPassword("driver2");
        driver2.setType(User.DRIVER);
        driver2.setBalance(new BigDecimal("100000"));
        driver2.setTel("17695552766");
        driver2.setLicense("津A 123456");
        driver2.setVehicle(vehicleRepository.getOne(2L));
        users.add(driver2);

        User driver3 = new User();
        driver3.setName("司机3");
        driver3.setUsername("driver3");
        driver3.setPassword("driver3");
        driver3.setType(User.DRIVER);
        driver3.setBalance(new BigDecimal("100000"));
        driver3.setTel("17695552766");
        driver3.setLicense("津A 123456");
        driver3.setVehicle(vehicleRepository.getOne(3L));
        users.add(driver3);

        userRepository.save(users);
    }

    /**
     * 初始化货物种类
     */
    private void initGoodsCategory() {
        List<GoodCategory> goodCategories = new ArrayList<>();
        goodCategories.add(new GoodCategory("普通货物", 1.2F));
        goodCategories.add(new GoodCategory("食品", 1.2F));
        goodCategories.add(new GoodCategory("日用品", 1.2F));
        goodCategories.add(new GoodCategory("易碎货物", 1.3F));
        goodCategories.add(new GoodCategory("恒温食物、药物", 1.5F));
        goodCategories.add(new GoodCategory("建筑材料", 1.5F));
        goodCategoryRepository.save(goodCategories);
    }

    /**
     * 价格规则初始化
     */
    private void initPriceRule() {
        List<Price> prices = new ArrayList<>();
        prices.add(new Price(new BigDecimal("3.5"), 0F, 100F));
        prices.add(new Price(new BigDecimal("5.5"), 100F, 500F));
        prices.add(new Price(new BigDecimal("8"), 500F, 10000000F));
        priceRepository.save(prices);
    }

    /**
     * 抽成规则初始化
     */
    private void initTaxRule(){
        List<Tax> taxes = new ArrayList<>();
        taxes.add(new Tax(0.015F, new BigDecimal("0"), new BigDecimal("5000")));
        taxes.add(new Tax(0.02F, new BigDecimal("5000"), new BigDecimal("10000")));
        taxes.add(new Tax(0.03F, new BigDecimal("10000"), new BigDecimal("30000")));
        taxes.add(new Tax(0.05F, new BigDecimal("30000"), new BigDecimal("100000")));
        taxRepository.save(taxes);
    }
}
