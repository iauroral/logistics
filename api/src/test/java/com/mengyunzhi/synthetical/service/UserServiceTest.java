package com.mengyunzhi.synthetical.service;

import com.mengyunzhi.synthetical.SyntheticalApplicationTests;
import com.mengyunzhi.synthetical.entity.User;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpSession;

/**
 * @author zhangxishuo on 2018/11/11
 * 用户逻辑服务单元测试
 */
public class UserServiceTest extends SyntheticalApplicationTests {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceTest.class);

    @Autowired
    private HttpSession httpSession;
    @Autowired
    private UserService userService;

    @Test
    public void loginTest() {
        logger.debug("添加一个用户");
        User user = userService.getOneSavedUser();

        logger.debug("用户名不存在");
        User loginUser = userService.getOneUser();
        Assertions.assertThat(userService.login(loginUser)).isFalse();

        logger.debug("密码不正确");
        loginUser.setUsername(user.getUsername());
        Assertions.assertThat(userService.login(loginUser)).isFalse();

        logger.debug("用户名密码正确");
        loginUser.setPassword(user.getPassword());
        Assertions.assertThat(userService.login(loginUser)).isTrue();

        logger.debug("断言HttpSession");
        Long userId = (Long) httpSession.getAttribute(CommonService.USER_ID);
        Assertions.assertThat(userId).isNotNull();
        Assertions.assertThat(userId).isNotZero();
        Assertions.assertThat(userId).isEqualTo(user.getId());
    }

    @Test
    public void logoutTest() throws AuthException {
        logger.debug("未登录，抛出异常");
        boolean catchException = false;

        try {
            userService.logout();
        } catch (AuthException e) {
            catchException = true;
        }

        Assertions.assertThat(catchException).isTrue();

        logger.debug("已登录");
        User user = userService.getOneSavedUser();
        userService.login(user);

        logger.debug("正常获取登录用户");
        User currentLoginUser = userService.getCurrentLoginUser();

        Assertions.assertThat(currentLoginUser.getId()).isEqualTo(user.getId());

        logger.debug("注销");
        userService.logout();

        logger.debug("获取登录用户异常");
        catchException = false;

        try {
            userService.logout();
        } catch (AuthException e) {
            catchException = true;
        }

        Assertions.assertThat(catchException).isTrue();
    }

    @Test
    public void getCurrentLoginUserTest() throws AuthException {
        logger.debug("未登录，抛出异常");
        boolean catchException = false;

        try {
            userService.getCurrentLoginUser();
        } catch (AuthException e) {
            catchException = true;
        }

        Assertions.assertThat(catchException).isTrue();

        logger.debug("已登录，获取当前登录用户");
        User user = userService.getOneSavedUser();
        userService.login(user);

        User loginUser = userService.getCurrentLoginUser();
        Assertions.assertThat(loginUser.getId()).isNotNull();
        Assertions.assertThat(loginUser.getId()).isEqualTo(user.getId());
    }

    @Test
    public void getOneUserTest() {
        logger.debug("获取一个用户");
        User user = userService.getOneUser();

        logger.debug("断言");
        Assertions.assertThat(user.getName()).isNotNull();
        Assertions.assertThat(user.getUsername()).isNotNull();
        Assertions.assertThat(user.getPassword()).isNotNull();
    }

    @Test
    public void getOneSavedUserTest() {
        logger.debug("获取一个已保存的用户");
        User user = userService.getOneSavedUser();

        logger.debug("断言");
        Assertions.assertThat(user.getId()).isNotNull();
        Assertions.assertThat(user.getUsername()).isNotNull();
        Assertions.assertThat(user.getPassword()).isNotNull();
    }
}