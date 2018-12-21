package com.mengyunzhi.synthetical.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.SecureRandom;

/**
 * @author zhangxishuo on 2018/11/11
 * 公共逻辑
 */
public interface CommonService {

    Logger logger = LoggerFactory.getLogger(CommonService.class);

    String source = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    SecureRandom random = new SecureRandom();

    String USER_ID = "userId";

    /**
     * 获取随机字符串
     * @param length 待获取的长度
     * @return 指定长度的随机字符串
     */
    static String randomString(int length) {
        // 如果长度非正数，则返回空串
        if (length <= 0) {
            logger.error("传入了非法的长度参数");
            return "";
        }
        // 生成随机字符串
        StringBuilder sb = new StringBuilder( length );
        for( int i = 0; i < length; i++ )
            sb.append( source.charAt( random.nextInt(source.length()) ) );
        return sb.toString();
    }
}
