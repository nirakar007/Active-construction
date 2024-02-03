package com.active.active_construction.services;

import com.active.active_construction.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);

    List<User> getAllAdmins();
}
