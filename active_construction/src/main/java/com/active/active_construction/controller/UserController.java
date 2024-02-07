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
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New User Added.";
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

    // @PostMapping("/uploadImage/{userId}")
    // public ResponseEntity<String> uploadImage(@PathVariable Long userId, @RequestParam MultipartFile imageFile) {
    //     User addedUser = userService.saveUser(user);
    //     Map<String, Long> response = new HashMap<>();
    //     response.put("userId", addedUser.getId());


    //     userService.uploadImage(userId, imageFile);
    //     return ResponseEntity.ok("Image uploaded successfully");
    // }


}
