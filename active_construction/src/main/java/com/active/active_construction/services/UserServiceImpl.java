package com.active.active_construction.services;

import com.active.active_construction.model.User;
import com.active.active_construction.model.UserRole;
import com.active.active_construction.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
            boolean hasContract = isHasContract(user); // Implement isHasContract method
            user.setHasContract(hasContract);
            if (hasContract) {
                user.setCategory("Contracted");
            } else {
                user.setCategory("Not Contracted");
            }
            userRepository.save(user);
        }
    }

    private boolean isHasContract(User user) {
        return false;
    }

    @Override
    public void uploadImage(Long userId, MultipartFile imageFile) {
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));

        try {
            user.setImage(imageFile.getBytes());
            userRepository.save(user);
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload image");
        }
    }


    }
