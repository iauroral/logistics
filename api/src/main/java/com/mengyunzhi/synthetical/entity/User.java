package com.mengyunzhi.synthetical.entity;

import javax.persistence.*;

/**
 * @author zhangxishuo on 2018/11/10
 * 用户实体
 */
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                       // 主键

    private String name;                   // 姓名

    private String tel;                    // 手机号

    @Column(unique = true, nullable = false)
    private String username;               // 用户名

    @Column(nullable = false)
    private String password;               // 密码

    public User() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
