package com.mengyunzhi.synthetical.entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.mengyunzhi.synthetical.jsonView.NoneJsonView;

import javax.persistence.*;

/**
 * 订单明细
 */
@Entity
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                        // 明细id

    private Float weight;                   // 重量

    @ManyToOne
    private GoodCategory goodCategory;      // 货物类别

    @ManyToOne
    @JsonView(NoneJsonView.class)
    private Orders orders;                  // 订单

    public OrderDetail() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public GoodCategory getGoodCategory() {
        return goodCategory;
    }

    public void setGoodCategory(GoodCategory goodCategory) {
        this.goodCategory = goodCategory;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }
}
