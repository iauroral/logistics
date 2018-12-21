package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.SyntheticalApplicationTests;
import com.mengyunzhi.synthetical.entity.User;
import com.mengyunzhi.synthetical.service.CommonService;
import com.mengyunzhi.synthetical.service.UserService;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author zhangxishuo on 2018/11/11
 * 用户仓库单元测试
 */
public class UserRepositoryTest extends SyntheticalApplicationTests {

    private static final Logger logger = LoggerFactory.getLogger(UserRepositoryTest.class);

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @Test
    public void findAllTest() {
        userRepository.findAll();
    }

    @Test
    public void findByUsernameTest() {
        logger.debug("数据库中写入一个用户");
        User user = userService.getOneSavedUser();

        logger.debug("查询不存在的用户");
        User user1 = userRepository.findByUsername(CommonService.randomString(20));
        Assertions.assertThat(user1).isNull();

        logger.debug("查询已持久化的用户");
        User user2 = userRepository.findByUsername(user.getUsername());
        Assertions.assertThat(user2).isNotNull();
        Assertions.assertThat(user2.getUsername()).isEqualTo(user.getUsername());
    }
}