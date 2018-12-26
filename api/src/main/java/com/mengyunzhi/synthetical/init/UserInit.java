package com.mengyunzhi.synthetical.init;

import com.mengyunzhi.synthetical.entity.User;
import com.mengyunzhi.synthetical.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author zhangxishuo on 2018/11/20
 */
@Component
public class UserInit implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        List<User> users = (List<User>) userRepository.findAll();

        if (users.size() == 0) {
            User admin = new User();
            admin.setName("系统管理员");
            admin.setUsername("admin");
            admin.setPassword("admin");
            admin.setType(User.ADMIN);
            userRepository.save(admin);
        }
    }
}
