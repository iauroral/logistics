package com.mengyunzhi.synthetical.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mengyunzhi.synthetical.entity.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.support.ConfigurableConversionService;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.core.event.ValidatingRepositoryEventListener;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver;

import java.util.List;

/**
 * Spring Data REST 配置
 */
@Configuration
public class CustomRestConfiguration implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(GoodCategory.class)
                .exposeIdsFor(OrderDetail.class)
                .exposeIdsFor(Orders.class)
                .exposeIdsFor(Payment.class)
                .exposeIdsFor(Price.class)
                .exposeIdsFor(Tax.class)
                .exposeIdsFor(User.class)
                .exposeIdsFor(Vehicle.class);
    }

    @Override
    public void configureConversionService(ConfigurableConversionService conversionService) {

    }

    @Override
    public void configureValidatingRepositoryEventListener(ValidatingRepositoryEventListener validatingListener) {

    }

    @Override
    public void configureExceptionHandlerExceptionResolver(ExceptionHandlerExceptionResolver exceptionResolver) {

    }

    @Override
    public void configureHttpMessageConverters(List<HttpMessageConverter<?>> messageConverters) {
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        messageConverters.add(converter);
    }

    @Override
    public void configureJacksonObjectMapper(ObjectMapper objectMapper) {

    }
}
