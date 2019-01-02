package com.mengyunzhi.synthetical.service;

import com.mengyunzhi.synthetical.entity.OrderDetail;
import com.mengyunzhi.synthetical.entity.Price;
import com.mengyunzhi.synthetical.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class PriceServiceImpl implements PriceService {

    @Autowired
    private PriceRepository priceRepository;

    @Override
    public BigDecimal getPriceByDistance(float distance) {
        // 计算订单总价
        BigDecimal totalPrice = new BigDecimal(0);
        List<Price> priceList = priceRepository.findAll();
        for (Price aPriceList : priceList) {
            float max = aPriceList.getMaxKilometres();
            float min = aPriceList.getMinKilometres();
            if (min < distance)
                break;
            if (max >= distance)
                totalPrice = totalPrice.add(aPriceList.getPrice()
                        .multiply(new BigDecimal(max - min)));
            else
                totalPrice = totalPrice.add(aPriceList.getPrice()
                        .multiply(new BigDecimal(distance - min)));
        }
        return totalPrice;
    }
}
