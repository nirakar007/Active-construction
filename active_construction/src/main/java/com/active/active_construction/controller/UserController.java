package com.active.active_construction.controller;

import com.active.active_construction.model.User;
import com.active.active_construction.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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


}
