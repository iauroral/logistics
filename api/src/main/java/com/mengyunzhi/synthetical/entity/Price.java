package com.mengyunzhi.synthetical.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;

/**
 * 定价规则
 */
@Entity
public class Price {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                        // 主键

    private BigDecimal price;               // 单位里程价格

    private Float minKilometres;            // 最低公里数

    private Float maxKilometres;            // 最高公里数

    public Price() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Float getMinKilometres() {
        return minKilometres;
    }

    public void setMinKilometres(Float minKilometres) {
        this.minKilometres = minKilometres;
    }

    public Float getMaxKilometres() {
        return maxKilometres;
    }

    public void setMaxKilometres(Float maxKilometres) {
        this.maxKilometres = maxKilometres;
    }
}
