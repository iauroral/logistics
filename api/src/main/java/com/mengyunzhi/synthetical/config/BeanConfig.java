package com.mengyunzhi.synthetical.config;

import com.mengyunzhi.core.service.YunzhiService;
import com.mengyunzhi.core.service.YunzhiServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {

    @Bean
    public YunzhiService yunzhiService() {
        return new YunzhiServiceImpl();
    }
}
