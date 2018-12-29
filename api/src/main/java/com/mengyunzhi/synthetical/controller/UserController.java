package com.mengyunzhi.synthetical.controller;

import com.mengyunzhi.synthetical.entity.User;
import com.mengyunzhi.synthetical.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpServletResponse;

/**
 * @author zhangxishuo on 2018/11/10
 * 用户控制器
 */
@RestController
@RequestMapping("User")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping("login")
    public void login(@RequestBody User user, HttpServletResponse httpServletResponse) {
        if (userService.login(user)) {
            logger.info("登录成功");
        } else {
            logger.info("登录失败");
            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
        }
    }

    @GetMapping("getCurrentLoginUser")
    public User getCurrentLoginUser(HttpServletResponse httpServletResponse) {
        User user = null;
        try {
            user = userService.getCurrentLoginUser();
        } catch (AuthException e) {
            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
            e.printStackTrace();
        }
        return user;
    }

    @PostMapping("logout")
    public void logout(HttpServletResponse httpServletResponse) {
        try {
            userService.logout();
        } catch (AuthException e) {
            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
        }
    }

    @PostMapping("register")
    public void register(@RequestBody User user) {
        userService.register(user);
    }

    @PutMapping("update/{id}")
    public void update(@PathVariable Long id, @RequestBody User user) {
        userService.update(id, user);
    }

    @PutMapping("pay/{id}")
    public void pay(@PathVariable Long id) {
        userService.pay(id);
    }

    @PutMapping("freeze/{id}")
    public void freeze(@PathVariable Long id) {
        userService.freeze(id);
    }

    @PutMapping("unfreeze/{id}")
    public void unfreeze(@PathVariable Long id) {
        userService.unfreeze(id);
    }
}
