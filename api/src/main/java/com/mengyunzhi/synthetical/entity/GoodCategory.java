package com.mengyunzhi.synthetical.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 货物类别
 */
@Entity
public class GoodCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                            // 主键

    private String name;                        // 名称

    private Float multipleRate;                 // 倍率

    public GoodCategory() {
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
}
