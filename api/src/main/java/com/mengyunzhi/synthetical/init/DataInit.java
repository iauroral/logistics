package com.mengyunzhi.synthetical.init;

import com.mengyunzhi.synthetical.entity.*;
import com.mengyunzhi.synthetical.repository.*;
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
    @Autowired
    private PriceRepository priceRepository;
    @Autowired
    private TaxRepository taxRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

        vehicleInit();
        UserInit();
        goodsInit();
        priceRuleInit();
        taxRuleInit();
    }

    /**
     * 车辆种类初始化
     */
    public void vehicleInit(){
        String[] goods = {"轻型（4吨以下）","中型（4-8吨）","重型（8吨以上）","保温箱货车","自动卸货车"};
        float[] rates = {0.9F,1.2F,1.5F,1.8F,1.8F};
        for(int i=0;i<goods.length;i++){
            Vehicle vehicle = new Vehicle();
            vehicle.setName(goods[i]);
            vehicle.setMultipleRate(rates[i]);
            vehicle.setPledge(new BigDecimal("50000"));
            vehicleRepository.save(vehicle);
        }
    }

    /**
     * 初始化货物种类
     */
    public void goodsInit(){
        String[] goods = {"普通货物","恒温食物、药物","建筑材料"};
        for(int i=0;i<goods.length;i++){
            GoodCategory goodCategory = new GoodCategory();
            goodCategory.setName(goods[i]);
            goodCategory.setMultipleRate(1+0.25F*i);
            goodCategoryRepository.save(goodCategory);
        }
    }

    /**
     * 价格规则初始化
     */
    public void priceRuleInit(){
        for(int i = 0;i<3;i++){
            Price priceRule = new Price();
            priceRule.setMinKilometres(i*5F);
            priceRule.setMaxKilometres(i*5+5F);
            priceRule.setPrice(new BigDecimal(1+0.25F*i));
            priceRepository.save(priceRule);
        }
    }

    /**
     * 用户初始化
     */
    public void UserInit(){
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
        driver.setVehicle(vehicleRepository.getOne(1L));
        userRepository.save(driver);
    }

    /**
     * 抽成规则初始化
     */
    public void taxRuleInit(){
        for(int i=0;i<3;i++){
            Tax tax = new Tax();
            tax.setMinPrice(new BigDecimal(i*200000));
            tax.setMaxPrice(new BigDecimal((i+1)*200000));
            tax.setRate(0.05F*(i+1));
            if(i==2) tax.setMaxPrice(new BigDecimal("10000000000"));
            taxRepository.save(tax);
        }
    }
}
