package com.example.active_backend.service;

import com.example.active_backend.model.Project;
import com.example.active_backend.model.User;
import com.example.active_backend.requests.CreateProjectReq;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProjectService {
    public Project createProject(CreateProjectReq req, User user);
        public Project updateProject(Long id, CreateProjectReq updateProject, User user) throws Exception;
    public void deleteProject(Long id, User user) throws Exception;
    public List<Project> getAllProject();
    public Project findProjectById(Long id) throws Exception;

}
