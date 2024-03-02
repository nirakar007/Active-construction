package com.example.active_backend.service.servicImpl;

import com.example.active_backend.model.Project;
import com.example.active_backend.model.USER_ROLE;
import com.example.active_backend.model.User;
import com.example.active_backend.repository.ProjectRepository;
import com.example.active_backend.requests.CreateProjectReq;
import com.example.active_backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project createProject(CreateProjectReq req, User user) {
        // Check if the user has admin role
        if (user.getRole() != USER_ROLE.ADMIN) {
            // Handle unauthorized access
            throw new RuntimeException("Only admin can create projects");
        }

        Project project = new Project();
        project.setName(req.getName());
        project.setDescription(req.getDescription());
        return projectRepository.save(project);
    }

    @Override
    public Project updateProject(Long id, CreateProjectReq updateProject, User user) {
        // Check if the user has admin role
        if (user.getRole() != USER_ROLE.ADMIN) {
            // Handle unauthorized access
            throw new RuntimeException("Only admin can update projects");
        }

        // Implement project update logic
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        // Update project details based on the request
        if (updateProject.getName() != null) {
            project.setName(updateProject.getName());
        }

        if (updateProject.getDescription() != null) {
            project.setDescription(updateProject.getDescription());
        }


        return projectRepository.save(project);
    }

    @Override
    public void deleteProject(Long id, User user) {
        // Check if the user has admin role
        if (user.getRole() != USER_ROLE.ADMIN) {
            // Handle unauthorized access
            throw new RuntimeException("Only admin can delete projects");
        }

        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));


        projectRepository.deleteById(id);
    }

    @Override
    public List<Project> getAllProject() {
        // Implement logic to get all projects
        return projectRepository.findAll();
    }

    @Override
    public Project findProjectById(Long id){
        // Implement logic to find a project by ID
        return projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));
    }
}
