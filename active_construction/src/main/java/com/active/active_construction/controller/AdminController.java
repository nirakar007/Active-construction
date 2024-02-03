package com.active.active_construction.controller;

import com.active.active_construction.model.Admin;
import com.active.active_construction.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/add")
    public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) {
        Admin saveAdmin = adminService.saveAdmin(admin);
        System.out.println("admin added"+admin);
        return ResponseEntity.ok(saveAdmin);
    }

    @PostMapping("/{adminId}/uploadImage")
    public ResponseEntity<Admin> uploadImage(@PathVariable Long adminId, @RequestBody String imageUrl) {
        Admin admin = adminService.getAdminById(adminId);
        admin.setImageUrl(imageUrl);
        Admin updatedAdmin = adminService.saveAdmin(admin);
        return ResponseEntity.ok(updatedAdmin);
    }

    @PostMapping("/{adminId}/scheduleMeeting")
    public ResponseEntity<Admin> scheduleMeeting(@PathVariable Long adminId, @RequestBody String meetingDetails) {
        Admin admin = adminService.getAdminById(adminId);
        admin.setMeetingReminders(meetingDetails);
        Admin updatedAdmin = adminService.saveAdmin(admin);
        return ResponseEntity.ok(updatedAdmin);
    }

    @DeleteMapping("/{adminId}/deleteImage")
    public ResponseEntity<String> deleteImage(@PathVariable Long adminId) {
        Admin admin = adminService.getAdminById(adminId);

        // Check if the admin has an image to delete
        if (admin.getImageUrl() != null) {
            admin.setImageUrl(null); // Remove the image URL
            adminService.saveAdmin(admin);
            return ResponseEntity.ok("Image deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No image found for the admin");
        }
    }

    @DeleteMapping("/{adminId}/deleteReply")
    public ResponseEntity<String> deleteReply(@PathVariable Long adminId) {
        Admin admin = adminService.getAdminById(adminId);

        // Check if the admin has a reply to delete
        if (admin.getReplyToQueries() != null) {
            admin.setReplyToQueries(null); // Remove the reply
            adminService.saveAdmin(admin);
            return ResponseEntity.ok("Reply deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No reply found for the admin");
        }
    }
}
