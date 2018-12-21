package com.mengyunzhi.synthetical.service;

import com.mengyunzhi.synthetical.SyntheticalApplicationTests;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author zhangxishuo on 2018/11/11
 * 公共逻辑服务单元测试
 */
public class CommonServiceTest extends SyntheticalApplicationTests {

    private static final Logger logger = LoggerFactory.getLogger(CommonServiceTest.class);

    @Test
    public void randomStringTest() {
        logger.debug("初始化长度");
        final int length1 = 20;
        final int length2 = -1;
        final int length3 = 0;

        logger.debug("获取随机字符串");
        String string1 = CommonService.randomString(length1);
        String string2 = CommonService.randomString(length2);
        String string3 = CommonService.randomString(length3);

        logger.debug("断言");
        Assertions.assertThat(string1.length()).isEqualTo(length1);
        Assertions.assertThat(string2.length()).isZero();
        Assertions.assertThat(string3.length()).isZero();
    }
}