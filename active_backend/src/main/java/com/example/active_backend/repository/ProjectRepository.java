package com.example.active_backend.repository;

import com.example.active_backend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface ProjectRepository extends JpaRepository<Project, Long> {
    Optional<Project> findById(Long id);

}
