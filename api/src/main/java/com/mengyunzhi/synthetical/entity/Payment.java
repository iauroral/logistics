package com.mengyunzhi.synthetical.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Calendar;

/**
 * 转账
 */
@Entity
public class Payment {

    public static final String WHOLE = "WHOLE";
    public static final String STAGE = "STAGE";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                      // 主键

    private String type;                  // 付款方式

    private BigDecimal paid;              // 已付金额

    @CreationTimestamp
    private Calendar firstPayTime;        // 首付时间

    private Boolean doneOrNot;            // 付款是否已完成

    public Payment() {
    }

    public static String getWHOLE() {
        return WHOLE;
    }

    public static String getSTAGE() {
        return STAGE;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public BigDecimal getPaid() {
        return paid;
    }

    public void setPaid(BigDecimal paid) {
        this.paid = paid;
    }

    public Calendar getFirstPayTime() {
        return firstPayTime;
    }

    public void setFirstPayTime(Calendar firstPayTime) {
        this.firstPayTime = firstPayTime;
    }

    public Boolean getDoneOrNot() {
        return doneOrNot;
    }

    public void setDoneOrNot(Boolean doneOrNot) {
        this.doneOrNot = doneOrNot;
    }
}
