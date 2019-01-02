package com.mengyunzhi.synthetical.service;

import java.math.BigDecimal;

public interface PriceService {

    /**
     * 通过距离计算价格
     */
    public BigDecimal getPriceByDistance(float distance);
}
