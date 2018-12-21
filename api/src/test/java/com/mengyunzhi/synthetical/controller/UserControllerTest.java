package com.mengyunzhi.synthetical.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.mengyunzhi.synthetical.SyntheticalApplicationTests;
import com.mengyunzhi.synthetical.entity.User;
import com.mengyunzhi.synthetical.service.UserService;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.servlet.http.Cookie;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest extends SyntheticalApplicationTests {

    private static final Logger logger = LoggerFactory.getLogger(UserControllerTest.class);

    private static final String baseUrl = "/User/";

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private UserService userService;

    @Test
    public void loginTest() throws Exception {
        logger.debug("添加一个用户");
        User user = userService.getOneSavedUser();

        logger.debug("用户名不存在");
        User loginUser = userService.getOneUser();
        String json = JSON.toJSONString(loginUser);

        logger.debug("状态码为401");
        this.mockMvc
                .perform(MockMvcRequestBuilders.post(baseUrl + "login")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andDo(print())
                .andExpect(status().isUnauthorized());

        logger.debug("密码不正确");
        loginUser.setUsername(user.getUsername());
        json = JSON.toJSONString(loginUser);

        logger.debug("状态码为401");
        this.mockMvc
                .perform(MockMvcRequestBuilders.post(baseUrl + "login")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andDo(print())
                .andExpect(status().isUnauthorized());

        logger.debug("用户名密码正确");
        loginUser.setPassword(user.getPassword());
        json = JSON.toJSONString(loginUser);

        logger.debug("状态码为200");
        MvcResult mvcResult = this.mockMvc
                .perform(MockMvcRequestBuilders.post(baseUrl + "login")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();

        logger.debug("获取cookie");
        Cookie cookie = mvcResult.getResponse().getCookie("SESSION");

        logger.debug("获取当前登录用户");
        mvcResult = this.mockMvc
                .perform(MockMvcRequestBuilders.get(baseUrl + "getCurrentLoginUser")
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .cookie(cookie))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();

        logger.debug("获取响应内容");
        String content = mvcResult.getResponse().getContentAsString();
        JSONObject jsonObject = JSONObject.parseObject(content);

        logger.debug("断言id为当前登录用户id");
        Integer id = jsonObject.getInteger("id");
        Assertions.assertThat(id.longValue()).isEqualTo(user.getId());
    }

    @Test
    public void logout() throws Exception {
        logger.debug("用户注销，断言401");
        this.mockMvc
                .perform(MockMvcRequestBuilders.post(baseUrl + "logout"))
                .andDo(print())
                .andExpect(status().isUnauthorized());

        logger.debug("用户登录");
        User user = userService.getOneSavedUser();
        String json = JSON.toJSONString(user);

        MvcResult mvcResult = this.mockMvc
                .perform(MockMvcRequestBuilders.post(baseUrl + "login")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();

        Cookie cookie = mvcResult.getResponse().getCookie("SESSION");

        logger.debug("用户注销(不带cookie)，断言401");
        this.mockMvc
                .perform(MockMvcRequestBuilders.post(baseUrl + "logout"))
                .andDo(print())
                .andExpect(status().isUnauthorized());

        logger.debug("用户注销，断言200");
        this.mockMvc
                .perform(MockMvcRequestBuilders.post(baseUrl + "logout")
                        .cookie(cookie))
                .andDo(print())
                .andExpect(status().isOk());

        logger.debug("用户注销，断言401");
        this.mockMvc
                .perform(MockMvcRequestBuilders.post(baseUrl + "logout")
                        .cookie(cookie))
                .andDo(print())
                .andExpect(status().isUnauthorized());
    }
}