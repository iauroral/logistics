package com.mengyunzhi.synthetical.init;

import com.mengyunzhi.synthetical.entity.GoodCategory;
import com.mengyunzhi.synthetical.entity.User;
import com.mengyunzhi.synthetical.entity.Vehicle;
import com.mengyunzhi.synthetical.repository.GoodCategoryRepository;
import com.mengyunzhi.synthetical.repository.UserRepository;
import com.mengyunzhi.synthetical.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

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

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        Vehicle vehicle = new Vehicle();
        vehicle.setName("面包车");
        vehicle.setMultipleRate(1.25F);
        vehicle.setPledge(new BigDecimal("50000"));
        vehicleRepository.save(vehicle);


        /**
         * 初始化货物种类
         */
        String[] goods = {"普通货物","恒温食物、药物","建筑材料"};
        for(int i=0;i<goods.length;i++){
            GoodCategory goodCategory = new GoodCategory();
            goodCategory.setName(goods[i]);
            goodCategory.setMultipleRate(1+0.25F*i);
            goodCategoryRepository.save(goodCategory);
        }

        User admin = new User();
        admin.setName("系统管理员");
        admin.setUsername("admin");
        admin.setPassword("admin");
        admin.setType(User.ADMIN);
        userRepository.save(admin);

        User owner = new User();
        owner.setName("货主");
        owner.setUsername("owner");
        owner.setPassword("owner");
        owner.setType(User.OWNER);
        owner.setBalance(new BigDecimal("100000"));
        owner.setTel("17695552766");
        owner.setCommonGoods("蔬菜");
        owner.setAddress("天津市北辰区");
        userRepository.save(owner);

        User driver = new User();
        driver.setName("司机");
        driver.setUsername("driver");
        driver.setPassword("driver");
        driver.setType(User.DRIVER);
        driver.setBalance(new BigDecimal("100000"));
        driver.setTel("17695552766");
        driver.setLicense("津A 123456");
        driver.setVehicle(vehicle);
        userRepository.save(driver);
    }
}
