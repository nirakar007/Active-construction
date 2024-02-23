package com.active.active_construction.services;

import com.active.active_construction.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {
    public User saveUser(User user);

    List<User> getAllAdmins();
    void categorizeUsers();

    void uploadImage(Long userId, MultipartFile imageFile);
    User getUserById(Long userId);

}
