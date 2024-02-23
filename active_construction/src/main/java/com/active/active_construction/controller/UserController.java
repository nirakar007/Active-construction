package com.active.active_construction.controller;


import com.active.active_construction.model.User;
import com.active.active_construction.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "https://localhost:8080")
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody UserRequest userRequest){
        userService.saveUser(convertToUser(userRequest));
        return ResponseEntity.ok("New User Added.");
    }

    @GetMapping("/admins")
    public List<User> getAllAdmins(){
        return userService.getAllAdmins();
    }

    @PostMapping("/categorize")
    public ResponseEntity<String> categorizeUsers() {
        userService.categorizeUsers();
        return ResponseEntity.ok("Users categorized successfully.");
    }

    private User convertToUser(UserRequest userRequest) {
        User user = new User();
        user.setName(userRequest.getName());
        user.setEmail(userRequest.getEmail());
        user.setPhone(userRequest.getPhone());
        user.setQuery(userRequest.getQuery());
        user.setImage(userRequest.getImage());
        user.setRole(userRequest.getRole());
        user.setMeetingDate(userRequest.getMeetingDate()); // Set scheduled meeting date
        return user;
    }

    @PostMapping("/uploadImage/{userId}")
    public ResponseEntity<String> uploadImage(@PathVariable Long userId, @RequestParam MultipartFile imageFile) {
        // Fetch the existing user
        User existingUser = userService.getUserById(userId);

        // Check if the user exists
        if (existingUser == null) {
            return ResponseEntity.badRequest().body("User not found with ID: " + userId);
        }


        // userService.saveUser(existingUser); // Uncomment to save the user again

        // Upload image for the user
        userService.uploadImage(userId, imageFile);

        return ResponseEntity.ok("Image uploaded successfully for user with ID: " + userId);
    }


}
