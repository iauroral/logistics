package com.mengyunzhi.synthetical.service;

import com.mengyunzhi.synthetical.entity.User;

import javax.security.auth.message.AuthException;

/**
 * @author zhangxishuo on 2018/11/10
 * 用户逻辑
 */
public interface UserService {

    /**
     * 用户登录
     * @param user  当前登录用户
     * @return boolean 是否成功登录
     * 成功 true 失败 false
     */
    boolean login(User user);

    void register(User user);

    /**
     * 冻结用户
     */
    void freeze(Long userId);

    void unfreeze(Long userId);

    /**
     * 更新用户
     */
    void update(Long userId, User user);

    /**
     * 用户注销
     */
    void logout() throws AuthException;

    /**
     * 获取当前登录用户
     * @return  当前登录用户
     */
    User getCurrentLoginUser() throws AuthException;

    /**
     * 获取一个用户
     * @return 用户
     */
    User getOneUser();

    /**
     * 获取一个已保存的用户
     * @return 已保存的用户
     */
    User getOneSavedUser();
}
