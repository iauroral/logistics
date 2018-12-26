package com.mengyunzhi.synthetical.config;

import com.mengyunzhi.synthetical.entity.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

/**
 * Spring Data REST 配置
 */
@Configuration
public class CustomRestConfiguration extends RepositoryRestMvcConfiguration {
    @Override
    public RepositoryRestConfiguration config() {
        return super.config()
                .exposeIdsFor(GoodCategory.class)
                .exposeIdsFor(OrderDetail.class)
                .exposeIdsFor(Orders.class)
                .exposeIdsFor(Payment.class)
                .exposeIdsFor(Price.class)
                .exposeIdsFor(Tax.class)
                .exposeIdsFor(User.class)
                .exposeIdsFor(Vehicle.class);
    }
}
