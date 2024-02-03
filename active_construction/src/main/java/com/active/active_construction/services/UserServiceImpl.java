package com.active.active_construction.services;

import com.active.active_construction.model.User;
import com.active.active_construction.model.UserRole;
import com.active.active_construction.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllAdmins() {
        return userRepository.findByRole(UserRole.ADMIN);
    }

    @Override
    public void categorizeUsers() {
        List<User> users = userRepository.findAll();

        for (User user : users) {
            if (user.isHasContract()) {
                user.setCategory("Contracted");
            } else {
                user.setCategory("Non-Contracted");
            }
        }
        userRepository.saveAll(users);
    }


    }
