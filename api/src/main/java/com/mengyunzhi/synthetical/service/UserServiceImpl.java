package com.mengyunzhi.synthetical.service;

import com.mengyunzhi.synthetical.entity.User;
import com.mengyunzhi.synthetical.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpSession;
import java.math.BigDecimal;

/**
 * @author zhangxishuo on 2018/11/11
 * 用户逻辑实现
 */
@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HttpSession httpSession;

    @Override
    public boolean login(User user) {
        logger.debug("数据校验");
        Assert.notNull(user, "user不能为null");

        logger.debug("获取相关用户");
        User persistUser = userRepository.findByUsername(user.getUsername());

        logger.debug("用户名不存在");
        if (null == persistUser) {
            return false;
        }

        logger.debug("用户名存在，密码不正确");
        if (!persistUser.getPassword().equals(user.getPassword())) {
            return false;
        }

        logger.debug("用户被冻结，登录失败");
        if (persistUser.getFreezeOrNot()) {
            return false;
        }

        logger.debug("记录当前用户id");
        httpSession.setAttribute(CommonService.USER_ID, persistUser.getId());

        return true;
    }

    @Override
    public void register(User user) {
        User registerUser = new User();
        registerUser.setName(user.getName());
        registerUser.setUsername(user.getUsername());
        registerUser.setPassword(user.getPassword());
        registerUser.setType(user.getType());
        registerUser.setTel(user.getTel());
        switch (registerUser.getType()) {
            case User.DRIVER:
                registerUser.setLicense(user.getLicense());
                registerUser.setVehicle(user.getVehicle());
                break;
            case User.OWNER:
                registerUser.setCommonGoods(user.getCommonGoods());
                registerUser.setAddress(user.getAddress());
                break;
            default:
                throw new IllegalArgumentException("请选择角色");
        }
        userRepository.save(user);
    }

    @Override
    public void freeze(Long userId) {
        User user = userRepository.findOne(userId);
        user.setFreezeOrNot(true);
        userRepository.save(user);
    }

    @Override
    public void unfreeze(Long userId) {
        User user = userRepository.findOne(userId);
        user.setFreezeOrNot(false);
        userRepository.save(user);
    }

    @Override
    public void update(Long userId, User user) {
        userRepository.save(user);
    }

    @Override
    public void pay(Long userId) {
        User user = userRepository.findOne(userId);
        BigDecimal deposit = user.getVehicle().getPledge();
        user.setBalance(user.getBalance().subtract(deposit));
        user.setStatus(User.AUTH);
        userRepository.save(user);
    }

    @Override
    public void logout() throws AuthException {
        logger.debug("获取Session中的UserId");
        Long userId = (Long) httpSession.getAttribute(CommonService.USER_ID);

        logger.debug("如果为空，抛出异常");
        if (null == userId) {
            throw new AuthException("请登录");
        }

        logger.debug("清空session");
        httpSession.removeAttribute(CommonService.USER_ID);
    }

    @Override
    public User getCurrentLoginUser() throws AuthException {
        logger.debug("获取Session中的UserId");
        Long userId = (Long) httpSession.getAttribute(CommonService.USER_ID);

        logger.debug("如果为空，抛出异常");
        if (null == userId) {
            throw new AuthException("请登录");
        }

        logger.debug("返回");
        return userRepository.findOne(userId);
    }

    @Override
    public User getOneUser() {
        logger.debug("实例化用户");
        User user = new User();

        logger.debug("设置属性");
        user.setName("name-" + CommonService.randomString(5));
        user.setUsername("username-" + CommonService.randomString(20));
        user.setPassword("password-" + CommonService.randomString(10));

        logger.debug("返回");
        return user;
    }

    @Override
    public User getOneSavedUser() {
        logger.debug("获取用户");
        User user = this.getOneUser();

        logger.debug("保存并返回");
        return userRepository.save(user);
    }
}
