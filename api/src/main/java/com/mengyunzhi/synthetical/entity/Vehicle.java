package com.mengyunzhi.synthetical.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;

/**
 * 车型
 */
@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                       // 主键

    private String name;                   // 车型名称

    private Float multipleRate;            // 倍率

    private BigDecimal pledge;             // 押金

    public Vehicle() {
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

    public Float getMultipleRate() {
        return multipleRate;
    }

    public void setMultipleRate(Float multipleRate) {
        this.multipleRate = multipleRate;
    }

    public BigDecimal getPledge() {
        return pledge;
    }

    public void setPledge(BigDecimal pledge) {
        this.pledge = pledge;
    }
}
