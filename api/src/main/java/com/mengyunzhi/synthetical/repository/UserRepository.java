package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.User;
import org.springframework.data.repository.CrudRepository;

/**
 * @author zhangxishuo on 2018/11/10
 * 用户仓库
 */
public interface UserRepository extends CrudRepository<User, Long> {

    /**
     * 根据用户名查找用户
     * @param username  用户名
     * @return  相关用户
     */
    User findByUsername(String username);
}
