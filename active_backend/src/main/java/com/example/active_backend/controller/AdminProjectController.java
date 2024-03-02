package com.example.active_backend.controller;

import com.example.active_backend.model.Project;
import com.example.active_backend.model.USER_ROLE;
import com.example.active_backend.model.User;
import com.example.active_backend.requests.CreateProjectReq;
import com.example.active_backend.response.MessageResponse;
import com.example.active_backend.service.ProjectService;
import com.example.active_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/projects")
public class AdminProjectController {
    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @PostMapping("/admin/add-project")
    public ResponseEntity<Project> createProject(
            @RequestBody CreateProjectReq req,
            @RequestHeader("Authorization") String jwt
            ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Project project = projectService.createProject(req, user);
        return new ResponseEntity<>(project, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(
            @RequestBody CreateProjectReq req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Project project = projectService.updateProject(id,req,user);
        return new ResponseEntity<>(project, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteProject(
            @RequestBody CreateProjectReq req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        projectService.deleteProject(id,user);

        MessageResponse res = new MessageResponse();
        res.setMessage("Project Deleted Successfully!");
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> getAllProjects(
            @RequestBody CreateProjectReq req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        List<Project> project = projectService.getAllProject();

        return new ResponseEntity<>(HttpStatus.FOUND);
    }
}
